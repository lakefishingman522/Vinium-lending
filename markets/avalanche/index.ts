import { eAvalancheNetwork, IAvalancheConfiguration } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyWETH,
  strategyDAI,
  strategyUSDC,
  strategyUSDT,
  strategyMIM,
  strategyWBTC,
  strategyWAVAX,
  strategyWINE,
  strategyMGRAPEMIN,
  strategyMGRAPE,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AvalancheConfig: IAvalancheConfiguration = {
  ...CommonsConfig,
  MarketId: 'Avalanche market',
  ProviderId: 4,
  ReservesConfig: {
    WETH: strategyWETH,
    DAI: strategyDAI,
    USDT: strategyUSDT,
    USDC: strategyUSDC,
    // AAVE: strategyAAVE,
    MIM: strategyMIM,
    WBTC: strategyWBTC,
    WAVAX: strategyWAVAX,    
    WINE: strategyWINE,
    MGRAPE: strategyMGRAPE,
    MGRAPEMIN: strategyMGRAPEMIN,
  },

  ReserveAssets: {
    [eAvalancheNetwork.avalanche]: {
      WETH: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
      DAI: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
      USDT: '0xc7198437980c041c805a1edcba50c1ce5db95118',
      USDC: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
      // AAVE: '0x63a72806098bd3d9520cc43356dd78afe5d386d9',
      
      MIM: '0x130966628846BFd36ff31a822705796e8cb8C18D',
      WINE: '0xC55036B5348CfB45a932481744645985010d3A44',
      MGRAPE: '0xDFc0Cc5c036c52131fb351e50ba322b4D00Ce60B',
      MGRAPEMIN: '0xe8cE63e37bB4B662837144058c298C4e7Fd0b93C',

      WBTC: '0x50b7545627a5162f82a992c33b87adc75187b218',
      WAVAX: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
    [eAvalancheNetwork.fuji]: {
      WETH: '0x9668f5f55f2712Dd2dfa316256609b516292D554', // MintableERC20 token
      DAI: '0x51BC2DfB9D12d9dB50C855A5330fBA0faF761D15',
      USDT: '0x02823f9B469960Bb3b1de0B3746D4b95B7E35543', // MintableERC20 token
      // AAVE: '0x47183584aCbc1C45608d7B61cce1C562Ee180E7e',

      //  This address is from mainnet; TODO; deploy onto fuji
      MIM: '0x130966628846BFd36ff31a822705796e8cb8C18D',
      WINE: '0xC55036B5348CfB45a932481744645985010d3A44',
      MGRAPE: '0xDFc0Cc5c036c52131fb351e50ba322b4D00Ce60B',
      MGRAPEMIN: '0xe8cE63e37bB4B662837144058c298C4e7Fd0b93C',


      WBTC: '0x9C1DCacB57ADa1E9e2D3a8280B7cfC7EB936186F', // MintableERC20 token
      WAVAX: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', // Official WAVAX
    },
  },
};

export default AvalancheConfig;
