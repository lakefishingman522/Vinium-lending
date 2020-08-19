/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { MockStableDebtToken } from "./MockStableDebtToken";

export class MockStableDebtTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _pool: string,
    _underlyingAssetAddress: string,
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides
  ): Promise<MockStableDebtToken> {
    return super.deploy(
      _pool,
      _underlyingAssetAddress,
      _tokenName,
      _tokenSymbol,
      overrides || {}
    ) as Promise<MockStableDebtToken>;
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
  attach(address: string): MockStableDebtToken {
    return super.attach(address) as MockStableDebtToken;
  }
  connect(signer: Signer): MockStableDebtTokenFactory {
    return super.connect(signer) as MockStableDebtTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockStableDebtToken {
    return new Contract(address, _abi, signerOrProvider) as MockStableDebtToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address"
      },
      {
        internalType: "address",
        name: "_underlyingAssetAddress",
        type: "address"
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string"
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
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
    inputs: [],
    name: "DEBT_TOKEN_REVISION",
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
        name: "_amount",
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
        name: "_user",
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
        internalType: "uint8",
        name: "_decimals",
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
    name: "initialize",
    outputs: [],
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
      },
      {
        internalType: "uint256",
        name: "_rate",
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
        name: "_amount",
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
        name: "_amount",
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
  "0x60c0604052600080553480156200001557600080fd5b506040516200172238038062001722833981810160405260808110156200003b57600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006757600080fd5b9083019060208201858111156200007d57600080fd5b82516401000000008111828201881017156200009857600080fd5b82525081516020918201929091019080838360005b83811015620000c7578181015183820152602001620000ad565b50505050905090810190601f168015620000f55780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011957600080fd5b9083019060208201858111156200012f57600080fd5b82516401000000008111828201881017156200014a57600080fd5b82525081516020918201929091019080838360005b83811015620001795781810151838201526020016200015f565b50505050905090810190601f168015620001a75780820380516001836020036101000a031916815260200191505b506040525050506001600160601b0319606085811b821660a05284901b16608052815184908490849084908490849084908490620001ed90603590602085019062000216565b5080516200020390603690602084019062000216565b50505050505050505050505050620002bb565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025957805160ff191683800117855562000289565b8280016001018555821562000289579182015b82811115620002895782518255916020019190600101906200026c565b50620002979291506200029b565b5090565b620002b891905b80821115620002975760008155600101620002a2565b90565b60805160601c60a05160601c611438620002ea600039806106485280610b5f525080610ad052506114386000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806389d1a0fc116100ad578063a9059cbb11610071578063a9059cbb146104b9578063b9a7b622146104e5578063c634dfaa146104ed578063dd62ed3e14610513578063e78c9b3b146105415761012c565b806389d1a0fc1461045957806390f6fcf21461047d57806395d89b41146104855780639dc29fac1461048d578063a457c2d7146103c75761012c565b80633118724e116100f45780633118724e14610272578063313ce567146103a957806339509351146103c757806370a08231146103f357806379ce6b8c146104195761012c565b806306fdde0314610131578063095ea7b3146101ae578063156e29f6146101ee57806318160ddd1461022257806323b872dd1461023c575b600080fd5b610139610567565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017357818101518382015260200161015b565b50505050905090810190601f1680156101a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101da600480360360408110156101c457600080fd5b506001600160a01b0381351690602001356105f5565b604080519115158252519081900360200190f35b6102206004803603606081101561020457600080fd5b506001600160a01b03813516906020810135906040013561063d565b005b61022a610883565b60408051918252519081900360200190f35b6101da6004803603606081101561025257600080fd5b506001600160a01b03813581169160208101359091169060400135610889565b6102206004803603606081101561028857600080fd5b60ff82351691908101906040810160208201356401000000008111156102ad57600080fd5b8201836020820111156102bf57600080fd5b803590602001918460018302840111640100000000831117156102e157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561033457600080fd5b82018360208201111561034657600080fd5b8035906020019184600183028401116401000000008311171561036857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108d1945050505050565b6103b16109a7565b6040805160ff9092168252519081900360200190f35b6101da600480360360408110156103dd57600080fd5b506001600160a01b0381351690602001356109b0565b61022a6004803603602081101561040957600080fd5b50356001600160a01b03166109ff565b61043f6004803603602081101561042f57600080fd5b50356001600160a01b0316610aa9565b6040805164ffffffffff9092168252519081900360200190f35b610461610ace565b604080516001600160a01b039092168252519081900360200190f35b61022a610af2565b610139610af9565b610220600480360360408110156104a357600080fd5b506001600160a01b038135169060200135610b54565b6101da600480360360408110156104cf57600080fd5b506001600160a01b038135169060200135610889565b61022a610d59565b61022a6004803603602081101561050357600080fd5b50356001600160a01b0316610d5e565b61022a6004803603604081101561052957600080fd5b506001600160a01b03813581169160200135166109b0565b61022a6004803603602081101561055757600080fd5b50356001600160a01b0316610d79565b6035805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105ed5780601f106105c2576101008083540402835291602001916105ed565b820191906000526020600020905b8154815290600101906020018083116105d057829003601f168201915b505050505081565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106a45760405162461bcd60e51b81526004018080602001828103825260328152602001806113d16032913960400191505060405180910390fd5b6106ac6112c1565b60008060006106ba87610d94565b9250925092506106d581603454610df890919063ffffffff16565b602085018190526106ec908763ffffffff610df816565b84526106f786610e5b565b6040850152610779610717610712848963ffffffff610df816565b610e5b565b604086015161076d90610730908963ffffffff610e7116565b61076161073c87610e5b565b6001600160a01b038d166000908152603a60205260409020549063ffffffff610e7116565b9063ffffffff610df816565b9063ffffffff610eb516565b606085018190526001600160a01b0388166000908152603a60205260409020908155600101805464ffffffffff19164264ffffffffff1617905583516107fb906107c290610e5b565b61076d6107dc876040015189610e7190919063ffffffff16565b6107616107ec8960200151610e5b565b6039549063ffffffff610e7116565b60395561081787610812888463ffffffff610df816565b610eed565b606080850151604080516001600160a01b038b168152602081018a90528082018790529283018590526080830184905260a0830191909152517f94ba3ac5ed6fee7b49ed817c5ee964eed9bd5da6860344f95fc56997e920381d9181900360c00190a150505050505050565b60345481565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60006108db610f4c565b60015490915060ff16806108f257506108f2610f51565b806108fe575060005481115b6109395760405162461bcd60e51b815260040180806020018281038252602e8152602001806113a3602e913960400191505060405180910390fd5b60015460ff16158015610958576001805460ff19168117905560008290555b835161096b9060359060208701906112e9565b50825161097f9060369060208601906112e9565b506037805460ff191660ff871617905580156109a0576001805460ff191690555b5050505050565b60375460ff1681565b6040805162461bcd60e51b815260206004820152601760248201527f414c4c4f57414e43455f4e4f545f535550504f525445440000000000000000006044820152905160009181900360640190fd5b6001600160a01b038116600090815260386020526040812054610a2457506000610aa4565b6001600160a01b0382166000908152603a6020526040812080546001820154919291610a57919064ffffffffff16610f57565b9050610a9f610a9a82610a8e60386000896001600160a01b03166001600160a01b0316815260200190815260200160002054610e5b565b9063ffffffff610e7116565b611079565b925050505b919050565b6001600160a01b03166000908152603a602052604090206001015464ffffffffff1690565b7f000000000000000000000000000000000000000000000000000000000000000081565b6039545b90565b6036805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105ed5780601f106105c2576101008083540402835291602001916105ed565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610bbb5760405162461bcd60e51b81526004018080602001828103825260328152602001806113d16032913960400191505060405180910390fd5b6000806000610bc985610d94565b9250925092506000610be682603454610df890919063ffffffff16565b90506000610bfa828763ffffffff61109916565b90506000610c2387610c1786603454610df890919063ffffffff16565b9063ffffffff61109916565b90506000610c3088610e5b565b905081610c41576000603955610c8a565b610c86610c4d84610e5b565b6001600160a01b038b166000908152603a602052604090205461076d90610c7a908563ffffffff610e7116565b610c176107ec89610e5b565b6039555b85881415610cbd576001600160a01b0389166000908152603a60205260408120908155600101805464ffffffffff191690555b87851115610cde57610cd989610812878b63ffffffff61109916565b610cf7565b610cf789610cf28a8863ffffffff61109916565b6110db565b604080516001600160a01b038b168152602081018a9052808201899052606081018890526080810187905290517fecde08620c30706a4d7ba53e9163327f2e12a6cea2709dd6a9226fed28c2bb729181900360a00190a1505050505050505050565b600181565b6001600160a01b031660009081526038602052604090205490565b6001600160a01b03166000908152603a602052604090205490565b6001600160a01b0381166000908152603860205260408120548190819080610dc6575060009250829150819050610df1565b6000610dd582610c17886109ff565b905081610de8818363ffffffff610df816565b90955093509150505b9193909250565b600082820183811015610e52576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b6000610e5582633b9aca0063ffffffff61111a16565b6000610e526b033b2e3c9fd0803ce8000000610ea9610e96868663ffffffff61111a16565b6b019d971e4fe8401e7400000090610df8565b9063ffffffff61117316565b600060028204610ee583610ea9610ed8876b033b2e3c9fd0803ce800000061111a565b849063ffffffff610df816565b949350505050565b603454610f00908263ffffffff610df816565b6034556001600160a01b038216600090815260386020526040902054610f2c908263ffffffff610df816565b6001600160a01b0390921660009081526038602052604090209190915550565b600290565b303b1590565b600080610f714264ffffffffff851663ffffffff61109916565b905080610f8857610f806111b5565b915050610e55565b6000610f9b82600163ffffffff61109916565b9050600060028311610fae576000610fbf565b610fbf83600263ffffffff61109916565b90506000610fd7876301e1338063ffffffff61117316565b90506000610feb828063ffffffff610e7116565b90506000610fff828463ffffffff610e7116565b905060006110286002610ea98561101c8b8b63ffffffff61111a16565b9063ffffffff61111a16565b905060006110476006610ea98561101c8a818e8e63ffffffff61111a16565b905061106a8161076184816110628a8e63ffffffff61111a16565b6107616111b5565b9b9a5050505050505050505050565b6000631dcd6500611092633b9aca00610ea98386610df8565b9392505050565b6000610e5283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506111c5565b6034546110ee908263ffffffff61109916565b6034556001600160a01b038216600090815260386020526040902054610f2c908263ffffffff61109916565b60008261112957506000610e55565b8282028284828161113657fe5b0414610e525760405162461bcd60e51b81526004018080602001828103825260218152602001806113826021913960400191505060405180910390fd5b6000610e5283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061125c565b6b033b2e3c9fd0803ce800000090565b600081848411156112545760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611219578181015183820152602001611201565b50505050905090810190601f1680156112465780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836112ab5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611219578181015183820152602001611201565b5060008385816112b757fe5b0495945050505050565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061132a57805160ff1916838001178555611357565b82800160010185558215611357579182015b8281111561135757825182559160200191906001019061133c565b50611363929150611367565b5090565b610af691905b80821115611363576000815560010161136d56fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65645468652063616c6c6572206f6620746869732066756e6374696f6e206d7573742062652061206c656e64696e6720706f6f6ca2646970667358221220e5ad3474a558dd248da5a9c94ab3187674500ee522ef0485f30cccdeb538d55964736f6c63430006080033";
