/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { MockOneSplit } from "./MockOneSplit";

export class MockOneSplitFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tokenToBurn: string,
    overrides?: TransactionOverrides
  ): Promise<MockOneSplit> {
    return super.deploy(_tokenToBurn, overrides) as Promise<MockOneSplit>;
  }
  getDeployTransaction(
    _tokenToBurn: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_tokenToBurn, overrides);
  }
  attach(address: string): MockOneSplit {
    return super.attach(address) as MockOneSplit;
  }
  connect(signer: Signer): MockOneSplitFactory {
    return super.connect(signer) as MockOneSplitFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockOneSplit {
    return new Contract(address, _abi, signerOrProvider) as MockOneSplit;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract MintableERC20",
        name: "_tokenToBurn",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "FLAG_AAVE",
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
    name: "FLAG_BANCOR",
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
    name: "FLAG_BDAI",
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
    name: "FLAG_CHAI",
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
    name: "FLAG_COMPOUND",
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
    name: "FLAG_FULCRUM",
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
    name: "FLAG_IEARN",
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
    name: "FLAG_KYBER",
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
    name: "FLAG_KYBER_BANCOR_RESERVE",
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
    name: "FLAG_KYBER_OASIS_RESERVE",
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
    name: "FLAG_KYBER_UNISWAP_RESERVE",
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
    name: "FLAG_MULTI_PATH_ETH",
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
    name: "FLAG_OASIS",
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
    name: "FLAG_SMART_TOKEN",
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
    name: "FLAG_UNISWAP",
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
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "toToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "parts",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "disableFlags",
        type: "uint256"
      }
    ],
    name: "getExpectedReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "returnAmount",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "distribution",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "toToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minReturn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "parts",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "disableFlags",
        type: "uint256"
      }
    ],
    name: "goodSwap",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "toToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minReturn",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "distribution",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "disableFlags",
        type: "uint256"
      }
    ],
    name: "swap",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenToBurn",
    outputs: [
      {
        internalType: "contract MintableERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516109a23803806109a28339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b031990921691909117905561093d806100656000396000f3fe6080604052600436106101145760003560e01c806373eb69d4116100a0578063ceb5411511610064578063ceb5411514610337578063df9116631461034c578063e2a7515e14610361578063eb16df2a1461042b578063f64a9a491461044057610114565b806373eb69d4146102ce57806383366577146102e357806383a0118f146102f85780638c6c11f21461030d578063a9d3589f1461032257610114565b80634f1b86eb116100e75780634f1b86eb1461021457806358886253146102455780635cfcee281461025a5780636b9589aa1461026f578063702bf8fa146102b957610114565b8063085e2c5b1461011957806311c0c0f7146101c35780633c1a62dc146101ea5780634c914a4e146101ff575b600080fd5b34801561012557600080fd5b50610168600480360360a081101561013c57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060800135610455565b6040518083815260200180602001828103825283818151815260200191508051906020019060200280838360005b838110156101ae578181015183820152602001610196565b50505050905001935050505060405180910390f35b3480156101cf57600080fd5b506101d8610471565b60408051918252519081900360200190f35b3480156101f657600080fd5b506101d8610477565b34801561020b57600080fd5b506101d861047c565b34801561022057600080fd5b50610229610481565b604080516001600160a01b039092168252519081900360200190f35b34801561025157600080fd5b506101d8610490565b34801561026657600080fd5b506101d8610496565b6102b7600480360360c081101561028557600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a0013561049b565b005b3480156102c557600080fd5b506101d86105da565b3480156102da57600080fd5b506101d86105e3565b3480156102ef57600080fd5b506101d86105e9565b34801561030457600080fd5b506101d86105ee565b34801561031957600080fd5b506101d86105f4565b34801561032e57600080fd5b506101d86105f9565b34801561034357600080fd5b506101d8610602565b34801561035857600080fd5b506101d8610607565b6102b7600480360360c081101561037757600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a0810160808201356401000000008111156103b757600080fd5b8201836020820111156103c957600080fd5b803590602001918460208302840111640100000000831117156103eb57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050913592506105d2915050565b34801561043757600080fd5b506101d8610610565b34801561044c57600080fd5b506101d8610615565b5050604080516000808252602082019092529094909350915050565b61010081565b602081565b604081565b6000546001600160a01b031681565b61020081565b601081565b600080546040805163140e25ad60e31b815269021e19e0c9bab2400000600482015290516001600160a01b039092169263a0712d68926024808401936020939083900390910190829087803b1580156104f357600080fd5b505af1158015610507573d6000803e3d6000fd5b505050506040513d602081101561051d57600080fd5b5051610570576040805162461bcd60e51b815260206004820181905260248201527f54524144455f574954485f48494e542e205265766572746564206d696e742829604482015290519081900360640190fd5b61057861061a565b6001600160a01b0316866001600160a01b0316146105ab576105ab6001600160a01b03871633308763ffffffff61063216565b6000546105d2906001600160a01b03163369021e19e0c9bab240000063ffffffff61069216565b505050505050565b64010000000081565b61080081565b608081565b61040081565b600881565b64040000000081565b600281565b64020000000081565b600181565b600481565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee90565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261068c9085906106e9565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526106e49084906106e9565b505050565b6106fb826001600160a01b03166108a1565b61074c576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b6020831061078a5780518252601f19909201916020918201910161076b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146107ec576040519150601f19603f3d011682016040523d82523d6000602084013e6107f1565b606091505b509150915081610848576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b80511561068c5780806020019051602081101561086457600080fd5b505161068c5760405162461bcd60e51b815260040180806020018281038252602a8152602001806108de602a913960400191505060405180910390fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906108d557508115155b94935050505056fe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212208f6f9be9efe89f081a883d87839c5c72e6e2a24624979cb5bef2737fef3eaf2f64736f6c63430006080033";
