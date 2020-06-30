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

interface StableDebtTokenInterface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([spender, amount]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    burn: TypedFunctionDescription<{
      encode([_account, _amount]: [string, BigNumberish]): string;
    }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    decreaseAllowance: TypedFunctionDescription<{
      encode([spender, subtractedValue]: [string, BigNumberish]): string;
    }>;

    getAverageStableRate: TypedFunctionDescription<{ encode([]: []): string }>;

    getUserStableRate: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    increaseAllowance: TypedFunctionDescription<{
      encode([spender, addedValue]: [string, BigNumberish]): string;
    }>;

    init: TypedFunctionDescription<{
      encode([_name, _symbol, _decimals, _underlying, _addressesProvider]: [
        string,
        string,
        BigNumberish,
        string,
        string
      ]): string;
    }>;

    mint: TypedFunctionDescription<{
      encode([account, amount, rate]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    principalBalanceOf: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([recipient, amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([sender, recipient, amount]: [
        string,
        string,
        BigNumberish
      ]): string;
    }>;

    underlyingAssetAddress: TypedFunctionDescription<{
      encode([]: []): string;
    }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    burnDebt: TypedEventDescription<{
      encodeTopics([
        _user,
        _amount,
        _previousBalance,
        _currentBalance,
        _balanceIncrease
      ]: [null, null, null, null, null]): string[];
    }>;

    mintDebt: TypedEventDescription<{
      encodeTopics([
        _user,
        _amount,
        _previousBalance,
        _currentBalance,
        _balanceIncrease,
        _newRate
      ]: [null, null, null, null, null, null]): string[];
    }>;
  };
}

export class StableDebtToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): StableDebtToken;
  attach(addressOrName: string): StableDebtToken;
  deployed(): Promise<StableDebtToken>;

  on(event: EventFilter | string, listener: Listener): StableDebtToken;
  once(event: EventFilter | string, listener: Listener): StableDebtToken;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): StableDebtToken;
  removeAllListeners(eventName: EventFilter | string): StableDebtToken;
  removeListener(eventName: any, listener: Listener): StableDebtToken;

  interface: StableDebtTokenInterface;

  functions: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(account: string): Promise<BigNumber>;

    burn(
      _account: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decimals(): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getAverageStableRate(): Promise<BigNumber>;

    getUserStableRate(_user: string): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    init(
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _underlying: string,
      _addressesProvider: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mint(
      account: string,
      amount: BigNumberish,
      rate: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    name(): Promise<string>;

    principalBalanceOf(account: string): Promise<BigNumber>;

    symbol(): Promise<string>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    underlyingAssetAddress(): Promise<string>;
  };

  allowance(owner: string, spender: string): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string): Promise<BigNumber>;

  burn(
    _account: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  decimals(): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getAverageStableRate(): Promise<BigNumber>;

  getUserStableRate(_user: string): Promise<BigNumber>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  init(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _underlying: string,
    _addressesProvider: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  mint(
    account: string,
    amount: BigNumberish,
    rate: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  name(): Promise<string>;

  principalBalanceOf(account: string): Promise<BigNumber>;

  symbol(): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  underlyingAssetAddress(): Promise<string>;

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;

    burnDebt(
      _user: null,
      _amount: null,
      _previousBalance: null,
      _currentBalance: null,
      _balanceIncrease: null
    ): EventFilter;

    mintDebt(
      _user: null,
      _amount: null,
      _previousBalance: null,
      _currentBalance: null,
      _balanceIncrease: null,
      _newRate: null
    ): EventFilter;
  };

  estimate: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish): Promise<BigNumber>;

    balanceOf(account: string): Promise<BigNumber>;

    burn(_account: string, _amount: BigNumberish): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish
    ): Promise<BigNumber>;

    getAverageStableRate(): Promise<BigNumber>;

    getUserStableRate(_user: string): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish
    ): Promise<BigNumber>;

    init(
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _underlying: string,
      _addressesProvider: string
    ): Promise<BigNumber>;

    mint(
      account: string,
      amount: BigNumberish,
      rate: BigNumberish
    ): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    principalBalanceOf(account: string): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<BigNumber>;

    underlyingAssetAddress(): Promise<BigNumber>;
  };
}
