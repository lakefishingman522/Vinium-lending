/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from 'ethers';
import {Provider, TransactionRequest} from '@ethersproject/providers';
import {Contract, ContractFactory, Overrides} from '@ethersproject/contracts';

import {MockAToken} from './MockAToken';

export class MockATokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _pool: string,
    _underlyingAssetAddress: string,
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides
  ): Promise<MockAToken> {
    return super.deploy(
      _pool,
      _underlyingAssetAddress,
      _tokenName,
      _tokenSymbol,
      overrides || {}
    ) as Promise<MockAToken>;
  }
  getDeployTransaction(
    _pool: string,
    _underlyingAssetAddress: string,
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pool,
      _underlyingAssetAddress,
      _tokenName,
      _tokenSymbol,
      overrides || {}
    );
  }
  attach(address: string): MockAToken {
    return super.attach(address) as MockAToken;
  }
  connect(signer: Signer): MockATokenFactory {
    return super.connect(signer) as MockATokenFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockAToken {
    return new Contract(address, _abi, signerOrProvider) as MockAToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract LendingPool',
        name: '_pool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_underlyingAssetAddress',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_tokenName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_tokenSymbol',
        type: 'string',
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
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromBalanceIncrease',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_toBalanceIncrease',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_toIndex',
        type: 'uint256',
      },
    ],
    name: 'BalanceTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromBalanceIncrease',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromIndex',
        type: 'uint256',
      },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'InterestRedirectionAllowanceChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_redirectedBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromBalanceIncrease',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromIndex',
        type: 'uint256',
      },
    ],
    name: 'InterestStreamRedirected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromBalanceIncrease',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromIndex',
        type: 'uint256',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_targetAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_targetBalanceIncrease',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_targetIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_redirectedBalanceAdded',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_redirectedBalanceRemoved',
        type: 'uint256',
      },
    ],
    name: 'RedirectedBalanceUpdated',
    type: 'event',
  },
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
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ATOKEN_REVISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'UINT_MAX_VALUE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'allowInterestRedirectionTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_underlyingTarget',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'getInterestRedirectionAddress',
    outputs: [
      {
        internalType: 'address',
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
        name: '_user',
        type: 'address',
      },
    ],
    name: 'getRedirectedBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'getUserIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '_underlyingAssetDecimals',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: '_tokenName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_tokenSymbol',
        type: 'string',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'isTransferAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'principalBalanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'redirectInterestStream',
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
    ],
    name: 'redirectInterestStreamOf',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
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
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'transferOnLiquidation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'transferUnderlyingTo',
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
  {
    inputs: [],
    name: 'underlyingAssetAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x60c0604052600080553480156200001557600080fd5b5060405162002df038038062002df0833981810160405260808110156200003b57600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006757600080fd5b9083019060208201858111156200007d57600080fd5b82516401000000008111828201881017156200009857600080fd5b82525081516020918201929091019080838360005b83811015620000c7578181015183820152602001620000ad565b50505050905090810190601f168015620000f55780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011957600080fd5b9083019060208201858111156200012f57600080fd5b82516401000000008111828201881017156200014a57600080fd5b82525081516020918201929091019080838360005b83811015620001795781810151838201526020016200015f565b50505050905090810190601f168015620001a75780820380516001836020036101000a031916815260200191505b506040525050508383838381818160379080519060200190620001cc92919062000218565b508051620001e290603890602084019062000218565b50506039805460ff191660121790555050506001600160601b0319606092831b811660a052911b1660805250620002bd92505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025b57805160ff19168380011785556200028b565b828001600101855582156200028b579182015b828111156200028b5782518255916020019190600101906200026e565b50620002999291506200029d565b5090565b620002ba91905b80821115620002995760008155600101620002a4565b90565b60805160601c60a05160601c612ab46200033c600039806109a75280610cc55280610d345280610ec25280610fb25280611247528061132052806114985280611cc5528061210d5250806109d65280610d635280610f2b5280610f7652806110e0528061134f528061140b5280611cf4528061213c5250612ab46000f3fe6080604052600436106101a05760003560e01c8063445e8010116100ec578063a9059cbb1161008a578063dd62ed3e11610064578063dd62ed3e14610729578063ee9907a414610764578063f6b911bc14610797578063f866c319146107da576101aa565b8063a9059cbb146106a8578063c634dfaa146106e1578063d0fc81d214610714576101aa565b806370a08231116100c657806370a082311461061257806389d1a0fc1461064557806395d89b411461065a578063a457c2d71461066f576101aa565b8063445e8010146105515780634efecaa5146105a05780635eae177c146105d9576101aa565b80631d51e7cf11610159578063313ce56711610133578063313ce56714610479578063325a9b13146104a457806339509351146104df57806340c10f1914610518576101aa565b80631d51e7cf1461032a57806323b872dd1461035d5780633118724e146103a0576101aa565b806306fdde03146101af578063095ea7b3146102395780630bd7ad3b146102865780630e49072d146102ad57806312c87c2d146102e257806318160ddd14610315576101aa565b366101aa57600080fd5b600080fd5b3480156101bb57600080fd5b506101c461081d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101fe5781810151838201526020016101e6565b50505050905090810190601f16801561022b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561024557600080fd5b506102726004803603604081101561025c57600080fd5b506001600160a01b0381351690602001356108b4565b604080519115158252519081900360200190f35b34801561029257600080fd5b5061029b6108d2565b60408051918252519081900360200190f35b3480156102b957600080fd5b506102e0600480360360208110156102d057600080fd5b50356001600160a01b03166108d7565b005b3480156102ee57600080fd5b506102e06004803603602081101561030557600080fd5b50356001600160a01b03166108e4565b34801561032157600080fd5b5061029b610983565b34801561033657600080fd5b5061029b6004803603602081101561034d57600080fd5b50356001600160a01b0316610a87565b34801561036957600080fd5b506102726004803603606081101561038057600080fd5b506001600160a01b03813581169160208101359091169060400135610aa6565b3480156103ac57600080fd5b506102e0600480360360608110156103c357600080fd5b60ff82351691908101906040810160208201356401000000008111156103e857600080fd5b8201836020820111156103fa57600080fd5b8035906020019184600183028401116401000000008311171561041c57600080fd5b91939092909160208101903564010000000081111561043a57600080fd5b82018360208201111561044c57600080fd5b8035906020019184600183028401116401000000008311171561046e57600080fd5b509092509050610b33565b34801561048557600080fd5b5061048e610bf7565b6040805160ff9092168252519081900360200190f35b3480156104b057600080fd5b506102e0600480360360408110156104c757600080fd5b506001600160a01b0381358116916020013516610c00565b3480156104eb57600080fd5b506102726004803603604081101561050257600080fd5b506001600160a01b038135169060200135610c66565b34801561052457600080fd5b506102e06004803603604081101561053b57600080fd5b506001600160a01b038135169060200135610cba565b34801561055d57600080fd5b506105846004803603602081101561057457600080fd5b50356001600160a01b0316610e97565b604080516001600160a01b039092168252519081900360200190f35b3480156105ac57600080fd5b5061029b600480360360408110156105c357600080fd5b506001600160a01b038135169060200135610eb5565b3480156105e557600080fd5b50610272600480360360408110156105fc57600080fd5b506001600160a01b038135169060200135610f5e565b34801561061e57600080fd5b5061029b6004803603602081101561063557600080fd5b50356001600160a01b031661102b565b34801561065157600080fd5b506105846110de565b34801561066657600080fd5b506101c4611102565b34801561067b57600080fd5b506102726004803603604081101561069257600080fd5b506001600160a01b038135169060200135611163565b3480156106b457600080fd5b50610272600480360360408110156106cb57600080fd5b506001600160a01b0381351690602001356111d1565b3480156106ed57600080fd5b5061029b6004803603602081101561070457600080fd5b50356001600160a01b03166111e5565b34801561072057600080fd5b5061029b6111f0565b34801561073557600080fd5b5061029b6004803603604081101561074c57600080fd5b506001600160a01b03813581169160200135166111f6565b34801561077057600080fd5b5061029b6004803603602081101561078757600080fd5b50356001600160a01b0316611221565b3480156107a357600080fd5b506102e0600480360360608110156107ba57600080fd5b506001600160a01b0381358116916020810135909116906040013561123c565b3480156107e657600080fd5b506102e0600480360360608110156107fd57600080fd5b506001600160a01b0381358116916020810135909116906040013561148d565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108a95780601f1061087e576101008083540402835291602001916108a9565b820191906000526020600020905b81548152906001019060200180831161088c57829003601f168201915b505050505090505b90565b60006108c86108c1611504565b8484611508565b5060015b92915050565b600181565b6108e133826115f4565b50565b6001600160a01b03811633141561092c5760405162461bcd60e51b81526004018080602001828103825260258152602001806128226025913960400191505060405180910390fd5b336000818152603d602052604080822080546001600160a01b0319166001600160a01b03861690811790915590519092917fc2d6a42a9d5273283f73009a07aacfb043f2f91173a8d9d33b504afe898db08b91a350565b60008061098e6117e3565b90508061099f5760009150506108b1565b610a81610a7c7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610a3b57600080fd5b505afa158015610a4f573d6000803e3d6000fd5b505050506040513d6020811015610a6557600080fd5b5051610a70846117e9565b9063ffffffff6117ff16565b61184a565b91505090565b6001600160a01b0381166000908152603c60205260409020545b919050565b6000610ab3848484611863565b610b2984610abf611504565b610b2485604051806060016040528060288152602001612868602891396001600160a01b038a16600090815260356020526040812090610afd611504565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6118d216565b611508565b5060019392505050565b6000610b3d611969565b60015490915060ff1680610b545750610b5461196e565b80610b60575060005481115b610b9b5760405162461bcd60e51b815260040180806020018281038252602e8152602001806128ba602e913960400191505060405180910390fd5b60015460ff16158015610bba576001805460ff19168117905560008290555b610bc6603787876126fc565b50610bd3603885856126fc565b50610bdd87611974565b8015610bee576001805460ff191690555b50505050505050565b60395460ff1690565b6001600160a01b038281166000908152603d6020526040902054163314610c585760405162461bcd60e51b815260040180806020018281038252603a815260200180612a45603a913960400191505060405180910390fd5b610c6282826115f4565b5050565b60006108c8610c73611504565b84610b248560356000610c84611504565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61198a16565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d215760405162461bcd60e51b81526004018080602001828103825260328152602001806129ee6032913960400191505060405180910390fd5b6000610d2c836119e4565b9250505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610dc857600080fd5b505afa158015610ddc573d6000803e3d6000fd5b505050506040513d6020811015610df257600080fd5b50516001600160a01b0385166000908152603a602052604090208190559050610e2c84610e25848663ffffffff61198a16565b6000611a27565b610e4584610e40858563ffffffff61198a16565b611b27565b604080518481526020810184905280820183905290516001600160a01b038616917fb4c03061fb5b7fed76389d5af8f2e0ddb09f8c70d1333abbb62582835e10accb919081900360600190a250505050565b6001600160a01b039081166000908152603b60205260409020541690565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f1e5760405162461bcd60e51b81526004018080602001828103825260328152602001806129ee6032913960400191505060405180910390fd5b610f586001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848463ffffffff611c2516565b50919050565b604080516376e9d61560e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015284811660248301526044820184905291516000927f000000000000000000000000000000000000000000000000000000000000000016916376e9d615916064808301926020929190829003018186803b158015610ff857600080fd5b505afa15801561100c573d6000803e3d6000fd5b505050506040513d602081101561102257600080fd5b50519392505050565b60008061103783611c77565b6001600160a01b0384166000908152603c60205260409020549091508115801561105f575080155b1561106f57600092505050610aa1565b6001600160a01b038481166000908152603b6020526040902054166110c0576110b7816110ab866110a6868463ffffffff61198a16565b611c92565b9063ffffffff611d9a16565b92505050610aa1565b6110b76110d1826110ab8785611c92565b839063ffffffff61198a16565b7f000000000000000000000000000000000000000000000000000000000000000081565b60388054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108a95780601f1061087e576101008083540402835291602001916108a9565b60006108c8611170611504565b84610b2485604051806060016040528060258152602001612a20602591396035600061119a611504565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6118d216565b60006108c86111de611504565b8484611863565b60006108cc82611c77565b60001981565b6001600160a01b03918216600090815260356020908152604080832093909416825291909152205490565b6001600160a01b03166000908152603a602052604090205490565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146112a35760405162461bcd60e51b81526004018080602001828103825260328152602001806129ee6032913960400191505060405180910390fd5b6000806112af856119e4565b92509250506112bf858285611a27565b828111156112e0576112db85610e40838663ffffffff611d9a16565b6112f9565b6112f9856112f4858463ffffffff611d9a16565b611ddc565b600061130b838563ffffffff611d9a16565b61131e5761131886611ee4565b506113fe565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156113b457600080fd5b505afa1580156113c8573d6000803e3d6000fd5b505050506040513d60208110156113de57600080fd5b50516001600160a01b0387166000908152603a6020526040902081905590505b6114386001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868663ffffffff611c2516565b604080518581526020810184905280820183905290516001600160a01b0387169133917f4cf25bc1d991c17529c25213d3cc0cda295eeaad5f13f361969b12ea48015f909181900360600190a3505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146114f45760405162461bcd60e51b81526004018080602001828103825260328152602001806129ee6032913960400191505060405180910390fd5b6114ff838383611f96565b505050565b3390565b6001600160a01b03831661154d5760405162461bcd60e51b81526004018080602001828103825260248152602001806129a06024913960400191505060405180910390fd5b6001600160a01b0382166115925760405162461bcd60e51b81526004018080602001828103825260228152602001806127da6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260356020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038083166000908152603b602052604090205481169082168114156116515760405162461bcd60e51b815260040180806020018281038252602a815260200180612890602a913960400191505060405180910390fd5b600080600080611660876120e5565b9350935093509350600083116116a75760405162461bcd60e51b81526004018080602001828103825260428152602001806128e86042913960600191505060405180910390fd5b6001600160a01b038516156116c2576116c287600086611a27565b866001600160a01b0316866001600160a01b0316141561174e576001600160a01b0387166000818152603b6020908152604080832080546001600160a01b03191690558051878152918201869052818101859052519192917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a73487355949181900360600190a35050505050610c62565b6001600160a01b038781166000908152603b6020526040812080546001600160a01b0319169289169290921790915561178a9088908590611a27565b604080518481526020810184905280820183905290516001600160a01b0380891692908a16917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a73487355949181900360600190a350505050505050565b60365490565b60006108cc82633b9aca0063ffffffff6121fa16565b60006118436b033b2e3c9fd0803ce8000000611837611824868663ffffffff6121fa16565b6b019d971e4fe8401e740000009061198a565b9063ffffffff61225316565b9392505050565b6000631dcd6500611843633b9aca00611837838661198a565b828161186f8282610f5e565b6118c0576040805162461bcd60e51b815260206004820152601b60248201527f5472616e736665722063616e6e6f7420626520616c6c6f7765642e0000000000604482015290519081900360640190fd5b6118cb858585611f96565b5050505050565b600081848411156119615760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561192657818101518382015260200161190e565b50505050905090810190601f1680156119535780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600290565b303b1590565b6039805460ff191660ff92909216919091179055565b600082820183811015611843576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000806000806119f38561102b565b90506000808215611a1c57611a0787611c77565b9050611a19838263ffffffff611d9a16565b91505b969195509350915050565b6001600160a01b038084166000908152603b60205260409020541680611a4d57506114ff565b600080611a59836120e5565b6001600160a01b0387166000908152603c60205260409020549195509350611a8f92508691506110ab908863ffffffff61198a16565b6001600160a01b038085166000908152603c6020908152604080832094909455603b90529190912054168015611acb57611acb84846000611a27565b60408051848152602081018490528082018890526060810187905290516001600160a01b038616917f70ff8cf632603e2bfd1afb7e4061acce53d95356b1be9726b99fa22ba733b01f919081900360800190a250505050505050565b6001600160a01b038216611b82576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611b8e600083836114ff565b603654611ba1908263ffffffff61198a16565b6036556001600160a01b038216600090815260346020526040902054611bcd908263ffffffff61198a16565b6001600160a01b03831660008181526034602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526114ff908490612295565b6001600160a01b031660009081526034602052604090205490565b6000611843610a7c603a6000866001600160a01b03166001600160a01b0316815260200190815260200160002054611d8e7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611d5957600080fd5b505afa158015611d6d573d6000803e3d6000fd5b505050506040513d6020811015611d8357600080fd5b5051610a70876117e9565b9063ffffffff61234616565b600061184383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506118d2565b6001600160a01b038216611e215760405162461bcd60e51b815260040180806020018281038252602181526020018061295a6021913960400191505060405180910390fd5b611e2d826000836114ff565b611e70816040518060600160405280602281526020016127b8602291396001600160a01b038516600090815260346020526040902054919063ffffffff6118d216565b6001600160a01b038316600090815260346020526040902055603654611e9c908263ffffffff611d9a16565b6036556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b0381166000818152603b6020908152604080832080546001600160a01b03191690558051838152918201839052818101839052519192839290917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a7348735594919081900360600190a36001600160a01b0382166000908152603c6020526040902054611f8e57506001600160a01b0381166000908152603a60205260408120556001610aa1565b506000610aa1565b60008111611fd55760405162461bcd60e51b815260040180806020018281038252603081526020018061292a6030913960400191505060405180910390fd5b6000806000611fe3866120e5565b93509350935050600080611ff6876120e5565b935093505050612007888588611a27565b61201b87610e25848963ffffffff61198a16565b61202688888861237e565b6000612038868863ffffffff611d9a16565b1580156120575750876001600160a01b0316896001600160a01b031614155b156120685761206589611ee4565b90505b876001600160a01b0316896001600160a01b03167f89a178eaa27e0cd201bd795ca8ff716ac0df9618494510ca79771cfc66ffcde8898887866120ab57896120ae565b60005b60408051948552602085019390935283830191909152606083015260808201879052519081900360a00190a3505050505050505050565b60008060008060008060006120f9886119e4565b9250925092506121098882611b27565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156121a157600080fd5b505afa1580156121b5573d6000803e3d6000fd5b505050506040513d60208110156121cb57600080fd5b50516001600160a01b03999099166000908152603a602052604090208990555091979096919550909350915050565b600082612209575060006108cc565b8282028284828161221657fe5b04146118435760405162461bcd60e51b81526004018080602001828103825260218152602001806128476021913960400191505060405180910390fd5b600061184383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506124e7565b60606122ea826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661254c9092919063ffffffff16565b8051909150156114ff5780806020019051602081101561230957600080fd5b50516114ff5760405162461bcd60e51b815260040180806020018281038252602a8152602001806129c4602a913960400191505060405180910390fd5b60006002820461237683611837612369876b033b2e3c9fd0803ce80000006121fa565b849063ffffffff61198a16565b949350505050565b6001600160a01b0383166123c35760405162461bcd60e51b815260040180806020018281038252602581526020018061297b6025913960400191505060405180910390fd5b6001600160a01b0382166124085760405162461bcd60e51b81526004018080602001828103825260238152602001806127956023913960400191505060405180910390fd5b6124138383836114ff565b612456816040518060600160405280602681526020016127fc602691396001600160a01b038616600090815260346020526040902054919063ffffffff6118d216565b6001600160a01b03808516600090815260346020526040808220939093559084168152205461248b908263ffffffff61198a16565b6001600160a01b0380841660008181526034602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081836125365760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561192657818101518382015260200161190e565b50600083858161254257fe5b0495945050505050565b606061237684846000856060612561856126c3565b6125b2576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106125f15780518252601f1990920191602091820191016125d2565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612653576040519150601f19603f3d011682016040523d82523d6000602084013e612658565b606091505b5091509150811561266c5791506123769050565b80511561267c5780518082602001fd5b60405162461bcd60e51b815260206004820181815286516024840152865187939192839260440191908501908083836000831561192657818101518382015260200161190e565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590612376575050151592915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061273d5782800160ff1982351617855561276a565b8280016001018555821561276a579182015b8281111561276a57823582559160200191906001019061274f565b5061277692915061277a565b5090565b6108b191905b80821115612776576000815560010161278056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365557365722063616e6e6f74206769766520616c6c6f77616e636520746f2068696d73656c66536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365496e74657265737420697320616c7265616479207265646972656374656420746f207468652075736572436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564496e7465726573742073747265616d2063616e206f6e6c79206265207265646972656374656420696620746865726520697320612076616c69642062616c616e63655472616e7366657272656420616d6f756e74206e6565647320746f2062652067726561746572207468616e207a65726f45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645468652063616c6c6572206f6620746869732066756e6374696f6e206d7573742062652061206c656e64696e6720706f6f6c45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f43616c6c6572206973206e6f7420616c6c6f77656420746f2072656469726563742074686520696e746572657374206f66207468652075736572a26469706673582212208244286eac4684698a473ed280828121496cadbed90e96dde0c37c6a760b989064736f6c63430006080033';
