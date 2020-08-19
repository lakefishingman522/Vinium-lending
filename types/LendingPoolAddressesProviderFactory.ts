/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { LendingPoolAddressesProvider } from "./LendingPoolAddressesProvider";

export class LendingPoolAddressesProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LendingPoolAddressesProvider> {
    return super.deploy(overrides || {}) as Promise<
      LendingPoolAddressesProvider
    >;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingPoolAddressesProvider {
    return super.attach(address) as LendingPoolAddressesProvider;
  }
  connect(signer: Signer): LendingPoolAddressesProviderFactory {
    return super.connect(signer) as LendingPoolAddressesProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolAddressesProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolAddressesProvider;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "EthereumAddressUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "FeeProviderUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingPoolConfiguratorUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingPoolLiquidationManagerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingPoolManagerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingPoolUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingRateOracleUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "PriceOracleUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "ProxyCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "TokenDistributorUpdated",
    type: "event"
  },
  {
    inputs: [],
    name: "getFeeProvider",
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
    inputs: [],
    name: "getLendingPool",
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
    inputs: [],
    name: "getLendingPoolConfigurator",
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
    inputs: [],
    name: "getLendingPoolLiquidationManager",
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
    inputs: [],
    name: "getLendingPoolManager",
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
    inputs: [],
    name: "getLendingRateOracle",
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
    inputs: [],
    name: "getPriceOracle",
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
    inputs: [],
    name: "getTokenDistributor",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeProvider",
        type: "address"
      }
    ],
    name: "setFeeProviderImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "configurator",
        type: "address"
      }
    ],
    name: "setLendingPoolConfiguratorImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "setLendingPoolImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager",
        type: "address"
      }
    ],
    name: "setLendingPoolLiquidationManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendingPoolManager",
        type: "address"
      }
    ],
    name: "setLendingPoolManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendingRateOracle",
        type: "address"
      }
    ],
    name: "setLendingRateOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "priceOracle",
        type: "address"
      }
    ],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenDistributor",
        type: "address"
      }
    ],
    name: "setTokenDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100246001600160e01b0361007316565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610077565b3390565b611a69806100866000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80635aef021f116100ad578063c12542df11610071578063c12542df14610286578063ee891296146102ac578063f2fde38b146102b4578063fbeefc3c146102da578063fca513a8146102e257610121565b80635aef021f14610222578063715018a614610248578063820d12741461025057806385c858b1146102765780638da5cb5b1461027e57610121565b806338280e6b116100f457806338280e6b1461018257806340fdcadc146101a857806344ce375b146101ce578063530e784f146101f45780635834eb9a1461021a57610121565b80630261bf8b146101265780632a62c6361461014a57806333128d59146101725780633618abba1461017a575b600080fd5b61012e6102ea565b604080516001600160a01b039092168252519081900360200190f35b6101706004803603602081101561016057600080fd5b50356001600160a01b0316610330565b005b61012e6103d8565b61012e610426565b6101706004803603602081101561019857600080fd5b50356001600160a01b0316610473565b610170600480360360208110156101be57600080fd5b50356001600160a01b0316610552565b610170600480360360208110156101e457600080fd5b50356001600160a01b0316610634565b6101706004803603602081101561020a57600080fd5b50356001600160a01b0316610715565b61012e6107ef565b6101706004803603602081101561023857600080fd5b50356001600160a01b031661083c565b6101706108e4565b6101706004803603602081101561026657600080fd5b50356001600160a01b0316610986565b61012e610a67565b61012e610aba565b6101706004803603602081101561029c57600080fd5b50356001600160a01b0316610ac9565b61012e610b7e565b610170600480360360208110156102ca57600080fd5b50356001600160a01b0316610bc9565b61012e610cc1565b61012e610d07565b6b13115391125391d7d413d3d360a21b60005260016020527f80b1f352aaaa810cd26c3b708a78da0b7c1d2417fd1de3442a764a21d12298f9546001600160a01b031690565b610338610d4d565b6000546001600160a01b03908116911614610388576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b6103a16b2322a2afa82927ab24a222a960a11b82610d51565b6040516001600160a01b038216907f18e1a55b8eff9c93921eecfa1462d6a8cbb80b3988db3eb14c039e43fdb2266190600090a250565b732622a72224a723afa827a7a62fa6a0a720a3a2a960611b60005260016020527fe4b97ed315792b429a3d5cf60e4d11da6f59fb7fffa7d351d111667fac9418b5546001600160a01b031690565b724c454e44494e475f524154455f4f5241434c4560681b60005260016020527fcb40a4ed28bcd13050fc5a5521ee1e9fbbff654480b0b1e986483de2a9653344546001600160a01b031690565b61047b610d4d565b6000546001600160a01b039081169116146104cb576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b702a27a5a2a72fa224a9aa2924a12aaa27a960791b600090815260016020527f23a11b120c13a5edd7ba07f9826150ca274bafcad6a819a9cabfde56f14b0f2780546001600160a01b0319166001600160a01b03841690811790915560405190917fa8b48a56ec01f81c3615a21ec43e16b925c26293e0801cf6330427f2a687f05391a250565b61055a610d4d565b6000546001600160a01b039081169116146105aa576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b732622a72224a723afa827a7a62fa6a0a720a3a2a960611b600090815260016020527fe4b97ed315792b429a3d5cf60e4d11da6f59fb7fffa7d351d111667fac9418b580546001600160a01b0319166001600160a01b03841690811790915560405190917fd5280c51185a38d36f7a0f5e56cac6248312bb70d0974782fa5a595127e0e08e91a250565b61063c610d4d565b6000546001600160a01b0390811691161461068c576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b722624a8aaa4a220aa24a7a72fa6a0a720a3a2a960691b600090815260016020527f0c2c596851b4651a8e6f929110f58021f1ce980da957db0b05c6345f3381e7d580546001600160a01b0319166001600160a01b03841690811790915560405190917f1a76cb769b814bc038223da86932b099b20aae03473683e6d98f5c3554e2606491a250565b61071d610d4d565b6000546001600160a01b0390811691161461076d576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b6b50524943455f4f5241434c4560a01b600090815260016020527f09c42ce2b8743b2d739b046fe6af227cd392ebe6dc7ade0f7795bfe8b5e8d52480546001600160a01b0319166001600160a01b03841690811790915560405190917fefe8ab924ca486283a79dc604baa67add51afb82af1db8ac386ebbba643cdffd91a250565b722624a8aaa4a220aa24a7a72fa6a0a720a3a2a960691b60005260016020527f0c2c596851b4651a8e6f929110f58021f1ce980da957db0b05c6345f3381e7d5546001600160a01b031690565b610844610d4d565b6000546001600160a01b03908116911614610894576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b6108ad6b13115391125391d7d413d3d360a21b82610d51565b6040516001600160a01b038216907fc4e6c6cdf28d0edbd8bcf071d724d33cc2e7a30be7d06443925656e9cb492aa490600090a250565b6108ec610d4d565b6000546001600160a01b0390811691161461093c576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b61098e610d4d565b6000546001600160a01b039081169116146109de576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b724c454e44494e475f524154455f4f5241434c4560681b600090815260016020527fcb40a4ed28bcd13050fc5a5521ee1e9fbbff654480b0b1e986483de2a965334480546001600160a01b0319166001600160a01b03841690811790915560405190917f5c29179aba6942020a8a2d38f65de02fb6b7f784e7f049ed3a3cab97621859b591a250565b782622a72224a723afa827a7a62fa1a7a72324a3aaa920aa27a960391b60005260016020527f1c36825e51ae2b3694b35b5fe1ebd9dd2f6443925259edc447147518b0db3125546001600160a01b031690565b6000546001600160a01b031690565b610ad1610d4d565b6000546001600160a01b03908116911614610b21576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b610b47782622a72224a723afa827a7a62fa1a7a72324a3aaa920aa27a960391b82610d51565b6040516001600160a01b038216907fdfabe479bad36782fb1e77fbfddd4e382671713527e4786cfc93a022ae76372990600090a250565b702a27a5a2a72fa224a9aa2924a12aaa27a960791b60005260016020527f23a11b120c13a5edd7ba07f9826150ca274bafcad6a819a9cabfde56f14b0f27546001600160a01b031690565b610bd1610d4d565b6000546001600160a01b03908116911614610c21576040805162461bcd60e51b81526020600482018190526024820152600080516020611a14833981519152604482015290519081900360640190fd5b6001600160a01b038116610c665760405162461bcd60e51b81526004018080602001828103825260268152602001806119ee6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6b2322a2afa82927ab24a222a960a11b60005260016020527f15f14d15d5c5d6b12ed6ebd1eaf7bd6bd59826ffae85704ff3537a8cbcb5f79e546001600160a01b031690565b6b50524943455f4f5241434c4560a01b60005260016020527f09c42ce2b8743b2d739b046fe6af227cd392ebe6dc7ade0f7795bfe8b5e8d524546001600160a01b031690565b3390565b6000828152600160209081526040918290205482513060248083019190915284518083039091018152604490910190935290820180516001600160e01b031663189acdbd60e31b1790526001600160a01b031690819081610f3157604051610db890611005565b604051809103906000f080158015610dd4573d6000803e3d6000fd5b509150816001600160a01b031663cf7a1d778530846040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e65578181015183820152602001610e4d565b50505050905090810190601f168015610e925780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610eb357600080fd5b505af1158015610ec7573d6000803e3d6000fd5b50505060008681526001602090815260409182902080546001600160a01b0319166001600160a01b038716908117909155825189815292519093507f1eb35cb4b5bbb23d152f3b4016a5a46c37a07ae930ed0956aba951e2311424389281900390910190a2610ffe565b6040805163278f794360e11b81526001600160a01b03868116600483019081526024830193845284516044840152845191861693634f1ef2869389938793929160640190602085019080838360005b83811015610f98578181015183820152602001610f80565b50505050905090810190601f168015610fc55780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b158015610fe557600080fd5b505af1158015610ff9573d6000803e3d6000fd5b505050505b5050505050565b6109db806110138339019056fe608060405234801561001057600080fd5b506109bb806100206000396000f3fe6080604052600436106100705760003560e01c80638f2839701161004e5780638f2839701461015e578063cf7a1d7714610191578063d1f5789414610250578063f851a4401461030657610070565b80633659cfe61461007a5780634f1ef286146100ad5780635c60da1b1461012d575b61007861031b565b005b34801561008657600080fd5b506100786004803603602081101561009d57600080fd5b50356001600160a01b0316610335565b610078600480360360408110156100c357600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100ee57600080fd5b82018360208201111561010057600080fd5b8035906020019184600183028401116401000000008311171561012257600080fd5b50909250905061036f565b34801561013957600080fd5b5061014261041c565b604080516001600160a01b039092168252519081900360200190f35b34801561016a57600080fd5b506100786004803603602081101561018157600080fd5b50356001600160a01b0316610459565b610078600480360360608110156101a757600080fd5b6001600160a01b0382358116926020810135909116918101906060810160408201356401000000008111156101db57600080fd5b8201836020820111156101ed57600080fd5b8035906020019184600183028401116401000000008311171561020f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610513945050505050565b6100786004803603604081101561026657600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561029157600080fd5b8201836020820111156102a357600080fd5b803590602001918460018302840111640100000000831117156102c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610599945050505050565b34801561031257600080fd5b506101426106d9565b610323610704565b61033361032e61070c565b610731565b565b61033d610755565b6001600160a01b0316336001600160a01b031614156103645761035f8161077a565b61036c565b61036c61031b565b50565b610377610755565b6001600160a01b0316336001600160a01b0316141561040f576103998361077a565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d80600081146103f6576040519150601f19603f3d011682016040523d82523d6000602084013e6103fb565b606091505b505090508061040957600080fd5b50610417565b61041761031b565b505050565b6000610426610755565b6001600160a01b0316336001600160a01b0316141561044e5761044761070c565b9050610456565b61045661031b565b90565b610461610755565b6001600160a01b0316336001600160a01b03161415610364576001600160a01b0381166104bf5760405162461bcd60e51b81526004018080602001828103825260368152602001806109156036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104e8610755565b604080516001600160a01b03928316815291841660208301528051918290030190a161035f816107ba565b600061051d61070c565b6001600160a01b03161461053057600080fd5b61053a8382610599565b604080517232b4b8189c9b1b97383937bc3c9730b236b4b760691b815290519081900360130190207fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036000199091011461059057fe5b610417826107ba565b60006105a361070c565b6001600160a01b0316146105b657600080fd5b604080517f656970313936372e70726f78792e696d706c656d656e746174696f6e000000008152905190819003601c0190207f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6000199091011461061657fe5b61061f826107de565b8051156106d5576000826001600160a01b0316826040518082805190602001908083835b602083106106625780518252601f199092019160209182019101610643565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146106c2576040519150601f19603f3d011682016040523d82523d6000602084013e6106c7565b606091505b505090508061041757600080fd5b5050565b60006106e3610755565b6001600160a01b0316336001600160a01b0316141561044e57610447610755565b610333610846565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e808015610750573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b610783816107de565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6107e7816108a6565b6108225760405162461bcd60e51b815260040180806020018281038252603b81526020018061094b603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b61084e610755565b6001600160a01b0316336001600160a01b0316141561089e5760405162461bcd60e51b81526004018080602001828103825260328152602001806108e36032913960400191505060405180910390fd5b610333610333565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906108da57508115155b94935050505056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a26469706673582212202dd76de1457f86227b30bf0f39a8551dcc07f289a1439ff6af44e9c1ecf0046764736f6c634300060800334f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220238968c26d063c2cadb0ba84bdfe80254c7edf6b30b718dbc180552e5ba8d2ba64736f6c63430006080033";
