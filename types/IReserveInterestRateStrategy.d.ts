/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface IReserveInterestRateStrategyInterface extends Interface {
  functions: {
    calculateInterestRates: TypedFunctionDescription<{
      encode([
        _reserve,
        _utilizationRate,
        _totalBorrowsStable,
        _totalBorrowsVariable,
        _averageStableBorrowRate,
      ]: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    }>;

    getBaseVariableBorrowRate: TypedFunctionDescription<{
      encode([]: []): string;
    }>;
  };

  events: {};
}

export class IReserveInterestRateStrategy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IReserveInterestRateStrategy;
  attach(addressOrName: string): IReserveInterestRateStrategy;
  deployed(): Promise<IReserveInterestRateStrategy>;

  on(event: EventFilter | string, listener: Listener): IReserveInterestRateStrategy;
  once(event: EventFilter | string, listener: Listener): IReserveInterestRateStrategy;
  addListener(eventName: EventFilter | string, listener: Listener): IReserveInterestRateStrategy;
  removeAllListeners(eventName: EventFilter | string): IReserveInterestRateStrategy;
  removeListener(eventName: any, listener: Listener): IReserveInterestRateStrategy;

  interface: IReserveInterestRateStrategyInterface;

  functions: {
    calculateInterestRates(
      _reserve: string,
      _utilizationRate: BigNumberish,
      _totalBorrowsStable: BigNumberish,
      _totalBorrowsVariable: BigNumberish,
      _averageStableBorrowRate: BigNumberish
    ): Promise<{
      liquidityRate: BigNumber;
      stableBorrowRate: BigNumber;
      variableBorrowRate: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    getBaseVariableBorrowRate(): Promise<BigNumber>;
  };

  calculateInterestRates(
    _reserve: string,
    _utilizationRate: BigNumberish,
    _totalBorrowsStable: BigNumberish,
    _totalBorrowsVariable: BigNumberish,
    _averageStableBorrowRate: BigNumberish
  ): Promise<{
    liquidityRate: BigNumber;
    stableBorrowRate: BigNumber;
    variableBorrowRate: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  getBaseVariableBorrowRate(): Promise<BigNumber>;

  filters: {};

  estimate: {
    calculateInterestRates(
      _reserve: string,
      _utilizationRate: BigNumberish,
      _totalBorrowsStable: BigNumberish,
      _totalBorrowsVariable: BigNumberish,
      _averageStableBorrowRate: BigNumberish
    ): Promise<BigNumber>;

    getBaseVariableBorrowRate(): Promise<BigNumber>;
  };
}
