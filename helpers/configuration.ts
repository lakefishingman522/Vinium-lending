import {
  AavePools,
  iMultiPoolsAssets,
  IReserveParams,
  PoolConfiguration,
  ICommonConfiguration,
  eNetwork,
} from './types';
import { getParamPerPool } from './contracts-helpers';
import AaveConfig from '../markets/aave';
import LpConfig from '../markets/lp';
import MaticConfig from '../markets/matic';
import { CommonsConfig } from '../markets/aave/commons';
import { DRE, filterMapBy } from './misc-utils';
import { tEthereumAddress } from './types';
import { getParamPerNetwork } from './contracts-helpers';
import { deployWETHMocked } from './contracts-deployments';

export enum ConfigNames {
  Commons = 'Commons',
  Aave = 'Aave',
  Lp = 'Lp',
  Matic = 'Matic',
}

export const loadPoolConfig = (configName: ConfigNames): PoolConfiguration => {
  switch (configName) {
    case ConfigNames.Aave:
      return AaveConfig;
    case ConfigNames.Lp:
      return LpConfig;
    case ConfigNames.Matic:
      return MaticConfig;
    case ConfigNames.Commons:
      return CommonsConfig;
    default:
      throw new Error(`Unsupported pool configuration: ${Object.values(ConfigNames)}`);
  }
};

// ----------------
// PROTOCOL PARAMS PER POOL
// ----------------

export const getReservesConfigByPool = (pool: AavePools): iMultiPoolsAssets<IReserveParams> =>
  getParamPerPool<iMultiPoolsAssets<IReserveParams>>(
    {
      [AavePools.proto]: {
        ...AaveConfig.ReservesConfig,
      },
      [AavePools.lp]: {
        ...LpConfig.ReservesConfig,
      },
      [AavePools.matic]: {
        ...MaticConfig.ReservesConfig,
      },
    },
    pool
  );

export const getGenesisPoolAdmin = async (
  config: ICommonConfiguration
): Promise<tEthereumAddress> => {
  const currentNetwork = process.env.MAINNET_FORK === 'true' ? 'main' : DRE.network.name;
  const targetAddress = getParamPerNetwork(config.PoolAdmin, <eNetwork>currentNetwork);
  if (targetAddress) {
    return targetAddress;
  }
  const addressList = await Promise.all(
    (await DRE.ethers.getSigners()).map((signer) => signer.getAddress())
  );
  const addressIndex = config.PoolAdminIndex;
  return addressList[addressIndex];
};

export const getEmergencyAdmin = async (
  config: ICommonConfiguration
): Promise<tEthereumAddress> => {
  const currentNetwork = process.env.MAINNET_FORK === 'true' ? 'main' : DRE.network.name;
  const targetAddress = getParamPerNetwork(config.EmergencyAdmin, <eNetwork>currentNetwork);
  if (targetAddress) {
    return targetAddress;
  }
  const addressList = await Promise.all(
    (await DRE.ethers.getSigners()).map((signer) => signer.getAddress())
  );
  const addressIndex = config.EmergencyAdminIndex;
  return addressList[addressIndex];
};

export const getTreasuryAddress = async (
  config: ICommonConfiguration
): Promise<tEthereumAddress> => {
  const currentNetwork = process.env.MAINNET_FORK === 'true' ? 'main' : DRE.network.name;
  return getParamPerNetwork(config.ReserveFactorTreasuryAddress, <eNetwork>currentNetwork);
};

export const getATokenDomainSeparatorPerNetwork = (
  network: eNetwork,
  config: ICommonConfiguration
): tEthereumAddress => getParamPerNetwork<tEthereumAddress>(config.ATokenDomainSeparator, network);

export const getWethAddress = async (config: ICommonConfiguration) => {
  const currentNetwork = process.env.MAINNET_FORK === 'true' ? 'main' : DRE.network.name;
  const wethAddress = getParamPerNetwork(config.WETH, <eNetwork>currentNetwork);
  if (wethAddress) {
    return wethAddress;
  }
  if (currentNetwork.includes('main')) {
    throw new Error('WETH not set at mainnet configuration.');
  }
  const weth = await deployWETHMocked();
  return weth.address;
};

export const getLendingRateOracles = (poolConfig: ICommonConfiguration) => {
  const {
    ProtocolGlobalParams: { UsdAddress },
    LendingRateOracleRatesCommon,
    ReserveAssets,
  } = poolConfig;

  const MAINNET_FORK = process.env.MAINNET_FORK === 'true';
  const network = MAINNET_FORK ? 'main' : DRE.network.name;
  return filterMapBy(LendingRateOracleRatesCommon, (key) =>
    Object.keys(ReserveAssets[network]).includes(key)
  );
};
