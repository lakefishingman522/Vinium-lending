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

    const lendingPool = await hre.ethers.getContractAt("LendingPool", "0x0E2606Ba78CDB17AdADe88B5E62D311Cf8f15a3A");
    const res = await lendingPool.getReserveData("0x47183584aCbc1C45608d7B61cce1C562Ee180E7e");
    console.log(res);

  
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