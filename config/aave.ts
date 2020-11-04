import BigNumber from 'bignumber.js';
import {oneRay} from '../helpers/constants';
import {IAaveConfiguration, EthereumNetwork, eEthereumNetwork} from '../helpers/types';

import {CommonsConfig} from './commons';
import {
  stablecoinStrategyBUSD,
  stablecoinStrategyDAI,
  stablecoinStrategySUSD,
  stablecoinStrategyTUSD,
  stablecoinStrategyUSDC,
  stablecoinStrategyUSDT,
  strategyAAVE,
  strategyBase,
  strategyKNC,
  strategyLINK,
  strategyMANA,
  strategyMKR,
  strategyREN,
  strategyREP,
  strategySNX,
  strategyUNI,
  strategyWBTC,
  strategyWETH,
  strategyYFI,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveConfig: IAaveConfiguration = {
  ...CommonsConfig,
  ConfigName: 'Aave',
  ProviderId: 1,
  ReservesConfig: {
    DAI: stablecoinStrategyDAI,
    TUSD: stablecoinStrategyTUSD,
    USDC: stablecoinStrategyUSDC,
    USDT: stablecoinStrategyUSDT,
    SUSD: stablecoinStrategySUSD,
    AAVE: strategyAAVE,
    BAT: strategyBase,
    WETH: strategyWETH,
    LINK: strategyLINK,
    WBTC: strategyWBTC,
    KNC: strategyKNC,
    REP: strategyREP,
    MKR: strategyMKR,
    MANA: strategyMANA,
    ZRX: strategyBase,
    SNX: strategySNX,
    YFI: strategyYFI,
    UNI: strategyUNI,
    BUSD: stablecoinStrategyBUSD,
    REN: strategyREN,
  },
  ReserveAssets: {
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.coverage]: {},
    [EthereumNetwork.kovan]: {
      WETH: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
      DAI: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
      TUSD: '0x016750AC630F711882812f24Dba6c95b9D35856d',
      USDC: '0xe22da380ee6B445bb8273C81944ADEB6E8450422',
      USDT: '0x13512979ADE267AB5100878E2e0f485B568328a4',
      SUSD: '0xD868790F57B39C9B2B51b12de046975f986675f9',
      AAVE: '0xB597cd8D3217ea6477232F9217fa70837ff667Af',
      BAT: '0x2d12186Fbb9f9a8C28B3FfdD4c42920f8539D738',
      REP: '0x260071C8D61DAf730758f8BD0d6370353956AE0E',
      MKR: '0x61e4CAE3DA7FD189e52a4879C7B8067D7C2Cc0FA',
      LINK: '0xAD5ce863aE3E4E9394Ab43d4ba0D80f419F61789',
      KNC: '0x3F80c39c0b96A0945f9F0E9f55d8A8891c5671A8',
      WBTC: '0xD1B98B6607330172f1D991521145A22BCe793277',
      MANA: '0x738Dc6380157429e957d223e6333Dc385c85Fec7',
      ZRX: '0xD0d76886cF8D952ca26177EB7CfDf83bad08C00C',
      SNX: '0x7FDb81B0b8a010dd4FFc57C3fecbf145BA8Bd947',
      BUSD: '0x4c6E1EFC12FDfD568186b7BAEc0A43fFfb4bCcCf',
      REN: '',
      YFI: '',
      UNI: '',
    },
    [EthereumNetwork.ropsten]: {
      WETH: '0xc778417e063141139fce010982780140aa0cd5ab',
      DAI: '0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108',
      TUSD: '0xa2EA00Df6d8594DBc76b79beFe22db9043b8896F',
      USDC: '0x851dEf71f0e6A903375C1e536Bd9ff1684BAD802',
      USDT: '0xB404c51BBC10dcBE948077F18a4B8E553D160084',
      SUSD: '0xc374eB17f665914c714Ac4cdC8AF3a3474228cc5',
      AAVE: '',
      BAT: '0x85B24b3517E3aC7bf72a14516160541A60cFF19d',
      REP: '0xBeb13523503d35F9b3708ca577CdCCAdbFB236bD',
      MKR: '0x2eA9df3bABe04451c9C3B06a2c844587c59d9C37',
      LINK: '0x1a906E71FF9e28d8E01460639EB8CF0a6f0e2486',
      KNC: '0xCe4aA1dE3091033Ba74FA2Ad951f6adc5E5cF361',
      WBTC: '0xa0E54Ab6AA5f0bf1D62EC3526436F3c05b3348A0',
      MANA: '0x78b1F763857C8645E46eAdD9540882905ff32Db7',
      ZRX: '0x02d7055704EfF050323A2E5ee4ba05DB2A588959',
      SNX: '0xF80Aa7e2Fda4DA065C55B8061767F729dA1476c7',
      BUSD: '0xFA6adcFf6A90c11f31Bc9bb59eC0a6efB38381C6',
      REN: '',
      YFI: '',
      UNI: '',
    },
    [EthereumNetwork.main]: {
      WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
      TUSD: '0x0000000000085d4780B73119b644AE5ecd22b376',
      USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      SUSD: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
      AAVE: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      BAT: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
      REP: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
      MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      LINK: '0x514910771af9ca656af840dff83e8264ecf986ca',
      KNC: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
      WBTC: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      MANA: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
      ZRX: '0xe41d2489571d322189246dafa5ebde1f4699f498',
      SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
      BUSD: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
      REN: '0x408e41876cCCDC0F92210600ef50372656052a38',
      YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      UNI: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    },
  },
};

export default AaveConfig;
