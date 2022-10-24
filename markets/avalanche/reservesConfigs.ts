import { eContractid, IReserveParams } from '../../helpers/types';

import { rateStrategyStableOne, rateStrategyVolatileOne } from './rateStrategies';

export const strategySAVAX: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '5000',
  liquidationThreshold: '6500',
  liquidationBonus: '11000',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '1500',
};

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: '7500',
  liquidationThreshold: '8000',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '6',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '1000',
};

export const strategyUSDT: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: '0',
  liquidationThreshold: '0',
  liquidationBonus: '0',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '6',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '1000',
};

export const strategyDAI: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: '7500',
  liquidationThreshold: '8000',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '1000',
};

export const strategyWETH: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8250',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '1000',
};

export const strategyBTCB: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '6000',
  liquidationThreshold: '7500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '8',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '1000',
};

export const strategyWBTC: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '6000',
  liquidationThreshold: '7500',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '8',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '1000',
};

export const strategyGRAPE: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '5000',
  liquidationThreshold: '6500',
  liquidationBonus: '11000',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '1500',
};

export const strategyWAVAX: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '5000',
  liquidationThreshold: '6500',
  liquidationBonus: '11000',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '1500',
};

export const strategyVINIUM: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '4000',
  liquidationThreshold: '6500',
  liquidationBonus: '11000',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '2000',
};

export const strategyMIM: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '4000',
  liquidationThreshold: '6500',
  liquidationBonus: '11000',
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '2000',
};

export const strategyWINE: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '4000',
  liquidationThreshold: '6500',
  liquidationBonus: '11000',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '2000',
};

export const strategyMGRAPEMIN: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: '4000',
  liquidationThreshold: '6500',
  liquidationBonus: '11000',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  viTokenImpl: eContractid.ViToken,
  reserveFactor: '2000',
};
