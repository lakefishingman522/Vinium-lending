/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from 'ethers';
import {Provider} from 'ethers/providers';
import {UnsignedTransaction} from 'ethers/utils/transaction';
import {BigNumberish} from 'ethers/utils';

import {TransactionOverrides} from '.';
import {MockAggregatorMkr} from './MockAggregatorMkr';

export class MockAggregatorMkrFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _initialAnswer: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<MockAggregatorMkr> {
    return super.deploy(_initialAnswer, overrides) as Promise<MockAggregatorMkr>;
  }
  getDeployTransaction(
    _initialAnswer: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_initialAnswer, overrides);
  }
  attach(address: string): MockAggregatorMkr {
    return super.attach(address) as MockAggregatorMkr;
  }
  connect(signer: Signer): MockAggregatorMkrFactory {
    return super.connect(signer) as MockAggregatorMkrFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockAggregatorMkr {
    return new Contract(address, _abi, signerOrProvider) as MockAggregatorMkr;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'int256',
        name: '_initialAnswer',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'int256',
        name: 'current',
        type: 'int256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'roundId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'AnswerUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'latestAnswer',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516101033803806101038339818101604052602081101561003357600080fd5b5051600081815560408051428152905183929183917f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f9181900360200190a350506081806100826000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806350d25bcd14602d575b600080fd5b60336045565b60408051918252519081900360200190f35b6000549056fea264697066735822122051a88c2198cb6692898abde3f0f1baf8d6b7c52201611c0a4c04453635130b6b64736f6c63430006080033';
