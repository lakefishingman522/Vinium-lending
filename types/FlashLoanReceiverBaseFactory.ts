/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from 'ethers';
import {Provider} from 'ethers/providers';

import {FlashLoanReceiverBase} from './FlashLoanReceiverBase';

export class FlashLoanReceiverBaseFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): FlashLoanReceiverBase {
    return new Contract(address, _abi, signerOrProvider) as FlashLoanReceiverBase;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract ILendingPoolAddressesProvider',
        name: '_provider',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'addressesProvider',
    outputs: [
      {
        internalType: 'contract ILendingPoolAddressesProvider',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_fee',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_params',
        type: 'bytes',
      },
    ],
    name: 'executeOperation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];
