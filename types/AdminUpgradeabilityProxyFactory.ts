/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from 'ethers';
import {Provider} from 'ethers/providers';
import {UnsignedTransaction} from 'ethers/utils/transaction';
import {Arrayish} from 'ethers/utils';

import {TransactionOverrides} from '.';
import {AdminUpgradeabilityProxy} from './AdminUpgradeabilityProxy';

export class AdminUpgradeabilityProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _logic: string,
    _admin: string,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<AdminUpgradeabilityProxy> {
    return super.deploy(_logic, _admin, _data, overrides) as Promise<AdminUpgradeabilityProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _admin: string,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_logic, _admin, _data, overrides);
  }
  attach(address: string): AdminUpgradeabilityProxy {
    return super.attach(address) as AdminUpgradeabilityProxy;
  }
  connect(signer: Signer): AdminUpgradeabilityProxyFactory {
    return super.connect(signer) as AdminUpgradeabilityProxyFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AdminUpgradeabilityProxy {
    return new Contract(address, _abi, signerOrProvider) as AdminUpgradeabilityProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_logic',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_admin',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526040516109f73803806109f78339818101604052606081101561002657600080fd5b8151602083015160408085018051915193959294830192918464010000000082111561005157600080fd5b90830190602082018581111561006657600080fd5b825164010000000081118282018810171561008057600080fd5b82525081516020918201929091019080838360005b838110156100ad578181015183820152602001610095565b50505050905090810190601f1680156100da5780820380516001836020036101000a031916815260200191505b5060408181527f656970313936372e70726f78792e696d706c656d656e746174696f6e0000000082525190819003601c01902086935084925060008051602061099c83398151915260001990910114905061013157fe5b610143826001600160e01b0361026516565b8051156101fb576000826001600160a01b0316826040518082805190602001908083835b602083106101865780518252601f199092019160209182019101610167565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146101e6576040519150601f19603f3d011682016040523d82523d6000602084013e6101eb565b606091505b50509050806101f957600080fd5b505b5050604080517f656970313936372e70726f78792e61646d696e000000000000000000000000008152905190819003601301902060008051602061097c8339815191526000199091011461024b57fe5b61025d826001600160e01b036102c516565b505050610313565b610278816102d760201b6103a31760201c565b6102b35760405162461bcd60e51b815260040180806020018281038252603b8152602001806109bc603b913960400191505060405180910390fd5b60008051602061099c83398151915255565b60008051602061097c83398151915255565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061030b57508115155b949350505050565b61065a806103226000396000f3fe60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100875780635c60da1b146101075780638f28397014610138578063f851a4401461016b575b610052610180565b005b34801561006057600080fd5b506100526004803603602081101561007757600080fd5b50356001600160a01b031661019a565b6100526004803603604081101561009d57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100c857600080fd5b8201836020820111156100da57600080fd5b803590602001918460018302840111640100000000831117156100fc57600080fd5b5090925090506101d4565b34801561011357600080fd5b5061011c610281565b604080516001600160a01b039092168252519081900360200190f35b34801561014457600080fd5b506100526004803603602081101561015b57600080fd5b50356001600160a01b03166102be565b34801561017757600080fd5b5061011c610378565b6101886103df565b6101986101936103e7565b61040c565b565b6101a2610430565b6001600160a01b0316336001600160a01b031614156101c9576101c481610455565b6101d1565b6101d1610180565b50565b6101dc610430565b6001600160a01b0316336001600160a01b03161415610274576101fe83610455565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d806000811461025b576040519150601f19603f3d011682016040523d82523d6000602084013e610260565b606091505b505090508061026e57600080fd5b5061027c565b61027c610180565b505050565b600061028b610430565b6001600160a01b0316336001600160a01b031614156102b3576102ac6103e7565b90506102bb565b6102bb610180565b90565b6102c6610430565b6001600160a01b0316336001600160a01b031614156101c9576001600160a01b0381166103245760405162461bcd60e51b81526004018080602001828103825260368152602001806105b46036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61034d610430565b604080516001600160a01b03928316815291841660208301528051918290030190a16101c481610495565b6000610382610430565b6001600160a01b0316336001600160a01b031614156102b3576102ac610430565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906103d757508115155b949350505050565b6101986104b9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e80801561042b573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b61045e81610519565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6104c1610430565b6001600160a01b0316336001600160a01b031614156105115760405162461bcd60e51b81526004018080602001828103825260328152602001806105826032913960400191505060405180910390fd5b610198610198565b610522816103a3565b61055d5760405162461bcd60e51b815260040180806020018281038252603b8152602001806105ea603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5556fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a264697066735822122009e74f9e33d90b230b30a0fb22efececb0ab338cc63876b32bae547e2f31f67d64736f6c63430006080033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc43616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373';
