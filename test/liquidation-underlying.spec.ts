import BigNumber from 'bignumber.js';

import {BRE, increaseTime} from '../helpers/misc-utils';
import {APPROVAL_AMOUNT_LENDING_POOL, oneEther} from '../helpers/constants';
import {convertToCurrencyDecimals} from '../helpers/contracts-helpers';
import {makeSuite} from './helpers/make-suite';
import {ProtocolErrors, RateMode} from '../helpers/types';
import {calcExpectedStableDebtTokenBalance} from './helpers/utils/calculations';
import {getUserData} from './helpers/utils/helpers';

const chai = require('chai');

const {expect} = chai;

makeSuite('LendingPool liquidation - liquidator receiving the underlying asset', (testEnv) => {
  const {INVALID_HF} = ProtocolErrors;

  before('Before LendingPool liquidation: set config', () => {
    BigNumber.config({DECIMAL_PLACES: 0, ROUNDING_MODE: BigNumber.ROUND_DOWN});
  });

  after('After LendingPool liquidation: reset config', () => {
    BigNumber.config({DECIMAL_PLACES: 20, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
  });

  it('LIQUIDATION - Deposits WETH, borrows DAI', async () => {
    const {dai, weth, users, pool, oracle} = testEnv;
    const depositor = users[0];
    const borrower = users[1];

    //mints DAI to depositor
    await dai.connect(depositor.signer).mint(await convertToCurrencyDecimals(dai.address, '1000'));

    //approve protocol to access depositor wallet
    await dai.connect(depositor.signer).approve(pool.address, APPROVAL_AMOUNT_LENDING_POOL);

    //user 1 deposits 1000 DAI
    const amountDAItoDeposit = await convertToCurrencyDecimals(dai.address, '1000');

    await pool
      .connect(depositor.signer)
      .deposit(dai.address, amountDAItoDeposit, depositor.address, '0');
    //user 2 deposits 1 ETH
    const amountETHtoDeposit = await convertToCurrencyDecimals(weth.address, '1');

    //mints WETH to borrower
    await weth.connect(borrower.signer).mint(await convertToCurrencyDecimals(weth.address, '1000'));

    //approve protocol to access the borrower wallet
    await weth.connect(borrower.signer).approve(pool.address, APPROVAL_AMOUNT_LENDING_POOL);

    await pool
      .connect(borrower.signer)
      .deposit(weth.address, amountETHtoDeposit, borrower.address, '0');

    //user 2 borrows

    const userGlobalData = await pool.getUserAccountData(borrower.address);
    const daiPrice = await oracle.getAssetPrice(dai.address);

    const amountDAIToBorrow = await convertToCurrencyDecimals(
      dai.address,
      new BigNumber(userGlobalData.availableBorrowsETH.toString())
        .div(daiPrice.toString())
        .multipliedBy(0.95)
        .toFixed(0)
    );

    await pool
      .connect(borrower.signer)
      .borrow(dai.address, amountDAIToBorrow, RateMode.Stable, '0', borrower.address);

    const userGlobalDataAfter = await pool.getUserAccountData(borrower.address);

    expect(userGlobalDataAfter.currentLiquidationThreshold.toString()).to.be.bignumber.equal(
      '8000',
      INVALID_HF
    );
  });

  it('LIQUIDATION - Drop the health factor below 1', async () => {
    const {dai, weth, users, pool, oracle} = testEnv;
    const borrower = users[1];

    const daiPrice = await oracle.getAssetPrice(dai.address);

    await oracle.setAssetPrice(
      dai.address,
      new BigNumber(daiPrice.toString()).multipliedBy(1.25).toFixed(0)
    );

    const userGlobalData = await pool.getUserAccountData(borrower.address);

    expect(userGlobalData.healthFactor.toString()).to.be.bignumber.lt(
      oneEther.toFixed(0),
      INVALID_HF
    );
  });

  it('LIQUIDATION - Liquidates the borrow', async () => {
    const {dai, weth, users, pool, oracle} = testEnv;
    const liquidator = users[3];
    const borrower = users[1];

    //mints dai to the liquidator
    await dai.connect(liquidator.signer).mint(await convertToCurrencyDecimals(dai.address, '1000'));

    //approve protocol to access the liquidator wallet
    await dai.connect(liquidator.signer).approve(pool.address, APPROVAL_AMOUNT_LENDING_POOL);

    const daiReserveDataBefore = await pool.getReserveData(dai.address);
    const ethReserveDataBefore = await pool.getReserveData(weth.address);

    const userReserveDataBefore = await getUserData(pool, dai.address, borrower.address);

    const amountToLiquidate = userReserveDataBefore.currentStableDebt.div(2).toFixed(0);

    await increaseTime(100);

    const tx = await pool
      .connect(liquidator.signer)
      .liquidationCall(weth.address, dai.address, borrower.address, amountToLiquidate, false);

    const userReserveDataAfter = await getUserData(pool, dai.address, borrower.address);

    const daiReserveDataAfter = await pool.getReserveData(dai.address);
    const ethReserveDataAfter = await pool.getReserveData(weth.address);

    const collateralPrice = await oracle.getAssetPrice(weth.address);
    const principalPrice = await oracle.getAssetPrice(dai.address);

    const collateralDecimals = (
      await pool.getReserveConfigurationData(weth.address)
    ).decimals.toString();
    const principalDecimals = (
      await pool.getReserveConfigurationData(dai.address)
    ).decimals.toString();

    const expectedCollateralLiquidated = new BigNumber(principalPrice.toString())
      .times(new BigNumber(amountToLiquidate).times(105))
      .times(new BigNumber(10).pow(collateralDecimals))
      .div(
        new BigNumber(collateralPrice.toString()).times(new BigNumber(10).pow(principalDecimals))
      )
      .div(100)
      .decimalPlaces(0, BigNumber.ROUND_DOWN);

    if (!tx.blockNumber) {
      expect(false, 'Invalid block number');
      return;
    }
    const txTimestamp = new BigNumber(
      (await BRE.ethers.provider.getBlock(tx.blockNumber)).timestamp
    );

    const stableDebtBeforeTx = calcExpectedStableDebtTokenBalance(
      userReserveDataBefore,
      txTimestamp
    );

    expect(userReserveDataAfter.currentStableDebt.toString()).to.be.bignumber.almostEqual(
      stableDebtBeforeTx.minus(amountToLiquidate).toFixed(0),
      'Invalid user debt after liquidation'
    );

    //the liquidity index of the principal reserve needs to be bigger than the index before
    expect(daiReserveDataAfter.liquidityIndex.toString()).to.be.bignumber.gte(
      daiReserveDataBefore.liquidityIndex.toString(),
      'Invalid liquidity index'
    );

    //the principal APY after a liquidation needs to be lower than the APY before
    expect(daiReserveDataAfter.liquidityRate.toString()).to.be.bignumber.lt(
      daiReserveDataBefore.liquidityRate.toString(),
      'Invalid liquidity APY'
    );

    expect(daiReserveDataAfter.availableLiquidity.toString()).to.be.bignumber.almostEqual(
      new BigNumber(daiReserveDataBefore.availableLiquidity.toString())
        .plus(amountToLiquidate)
        .toFixed(0),
      'Invalid principal available liquidity'
    );

    expect(ethReserveDataAfter.availableLiquidity.toString()).to.be.bignumber.almostEqual(
      new BigNumber(ethReserveDataBefore.availableLiquidity.toString())
        .minus(expectedCollateralLiquidated)
        .toFixed(0),
      'Invalid collateral available liquidity'
    );
  });

  it('User 3 deposits 1000 USDC, user 4 1 WETH, user 4 borrows - drops HF, liquidates the borrow', async () => {
    const {usdc, users, pool, oracle, weth} = testEnv;

    const depositor = users[3];
    const borrower = users[4];
    const liquidator = users[5];

    //mints USDC to depositor
    await usdc
      .connect(depositor.signer)
      .mint(await convertToCurrencyDecimals(usdc.address, '1000'));

    //approve protocol to access depositor wallet
    await usdc.connect(depositor.signer).approve(pool.address, APPROVAL_AMOUNT_LENDING_POOL);

    //depositor deposits 1000 USDC
    const amountUSDCtoDeposit = await convertToCurrencyDecimals(usdc.address, '1000');

    await pool
      .connect(depositor.signer)
      .deposit(usdc.address, amountUSDCtoDeposit, depositor.address, '0');

    //borrower deposits 1 ETH
    const amountETHtoDeposit = await convertToCurrencyDecimals(weth.address, '1');

    //mints WETH to borrower
    await weth.connect(borrower.signer).mint(await convertToCurrencyDecimals(weth.address, '1000'));

    //approve protocol to access the borrower wallet
    await weth.connect(borrower.signer).approve(pool.address, APPROVAL_AMOUNT_LENDING_POOL);

    await pool
      .connect(borrower.signer)
      .deposit(weth.address, amountETHtoDeposit, borrower.address, '0');

    //borrower borrows
    const userGlobalData = await pool.getUserAccountData(borrower.address);

    const usdcPrice = await oracle.getAssetPrice(usdc.address);

    const amountUSDCToBorrow = await convertToCurrencyDecimals(
      usdc.address,
      new BigNumber(userGlobalData.availableBorrowsETH.toString())
        .div(usdcPrice.toString())
        .multipliedBy(0.9502)
        .toFixed(0)
    );

    await pool
      .connect(borrower.signer)
      .borrow(usdc.address, amountUSDCToBorrow, RateMode.Stable, '0', borrower.address);

    //drops HF below 1
    await oracle.setAssetPrice(
      usdc.address,
      new BigNumber(usdcPrice.toString()).multipliedBy(1.2).toFixed(0)
    );

    //mints dai to the liquidator

    await usdc
      .connect(liquidator.signer)
      .mint(await convertToCurrencyDecimals(usdc.address, '1000'));

    //approve protocol to access depositor wallet
    await usdc.connect(liquidator.signer).approve(pool.address, APPROVAL_AMOUNT_LENDING_POOL);

    const userReserveDataBefore = await pool.getUserReserveData(usdc.address, borrower.address);

    const usdcReserveDataBefore = await pool.getReserveData(usdc.address);
    const ethReserveDataBefore = await pool.getReserveData(weth.address);

    const amountToLiquidate = BRE.ethers.BigNumber.from(
      userReserveDataBefore.currentStableDebt.toString()
    )
      .div(2)
      .toString();

    await pool
      .connect(liquidator.signer)
      .liquidationCall(weth.address, usdc.address, borrower.address, amountToLiquidate, false);

    const userReserveDataAfter = await pool.getUserReserveData(usdc.address, borrower.address);

    const userGlobalDataAfter = await pool.getUserAccountData(borrower.address);

    const usdcReserveDataAfter = await pool.getReserveData(usdc.address);
    const ethReserveDataAfter = await pool.getReserveData(weth.address);

    const collateralPrice = await oracle.getAssetPrice(weth.address);
    const principalPrice = await oracle.getAssetPrice(usdc.address);

    const collateralDecimals = (
      await pool.getReserveConfigurationData(weth.address)
    ).decimals.toString();
    const principalDecimals = (
      await pool.getReserveConfigurationData(usdc.address)
    ).decimals.toString();

    const expectedCollateralLiquidated = new BigNumber(principalPrice.toString())
      .times(new BigNumber(amountToLiquidate).times(105))
      .times(new BigNumber(10).pow(collateralDecimals))
      .div(
        new BigNumber(collateralPrice.toString()).times(new BigNumber(10).pow(principalDecimals))
      )
      .div(100)
      .decimalPlaces(0, BigNumber.ROUND_DOWN);

    expect(userGlobalDataAfter.healthFactor.toString()).to.be.bignumber.gt(
      oneEther.toFixed(0),
      'Invalid health factor'
    );

    expect(userReserveDataAfter.currentStableDebt.toString()).to.be.bignumber.almostEqual(
      new BigNumber(userReserveDataBefore.currentStableDebt.toString())
        .minus(amountToLiquidate)
        .toFixed(0),
      'Invalid user borrow balance after liquidation'
    );

    //the liquidity index of the principal reserve needs to be bigger than the index before
    expect(usdcReserveDataAfter.liquidityIndex.toString()).to.be.bignumber.gte(
      usdcReserveDataBefore.liquidityIndex.toString(),
      'Invalid liquidity index'
    );

    //the principal APY after a liquidation needs to be lower than the APY before
    expect(usdcReserveDataAfter.liquidityRate.toString()).to.be.bignumber.lt(
      usdcReserveDataBefore.liquidityRate.toString(),
      'Invalid liquidity APY'
    );

    expect(usdcReserveDataAfter.availableLiquidity.toString()).to.be.bignumber.almostEqual(
      new BigNumber(usdcReserveDataBefore.availableLiquidity.toString())
        .plus(amountToLiquidate)
        .toFixed(0),
      'Invalid principal available liquidity'
    );

    expect(ethReserveDataAfter.availableLiquidity.toString()).to.be.bignumber.almostEqual(
      new BigNumber(ethReserveDataBefore.availableLiquidity.toString())
        .minus(expectedCollateralLiquidated)
        .toFixed(0),
      'Invalid collateral available liquidity'
    );
  });

  it('User 4 deposits 1000 LEND - drops HF, liquidates the LEND, which results on a lower amount being liquidated', async () => {
    const {lend, usdc, users, pool, oracle} = testEnv;

    const depositor = users[3];
    const borrower = users[4];
    const liquidator = users[5];

    //mints LEND to borrower
    await lend.connect(borrower.signer).mint(await convertToCurrencyDecimals(lend.address, '1000'));

    //approve protocol to access the borrower wallet
    await lend.connect(borrower.signer).approve(pool.address, APPROVAL_AMOUNT_LENDING_POOL);

    //borrower deposits 1000 LEND
    const amountLENDtoDeposit = await convertToCurrencyDecimals(lend.address, '1000');

    await pool
      .connect(borrower.signer)
      .deposit(lend.address, amountLENDtoDeposit, borrower.address, '0');
    const usdcPrice = await oracle.getAssetPrice(usdc.address);

    //drops HF below 1
    await oracle.setAssetPrice(
      usdc.address,
      new BigNumber(usdcPrice.toString()).multipliedBy(1.12).toFixed(0)
    );

    //mints usdc to the liquidator
    await usdc
      .connect(liquidator.signer)
      .mint(await convertToCurrencyDecimals(usdc.address, '1000'));

    //approve protocol to access depositor wallet
    await usdc.connect(liquidator.signer).approve(pool.address, APPROVAL_AMOUNT_LENDING_POOL);

    const userReserveDataBefore = await pool.getUserReserveData(usdc.address, borrower.address);

    const usdcReserveDataBefore = await pool.getReserveData(usdc.address);
    const lendReserveDataBefore = await pool.getReserveData(lend.address);

    const amountToLiquidate = new BigNumber(userReserveDataBefore.currentStableDebt.toString())
      .div(2)
      .decimalPlaces(0, BigNumber.ROUND_DOWN)
      .toFixed(0);

    const collateralPrice = await oracle.getAssetPrice(lend.address);
    const principalPrice = await oracle.getAssetPrice(usdc.address);

    await pool
      .connect(liquidator.signer)
      .liquidationCall(lend.address, usdc.address, borrower.address, amountToLiquidate, false);

    const userReserveDataAfter = await pool.getUserReserveData(usdc.address, borrower.address);

    const userGlobalDataAfter = await pool.getUserAccountData(borrower.address);

    const usdcReserveDataAfter = await pool.getReserveData(usdc.address);
    const lendReserveDataAfter = await pool.getReserveData(lend.address);

    const collateralDecimals = (
      await pool.getReserveConfigurationData(lend.address)
    ).decimals.toString();
    const principalDecimals = (
      await pool.getReserveConfigurationData(usdc.address)
    ).decimals.toString();

    const expectedCollateralLiquidated = oneEther.multipliedBy('1000');

    const liquidationBonus = (
      await pool.getReserveConfigurationData(lend.address)
    ).liquidationBonus.toString();

    const expectedPrincipal = new BigNumber(collateralPrice.toString())
      .times(expectedCollateralLiquidated)
      .times(new BigNumber(10).pow(principalDecimals))
      .div(
        new BigNumber(principalPrice.toString()).times(new BigNumber(10).pow(collateralDecimals))
      )
      .times(10000)
      .div(liquidationBonus.toString())
      .decimalPlaces(0, BigNumber.ROUND_DOWN);

    expect(userGlobalDataAfter.healthFactor.toString()).to.be.bignumber.gt(
      oneEther.toFixed(0),
      'Invalid health factor'
    );

    expect(userReserveDataAfter.currentStableDebt.toString()).to.be.bignumber.almostEqual(
      new BigNumber(userReserveDataBefore.currentStableDebt.toString())
        .minus(expectedPrincipal)
        .toFixed(0),
      'Invalid user borrow balance after liquidation'
    );

    expect(usdcReserveDataAfter.availableLiquidity.toString()).to.be.bignumber.almostEqual(
      new BigNumber(usdcReserveDataBefore.availableLiquidity.toString())
        .plus(expectedPrincipal)
        .toFixed(0),
      'Invalid principal available liquidity'
    );

    expect(lendReserveDataAfter.availableLiquidity.toString()).to.be.bignumber.almostEqual(
      new BigNumber(lendReserveDataBefore.availableLiquidity.toString())
        .minus(expectedCollateralLiquidated)
        .toFixed(0),
      'Invalid collateral available liquidity'
    );
  });
});
