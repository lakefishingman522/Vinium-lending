import path from 'path';
import fs from 'fs';
import {usePlugin} from '@nomiclabs/buidler/config';
// @ts-ignore
import {accounts} from './test-wallets.js';
import {eEthereumNetwork} from './helpers/types';
import {BUIDLEREVM_CHAINID, COVERAGE_CHAINID} from './helpers/buidler-constants';

usePlugin('@nomiclabs/buidler-ethers');
usePlugin('buidler-typechain');
usePlugin('solidity-coverage');
usePlugin('@nomiclabs/buidler-waffle');
usePlugin('@nomiclabs/buidler-etherscan');
usePlugin('buidler-gas-reporter');

const SKIP_LOAD = process.env.SKIP_LOAD === 'true';
const DEFAULT_BLOCK_GAS_LIMIT = 12000000;
const DEFAULT_GAS_PRICE = 10;
const HARDFORK = 'istanbul';
const INFURA_KEY = process.env.INFURA_KEY || '';
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY || '';
const MNEMONIC_PATH = "m/44'/60'/0'/0";
const MNEMONICS: {[network: string]: string} = {
  [eEthereumNetwork.kovan]: process.env.MNEMONIC || '',
  [eEthereumNetwork.ropsten]: process.env.MNEMONIC || '',
  [eEthereumNetwork.main]: process.env.MNEMONIC || '',
};

// Prevent to load scripts before compilation and typechain
if (!SKIP_LOAD) {
  ['misc', 'migrations', 'dev', 'full'].forEach((folder) => {
    const tasksPath = path.join(__dirname, 'tasks', folder);
    fs.readdirSync(tasksPath)
      .filter((pth) => pth.includes('.ts'))
      .forEach((task) => require(`${tasksPath}/${task}`));
  });
}

const getCommonNetworkConfig = (networkName: eEthereumNetwork, networkId: number) => {
  return {
    url: `https://${networkName}.infura.io/v3/${INFURA_KEY}`,
    hardfork: HARDFORK,
    blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
    gasMultiplier: DEFAULT_GAS_PRICE,
    chainId: networkId,
    accounts: {
      mnemonic: MNEMONICS[networkName],
      path: MNEMONIC_PATH,
      initialIndex: 0,
      count: 20,
    },
  };
};

const buidlerConfig: any = {
  solc: {
    version: '0.6.8',
    optimizer: {enabled: true, runs: 200},
    evmVersion: 'istanbul',
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v4',
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
  defaultNetwork: 'buidlerevm',
  mocha: {
    timeout: 0,
  },
  networks: {
    coverage: {
      url: 'http://localhost:8555',
      chainId: COVERAGE_CHAINID,
    },
    kovan: getCommonNetworkConfig(eEthereumNetwork.kovan, 42),
    ropsten: getCommonNetworkConfig(eEthereumNetwork.ropsten, 3),
    main: getCommonNetworkConfig(eEthereumNetwork.main, 1),
    buidlerevm: {
      hardfork: 'istanbul',
      blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
      gas: DEFAULT_BLOCK_GAS_LIMIT,
      gasPrice: 8000000000,
      chainId: BUIDLEREVM_CHAINID,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      accounts: accounts.map(({secretKey, balance}: {secretKey: string; balance: string}) => ({
        privateKey: secretKey,
        balance,
      })),
    },
    buidlerevm_docker: {
      hardfork: 'istanbul',
      blockGasLimit: 9500000,
      gas: 9500000,
      gasPrice: 8000000000,
      chainId: BUIDLEREVM_CHAINID,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      url: 'http://localhost:8545',
    },
    ganache: {
      url: 'http://ganache:8545',
      accounts: {
        mnemonic: 'fox sight canyon orphan hotel grow hedgehog build bless august weather swarm',
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    },
  },
};

export default buidlerConfig;
