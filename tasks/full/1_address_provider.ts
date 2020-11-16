import {task} from 'hardhat/config';
import {getEthersSignersAddresses, getParamPerNetwork} from '../../helpers/contracts-helpers';
import {
  deployLendingPoolAddressesProvider,
  deployLendingPoolAddressesProviderRegistry,
} from '../../helpers/contracts-deployments';
import {notFalsyOrZeroAddress, waitForTx} from '../../helpers/misc-utils';
import {
  ConfigNames,
  loadPoolConfig,
  getGenesisPoolAdmin,
  getEmergencyAdmin,
} from '../../helpers/configuration';
import {eEthereumNetwork} from '../../helpers/types';
import {getLendingPoolAddressesProviderRegistry} from '../../helpers/contracts-getters';

task(
  'full:deploy-address-provider',
  'Deploy address provider, registry and fee provider for dev enviroment'
)
  .addFlag('verify', 'Verify contracts at Etherscan')
  .addParam('pool', `Pool name to retrieve configuration, supported: ${Object.values(ConfigNames)}`)
  .setAction(async ({verify, pool}, localBRE) => {
    await localBRE.run('set-DRE');
    console.log('addresses', await getEthersSignersAddresses());
    const network = <eEthereumNetwork>localBRE.network.name;
    const poolConfig = loadPoolConfig(pool);
    const {ProviderId} = poolConfig;

    const providerRegistryAddress = getParamPerNetwork(poolConfig.ProviderRegistry, network);
    // Deploy address provider and set genesis manager
    const addressesProvider = await deployLendingPoolAddressesProvider(verify);

    console.log('prox', addressesProvider.address);
    await waitForTx(await addressesProvider.setPoolAdmin(await getGenesisPoolAdmin(poolConfig)));
    await waitForTx(await addressesProvider.setEmergencyAdmin(await getEmergencyAdmin(poolConfig)));

    console.log('Pool Admin', await addressesProvider.getPoolAdmin());
    console.log('Emergency Admin', await addressesProvider.getEmergencyAdmin());

    // If no provider registry is set, deploy lending pool address provider registry and register the address provider
    const addressesProviderRegistry = notFalsyOrZeroAddress(providerRegistryAddress)
      ? await getLendingPoolAddressesProviderRegistry(providerRegistryAddress)
      : await deployLendingPoolAddressesProviderRegistry(verify);

    await waitForTx(
      await addressesProviderRegistry.registerAddressesProvider(
        addressesProvider.address,
        ProviderId
      )
    );
  });
