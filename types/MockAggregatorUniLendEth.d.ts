/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MockAggregatorUniLendEthInterface extends Interface {
  functions: {
    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;
  };
}

export class MockAggregatorUniLendEth extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): MockAggregatorUniLendEth;
  attach(addressOrName: string): MockAggregatorUniLendEth;
  deployed(): Promise<MockAggregatorUniLendEth>;

  on(event: EventFilter | string, listener: Listener): MockAggregatorUniLendEth;
  once(
    event: EventFilter | string,
    listener: Listener
  ): MockAggregatorUniLendEth;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MockAggregatorUniLendEth;
  removeAllListeners(eventName: EventFilter | string): MockAggregatorUniLendEth;
  removeListener(eventName: any, listener: Listener): MockAggregatorUniLendEth;

  interface: MockAggregatorUniLendEthInterface;

  functions: {
    latestAnswer(): Promise<BigNumber>;
  };

  latestAnswer(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;
  };

  estimate: {
    latestAnswer(): Promise<BigNumber>;
  };
}
