const main = async () => {
    
    // const LPproviderContractFactory = await hre.ethers.getContractFactory('LendingPoolAddressesProvider');
    // const marketid = 'Avalanche';
    // const lpProviderContract = await LPproviderContractFactory.deploy(marketid);                     
    // await lpProviderContract.deployed();
    // console.log("LendingPoolAddressesProvider deployed to:", lpProviderContract.address);

    // const LPproviderRegistryContractFactory = await hre.ethers.getContractFactory('LendingPoolAddressesProviderRegistry');
    // const lpProviderRegistryContract = await LPproviderRegistryContractFactory.deploy();                     
    // await lpProviderRegistryContract.deployed();
    // console.log("LendingPoolAddressesProviderRegistry deployed to:", lpProviderRegistryContract.address);

    const LFactoryReserveLogic = await hre.ethers.getContractFactory('ReserveLogic');
    const ReserveLogicLibrary = await LFactoryReserveLogic.deploy();                     
    await ReserveLogicLibrary.deployed();
    console.log("ReserveLogicLibrary deployed to:", ReserveLogicLibrary.address);

    const LFactoryGenericLogic = await hre.ethers.getContractFactory('GenericLogic');
    const GenericLogicLibrary = await LFactoryGenericLogic.deploy();                     
    await GenericLogicLibrary.deployed();
    console.log("GenericLogicLibrary deployed to:", GenericLogicLibrary.address);

    const LFactoryValidationLogic = await hre.ethers.getContractFactory('ValidationLogic', {
      libraries: {
        GenericLogic: GenericLogicLibrary.address,
      },
    });
    const ValidationLogiLibrary = await LFactoryValidationLogic.deploy();                     
    await ValidationLogiLibrary.deployed();
    console.log("ValidationLogicLibrary deployed to:", ValidationLogiLibrary.address);

    const LPContractFactory = await hre.ethers.getContractFactory('LendingPool', {
      libraries: {
        ReserveLogic: ReserveLogicLibrary.address,
        ValidationLogic: ValidationLogiLibrary.address,
      },
    });
    const LendingPoolContract = await LPContractFactory.deploy();                     
    await LendingPoolContract.deployed();
    console.log("LendingPoolContract deployed to:", LendingPoolContract.address);

    const LendingPoolCollateralManagerContractFactory = await hre.ethers.getContractFactory('LendingPoolCollateralManager');
    const LendingPoolCollateralManagerContract = await LendingPoolCollateralManagerContractFactory.deploy();                     
    await LendingPoolCollateralManagerContract.deployed();
    console.log("LendingPoolCollateralManager deployed to:", LendingPoolCollateralManagerContract.address);

    const LendingPoolConfiguratorContractFactory = await hre.ethers.getContractFactory('LendingPoolConfigurator');
    const LendingPoolConfiguratorContract = await LendingPoolConfiguratorContractFactory.deploy();                     
    await LendingPoolConfiguratorContract.deployed();
    console.log("LendingPoolConfigurator deployed to:", LendingPoolConfiguratorContract.address);


    const AaveOracleContractFactory = await hre.ethers.getContractFactory('AaveOracle');
    const AaveOracleContract = await AaveOracleContractFactory.deploy(
      
    );                     
    await AaveOracleContract.deployed();
    console.log("AaveOracleContract deployed to:", AaveOracleContract.address);

  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();

npx hardhat full:deploy-address-provider-registry --pool Avalanche --network fuji
npx hardhat full:deploy-address-provider --pool Avalanche --network fuji
npx hardhat full:deploy-lending-pool --pool Avalanche --network fuji
npx hardhat full:deploy-oracles --pool Avalanche --network fuji
npx hardhat full:data-provider --network fuji
npx hardhat full-deploy-weth-gateway --pool Avalanche --network fuji
npx hardhat full:initialize-lending-pool --pool Avalanche --network fuji

