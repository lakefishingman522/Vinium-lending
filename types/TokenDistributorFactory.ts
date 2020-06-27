/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { TokenDistributor } from "./TokenDistributor";

export class TokenDistributorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<TokenDistributor> {
    return super.deploy(overrides) as Promise<TokenDistributor>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): TokenDistributor {
    return super.attach(address) as TokenDistributor;
  }
  connect(signer: Signer): TokenDistributorFactory {
    return super.connect(signer) as TokenDistributorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenDistributor {
    return new Contract(address, _abi, signerOrProvider) as TokenDistributor;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "percentage",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Distributed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "receivers",
        type: "address[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "percentages",
        type: "uint256[]"
      }
    ],
    name: "DistributionUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenToBurn",
        type: "address"
      },
      {
        indexed: false,
        internalType: "contract IExchangeAdapter",
        name: "exchangeAdapter",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_recipientBurn",
        type: "address"
      }
    ],
    name: "Setup",
    type: "event"
  },
  {
    inputs: [],
    name: "DISTRIBUTION_BASE",
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
    name: "IMPLEMENTATION_REVISION",
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
    name: "KYBER_ETH_MOCK_ADDRESS",
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
    name: "MAX_UINT",
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
    name: "MAX_UINT_MINUS_ONE",
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
    name: "MIN_CONVERSION_RATE",
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
        internalType: "contract IERC20[]",
        name: "_tokens",
        type: "address[]"
      }
    ],
    name: "approveExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_tokens",
        type: "address[]"
      }
    ],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "distributeWithAmounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_percentages",
        type: "uint256[]"
      }
    ],
    name: "distributeWithPercentages",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "exchangeAdapter",
    outputs: [
      {
        internalType: "contract IExchangeAdapter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDistribution",
    outputs: [
      {
        internalType: "address[]",
        name: "receivers",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "percentages",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipientBurn",
        type: "address"
      },
      {
        internalType: "address",
        name: "_tokenToBurn",
        type: "address"
      },
      {
        internalType: "contract IExchangeAdapter",
        name: "_exchangeAdapter",
        type: "address"
      },
      {
        internalType: "address[]",
        name: "_receivers",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_percentages",
        type: "uint256[]"
      },
      {
        internalType: "contract IERC20[]",
        name: "_tokens",
        type: "address[]"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "kyberProxy",
    outputs: [
      {
        internalType: "contract IKyberNetworkProxyInterface",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "recipientBurn",
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
    name: "tokenToBurn",
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
    stateMutability: "payable",
    type: "receive"
  }
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b506001600055611b6c8061002a6000396000f3fe6080604052600436106100f75760003560e01c80636138889b1161008a578063cc8cc9d811610059578063cc8cc9d8146105b8578063e5b5019a146106e8578063eed64c30146106fd578063f0eeed811461082d576100fe565b80636138889b146102725780637623bac5146103225780638c0c9a25146104f557806393ed43091461050a576100fe565b806323879bb1116100c657806323879bb11461021e5780632cbcda251461023357806340d58a4a146102485780634f1b86eb1461025d576100fe565b8063043c41d414610103578063135206581461012a5780631cced51b1461013f578063217ab806146101ed576100fe565b366100fe57005b600080fd5b34801561010f57600080fd5b50610118610842565b60408051918252519081900360200190f35b34801561013657600080fd5b50610118610848565b34801561014b57600080fd5b5061015461084e565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610198578181015183820152602001610180565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156101d75781810151838201526020016101bf565b5050505090500194505050505060405180910390f35b3480156101f957600080fd5b5061020261090b565b604080516001600160a01b039092168252519081900360200190f35b34801561022a57600080fd5b5061011861091a565b34801561023f57600080fd5b5061020261091f565b34801561025457600080fd5b5061011861092e565b34801561026957600080fd5b50610202610933565b34801561027e57600080fd5b506103206004803603602081101561029557600080fd5b810190602081018135600160201b8111156102af57600080fd5b8201836020820111156102c157600080fd5b803590602001918460208302840111600160201b831117156102e257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610942945050505050565b005b34801561032e57600080fd5b50610320600480360360c081101561034557600080fd5b6001600160a01b0382358116926020810135821692604082013590921691810190608081016060820135600160201b81111561038057600080fd5b82018360208201111561039257600080fd5b803590602001918460208302840111600160201b831117156103b357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561040257600080fd5b82018360208201111561041457600080fd5b803590602001918460208302840111600160201b8311171561043557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561048457600080fd5b82018360208201111561049657600080fd5b803590602001918460208302840111600160201b831117156104b757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a5b945050505050565b34801561050157600080fd5b50610202610b9a565b34801561051657600080fd5b506103206004803603602081101561052d57600080fd5b810190602081018135600160201b81111561054757600080fd5b82018360208201111561055957600080fd5b803590602001918460208302840111600160201b8311171561057a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610bb2945050505050565b3480156105c457600080fd5b50610320600480360360408110156105db57600080fd5b810190602081018135600160201b8111156105f557600080fd5b82018360208201111561060757600080fd5b803590602001918460208302840111600160201b8311171561062857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561067757600080fd5b82018360208201111561068957600080fd5b803590602001918460208302840111600160201b831117156106aa57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610ce4945050505050565b3480156106f457600080fd5b50610118610d2d565b34801561070957600080fd5b506103206004803603604081101561072057600080fd5b810190602081018135600160201b81111561073a57600080fd5b82018360208201111561074c57600080fd5b803590602001918460208302840111600160201b8311171561076d57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156107bc57600080fd5b8201836020820111156107ce57600080fd5b803590602001918460208302840111600160201b831117156107ef57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610d33945050505050565b34801561083957600080fd5b50610202610e97565b60011981565b61271081565b60608060356000018054806020026020016040519081016040528092919081815260200182805480156108aa57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161088c575b50505050509150603560010180548060200260200160405190810160405280929190818152602001828054801561090057602002820191906000526020600020905b8154815260200190600101908083116108ec575b505050505090509091565b6039546001600160a01b031681565b600381565b603a546001600160a01b031681565b600181565b6038546001600160a01b031681565b60005b8151811015610a57576000610958610ea6565b6001600160a01b031683838151811061096d57fe5b60200260200101516001600160a01b0316141561098a5747610a20565b82828151811061099657fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156109f357600080fd5b505afa158015610a07573d6000803e3d6000fd5b505050506040513d6020811015610a1d57600080fd5b50515b905060008111610a305750610a4f565b610a4d838381518110610a3f57fe5b602002602001015182610ebf565b505b600101610945565b5050565b6000610a6561131f565b60025490915060ff1680610a7c5750610a7c611324565b80610a88575060015481115b610ac35760405162461bcd60e51b815260040180806020018281038252602e815260200180611aa6602e913960400191505060405180910390fd5b60025460ff16158015610ae4576002805460ff191660019081179091558290555b603980546001600160a01b03808b166001600160a01b031992831617909255603880548a8416908316179055603a805492891692909116919091179055610b2b858561132a565b610b3483610bb2565b604080516001600160a01b03808a16825280891660208301528a168183015290517f99566d155bc7902033d8db6b0f091f12209d9651abdae3aad004632bd3e657b59181900360600190a18015610b90576002805460ff191690555b5050505050505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b603a546040516020602482018181528451604484015284516000946001600160a01b0316936393ed430960e01b9387939283926064019180860191028083838b5b83811015610c0b578181015183820152602001610bf3565b5050505090500192505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b60208310610c785780518252601f199092019160209182019101610c59565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610cd8576040519150601f19603f3d011682016040523d82523d6000602084013e610cdd565b606091505b5050505050565b60005b8251811015610d2857610d20838281518110610cff57fe5b6020026020010151838381518110610d1357fe5b6020026020010151610ebf565b600101610ce7565b505050565b60001981565b60005b8251811015610d28576000610d49610ea6565b6001600160a01b0316848381518110610d5e57fe5b60200260200101516001600160a01b03161415610db157610dac6064610da0858581518110610d8957fe5b60200260200101514761148490919063ffffffff16565b9063ffffffff6114e616565b610e6e565b610e6e6064610da0858581518110610dc557fe5b6020026020010151878681518110610dd957fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610e3657600080fd5b505afa158015610e4a573d6000803e3d6000fd5b505050506040513d6020811015610e6057600080fd5b50519063ffffffff61148416565b905060008111610e7e5750610e8f565b610e8d848381518110610a3f57fe5b505b600101610d36565b6037546001600160a01b031681565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b90565b81610ec8611980565b604080516035805460606020820284018101855293830181815292939192849290918491840182828015610f2557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610f07575b5050505050815260200160018201805480602002602001604051908101604052809291908181526020018280548015610f7d57602002820191906000526020600020905b815481526020019060010190808311610f69575b505050505081525050905060008090505b815151811015610cdd576000610fca612710610da085602001518581518110610fb357fe5b60200260200101518861148490919063ffffffff16565b905080610fd75750611317565b825180516000919084908110610fe957fe5b60200260200101516001600160a01b03161461119757611007610ea6565b6001600160a01b0316846001600160a01b031614611059576110548360000151838151811061103257fe5b602002602001015182886001600160a01b03166115289092919063ffffffff16565b611118565b60008360000151838151811061106b57fe5b60200260200101516001600160a01b03168260405180600001905060006040518083038185875af1925050503d80600081146110c3576040519150601f19603f3d011682016040523d82523d6000602084013e6110c8565b606091505b5050905080611116576040805162461bcd60e51b81526020600482015260156024820152742932bb32b93a32b21022aa24103a3930b739b332b960591b604482015290519081900360640190fd5b505b7f60ce3cc2d133631eac66a476f14997a9fa682bd05a60dd993cf02285822d78d88360000151838151811061114957fe5b60200260200101518460200151848151811061116157fe5b602090810291909101810151604080516001600160a01b03909416845291830152818101849052519081900360600190a1611315565b60385481906001600160a01b0386811691161461130a57603a54603854604080516001600160a01b038981166024830152928316604482015260648101869052600a6084808301919091528251808303909101815260a490910182526020810180516001600160e01b0316630ed2fc9560e01b17815291518151600095606095169382918083835b6020831061123e5780518252601f19909201916020918201910161121f565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461129e576040519150601f19603f3d011682016040523d82523d6000602084013e6112a3565b606091505b5091509150816112ee576040805162461bcd60e51b81526020600482015260116024820152704552524f525f4f4e5f45584348414e474560781b604482015290519081900360640190fd5b80806020019051602081101561130357600080fd5b5051925050505b6113138161157a565b505b505b600101610f8e565b600390565b303b1590565b8051825114611380576040805162461bcd60e51b815260206004820152601d60248201527f4172726179206c656e677468732073686f756c6420626520657175616c000000604482015290519081900360640190fd5b60408051808201909152828152602080820183905283516035916113a891839187019061199a565b5060208281015180516113c192600185019201906119ff565b509050507fdc9f439f707945ade720b0154668dd64af0689fb88b40abdb0f0289156d23e9d8282604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561142c578181015183820152602001611414565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561146b578181015183820152602001611453565b5050505090500194505050505060405180910390a15050565b600082611493575060006114e0565b828202828482816114a057fe5b04146114dd5760405162461bcd60e51b8152600401808060200182810382526021815260200180611a856021913960400191505060405180910390fd5b90505b92915050565b60006114dd83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611670565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d28908490611712565b6038546039546040805163a9059cbb60e01b81526001600160a01b039283166004820152602481018590529051919092169163a9059cbb9160448083019260209291908290030181600087803b1580156115d357600080fd5b505af11580156115e7573d6000803e3d6000fd5b505050506040513d60208110156115fd57600080fd5b505161163a5760405162461bcd60e51b8152600401808060200182810382526039815260200180611ad46039913960400191505060405180910390fd5b6040805182815290517fb90306ad06b2a6ff86ddc9327db583062895ef6540e62dc50add009db5b356eb9181900360200190a150565b600081836116fc5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116c15781810151838201526020016116a9565b50505050905090810190601f1680156116ee5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161170857fe5b0495945050505050565b6060611767826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166117c39092919063ffffffff16565b805190915015610d285780806020019051602081101561178657600080fd5b5051610d285760405162461bcd60e51b815260040180806020018281038252602a815260200180611b0d602a913960400191505060405180910390fd5b60606117d284846000856117da565b949350505050565b60606117e585611947565b611836576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106118755780518252601f199092019160209182019101611856565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146118d7576040519150601f19603f3d011682016040523d82523d6000602084013e6118dc565b606091505b509150915081156118f05791506117d29050565b8051156119005780518082602001fd5b60405162461bcd60e51b81526020600482018181528651602484015286518793919283926044019190850190808383600083156116c15781810151838201526020016116a9565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906117d2575050151592915050565b604051806040016040528060608152602001606081525090565b8280548282559060005260206000209081019282156119ef579160200282015b828111156119ef57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906119ba565b506119fb929150611a46565b5090565b828054828255906000526020600020908101928215611a3a579160200282015b82811115611a3a578251825591602001919060010190611a1f565b506119fb929150611a6a565b610ebc91905b808211156119fb5780546001600160a01b0319168155600101611a4c565b610ebc91905b808211156119fb5760008155600101611a7056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564494e5445524e414c5f4255524e2e205265766572746564207472616e7366657220746f20726563697069656e744275726e20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122035a20ada772bf4f6780153fa9490a660ce1eb7d82735616c82f417f8e01a0dda64736f6c63430006080033";
