/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { StableDebtToken } from "./StableDebtToken";

export class StableDebtTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<StableDebtToken> {
    return super.deploy(overrides) as Promise<StableDebtToken>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): StableDebtToken {
    return super.attach(address) as StableDebtToken;
  }
  connect(signer: Signer): StableDebtTokenFactory {
    return super.connect(signer) as StableDebtTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StableDebtToken {
    return new Contract(address, _abi, signerOrProvider) as StableDebtToken;
  }
}

const _abi = [
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_previousBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_currentBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_balanceIncrease",
        type: "uint256"
      }
    ],
    name: "burnDebt",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_previousBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_currentBalance",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_balanceIncrease",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newRate",
        type: "uint256"
      }
    ],
    name: "mintDebt",
    type: "event"
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
        name: "account",
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
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "burn",
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
    inputs: [],
    name: "getAverageStableRate",
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
    name: "getUserLastUpdated",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40"
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
    name: "getUserStableRate",
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
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address"
      },
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "_addressesProvider",
        type: "address"
      }
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256"
      }
    ],
    name: "mint",
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
        name: "account",
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
  "0x608060405234801561001057600080fd5b506112bc806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806381e75277116100ad578063a457c2d711610071578063a457c2d714610285578063a9059cbb146104be578063c634dfaa146104ea578063dd62ed3e14610510578063e78c9b3b1461053e57610121565b806381e752771461031757806389d1a0fc1461045e57806390f6fcf21461048257806395d89b411461048a5780639dc29fac1461049257610121565b806323b872dd116100f457806323b872dd14610231578063313ce56714610267578063395093511461028557806370a08231146102b157806379ce6b8c146102d757610121565b806306fdde0314610126578063095ea7b3146101a3578063156e29f6146101e357806318160ddd14610217575b600080fd5b61012e610564565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610168578181015183820152602001610150565b50505050905090810190601f1680156101955780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101cf600480360360408110156101b957600080fd5b506001600160a01b0381351690602001356105f1565b604080519115158252519081900360200190f35b610215600480360360608110156101f957600080fd5b506001600160a01b038135169060208101359060400135610639565b005b61021f610837565b60408051918252519081900360200190f35b6101cf6004803603606081101561024757600080fd5b506001600160a01b0381358116916020810135909116906040013561083d565b61026f610885565b6040805160ff9092168252519081900360200190f35b6101cf6004803603604081101561029b57600080fd5b506001600160a01b03813516906020013561088e565b61021f600480360360208110156102c757600080fd5b50356001600160a01b03166108dd565b6102fd600480360360208110156102ed57600080fd5b50356001600160a01b0316610987565b6040805164ffffffffff9092168252519081900360200190f35b610215600480360360a081101561032d57600080fd5b81019060208101813564010000000081111561034857600080fd5b82018360208201111561035a57600080fd5b8035906020019184600183028401116401000000008311171561037c57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156103cf57600080fd5b8201836020820111156103e157600080fd5b8035906020019184600183028401116401000000008311171561040357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505060ff8335169350506001600160a01b036020830135811692604001351690506109ac565b610466610a91565b604080516001600160a01b039092168252519081900360200190f35b61021f610aa5565b61012e610aac565b610215600480360360408110156104a857600080fd5b506001600160a01b038135169060200135610b04565b6101cf600480360360408110156104d457600080fd5b506001600160a01b03813516906020013561083d565b61021f6004803603602081101561050057600080fd5b50356001600160a01b0316610c8a565b61021f6004803603604081101561052657600080fd5b506001600160a01b038135811691602001351661088e565b61021f6004803603602081101561055457600080fd5b50356001600160a01b0316610ca5565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105e95780601f106105be576101008083540402835291602001916105e9565b820191906000526020600020905b8154815290600101906020018083116105cc57829003601f168201915b505050505081565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b6004546001600160a01b031633146106825760405162461bcd60e51b81526004018080602001828103825260328152602001806112556032913960400191505060405180910390fd5b61068a61117a565b600080600061069887610cc0565b9250925092506106b386600054610d2e90919063ffffffff16565b84526106be86610d91565b60208501526107406106de6106d9848963ffffffff610d2e16565b610d91565b6020860151610734906106f7908963ffffffff610da716565b61072861070387610d91565b6001600160a01b038d166000908152600760205260409020549063ffffffff610da716565b9063ffffffff610d2e16565b9063ffffffff610deb16565b60408581018290526001600160a01b0389166000908152600760205220908155600101805464ffffffffff19164264ffffffffff1617905583516107be9061078790610d91565b6107346107a1876020015189610da790919063ffffffff16565b6107286107af600054610d91565b6006549063ffffffff610da716565b6006556107cb8787610e23565b60408085015181516001600160a01b038a16815260208101899052808301869052606081018590526080810184905260a081019190915290517f94ba3ac5ed6fee7b49ed817c5ee964eed9bd5da6860344f95fc56997e920381d9181900360c00190a150505050505050565b60005481565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60035460ff1681565b6040805162461bcd60e51b815260206004820152601760248201527f414c4c4f57414e43455f4e4f545f535550504f525445440000000000000000006044820152905160009181900360640190fd5b6001600160a01b03811660009081526005602052604081205461090257506000610982565b6001600160a01b038216600090815260076020526040812080546001820154919291610935919064ffffffffff16610e81565b905061097d6109788261096c60056000896001600160a01b03166001600160a01b0316815260200190815260200160002054610d91565b9063ffffffff610da716565b610ed9565b925050505b919050565b6001600160a01b031660009081526007602052604090206001015464ffffffffff1690565b84516109bf90600190602088019061119b565b5083516109d390600290602087019061119b565b506003805460ff191660ff851617610100600160a81b0319166101006001600160a01b03858116919091029190911790915560408051630261bf8b60e01b8152905191831691630261bf8b91600480820192602092909190829003018186803b158015610a3f57600080fd5b505afa158015610a53573d6000803e3d6000fd5b505050506040513d6020811015610a6957600080fd5b5051600480546001600160a01b0319166001600160a01b039092169190911790555050505050565b60035461010090046001600160a01b031681565b6006545b90565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156105e95780601f106105be576101008083540402835291602001916105e9565b6004546001600160a01b03163314610b4d5760405162461bcd60e51b81526004018080602001828103825260328152602001806112556032913960400191505060405180910390fd5b6000806000610b5b85610cc0565b9250925092506000610b7885600054610ef990919063ffffffff16565b90506000610b8586610d91565b905081610b96576000600655610bed565b610be9610ba283610d91565b6001600160a01b03891660009081526007602052604090205461073490610bcf908563ffffffff610da716565b610bdd6107af600054610d91565b9063ffffffff610ef916565b6006555b83861415610c20576001600160a01b0387166000908152600760205260408120908155600101805464ffffffffff191690555b610c2a8787610f3b565b604080516001600160a01b038916815260208101889052808201879052606081018690526080810185905290517fecde08620c30706a4d7ba53e9163327f2e12a6cea2709dd6a9226fed28c2bb729181900360a00190a150505050505050565b6001600160a01b031660009081526005602052604090205490565b6001600160a01b031660009081526007602052604090205490565b6001600160a01b0381166000908152600560205260408120548190819080610cf2575060009250829150819050610d27565b6000610d0182610bdd886108dd565b9050610d0d8682610e23565b81610d1e818363ffffffff610d2e16565b90955093509150505b9193909250565b600082820183811015610d88576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b6000610d8b82633b9aca0063ffffffff610f7916565b6000610d886b033b2e3c9fd0803ce8000000610ddf610dcc868663ffffffff610f7916565b6b019d971e4fe8401e7400000090610d2e565b9063ffffffff610fd216565b600060028204610e1b83610ddf610e0e876b033b2e3c9fd0803ce8000000610f79565b849063ffffffff610d2e16565b949350505050565b600054610e36908263ffffffff610d2e16565b60009081556001600160a01b038316815260056020526040902054610e61908263ffffffff610d2e16565b6001600160a01b0390921660009081526005602052604090209190915550565b600080610e9b4264ffffffffff851663ffffffff610ef916565b90506000610eb3856301e1338063ffffffff610fd216565b9050610ed082610ec4610e0e611014565b9063ffffffff61102416565b95945050505050565b6000631dcd6500610ef2633b9aca00610ddf8386610d2e565b9392505050565b6000610d8883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061107e565b600054610f4e908263ffffffff610ef916565b60009081556001600160a01b038316815260056020526040902054610e61908263ffffffff610ef916565b600082610f8857506000610d8b565b82820282848281610f9557fe5b0414610d885760405162461bcd60e51b81526004018080602001828103825260218152602001806112346021913960400191505060405180910390fd5b6000610d8883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611115565b6b033b2e3c9fd0803ce800000090565b600060028206611040576b033b2e3c9fd0803ce8000000611042565b825b90506002820491505b8115610d8b5761105b8384610da7565b92506002820615611073576110708184610da7565b90505b60028204915061104b565b6000818484111561110d5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156110d25781810151838201526020016110ba565b50505050905090810190601f1680156110ff5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836111645760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156110d25781810151838201526020016110ba565b50600083858161117057fe5b0495945050505050565b60405180606001604052806000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106111dc57805160ff1916838001178555611209565b82800160010185558215611209579182015b828111156112095782518255916020019190600101906111ee565b50611215929150611219565b5090565b610aa991905b80821115611215576000815560010161121f56fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775468652063616c6c6572206f6620746869732066756e6374696f6e206d7573742062652061206c656e64696e6720706f6f6ca2646970667358221220cd9569abceb96bd56d70bd8803044292a632ae9d40176445e3607c428df84c0d64736f6c63430006080033";
