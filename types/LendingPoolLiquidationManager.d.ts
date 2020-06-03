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

interface LendingPoolLiquidationManagerInterface extends Interface {
  functions: {
    addressesProvider: TypedFunctionDescription<{ encode([]: []): string }>;

    liquidationCall: TypedFunctionDescription<{
      encode([_collateral, _reserve, _user, _purchaseAmount, _receiveAToken]: [
        string,
        string,
        string,
        BigNumberish,
        boolean
      ]): string;
    }>;
  };

  events: {
    LiquidationCall: TypedEventDescription<{
      encodeTopics([
        _collateral,
        _reserve,
        _user,
        _purchaseAmount,
        _liquidatedCollateralAmount,
        _accruedBorrowInterest,
        _liquidator,
        _receiveAToken,
        _timestamp
      ]: [
        string | null,
        string | null,
        string | null,
        null,
        null,
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    OriginationFeeLiquidated: TypedEventDescription<{
      encodeTopics([
        _collateral,
        _reserve,
        _user,
        _feeLiquidated,
        _liquidatedCollateralForFee,
        _timestamp
      ]: [
        string | null,
        string | null,
        string | null,
        null,
        null,
        null
      ]): string[];
    }>;
  };
}

export class LendingPoolLiquidationManager extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): LendingPoolLiquidationManager;
  attach(addressOrName: string): LendingPoolLiquidationManager;
  deployed(): Promise<LendingPoolLiquidationManager>;

  on(
    event: EventFilter | string,
    listener: Listener
  ): LendingPoolLiquidationManager;
  once(
    event: EventFilter | string,
    listener: Listener
  ): LendingPoolLiquidationManager;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): LendingPoolLiquidationManager;
  removeAllListeners(
    eventName: EventFilter | string
  ): LendingPoolLiquidationManager;
  removeListener(
    eventName: any,
    listener: Listener
  ): LendingPoolLiquidationManager;

  interface: LendingPoolLiquidationManagerInterface;

  functions: {
    addressesProvider(): Promise<string>;

    liquidationCall(
      _collateral: string,
      _reserve: string,
      _user: string,
      _purchaseAmount: BigNumberish,
      _receiveAToken: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  addressesProvider(): Promise<string>;

  liquidationCall(
    _collateral: string,
    _reserve: string,
    _user: string,
    _purchaseAmount: BigNumberish,
    _receiveAToken: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    LiquidationCall(
      _collateral: string | null,
      _reserve: string | null,
      _user: string | null,
      _purchaseAmount: null,
      _liquidatedCollateralAmount: null,
      _accruedBorrowInterest: null,
      _liquidator: null,
      _receiveAToken: null,
      _timestamp: null
    ): EventFilter;

    OriginationFeeLiquidated(
      _collateral: string | null,
      _reserve: string | null,
      _user: string | null,
      _feeLiquidated: null,
      _liquidatedCollateralForFee: null,
      _timestamp: null
    ): EventFilter;
  };

  estimate: {
    addressesProvider(): Promise<BigNumber>;

    liquidationCall(
      _collateral: string,
      _reserve: string,
      _user: string,
      _purchaseAmount: BigNumberish,
      _receiveAToken: boolean
    ): Promise<BigNumber>;
  };
}
