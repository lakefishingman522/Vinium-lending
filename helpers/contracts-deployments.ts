import { Contract } from 'ethers';
import { DRE, notFalsyOrZeroAddress } from './misc-utils';
import {
  tEthereumAddress,
  eContractid,
  tStringTokenSmallUnits,
  ViniumPools,
  TokenContractId,
  iMultiPoolsAssets,
  IReserveParams,
  PoolConfiguration,
  eEthereumNetwork,
} from './types';
import { MintableERC20 } from '../types/MintableERC20';
import { MockContract } from 'ethereum-waffle';
import { ConfigNames, getReservesConfigByPool, loadPoolConfig } from './configuration';
import { getFirstSigner } from './contracts-getters';
import {
  ViniumProtocolDataProviderFactory,
  ViTokenFactory,
  ViTokensAndRatesHelperFactory,
  ViniumOracleFactory,
  DefaultReserveInterestRateStrategyFactory,
  DelegationAwareViTokenFactory,
  InitializableAdminUpgradeabilityProxyFactory,
  LendingPoolAddressesProviderFactory,
  LendingPoolAddressesProviderRegistryFactory,
  LendingPoolCollateralManagerFactory,
  LendingPoolConfiguratorFactory,
  LendingPoolFactory,
  LendingRateOracleFactory,
  MintableDelegationERC20Factory,
  MintableERC20Factory,
  MockAggregatorFactory,
  MockViTokenFactory,
  MockFlashLoanReceiverFactory,
  MockParaSwapAugustusFactory,
  MockParaSwapAugustusRegistryFactory,
  MockStableVdTokenFactory,
  MockVariableVdTokenFactory,
  MockUniswapV2Router02Factory,
  ParaSwapLiquiditySwapAdapterFactory,
  PriceOracleFactory,
  ReserveLogicFactory,
  SelfdestructTransferFactory,
  StableVdTokenFactory,
  UniswapLiquiditySwapAdapterFactory,
  UniswapRepayAdapterFactory,
  VariableVdTokenFactory,
  WalletBalanceProviderFactory,
  WETH9MockedFactory,
  WETHGatewayFactory,
  FlashLiquidationAdapterFactory,
  UiPoolDataProviderV2Factory,
  UiPoolDataProviderV2V3Factory,
  UiIncentiveDataProviderV2V3,
  UiIncentiveDataProviderV2Factory,
} from '../types';
import {
  withSaveAndVerify,
  registerContractInJsonDb,
  linkBytecode,
  insertContractAddressInDb,
  deployContract,
  verifyContract,
  getOptionalParamAddressPerNetwork,
} from './contracts-helpers';
import { StableAndVariableTokensHelperFactory } from '../types/StableAndVariableTokensHelperFactory';
import { MintableDelegationERC20 } from '../types/MintableDelegationERC20';
import { readArtifact as buidlerReadArtifact } from '@nomiclabs/buidler/plugins';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { LendingPoolLibraryAddresses } from '../types/LendingPoolFactory';
import { UiPoolDataProvider } from '../types';
import { eNetwork } from './types';

export const deployUiIncentiveDataProviderV2 = async (verify?: boolean) =>
  withSaveAndVerify(
    await new UiIncentiveDataProviderV2Factory(await getFirstSigner()).deploy(),
    eContractid.UiIncentiveDataProviderV2,
    [],
    verify
  );

export const deployUiIncentiveDataProviderV2V3 = async (verify?: boolean) => {
  const id = eContractid.UiIncentiveDataProviderV2V3;
  const instance = await deployContract<UiIncentiveDataProviderV2V3>(id, []);
  if (verify) {
    await verifyContract(id, instance, []);
  }
  return instance;
};

export const deployUiPoolDataProviderV2 = async (
  chainlinkAggregatorProxy: string,
  chainlinkEthUsdAggregatorProxy: string,
  verify?: boolean
) =>
  withSaveAndVerify(
    await new UiPoolDataProviderV2Factory(await getFirstSigner()).deploy(
      chainlinkAggregatorProxy,
      chainlinkEthUsdAggregatorProxy
    ),
    eContractid.UiPoolDataProvider,
    [chainlinkAggregatorProxy, chainlinkEthUsdAggregatorProxy],
    verify
  );

export const deployUiPoolDataProviderV2V3 = async (
  chainlinkAggregatorProxy: string,
  chainlinkEthUsdAggregatorProxy: string,
  verify?: boolean
) =>
  withSaveAndVerify(
    await new UiPoolDataProviderV2V3Factory(await getFirstSigner()).deploy(
      chainlinkAggregatorProxy,
      chainlinkEthUsdAggregatorProxy
    ),
    eContractid.UiPoolDataProvider,
    [chainlinkAggregatorProxy, chainlinkEthUsdAggregatorProxy],
    verify
  );

export const deployUiPoolDataProvider = async (
  [incentivesController, viniumOracle]: [tEthereumAddress, tEthereumAddress],
  verify?: boolean
) => {
  const id = eContractid.UiPoolDataProvider;
  const args: string[] = [incentivesController, viniumOracle];
  const instance = await deployContract<UiPoolDataProvider>(id, args);
  if (verify) {
    await verifyContract(id, instance, args);
  }
  return instance;
};

const readArtifact = async (id: string) => {
  if (DRE.network.name === eEthereumNetwork.buidlerevm) {
    return buidlerReadArtifact(DRE.config.paths.artifacts, id);
  }
  return (DRE as HardhatRuntimeEnvironment).artifacts.readArtifact(id);
};

export const deployLendingPoolAddressesProvider = async (marketId: string, verify?: boolean) =>
  withSaveAndVerify(
    await new LendingPoolAddressesProviderFactory(await getFirstSigner()).deploy(marketId),
    eContractid.LendingPoolAddressesProvider,
    [marketId],
    verify
  );

export const deployLendingPoolAddressesProviderRegistry = async (verify?: boolean) =>
  withSaveAndVerify(
    await new LendingPoolAddressesProviderRegistryFactory(await getFirstSigner()).deploy(),
    eContractid.LendingPoolAddressesProviderRegistry,
    [],
    verify
  );

export const deployLendingPoolConfigurator = async (verify?: boolean) => {
  const lendingPoolConfiguratorImpl = await new LendingPoolConfiguratorFactory(
    await getFirstSigner()
  ).deploy();
  await insertContractAddressInDb(
    eContractid.LendingPoolConfiguratorImpl,
    lendingPoolConfiguratorImpl.address
  );
  return withSaveAndVerify(
    lendingPoolConfiguratorImpl,
    eContractid.LendingPoolConfigurator,
    [],
    verify
  );
};

export const deployReserveLogicLibrary = async (verify?: boolean) =>
  withSaveAndVerify(
    await new ReserveLogicFactory(await getFirstSigner()).deploy(),
    eContractid.ReserveLogic,
    [],
    verify
  );

export const deployGenericLogic = async (reserveLogic: Contract, verify?: boolean) => {
  const genericLogicArtifact = await readArtifact(eContractid.GenericLogic);

  const linkedGenericLogicByteCode = linkBytecode(genericLogicArtifact, {
    [eContractid.ReserveLogic]: reserveLogic.address,
  });

  const genericLogicFactory = await DRE.ethers.getContractFactory(
    genericLogicArtifact.abi,
    linkedGenericLogicByteCode
  );

  const genericLogic = await (
    await genericLogicFactory.connect(await getFirstSigner()).deploy()
  ).deployed();
  return withSaveAndVerify(genericLogic, eContractid.GenericLogic, [], verify);
};

export const deployValidationLogic = async (
  reserveLogic: Contract,
  genericLogic: Contract,
  verify?: boolean
) => {
  const validationLogicArtifact = await readArtifact(eContractid.ValidationLogic);

  const linkedValidationLogicByteCode = linkBytecode(validationLogicArtifact, {
    [eContractid.ReserveLogic]: reserveLogic.address,
    [eContractid.GenericLogic]: genericLogic.address,
  });

  const validationLogicFactory = await DRE.ethers.getContractFactory(
    validationLogicArtifact.abi,
    linkedValidationLogicByteCode
  );

  const validationLogic = await (
    await validationLogicFactory.connect(await getFirstSigner()).deploy()
  ).deployed();

  return withSaveAndVerify(validationLogic, eContractid.ValidationLogic, [], verify);
};

export const deployViniumLibraries = async (
  verify?: boolean
): Promise<LendingPoolLibraryAddresses> => {
  const reserveLogic = await deployReserveLogicLibrary(verify);
  const genericLogic = await deployGenericLogic(reserveLogic, verify);
  const validationLogic = await deployValidationLogic(reserveLogic, genericLogic, verify);

  // Hardcoded solidity placeholders, if any library changes path this will fail.
  // The '__$PLACEHOLDER$__ can be calculated via solidity keccak, but the LendingPoolLibraryAddresses Type seems to
  // require a hardcoded string.
  //
  //  how-to:
  //  1. PLACEHOLDER = solidityKeccak256(['string'], `${libPath}:${libName}`).slice(2, 36)
  //  2. LIB_PLACEHOLDER = `__$${PLACEHOLDER}$__`
  // or grab placeholdes from LendingPoolLibraryAddresses at Typechain generation.
  //
  // libPath example: contracts/libraries/logic/GenericLogic.sol
  // libName example: GenericLogic
  return {
    ['__$de8c0cf1a7d7c36c802af9a64fb9d86036$__']: validationLogic.address,
    ['__$22cd43a9dda9ce44e9b92ba393b88fb9ac$__']: reserveLogic.address,
  };
};

export const deployLendingPool = async (verify?: boolean) => {
  const libraries = await deployViniumLibraries(verify);
  const lendingPoolImpl = await new LendingPoolFactory(libraries, await getFirstSigner()).deploy();
  await insertContractAddressInDb(eContractid.LendingPoolImpl, lendingPoolImpl.address);
  return withSaveAndVerify(lendingPoolImpl, eContractid.LendingPool, [], verify);
};

export const deployPriceOracle = async (verify?: boolean) =>
  withSaveAndVerify(
    await new PriceOracleFactory(await getFirstSigner()).deploy(),
    eContractid.PriceOracle,
    [],
    verify
  );

export const deployLendingRateOracle = async (verify?: boolean) =>
  withSaveAndVerify(
    await new LendingRateOracleFactory(await getFirstSigner()).deploy(),
    eContractid.LendingRateOracle,
    [],
    verify
  );

export const deployMockAggregator = async (price: tStringTokenSmallUnits, verify?: boolean) =>
  withSaveAndVerify(
    await new MockAggregatorFactory(await getFirstSigner()).deploy(price),
    eContractid.MockAggregator,
    [price],
    verify
  );

export const deployViniumOracle = async (
  args: [tEthereumAddress[], tEthereumAddress[], tEthereumAddress, tEthereumAddress, string],
  verify?: boolean
) =>
  withSaveAndVerify(
    await new ViniumOracleFactory(await getFirstSigner()).deploy(...args),
    eContractid.ViniumOracle,
    args,
    verify
  );

export const deployLendingPoolCollateralManager = async (verify?: boolean) => {
  const collateralManagerImpl = await new LendingPoolCollateralManagerFactory(
    await getFirstSigner()
  ).deploy();
  await insertContractAddressInDb(
    eContractid.LendingPoolCollateralManagerImpl,
    collateralManagerImpl.address
  );
  return withSaveAndVerify(
    collateralManagerImpl,
    eContractid.LendingPoolCollateralManager,
    [],
    verify
  );
};

export const deployInitializableAdminUpgradeabilityProxy = async (verify?: boolean) =>
  withSaveAndVerify(
    await new InitializableAdminUpgradeabilityProxyFactory(await getFirstSigner()).deploy(),
    eContractid.InitializableAdminUpgradeabilityProxy,
    [],
    verify
  );

export const deployMockFlashLoanReceiver = async (
  addressesProvider: tEthereumAddress,
  verify?: boolean
) =>
  withSaveAndVerify(
    await new MockFlashLoanReceiverFactory(await getFirstSigner()).deploy(addressesProvider),
    eContractid.MockFlashLoanReceiver,
    [addressesProvider],
    verify
  );

export const deployWalletBalancerProvider = async (verify?: boolean) =>
  withSaveAndVerify(
    await new WalletBalanceProviderFactory(await getFirstSigner()).deploy(),
    eContractid.WalletBalanceProvider,
    [],
    verify
  );

export const deployViniumProtocolDataProvider = async (
  addressesProvider: tEthereumAddress,
  verify?: boolean
) =>
  withSaveAndVerify(
    await new ViniumProtocolDataProviderFactory(await getFirstSigner()).deploy(addressesProvider),
    eContractid.ViniumProtocolDataProvider,
    [addressesProvider],
    verify
  );

export const deployMintableERC20 = async (
  args: [string, string, string],
  verify?: boolean
): Promise<MintableERC20> =>
  withSaveAndVerify(
    await new MintableERC20Factory(await getFirstSigner()).deploy(...args),
    eContractid.MintableERC20,
    args,
    verify
  );

export const deployMintableDelegationERC20 = async (
  args: [string, string, string],
  verify?: boolean
): Promise<MintableDelegationERC20> =>
  withSaveAndVerify(
    await new MintableDelegationERC20Factory(await getFirstSigner()).deploy(...args),
    eContractid.MintableDelegationERC20,
    args,
    verify
  );
export const deployDefaultReserveInterestRateStrategy = async (
  args: [tEthereumAddress, string, string, string, string, string, string],
  verify: boolean
) =>
  withSaveAndVerify(
    await new DefaultReserveInterestRateStrategyFactory(await getFirstSigner()).deploy(...args),
    eContractid.DefaultReserveInterestRateStrategy,
    args,
    verify
  );

export const deployStableVdToken = async (
  args: [tEthereumAddress, tEthereumAddress, tEthereumAddress, string, string],
  verify: boolean
) => {
  const instance = await withSaveAndVerify(
    await new StableVdTokenFactory(await getFirstSigner()).deploy(),
    eContractid.StableVdToken,
    [],
    verify
  );

  await instance.initialize(args[0], args[1], args[2], '18', args[3], args[4], '0x10');

  return instance;
};

export const deployVariableVdToken = async (
  args: [tEthereumAddress, tEthereumAddress, tEthereumAddress, string, string],
  verify: boolean
) => {
  const instance = await withSaveAndVerify(
    await new VariableVdTokenFactory(await getFirstSigner()).deploy(),
    eContractid.VariableVdToken,
    [],
    verify
  );

  await instance.initialize(args[0], args[1], args[2], '18', args[3], args[4], '0x10');

  return instance;
};

export const deployGenericStableVdToken = async (verify?: boolean) =>
  withSaveAndVerify(
    await new StableVdTokenFactory(await getFirstSigner()).deploy(),
    eContractid.StableVdToken,
    [],
    verify
  );

export const deployGenericVariableVdToken = async (verify?: boolean) =>
  withSaveAndVerify(
    await new VariableVdTokenFactory(await getFirstSigner()).deploy(),
    eContractid.VariableVdToken,
    [],
    verify
  );

export const deployGenericViToken = async (
  [poolAddress, underlyingAssetAddress, treasuryAddress, incentivesController, name, symbol]: [
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    string,
    string
  ],
  verify: boolean
) => {
  const instance = await withSaveAndVerify(
    await new ViTokenFactory(await getFirstSigner()).deploy(),
    eContractid.ViToken,
    [],
    verify
  );

  await instance.initialize(
    poolAddress,
    treasuryAddress,
    underlyingAssetAddress,
    incentivesController,
    '18',
    name,
    symbol,
    '0x10'
  );

  return instance;
};

export const deployGenericViTokenImpl = async (verify: boolean) =>
  withSaveAndVerify(
    await new ViTokenFactory(await getFirstSigner()).deploy(),
    eContractid.ViToken,
    [],
    verify
  );

export const deployDelegationAwareViToken = async (
  [pool, underlyingAssetAddress, treasuryAddress, incentivesController, name, symbol]: [
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    string,
    string
  ],
  verify: boolean
) => {
  const instance = await withSaveAndVerify(
    await new DelegationAwareViTokenFactory(await getFirstSigner()).deploy(),
    eContractid.DelegationAwareViToken,
    [],
    verify
  );

  await instance.initialize(
    pool,
    treasuryAddress,
    underlyingAssetAddress,
    incentivesController,
    '18',
    name,
    symbol,
    '0x10'
  );

  return instance;
};

export const deployDelegationAwareViTokenImpl = async (verify: boolean) =>
  withSaveAndVerify(
    await new DelegationAwareViTokenFactory(await getFirstSigner()).deploy(),
    eContractid.DelegationAwareViToken,
    [],
    verify
  );

export const deployAllMockTokens = async (verify?: boolean) => {
  const tokens: { [symbol: string]: MockContract | MintableERC20 } = {};

  const protoConfigData = getReservesConfigByPool(ViniumPools.proto);

  for (const tokenSymbol of Object.keys(TokenContractId)) {
    let decimals = '18';

    let configData = (<any>protoConfigData)[tokenSymbol];

    tokens[tokenSymbol] = await deployMintableERC20(
      [tokenSymbol, tokenSymbol, configData ? configData.reserveDecimals : decimals],
      verify
    );
    await registerContractInJsonDb(tokenSymbol.toUpperCase(), tokens[tokenSymbol]);
  }
  return tokens;
};

export const deployMockTokens = async (config: PoolConfiguration, verify?: boolean) => {
  const tokens: { [symbol: string]: MockContract | MintableERC20 } = {};
  const defaultDecimals = 18;

  const configData = config.ReservesConfig;

  for (const tokenSymbol of Object.keys(configData)) {
    tokens[tokenSymbol] = await deployMintableERC20(
      [
        tokenSymbol,
        tokenSymbol,
        configData[tokenSymbol as keyof iMultiPoolsAssets<IReserveParams>].reserveDecimals ||
          defaultDecimals.toString(),
      ],
      verify
    );
    await registerContractInJsonDb(tokenSymbol.toUpperCase(), tokens[tokenSymbol]);
  }
  return tokens;
};

export const deployStableAndVariableTokensHelper = async (
  args: [tEthereumAddress, tEthereumAddress],
  verify?: boolean
) =>
  withSaveAndVerify(
    await new StableAndVariableTokensHelperFactory(await getFirstSigner()).deploy(...args),
    eContractid.StableAndVariableTokensHelper,
    args,
    verify
  );

export const deployViTokensAndRatesHelper = async (
  args: [tEthereumAddress, tEthereumAddress, tEthereumAddress],
  verify?: boolean
) =>
  withSaveAndVerify(
    await new ViTokensAndRatesHelperFactory(await getFirstSigner()).deploy(...args),
    eContractid.ViTokensAndRatesHelper,
    args,
    verify
  );

export const deployWETHGateway = async (args: [tEthereumAddress], verify?: boolean) =>
  withSaveAndVerify(
    await new WETHGatewayFactory(await getFirstSigner()).deploy(...args),
    eContractid.WETHGateway,
    args,
    verify
  );

export const authorizeWETHGateway = async (
  wethGateWay: tEthereumAddress,
  lendingPool: tEthereumAddress
) =>
  await new WETHGatewayFactory(await getFirstSigner())
    .attach(wethGateWay)
    .authorizeLendingPool(lendingPool);

export const deployMockStableVdToken = async (
  args: [tEthereumAddress, tEthereumAddress, tEthereumAddress, string, string, string],
  verify?: boolean
) => {
  const instance = await withSaveAndVerify(
    await new MockStableVdTokenFactory(await getFirstSigner()).deploy(),
    eContractid.MockStableVdToken,
    [],
    verify
  );

  await instance.initialize(args[0], args[1], args[2], '18', args[3], args[4], args[5]);

  return instance;
};

export const deployWETHMocked = async (verify?: boolean) =>
  withSaveAndVerify(
    await new WETH9MockedFactory(await getFirstSigner()).deploy(),
    eContractid.WETHMocked,
    [],
    verify
  );

export const deployMockVariableVdToken = async (
  args: [tEthereumAddress, tEthereumAddress, tEthereumAddress, string, string, string],
  verify?: boolean
) => {
  const instance = await withSaveAndVerify(
    await new MockVariableVdTokenFactory(await getFirstSigner()).deploy(),
    eContractid.MockVariableVdToken,
    [],
    verify
  );

  await instance.initialize(args[0], args[1], args[2], '18', args[3], args[4], args[5]);

  return instance;
};

export const deployMockViToken = async (
  args: [
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    string,
    string,
    string
  ],
  verify?: boolean
) => {
  const instance = await withSaveAndVerify(
    await new MockViTokenFactory(await getFirstSigner()).deploy(),
    eContractid.MockViToken,
    [],
    verify
  );

  await instance.initialize(args[0], args[2], args[1], args[3], '18', args[4], args[5], args[6]);

  return instance;
};

export const deploySelfdestructTransferMock = async (verify?: boolean) =>
  withSaveAndVerify(
    await new SelfdestructTransferFactory(await getFirstSigner()).deploy(),
    eContractid.SelfdestructTransferMock,
    [],
    verify
  );

export const deployMockUniswapRouter = async (verify?: boolean) =>
  withSaveAndVerify(
    await new MockUniswapV2Router02Factory(await getFirstSigner()).deploy(),
    eContractid.MockUniswapV2Router02,
    [],
    verify
  );

export const deployUniswapLiquiditySwapAdapter = async (
  args: [tEthereumAddress, tEthereumAddress, tEthereumAddress],
  verify?: boolean
) =>
  withSaveAndVerify(
    await new UniswapLiquiditySwapAdapterFactory(await getFirstSigner()).deploy(...args),
    eContractid.UniswapLiquiditySwapAdapter,
    args,
    verify
  );

export const deployUniswapRepayAdapter = async (
  args: [tEthereumAddress, tEthereumAddress, tEthereumAddress],
  verify?: boolean
) =>
  withSaveAndVerify(
    await new UniswapRepayAdapterFactory(await getFirstSigner()).deploy(...args),
    eContractid.UniswapRepayAdapter,
    args,
    verify
  );

export const deployFlashLiquidationAdapter = async (
  args: [tEthereumAddress, tEthereumAddress, tEthereumAddress],
  verify?: boolean
) =>
  withSaveAndVerify(
    await new FlashLiquidationAdapterFactory(await getFirstSigner()).deploy(...args),
    eContractid.FlashLiquidationAdapter,
    args,
    verify
  );

export const chooseViTokenDeployment = (id: eContractid) => {
  switch (id) {
    case eContractid.ViToken:
      return deployGenericViTokenImpl;
    case eContractid.DelegationAwareViToken:
      return deployDelegationAwareViTokenImpl;
    default:
      throw Error(`Missing viToken implementation deployment script for: ${id}`);
  }
};

export const deployViTokenImplementations = async (
  pool: ConfigNames,
  reservesConfig: { [key: string]: IReserveParams },
  verify = false
) => {
  const poolConfig = loadPoolConfig(pool);
  const network = <eNetwork>DRE.network.name;

  // Obtain the different ViToken implementations of all reserves inside the Market config
  const viTokenImplementations = [
    ...Object.entries(reservesConfig).reduce<Set<eContractid>>((acc, [, entry]) => {
      acc.add(entry.viTokenImpl);
      return acc;
    }, new Set<eContractid>()),
  ];

  for (let x = 0; x < viTokenImplementations.length; x++) {
    const viTokenAddress = getOptionalParamAddressPerNetwork(
      poolConfig[viTokenImplementations[x].toString()],
      network
    );
    if (!notFalsyOrZeroAddress(viTokenAddress)) {
      const deployImplementationMethod = chooseViTokenDeployment(viTokenImplementations[x]);
      console.log(`Deploying implementation`, viTokenImplementations[x]);
      await deployImplementationMethod(verify);
    }
  }

  // Debt tokens, for now all Market configs follows same implementations
  const genericStableVdTokenAddress = getOptionalParamAddressPerNetwork(
    poolConfig.StableVdTokenImplementation,
    network
  );
  const geneticVariableVdTokenAddress = getOptionalParamAddressPerNetwork(
    poolConfig.VariableVdTokenImplementation,
    network
  );

  if (!notFalsyOrZeroAddress(genericStableVdTokenAddress)) {
    await deployGenericStableVdToken(verify);
  }
  if (!notFalsyOrZeroAddress(geneticVariableVdTokenAddress)) {
    await deployGenericVariableVdToken(verify);
  }
};

export const deployRateStrategy = async (
  strategyName: string,
  args: [tEthereumAddress, string, string, string, string, string, string],
  verify: boolean
): Promise<tEthereumAddress> => {
  switch (strategyName) {
    default:
      return await (
        await deployDefaultReserveInterestRateStrategy(args, verify)
      ).address;
  }
};
export const deployMockParaSwapAugustus = async (verify?: boolean) =>
  withSaveAndVerify(
    await new MockParaSwapAugustusFactory(await getFirstSigner()).deploy(),
    eContractid.MockParaSwapAugustus,
    [],
    verify
  );

export const deployMockParaSwapAugustusRegistry = async (
  args: [tEthereumAddress],
  verify?: boolean
) =>
  withSaveAndVerify(
    await new MockParaSwapAugustusRegistryFactory(await getFirstSigner()).deploy(...args),
    eContractid.MockParaSwapAugustusRegistry,
    args,
    verify
  );

export const deployParaSwapLiquiditySwapAdapter = async (
  args: [tEthereumAddress, tEthereumAddress],
  verify?: boolean
) =>
  withSaveAndVerify(
    await new ParaSwapLiquiditySwapAdapterFactory(await getFirstSigner()).deploy(...args),
    eContractid.ParaSwapLiquiditySwapAdapter,
    args,
    verify
  );
