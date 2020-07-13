/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface IKyberNetworkProxyInterfaceInterface extends Interface {
  functions: {
    enabled: TypedFunctionDescription<{encode([]: []): string}>;

    getExpectedRate: TypedFunctionDescription<{
      encode([src, dest, srcQty]: [string, string, BigNumberish]): string;
    }>;

    getUserCapInTokenWei: TypedFunctionDescription<{
      encode([user, token]: [string, string]): string;
    }>;

    getUserCapInWei: TypedFunctionDescription<{
      encode([user]: [string]): string;
    }>;

    info: TypedFunctionDescription<{encode([id]: [Arrayish]): string}>;

    maxGasPrice: TypedFunctionDescription<{encode([]: []): string}>;

    tradeWithHint: TypedFunctionDescription<{
      encode([
        src,
        srcAmount,
        dest,
        destAddress,
        maxDestAmount,
        minConversionRate,
        walletId,
        hint,
      ]: [
        string,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        string,
        Arrayish
      ]): string;
    }>;
  };

  events: {};
}

export class IKyberNetworkProxyInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IKyberNetworkProxyInterface;
  attach(addressOrName: string): IKyberNetworkProxyInterface;
  deployed(): Promise<IKyberNetworkProxyInterface>;

  on(event: EventFilter | string, listener: Listener): IKyberNetworkProxyInterface;
  once(event: EventFilter | string, listener: Listener): IKyberNetworkProxyInterface;
  addListener(eventName: EventFilter | string, listener: Listener): IKyberNetworkProxyInterface;
  removeAllListeners(eventName: EventFilter | string): IKyberNetworkProxyInterface;
  removeListener(eventName: any, listener: Listener): IKyberNetworkProxyInterface;

  interface: IKyberNetworkProxyInterfaceInterface;

  functions: {
    enabled(): Promise<boolean>;

    getExpectedRate(
      src: string,
      dest: string,
      srcQty: BigNumberish
    ): Promise<{
      expectedRate: BigNumber;
      slippageRate: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    getUserCapInTokenWei(user: string, token: string): Promise<BigNumber>;

    getUserCapInWei(user: string): Promise<BigNumber>;

    info(id: Arrayish): Promise<BigNumber>;

    maxGasPrice(): Promise<BigNumber>;

    tradeWithHint(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  enabled(): Promise<boolean>;

  getExpectedRate(
    src: string,
    dest: string,
    srcQty: BigNumberish
  ): Promise<{
    expectedRate: BigNumber;
    slippageRate: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  getUserCapInTokenWei(user: string, token: string): Promise<BigNumber>;

  getUserCapInWei(user: string): Promise<BigNumber>;

  info(id: Arrayish): Promise<BigNumber>;

  maxGasPrice(): Promise<BigNumber>;

  tradeWithHint(
    src: string,
    srcAmount: BigNumberish,
    dest: string,
    destAddress: string,
    maxDestAmount: BigNumberish,
    minConversionRate: BigNumberish,
    walletId: string,
    hint: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    enabled(): Promise<BigNumber>;

    getExpectedRate(src: string, dest: string, srcQty: BigNumberish): Promise<BigNumber>;

    getUserCapInTokenWei(user: string, token: string): Promise<BigNumber>;

    getUserCapInWei(user: string): Promise<BigNumber>;

    info(id: Arrayish): Promise<BigNumber>;

    maxGasPrice(): Promise<BigNumber>;

    tradeWithHint(
      src: string,
      srcAmount: BigNumberish,
      dest: string,
      destAddress: string,
      maxDestAmount: BigNumberish,
      minConversionRate: BigNumberish,
      walletId: string,
      hint: Arrayish
    ): Promise<BigNumber>;
  };
}
