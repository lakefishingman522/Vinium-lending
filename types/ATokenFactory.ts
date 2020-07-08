/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { AToken } from "./AToken";

export class ATokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _addressesProvider: string,
    _underlyingAsset: string,
    _underlyingAssetDecimals: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: TransactionOverrides
  ): Promise<AToken> {
    return super.deploy(
      _addressesProvider,
      _underlyingAsset,
      _underlyingAssetDecimals,
      _name,
      _symbol,
      overrides
    ) as Promise<AToken>;
  }
  getDeployTransaction(
    _addressesProvider: string,
    _underlyingAsset: string,
    _underlyingAssetDecimals: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _addressesProvider,
      _underlyingAsset,
      _underlyingAssetDecimals,
      _name,
      _symbol,
      overrides
    );
  }
  attach(address: string): AToken {
    return super.attach(address) as AToken;
  }
  connect(signer: Signer): ATokenFactory {
    return super.connect(signer) as ATokenFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AToken {
    return new Contract(address, _abi, signerOrProvider) as AToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "_addressesProvider",
        type: "address"
      },
      {
        internalType: "address",
        name: "_underlyingAsset",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "_underlyingAssetDecimals",
        type: "uint8"
      },
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toBalanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toIndex",
        type: "uint256"
      }
    ],
    name: "BalanceTransfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256"
      }
    ],
    name: "BurnOnLiquidation",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "InterestRedirectionAllowanceChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redirectedBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256"
      }
    ],
    name: "InterestStreamRedirected",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256"
      }
    ],
    name: "MintOnDeposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256"
      }
    ],
    name: "Redeem",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_targetAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_targetBalanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_targetIndex",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redirectedBalanceAdded",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redirectedBalanceRemoved",
        type: "uint256"
      }
    ],
    name: "RedirectedBalanceUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "UINT_MAX_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "allowInterestRedirectionTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "burnOnLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "getInterestRedirectionAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "getRedirectedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "getUserIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "isTransferAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "mintOnDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "principalBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "redirectInterestStream",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "redirectInterestStreamOf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferOnLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "underlyingAssetAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200255a3803806200255a833981810160405260a08110156200003757600080fd5b8151602083015160408085015160608601805192519496939591949391820192846401000000008211156200006b57600080fd5b9083019060208201858111156200008157600080fd5b82516401000000008111828201881017156200009c57600080fd5b82525081516020918201929091019080838360005b83811015620000cb578181015183820152602001620000b1565b50505050905090810190601f168015620000f95780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011d57600080fd5b9083019060208201858111156200013357600080fd5b82516401000000008111828201881017156200014e57600080fd5b82525081516020918201929091019080838360005b838110156200017d57818101518382015260200162000163565b50505050905090810190601f168015620001ab5780820380516001836020036101000a031916815260200191505b50604052505082518391508290620001cb906003906020850190620002eb565b508051620001e1906004906020840190620002eb565b50506005805460ff191660121790555062000205836001600160e01b03620002d516565b600a80546001600160a01b0319166001600160a01b03878116919091179182905560408051630261bf8b60e01b815290519290911691630261bf8b91600480820192602092909190829003018186803b1580156200026257600080fd5b505afa15801562000277573d6000803e3d6000fd5b505050506040513d60208110156200028e57600080fd5b5051600b80546001600160a01b0319166001600160a01b0392831617905560058054610100600160a81b031916610100969092169590950217909355506200039092505050565b6005805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200032e57805160ff19168380011785556200035e565b828001600101855582156200035e579182015b828111156200035e57825182559160200191906001019062000341565b506200036c92915062000370565b5090565b6200038d91905b808211156200036c576000815560010162000377565b90565b6121ba80620003a06000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80635eae177c116100de578063a9059cbb11610097578063db006a7511610071578063db006a75146104f3578063dd62ed3e14610510578063ee9907a41461053e578063f866c3191461056457610173565b8063a9059cbb14610499578063c634dfaa146104c5578063d0fc81d2146104eb57610173565b80635eae177c146103df57806370a082311461040b57806389d1a0fc1461043157806394362e8b1461043957806395d89b4114610465578063a457c2d71461046d57610173565b806323b872dd1161013057806323b872dd146102c3578063313ce567146102f9578063325a9b131461031757806339509351146103455780633edb7cb814610371578063445e80101461039d57610173565b806306fdde0314610178578063095ea7b3146101f55780630e49072d1461023557806312c87c2d1461025d57806318160ddd146102835780631d51e7cf1461029d575b600080fd5b61018061059a565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ba5781810151838201526020016101a2565b50505050905090810190601f1680156101e75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102216004803603604081101561020b57600080fd5b506001600160a01b038135169060200135610631565b604080519115158252519081900360200190f35b61025b6004803603602081101561024b57600080fd5b50356001600160a01b031661064f565b005b61025b6004803603602081101561027357600080fd5b50356001600160a01b031661065c565b61028b6106fb565b60408051918252519081900360200190f35b61028b600480360360208110156102b357600080fd5b50356001600160a01b03166107bd565b610221600480360360608110156102d957600080fd5b506001600160a01b038135811691602081013590911690604001356107dc565b610301610869565b6040805160ff9092168252519081900360200190f35b61025b6004803603604081101561032d57600080fd5b506001600160a01b0381358116916020013516610872565b6102216004803603604081101561035b57600080fd5b506001600160a01b0381351690602001356108d8565b61025b6004803603604081101561038757600080fd5b506001600160a01b03813516906020013561092c565b6103c3600480360360208110156103b357600080fd5b50356001600160a01b0316610a21565b604080516001600160a01b039092168252519081900360200190f35b610221600480360360408110156103f557600080fd5b506001600160a01b038135169060200135610a3f565b61028b6004803603602081101561042157600080fd5b50356001600160a01b0316610ada565b6103c3610b8d565b61025b6004803603604081101561044f57600080fd5b506001600160a01b038135169060200135610ba1565b610180610c76565b6102216004803603604081101561048357600080fd5b506001600160a01b038135169060200135610cd7565b610221600480360360408110156104af57600080fd5b506001600160a01b038135169060200135610d45565b61028b600480360360208110156104db57600080fd5b50356001600160a01b0316610d59565b61028b610d64565b61025b6004803603602081101561050957600080fd5b5035610d6a565b61028b6004803603604081101561052657600080fd5b506001600160a01b0381358116916020013516610fa4565b61028b6004803603602081101561055457600080fd5b50356001600160a01b0316610fcf565b61025b6004803603606081101561057a57600080fd5b506001600160a01b03813581169160208101359091169060400135610fea565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106265780601f106105fb57610100808354040283529160200191610626565b820191906000526020600020905b81548152906001019060200180831161060957829003601f168201915b505050505090505b90565b600061064561063e611043565b8484611047565b5060015b92915050565b6106593382611133565b50565b6001600160a01b0381163314156106a45760405162461bcd60e51b8152600401808060200182810382526025815260200180611f806025913960400191505060405180910390fd5b3360008181526009602052604080822080546001600160a01b0319166001600160a01b03861690811790915590519092917fc2d6a42a9d5273283f73009a07aacfb043f2f91173a8d9d33b504afe898db08b91a350565b600080610706611322565b90508061071757600091505061062e565b600b546005546040805163d15e005360e01b81526001600160a01b036101009093048316600482015290516107b7936107b293169163d15e0053916024808301926020929190829003018186803b15801561077157600080fd5b505afa158015610785573d6000803e3d6000fd5b505050506040513d602081101561079b57600080fd5b50516107a684611328565b9063ffffffff61133e16565b611389565b91505090565b6001600160a01b0381166000908152600860205260409020545b919050565b60006107e98484846113a2565b61085f846107f5611043565b61085a85604051806060016040528060288152602001611fc6602891396001600160a01b038a16600090815260016020526040812090610833611043565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61141116565b611047565b5060019392505050565b60055460ff1690565b6001600160a01b038281166000908152600960205260409020541633146108ca5760405162461bcd60e51b815260040180806020018281038252603a81526020018061214b603a913960400191505060405180910390fd5b6108d48282611133565b5050565b60006106456108e5611043565b8461085a85600160006108f6611043565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6114a816565b600b546001600160a01b031633146109755760405162461bcd60e51b81526004018080602001828103825260328152602001806120f46032913960400191505060405180910390fd5b600080600061098385611502565b935093509350506109958583866115f3565b61099f858561172a565b60006109b1848663ffffffff61183216565b6109c1576109be86611874565b90505b856001600160a01b03167f90e5d3d68ec162d9c7de393037a3ede04dd44f68e051bf2ace4a73c299dbc4db8685846109f957856109fc565b60005b60408051938452602084019290925282820152519081900360600190a2505050505050565b6001600160a01b039081166000908152600760205260409020541690565b600b54600554604080516376e9d61560e01b81526101009092046001600160a01b039081166004840152858116602484015260448301859052905160009391909116916376e9d615916064808301926020929190829003018186803b158015610aa757600080fd5b505afa158015610abb573d6000803e3d6000fd5b505050506040513d6020811015610ad157600080fd5b50519392505050565b600080610ae683611926565b6001600160a01b03841660009081526008602052604090205490915081158015610b0e575080155b15610b1e576000925050506107d7565b6001600160a01b0384811660009081526007602052604090205416610b6f57610b6681610b5a86610b55868463ffffffff6114a816565b611941565b9063ffffffff61183216565b925050506107d7565b610b66610b8082610b5a8785611941565b839063ffffffff6114a816565b60055461010090046001600160a01b031681565b600b546001600160a01b03163314610bea5760405162461bcd60e51b81526004018080602001828103825260328152602001806120f46032913960400191505060405180910390fd5b600080610bf684611502565b935093505050610c1a84610c1385856114a890919063ffffffff16565b60006115f3565b610c2484846119f6565b604080518481526020810184905280820183905290516001600160a01b038616917fbe7799898ca2d813ff902b487c1b434ab45b47edd8f38b77ad5e99aae8341b7a919081900360600190a250505050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106265780601f106105fb57610100808354040283529160200191610626565b6000610645610ce4611043565b8461085a856040518060600160405280602581526020016121266025913960016000610d0e611043565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61141116565b6000610645610d52611043565b84846113a2565b600061064982611926565b60001981565b60008111610dbf576040805162461bcd60e51b815260206004820181905260248201527f416d6f756e7420746f2072656465656d206e6565647320746f206265203e2030604482015290519081900360640190fd5b6000806000610dcd33611502565b91955093509150849050600019811415610de45750825b83811115610e235760405162461bcd60e51b8152600401808060200182810382526032815260200180611f066032913960400191505060405180910390fd5b610e2d3382610a3f565b610e7e576040805162461bcd60e51b815260206004820152601b60248201527f5472616e736665722063616e6e6f7420626520616c6c6f7765642e0000000000604482015290519081900360640190fd5b610e893384836115f3565b610e93338261172a565b6000610ea5858363ffffffff61183216565b610eb557610eb233611874565b90505b600b546005546001600160a01b0391821691639895e3d8916101009004163385610ee58a8263ffffffff61183216565b6040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b03168152602001838152602001828152602001945050505050600060405180830381600087803b158015610f5457600080fd5b505af1158015610f68573d6000803e3d6000fd5b50505050336001600160a01b03167fbd5034ffbd47e4e72a94baa2cdb74c6fad73cb3bcdc13036b72ec8306f5a76468386846109f957866109fc565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b031660009081526006602052604090205490565b600b546001600160a01b031633146110335760405162461bcd60e51b81526004018080602001828103825260328152602001806120f46032913960400191505060405180910390fd5b61103e838383611af2565b505050565b3390565b6001600160a01b03831661108c5760405162461bcd60e51b81526004018080602001828103825260248152602001806120d06024913960400191505060405180910390fd5b6001600160a01b0382166110d15760405162461bcd60e51b8152600401808060200182810382526022815260200180611f386022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0380831660009081526007602052604090205481169082168114156111905760405162461bcd60e51b815260040180806020018281038252602a815260200180611fee602a913960400191505060405180910390fd5b60008060008061119f87611502565b9350935093509350600083116111e65760405162461bcd60e51b81526004018080602001828103825260428152602001806120186042913960600191505060405180910390fd5b6001600160a01b0385161561120157611201876000866115f3565b866001600160a01b0316866001600160a01b0316141561128d576001600160a01b038716600081815260076020908152604080832080546001600160a01b03191690558051878152918201869052818101859052519192917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a73487355949181900360600190a350505050506108d4565b6001600160a01b03878116600090815260076020526040812080546001600160a01b031916928916929092179091556112c990889085906115f3565b604080518481526020810184905280820183905290516001600160a01b0380891692908a16917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a73487355949181900360600190a350505050505050565b60025490565b600061064982633b9aca0063ffffffff611c2116565b60006113826b033b2e3c9fd0803ce8000000611376611363868663ffffffff611c2116565b6b019d971e4fe8401e74000000906114a8565b9063ffffffff611c7a16565b9392505050565b6000631dcd6500611382633b9aca0061137683866114a8565b82816113ae8282610a3f565b6113ff576040805162461bcd60e51b815260206004820152601b60248201527f5472616e736665722063616e6e6f7420626520616c6c6f7765642e0000000000604482015290519081900360640190fd5b61140a858585611af2565b5050505050565b600081848411156114a05760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561146557818101518382015260200161144d565b50505050905090810190601f1680156114925780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611382576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600080600080600061151386611926565b9050600061152482610b5a89610ada565b905061153087826119f6565b600b546005546040805163d15e005360e01b81526101009092046001600160a01b0390811660048401529051600093919091169163d15e0053916024808301926020929190829003018186803b15801561158957600080fd5b505afa15801561159d573d6000803e3d6000fd5b505050506040513d60208110156115b357600080fd5b50516001600160a01b03891660009081526006602052604090208190559050826115e3818463ffffffff6114a816565b9099909850919650945092505050565b6001600160a01b038084166000908152600760205260409020541680611619575061103e565b60008061162583611502565b6001600160a01b038716600090815260086020526040902054919550935061165b9250869150610b5a908863ffffffff6114a816565b6001600160a01b038085166000908152600860209081526040808320949094556007905291909120541680156116ce576001600160a01b0381166000908152600860205260409020546116b4908463ffffffff6114a816565b6001600160a01b0382166000908152600860205260409020555b60408051848152602081018490528082018890526060810187905290516001600160a01b038616917f70ff8cf632603e2bfd1afb7e4061acce53d95356b1be9726b99fa22ba733b01f919081900360800190a250505050505050565b6001600160a01b03821661176f5760405162461bcd60e51b815260040180806020018281038252602181526020018061208a6021913960400191505060405180910390fd5b61177b8260008361103e565b6117be81604051806060016040528060228152602001611ee4602291396001600160a01b038516600090815260208190526040902054919063ffffffff61141116565b6001600160a01b0383166000908152602081905260409020556002546117ea908263ffffffff61183216565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600061138283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611411565b6001600160a01b038116600081815260076020908152604080832080546001600160a01b03191690558051838152918201839052818101839052519192839290917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a7348735594919081900360600190a36001600160a01b03821660009081526008602052604090205461191e57506001600160a01b03811660009081526006602052604081205560016107d7565b5060006107d7565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b03808316600090815260066020908152604080832054600b54600554835163d15e005360e01b81526101009091048716600482015292519495611382956107b29593946119ea94939092169263d15e00539260248082019391829003018186803b1580156119b557600080fd5b505afa1580156119c9573d6000803e3d6000fd5b505050506040513d60208110156119df57600080fd5b50516107a687611328565b9063ffffffff611cbc16565b6001600160a01b038216611a51576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611a5d6000838361103e565b600254611a70908263ffffffff6114a816565b6002556001600160a01b038216600090815260208190526040902054611a9c908263ffffffff6114a816565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008111611b315760405162461bcd60e51b815260040180806020018281038252603081526020018061205a6030913960400191505060405180910390fd5b6000806000611b3f86611502565b93509350935050600080611b5287611502565b935093505050611b638885886115f3565b611b7787610c13848963ffffffff6114a816565b611b82888888611cf4565b6000611b94868863ffffffff61183216565b611ba457611ba189611874565b90505b876001600160a01b0316896001600160a01b03167f89a178eaa27e0cd201bd795ca8ff716ac0df9618494510ca79771cfc66ffcde889888786611be75789611bea565b60005b60408051948552602085019390935283830191909152606083015260808201879052519081900360a00190a3505050505050505050565b600082611c3057506000610649565b82820282848281611c3d57fe5b04146113825760405162461bcd60e51b8152600401808060200182810382526021815260200180611fa56021913960400191505060405180910390fd5b600061138283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611e5b565b600060028204611cec83611376611cdf876b033b2e3c9fd0803ce8000000611c21565b849063ffffffff6114a816565b949350505050565b6001600160a01b038316611d395760405162461bcd60e51b81526004018080602001828103825260258152602001806120ab6025913960400191505060405180910390fd5b6001600160a01b038216611d7e5760405162461bcd60e51b8152600401808060200182810382526023815260200180611ec16023913960400191505060405180910390fd5b611d8983838361103e565b611dcc81604051806060016040528060268152602001611f5a602691396001600160a01b038616600090815260208190526040902054919063ffffffff61141116565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611e01908263ffffffff6114a816565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008183611eaa5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561146557818101518382015260200161144d565b506000838581611eb657fe5b049594505050505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e6365557365722063616e6e6f742072656465656d206d6f7265207468616e2074686520617661696c61626c652062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365557365722063616e6e6f74206769766520616c6c6f77616e636520746f2068696d73656c66536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365496e74657265737420697320616c7265616479207265646972656374656420746f207468652075736572496e7465726573742073747265616d2063616e206f6e6c79206265207265646972656374656420696620746865726520697320612076616c69642062616c616e63655472616e7366657272656420616d6f756e74206e6565647320746f2062652067726561746572207468616e207a65726f45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735468652063616c6c6572206f6620746869732066756e6374696f6e206d7573742062652061206c656e64696e6720706f6f6c45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f43616c6c6572206973206e6f7420616c6c6f77656420746f2072656469726563742074686520696e746572657374206f66207468652075736572a26469706673582212202d2df2b93993c5cb5fa2b9f5d98346729bc1056636a0754860769165524ca37664736f6c63430006080033";
