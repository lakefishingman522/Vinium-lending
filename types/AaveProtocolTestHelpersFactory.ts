/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from 'ethers';
import {Provider, TransactionRequest} from '@ethersproject/providers';
import {Contract, ContractFactory, Overrides} from '@ethersproject/contracts';

import {AaveProtocolTestHelpers} from './AaveProtocolTestHelpers';

export class AaveProtocolTestHelpersFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(addressesProvider: string, overrides?: Overrides): Promise<AaveProtocolTestHelpers> {
    return super.deploy(addressesProvider, overrides || {}) as Promise<AaveProtocolTestHelpers>;
  }
  getDeployTransaction(addressesProvider: string, overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(addressesProvider, overrides || {});
  }
  attach(address: string): AaveProtocolTestHelpers {
    return super.attach(address) as AaveProtocolTestHelpers;
  }
  connect(signer: Signer): AaveProtocolTestHelpersFactory {
    return super.connect(signer) as AaveProtocolTestHelpersFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AaveProtocolTestHelpers {
    return new Contract(address, _abi, signerOrProvider) as AaveProtocolTestHelpers;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract ILendingPoolAddressesProvider',
        name: 'addressesProvider',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ADDRESSES_PROVIDER',
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
    inputs: [],
    name: 'getAllATokens',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'tokenAddress',
            type: 'address',
          },
        ],
        internalType: 'struct AaveProtocolTestHelpers.TokenData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllReservesTokens',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'tokenAddress',
            type: 'address',
          },
        ],
        internalType: 'struct AaveProtocolTestHelpers.TokenData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60a060405234801561001057600080fd5b506040516109cd3803806109cd83398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c610936610097600039806083528060ab528061035f52506109366000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630542975c14610046578063b316ff8914610064578063f561ae4114610079575b600080fd5b61004e610081565b60405161005b91906107ed565b60405180910390f35b61006c6100a5565b60405161005b9190610801565b61006c610359565b7f000000000000000000000000000000000000000000000000000000000000000081565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561010257600080fd5b505afa158015610116573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013a9190610648565b90506060816001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160006040518083038186803b15801561017757600080fd5b505afa15801561018b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101b391908101906106b6565b90506060815167ffffffffffffffff811180156101cf57600080fd5b5060405190808252806020026020018201604052801561020957816020015b6101f6610613565b8152602001906001900390816101ee5790505b50905060005b825181101561035157604051806040016040528084838151811061022f57fe5b60200260200101516001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316146102f05784838151811061026f57fe5b60200260200101516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156102af57600080fd5b505afa1580156102c3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102eb9190810190610761565b61030d565b6040518060400160405280600381526020016208aa8960eb1b8152505b815260200184838151811061031e57fe5b60200260200101516001600160a01b031681525082828151811061033e57fe5b602090810291909101015260010161020f565b509250505090565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103b657600080fd5b505afa1580156103ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ee9190610648565b90506060816001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160006040518083038186803b15801561042b57600080fd5b505afa15801561043f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261046791908101906106b6565b90506060815167ffffffffffffffff8111801561048357600080fd5b506040519080825280602002602001820160405280156104bd57816020015b6104aa610613565b8152602001906001900390816104a25790505b50905060005b8251811015610351576000846001600160a01b031663d2493b6c8584815181106104e957fe5b60200260200101516040518263ffffffff1660e01b815260040161050d91906107ed565b60606040518083038186803b15801561052557600080fd5b505afa158015610539573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055d919061066a565b505090506040518060400160405280826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156105a557600080fd5b505afa1580156105b9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105e19190810190610761565b8152602001826001600160a01b03168152508383815181106105ff57fe5b6020908102919091010152506001016104c3565b60408051808201909152606081526000602082015290565b80516001600160a01b038116811461064257600080fd5b92915050565b600060208284031215610659578081fd5b610663838361062b565b9392505050565b60008060006060848603121561067e578182fd5b8351610689816108e8565b602085015190935061069a816108e8565b60408501519092506106ab816108e8565b809150509250925092565b600060208083850312156106c8578182fd5b825167ffffffffffffffff808211156106df578384fd5b81850186601f8201126106f0578485fd5b8051925081831115610700578485fd5b8383029150610710848301610891565b8381528481019082860184840187018a101561072a578788fd5b8794505b85851015610754576107408a8261062b565b83526001949094019391860191860161072e565b5098975050505050505050565b600060208284031215610772578081fd5b815167ffffffffffffffff80821115610789578283fd5b81840185601f82011261079a578384fd5b80519250818311156107aa578384fd5b6107bd601f8401601f1916602001610891565b91508282528560208483010111156107d3578384fd5b6107e48360208401602084016108b8565b50949350505050565b6001600160a01b0391909116815260200190565b60208082528251828201819052600091906040908185019080840286018301878501865b8381101561088357603f1989840301855281518051878552805180898701526060610855828289018d86016108b8565b928a01516001600160a01b0316868b015296890196601f01601f191690940101925090860190600101610825565b509098975050505050505050565b60405181810167ffffffffffffffff811182821017156108b057600080fd5b604052919050565b60005b838110156108d35781810151838201526020016108bb565b838111156108e2576000848401525b50505050565b6001600160a01b03811681146108fd57600080fd5b5056fea26469706673582212205ea01758abf9b54517b5cc5f76b16a6c254ff3f5c3611c0b820fd58df67fdd4664736f6c63430006080033';
