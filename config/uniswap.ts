import BigNumber from 'bignumber.js';
import {eEthereumNetwork, EthereumNetwork, IUniswapConfiguration} from '../helpers/types';
import {oneRay} from '../helpers/constants';

import {CommonsConfig} from './commons';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const UniswapConfig: IUniswapConfiguration = {
  ...CommonsConfig,
  ConfigName: 'Uniswap',
  ProviderId: 2,
  ReservesConfig: {
    WETH: {
      baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.08).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.5).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.1).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '-1',
      liquidationThreshold: '8000',
      liquidationBonus: '10500',
      borrowingEnabled: true,
      stableBorrowRateEnabled: false,
      reserveDecimals: '18',
    },
    DAI: {
      baseVariableBorrowRate: new BigNumber(0.01).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.07).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.06).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '-1',
      liquidationThreshold: '8000',
      liquidationBonus: '10500',
      borrowingEnabled: true,
      stableBorrowRateEnabled: false,
      reserveDecimals: '18',
    },
    USDC: {
      baseVariableBorrowRate: new BigNumber(0.01).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.07).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.06).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '-1',
      liquidationThreshold: '8000',
      liquidationBonus: '10500',
      borrowingEnabled: true,
      stableBorrowRateEnabled: false,
      reserveDecimals: '6',
    },
    USDT: {
      baseVariableBorrowRate: new BigNumber(0.01).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.07).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.06).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '-1',
      liquidationThreshold: '8000',
      liquidationBonus: '10500',
      borrowingEnabled: true,
      stableBorrowRateEnabled: false,
      reserveDecimals: '6',
    },
    UNI_DAI_ETH: {
      baseVariableBorrowRate: new BigNumber(0.01).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.5).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.16).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '6800',
      liquidationThreshold: '7300',
      liquidationBonus: '11000',
      borrowingEnabled: false,
      stableBorrowRateEnabled: false,
      reserveDecimals: '18',
    },
    UNI_USDC_ETH: {
      baseVariableBorrowRate: new BigNumber(0.01).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.5).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.16).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '6800',
      liquidationThreshold: '7300',
      liquidationBonus: '11000',
      borrowingEnabled: false,
      stableBorrowRateEnabled: false,
      reserveDecimals: '18',
    },
    UNI_SETH_ETH: {
      baseVariableBorrowRate: new BigNumber(0.01).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.5).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.16).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '4800',
      liquidationThreshold: '6600',
      liquidationBonus: '11000',
      borrowingEnabled: false,
      stableBorrowRateEnabled: false,
      reserveDecimals: '18',
    },
    UNI_LEND_ETH: {
      baseVariableBorrowRate: new BigNumber(0.01).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.5).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.16).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '5100',
      liquidationThreshold: '6600',
      liquidationBonus: '11000',
      borrowingEnabled: false,
      stableBorrowRateEnabled: false,
      reserveDecimals: '18',
    },
    UNI_LINK_ETH: {
      baseVariableBorrowRate: new BigNumber(0.01).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.5).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.16).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '6300',
      liquidationThreshold: '6800',
      liquidationBonus: '11000',
      borrowingEnabled: false,
      stableBorrowRateEnabled: false,
      reserveDecimals: '18',
    },
    UNI_MKR_ETH: {
      baseVariableBorrowRate: new BigNumber(0.01).multipliedBy(oneRay).toFixed(),
      variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
      variableRateSlope2: new BigNumber(0.5).multipliedBy(oneRay).toFixed(),
      stableRateSlope1: new BigNumber(0.16).multipliedBy(oneRay).toFixed(),
      stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
      baseLTVAsCollateral: '4800',
      liquidationThreshold: '6600',
      liquidationBonus: '11000',
      borrowingEnabled: false,
      stableBorrowRateEnabled: false,
      reserveDecimals: '18',
    },
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [EthereumNetwork.kovan]: {
      DAI: '0x6F47077D3B6645Cb6fb7A29D280277EC1e5fFD90',
      USDC: '0x672c1C0d1130912D83664011E7960a42E8cA05D5',
      USDT: '0xCC833A6522721B3252e7578c5BCAF65738B75Fc3',
      UNI_DAI_ETH: '0x0338C40020Bf886c11406115fD1ba205Ef1D9Ff9',
      UNI_USDC_ETH: '0x7f5E5D34591e9a70D187BBA94260C30B92aC0961',
      UNI_SETH_ETH: '0xc5F1eA001c1570783b3af418fa775237Eb129EDC',
      UNI_LEND_ETH: '0xB996b1a11BA0aACc4deA57f7f92d1722428f2E90',
      UNI_LINK_ETH: '0x267490eE9Ad21dfE839aE73A8B1c8C9A36F60d33',
      UNI_MKR_ETH: '0x6eBF25AB0A18B8F6243619f1AE6b94373169A069',
    },
    [EthereumNetwork.ropsten]: {
      DAI: '0x64b8e49baded7bfb2fd5a9235b2440c0ee02971b',
      USDC: '0xe1480303dde539e2c241bdc527649f37c9cbef7d',
      USDT: '0xc08fe0c4d97ccda6b40649c6da621761b628c288',
      UNI_DAI_ETH: '0x16048819e3f77b7112eB033624A0bA9d33743028',
      UNI_USDC_ETH: '0x6952A2678D574073DB97963886c2F38CD09C8Ba3',
      UNI_SETH_ETH: '0x23Ee5188806BD2D31103368B0EA0259bc6706Af1',
      UNI_LEND_ETH: '0x43c44B27376Afedee06Bae2A003e979FC3B3Da6C',
      UNI_LINK_ETH: '0xb60c29714146EA3539261f599Eb30f62904108Fa',
      UNI_MKR_ETH: '0x594ae5421f378b8B4AF9e758C461d2A1FF990BC5',
    },
    [EthereumNetwork.main]: {
      DAI: '0x037E8F2125bF532F3e228991e051c8A7253B642c',
      USDC: '0xdE54467873c3BCAA76421061036053e371721708',
      USDT: '0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE',
      UNI_DAI_ETH: '0x1bAB293850289Bf161C5DA79ff3d1F02A950555b',
      UNI_USDC_ETH: '0x444315Ee92F2bb3579293C17B07194227fA99bF0',
      UNI_SETH_ETH: '0x517D40E49660c7705b2e99eEFA6d7B0E9Ba5BF10',
      UNI_LEND_ETH: '0xF4C8Db2d999b024bBB6c6022566503eD41f2AC1E',
      UNI_LINK_ETH: '0xE2A639Beb647d7F709ca805ABa760bBEfdbE37e3',
      UNI_MKR_ETH: '0xEe40a5E8F3732bE6ECDb5A90e23D0b7bF0D4a73c',
    },
  },
  ReserveAssets: {
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.coverage]: {},
    [EthereumNetwork.kovan]: {
      WETH: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
      DAI: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
      USDC: '0xe22da380ee6B445bb8273C81944ADEB6E8450422',
      USDT: '0x13512979ADE267AB5100878E2e0f485B568328a4',
      UNI_DAI_ETH: '0x2e0086b5343101203ADeE40160ca1BD91E29fF75',
      UNI_USDC_ETH: '0x34eA1aB2a43ee696914fc3C0d3e517fA666B9e8D',
      UNI_SETH_ETH: '0xCF457d8Bb8D8f54Af1ea1B3710231e89bd6CFbfe',
      UNI_LEND_ETH: '0x7615cd666F867406C64E558B9CCC3883e7EC9BA8',
      UNI_LINK_ETH: '0xFb9AAc184e79025f936E9C4EF3047Ad4889Df4a8',
      UNI_MKR_ETH: '0xB31a1c30f38cD68e8177566Ef950d7bc3C81DaCF',
    },
    [EthereumNetwork.ropsten]: {
      WETH: '0xc778417e063141139fce010982780140aa0cd5ab',
      DAI: '0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108',
      USDC: '0x851dEf71f0e6A903375C1e536Bd9ff1684BAD802',
      USDT: '0xB404c51BBC10dcBE948077F18a4B8E553D160084',
      UNI_DAI_ETH: '0xC245A7d35E652Cae438A1FdB13E474DF53DBB81D',
      UNI_USDC_ETH: '0x2BD65323955D08eb600074291305881d1295c4D2',
      UNI_SETH_ETH: '0xed4597DCd234867d7A260AD24bAb8253F64940a5',
      UNI_LEND_ETH: '0xcD5DE1EDD40aBBD6efE2C306276FF56f81Bc3151',
      UNI_LINK_ETH: '0x8dcf3c8d4d69ca7C188c0A4cf219A1dcE1e510d7',
      UNI_MKR_ETH: '0xd8b7B99a9205FD0D0abFB6D7a2c13Db2681bff43',
    },
    [EthereumNetwork.main]: {
      WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
      USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      UNI_DAI_ETH: '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667',
      UNI_USDC_ETH: '0x97dec872013f6b5fb443861090ad931542878126',
      UNI_SETH_ETH: '0xe9cf7887b93150d4f2da7dfc6d502b216438f244',
      UNI_LEND_ETH: '0xcaa7e4656f6a2b59f5f99c745f91ab26d1210dce',
      UNI_LINK_ETH: '0xf173214c720f58e03e194085b1db28b50acdeead',
      UNI_MKR_ETH: '0x2c4bd064b998838076fa341a83d007fc2fa50957',
    },
  },
};
