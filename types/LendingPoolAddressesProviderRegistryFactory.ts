/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { LendingPoolAddressesProviderRegistry } from "./LendingPoolAddressesProviderRegistry";

export class LendingPoolAddressesProviderRegistryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LendingPoolAddressesProviderRegistry> {
    return super.deploy(overrides || {}) as Promise<
      LendingPoolAddressesProviderRegistry
    >;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingPoolAddressesProviderRegistry {
    return super.attach(address) as LendingPoolAddressesProviderRegistry;
  }
  connect(signer: Signer): LendingPoolAddressesProviderRegistryFactory {
    return super.connect(signer) as LendingPoolAddressesProviderRegistryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolAddressesProviderRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolAddressesProviderRegistry;
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
    name: "AddressesProviderRegistered",
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
    name: "AddressesProviderUnregistered",
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
    inputs: [],
    name: "getAddressesProvidersList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_provider",
        type: "address"
      }
    ],
    name: "isAddressesProviderRegistered",
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
    inputs: [
      {
        internalType: "address",
        name: "_provider",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "registerAddressesProvider",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_provider",
        type: "address"
      }
    ],
    name: "unregisterAddressesProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100246001600160e01b0361007316565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610077565b3390565b610750806100866000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b1461010a578063d258191e1461012e578063d570d9541461015a578063f2fde38b146101925761007d565b80630de2670714610082578063365ccbbf146100aa578063715018a614610102575b600080fd5b6100a86004803603602081101561009857600080fd5b50356001600160a01b03166101b8565b005b6100b26102be565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156100ee5781810151838201526020016100d6565b505050509050019250505060405180910390f35b6100a86103bb565b61011261045d565b604080516001600160a01b039092168252519081900360200190f35b6100a86004803603604081101561014457600080fd5b506001600160a01b03813516906020013561046c565b6101806004803603602081101561017057600080fd5b50356001600160a01b0316610520565b60408051918252519081900360200190f35b6100a8600480360360208110156101a857600080fd5b50356001600160a01b031661053b565b6101c0610633565b6000546001600160a01b03908116911614610210576040805162461bcd60e51b815260206004820181905260248201526000805160206106fb833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526001602052604090205461027a576040805162461bcd60e51b815260206004820152601a60248201527f50726f7669646572206973206e6f742072656769737465726564000000000000604482015290519081900360640190fd5b6001600160a01b038116600081815260016020526040808220829055517f851e5971c053e6b76e3a1e0b8ffa81430df738007fad86e195c409a757faccd29190a250565b600254606090818167ffffffffffffffff811180156102dc57600080fd5b50604051908082528060200260200182016040528015610306578160200160208202803683370190505b50905060005b6002548110156103b4576000600160006002848154811061032957fe5b60009182526020808320909101546001600160a01b0316835282019290925260400190205411156103ac576002818154811061036157fe5b9060005260206000200160009054906101000a90046001600160a01b031682828151811061038b57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b60010161030c565b5091505090565b6103c3610633565b6000546001600160a01b03908116911614610413576040805162461bcd60e51b815260206004820181905260248201526000805160206106fb833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b610474610633565b6000546001600160a01b039081169116146104c4576040805162461bcd60e51b815260206004820181905260248201526000805160206106fb833981519152604482015290519081900360640190fd5b6001600160a01b03821660009081526001602052604090208190556104e882610637565b6040516001600160a01b038316907f2db38786c10176b033a1608361716b0ca992e3af55dc05b6dc710969790beeda90600090a25050565b6001600160a01b031660009081526001602052604090205490565b610543610633565b6000546001600160a01b03908116911614610593576040805162461bcd60e51b815260206004820181905260248201526000805160206106fb833981519152604482015290519081900360640190fd5b6001600160a01b0381166105d85760405162461bcd60e51b81526004018080602001828103825260268152602001806106d56026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b60005b60025481101561068457816001600160a01b03166002828154811061065b57fe5b6000918252602090912001546001600160a01b0316141561067c57506106d1565b60010161063a565b50600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0383161790555b5056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220fab9086f881cc92ecc304587cec8180132b6a3831c3e1d71b7bae3f8e722abdb64736f6c63430006080033";
