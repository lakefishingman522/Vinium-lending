import { eAvalancheNetwork, IAvalancheConfiguration } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategySAVAX,
  strategyUSDC,
  strategyUSDT,
  strategyDAI,
  strategyWETH,
  strategyBTCB,
  strategyGRAPE, strategyWAVAX,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

// @ts-ignore
export const AvalancheConfig: IAvalancheConfiguration = {
  ...CommonsConfig,
  MarketId: 'Avalanche market',
  ProviderId: 4,
  ReservesConfig: {
    SAVAX: strategySAVAX,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    DAI: strategyDAI,
    WETH: strategyWETH,
    BTCB: strategyBTCB,
    GRAPE: strategyGRAPE,
    WAVAX: strategyWAVAX,
  },
  ReserveAssets: {
    [eAvalancheNetwork.avalanche]: {
      SAVAX: '0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE',
      USDC: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      USDT: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
      DAI: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
      WETH: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
      BTCB: '0x152b9d0FdC40C096757F570A51E494bd4b943E50',
      GRAPE: '0x5541D83EFaD1f281571B343977648B75d95cdAC2',
      WAVAX: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
    [eAvalancheNetwork.fuji]: {
      WETH: '0x9668f5f55f2712Dd2dfa316256609b516292D554', // MintableERC20 token
      // DAI: '0x51BC2DfB9D12d9dB50C855A5330fBA0faF761D15',
      USDT: '0x02823f9B469960Bb3b1de0B3746D4b95B7E35543', // MintableERC20 token
      // VINIUM: '0x47183584aCbc1C45608d7B61cce1C562Ee180E7e',
      WBTC: '0x9C1DCacB57ADa1E9e2D3a8280B7cfC7EB936186F', // MintableERC20 token
      WAVAX: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', // Official WAVAX
    },
  },
};

export default AvalancheConfig;
