/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from 'ethers';
import {Provider} from '@ethersproject/providers';

import {IExchangeAdapter} from './IExchangeAdapter';

export class IExchangeAdapterFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): IExchangeAdapter {
    return new Contract(address, _abi, signerOrProvider) as IExchangeAdapter;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'platform',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fromAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'toAmount',
        type: 'uint256',
      },
    ],
    name: 'Exchange',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'approveExchange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSlippage',
        type: 'uint256',
      },
    ],
    name: 'exchange',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
