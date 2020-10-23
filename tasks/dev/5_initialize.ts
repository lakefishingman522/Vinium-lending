import {task} from '@nomiclabs/buidler/config';
import {
  deployLendingPoolCollateralManager,
  deployMockFlashLoanReceiver,
  deployWalletBalancerProvider,
  deployAaveProtocolTestHelpers,
} from '../../helpers/contracts-deployments';
import {getReservesConfigByPool} from '../../helpers/configuration';

import {tEthereumAddress, AavePools, eContractid} from '../../helpers/types';
import {waitForTx, filterMapBy} from '../../helpers/misc-utils';
import {
  enableReservesToBorrow,
  enableReservesAsCollateral,
  initReserves,
  initReservesByHelper,
} from '../../helpers/init-helpers';
import {getAllTokenAddresses} from '../../helpers/mock-helpers';
import {ZERO_ADDRESS} from '../../helpers/constants';
import {
  getAllMockedTokens,
  getLendingPool,
  getLendingPoolConfiguratorProxy,
  getLendingPoolAddressesProvider,
} from '../../helpers/contracts-getters';
import {insertContractAddressInDb} from '../../helpers/contracts-helpers';

task('dev:initialize-lending-pool', 'Initialize lending pool configuration.')
  .addOptionalParam('verify', 'Verify contracts at Etherscan')
  .setAction(async ({verify}, localBRE) => {
    await localBRE.run('set-bre');

    const mockTokens = await getAllMockedTokens();
    const lendingPoolProxy = await getLendingPool();
    const lendingPoolConfiguratorProxy = await getLendingPoolConfiguratorProxy();
    const allTokenAddresses = getAllTokenAddresses(mockTokens);

    const addressesProvider = await getLendingPoolAddressesProvider();

    const protoPoolReservesAddresses = <{[symbol: string]: tEthereumAddress}>(
      filterMapBy(allTokenAddresses, (key: string) => !key.includes('UNI'))
    );

    const testHelpers = await deployAaveProtocolTestHelpers(addressesProvider.address, verify);

    const reservesParams = getReservesConfigByPool(AavePools.proto);

    const admin = await addressesProvider.getAaveAdmin();

    await initReservesByHelper(
      lendingPoolProxy.address,
      addressesProvider.address,
      lendingPoolConfiguratorProxy.address,
      reservesParams,
      protoPoolReservesAddresses,
      testHelpers,
      admin,
      ZERO_ADDRESS
    );
    await enableReservesToBorrow(
      reservesParams,
      protoPoolReservesAddresses,
      testHelpers,
      lendingPoolConfiguratorProxy
    );
    await enableReservesAsCollateral(
      reservesParams,
      protoPoolReservesAddresses,
      testHelpers,
      lendingPoolConfiguratorProxy
    );

    const collateralManager = await deployLendingPoolCollateralManager(verify);
    await waitForTx(
      await addressesProvider.setLendingPoolCollateralManager(collateralManager.address)
    );

    const mockFlashLoanReceiver = await deployMockFlashLoanReceiver(
      addressesProvider.address,
      verify
    );
    await insertContractAddressInDb(
      eContractid.MockFlashLoanReceiver,
      mockFlashLoanReceiver.address
    );

    await deployWalletBalancerProvider(addressesProvider.address, verify);

    await insertContractAddressInDb(eContractid.AaveProtocolTestHelpers, testHelpers.address);
  });
