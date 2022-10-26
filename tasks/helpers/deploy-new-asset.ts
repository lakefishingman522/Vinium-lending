import { task } from 'hardhat/config';
import { eEthereumNetwork, ICommonConfiguration } from '../../helpers/types';
import { getTreasuryAddress } from '../../helpers/configuration';
import * as marketConfigs from '../../markets/avalanche';
import * as reserveConfigs from '../../markets/avalanche/reservesConfigs';
import { getLendingPoolAddressesProvider } from './../../helpers/contracts-getters';
import {
  chooseViTokenDeployment,
  deployDefaultReserveInterestRateStrategy,
  deployStableVdToken,
  deployVariableVdToken,
} from './../../helpers/contracts-deployments';
import { setDRE } from '../../helpers/misc-utils';
import { ZERO_ADDRESS } from './../../helpers/constants';
import AvalancheConfig from '../../markets/avalanche';

const LENDING_POOL_ADDRESS_PROVIDER = {
  main: '0xb53c1a33016b2dc2ff3653530bff1848a515c8c5',
  kovan: '0x652B2937Efd0B5beA1c8d54293FC1289672AFC6b',
};

const isSymbolValid = (symbol: string, network: eEthereumNetwork) =>
  Object.keys(reserveConfigs).includes('strategy' + symbol) &&
  marketConfigs.AvalancheConfig.ReserveAssets[network][symbol] &&
  marketConfigs.AvalancheConfig.ReservesConfig[symbol] === reserveConfigs['strategy' + symbol];

task('external:deploy-new-asset', 'Deploy A token, Debt Tokens, Risk Parameters')
  .addParam('symbol', `Asset symbol, needs to have configuration ready`)
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify, symbol }, localBRE) => {
    const { ViTokenNamePrefix, StableVdTokenNamePrefix, VariableVdTokenNamePrefix, ReserveAssets } =
      marketConfigs.AvalancheConfig;

    const network = localBRE.network.name;
    if (!isSymbolValid(symbol, network as eEthereumNetwork)) {
      throw new Error(
        `
WRONG RESERVE ASSET SETUP:
        The symbol ${symbol} has no reserve Config and/or reserve Asset setup.
        update /markets/vinium/index.ts and add the asset address for ${network} network
        update /markets/vinium/reservesConfigs.ts and add parameters for ${symbol}
        `
      );
    }
    setDRE(localBRE);
    const strategyParams = reserveConfigs['strategy' + symbol];
    const reserveAssetAddress = ReserveAssets[localBRE.network.name][symbol];
    const deployCustomViToken = chooseViTokenDeployment(strategyParams.viTokenImpl);
    const addressProvider = await getLendingPoolAddressesProvider(
      LENDING_POOL_ADDRESS_PROVIDER[network]
    );
    const poolAddress = await addressProvider.getLendingPool();
    const viToken = await deployCustomViToken(verify);
    const stableDebt = await deployStableVdToken(
      [
        poolAddress,
        reserveAssetAddress,
        ZERO_ADDRESS, // Incentives Controller
        `${StableVdTokenNamePrefix} ${symbol}`,
        `stableVd${symbol}`,
      ],
      verify
    );
    const variableDebt = await deployVariableVdToken(
      [
        poolAddress,
        reserveAssetAddress,
        ZERO_ADDRESS, // Incentives Controller
        `${VariableVdTokenNamePrefix} ${symbol}`,
        `variableVd${symbol}`,
      ],
      verify
    );
    const rates = await deployDefaultReserveInterestRateStrategy(
      [
        addressProvider.address,
        strategyParams.strategy.optimalUtilizationRate,
        strategyParams.strategy.baseVariableBorrowRate,
        strategyParams.strategy.variableRateSlope1,
        strategyParams.strategy.variableRateSlope2,
        strategyParams.strategy.stableRateSlope1,
        strategyParams.strategy.stableRateSlope2,
      ],
      verify
    );
    console.log(`
    New interest bearing asset deployed on ${network}:
    Interest bearing a${symbol} address: ${viToken.address}
    Variable Debt variableDebt${symbol} address: ${variableDebt.address}
    Stable Debt stableDebt${symbol} address: ${stableDebt.address}
    Strategy Implementation for ${symbol} address: ${rates.address}
    `);
  });
