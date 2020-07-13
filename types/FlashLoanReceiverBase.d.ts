/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface FlashLoanReceiverBaseInterface extends Interface {
  functions: {
    addressesProvider: TypedFunctionDescription<{encode([]: []): string}>;

    executeOperation: TypedFunctionDescription<{
      encode([_reserve, _amount, _fee, _params]: [
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;
  };

  events: {};
}

export class FlashLoanReceiverBase extends Contract {
  connect(signerOrProvider: Signer | Provider | string): FlashLoanReceiverBase;
  attach(addressOrName: string): FlashLoanReceiverBase;
  deployed(): Promise<FlashLoanReceiverBase>;

  on(event: EventFilter | string, listener: Listener): FlashLoanReceiverBase;
  once(event: EventFilter | string, listener: Listener): FlashLoanReceiverBase;
  addListener(eventName: EventFilter | string, listener: Listener): FlashLoanReceiverBase;
  removeAllListeners(eventName: EventFilter | string): FlashLoanReceiverBase;
  removeListener(eventName: any, listener: Listener): FlashLoanReceiverBase;

  interface: FlashLoanReceiverBaseInterface;

  functions: {
    addressesProvider(): Promise<string>;

    executeOperation(
      _reserve: string,
      _amount: BigNumberish,
      _fee: BigNumberish,
      _params: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  addressesProvider(): Promise<string>;

  executeOperation(
    _reserve: string,
    _amount: BigNumberish,
    _fee: BigNumberish,
    _params: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    addressesProvider(): Promise<BigNumber>;

    executeOperation(
      _reserve: string,
      _amount: BigNumberish,
      _fee: BigNumberish,
      _params: Arrayish
    ): Promise<BigNumber>;
  };
}
