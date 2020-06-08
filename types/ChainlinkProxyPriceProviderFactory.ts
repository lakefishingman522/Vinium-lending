/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ChainlinkProxyPriceProvider } from "./ChainlinkProxyPriceProvider";

export class ChainlinkProxyPriceProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _assets: string[],
    _sources: string[],
    _fallbackOracle: string,
    overrides?: TransactionOverrides
  ): Promise<ChainlinkProxyPriceProvider> {
    return super.deploy(
      _assets,
      _sources,
      _fallbackOracle,
      overrides
    ) as Promise<ChainlinkProxyPriceProvider>;
  }
  getDeployTransaction(
    _assets: string[],
    _sources: string[],
    _fallbackOracle: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _assets,
      _sources,
      _fallbackOracle,
      overrides
    );
  }
  attach(address: string): ChainlinkProxyPriceProvider {
    return super.attach(address) as ChainlinkProxyPriceProvider;
  }
  connect(signer: Signer): ChainlinkProxyPriceProviderFactory {
    return super.connect(signer) as ChainlinkProxyPriceProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkProxyPriceProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkProxyPriceProvider;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_assets",
        type: "address[]"
      },
      {
        internalType: "address[]",
        name: "_sources",
        type: "address[]"
      },
      {
        internalType: "address",
        name: "_fallbackOracle",
        type: "address"
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
        name: "asset",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "source",
        type: "address"
      }
    ],
    name: "AssetSourceUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fallbackOracle",
        type: "address"
      }
    ],
    name: "FallbackOracleUpdated",
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
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "getAssetPrice",
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
        internalType: "address[]",
        name: "_assets",
        type: "address[]"
      }
    ],
    name: "getAssetsPrices",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getFallbackOracle",
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
        name: "_asset",
        type: "address"
      }
    ],
    name: "getSourceOfAsset",
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
        internalType: "address[]",
        name: "_assets",
        type: "address[]"
      },
      {
        internalType: "address[]",
        name: "_sources",
        type: "address[]"
      }
    ],
    name: "setAssetSources",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fallbackOracle",
        type: "address"
      }
    ],
    name: "setFallbackOracle",
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
  "0x60806040523480156200001157600080fd5b5060405162000e3a38038062000e3a833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82518660208202830111640100000000821117156200008c57600080fd5b82525081516020918201928201910280838360005b83811015620000bb578181015183820152602001620000a1565b5050505090500160405260200180516040519392919084640100000000821115620000e557600080fd5b908301906020820185811115620000fb57600080fd5b82518660208202830111640100000000821117156200011957600080fd5b82525081516020918201928201910280838360005b83811015620001485781810151838201526020016200012e565b50505050919091016040525060200151915060009050620001716001600160e01b03620001ed16565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620001cf816001600160e01b03620001f116565b620001e483836001600160e01b036200023b16565b50505062000387565b3390565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b805182511462000292576040805162461bcd60e51b815260206004820152601a60248201527f494e434f4e53495354454e545f504152414d535f4c454e475448000000000000604482015290519081900360640190fd5b60005b82518110156200038257818181518110620002ac57fe5b602002602001015160016000858481518110620002c557fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106200031e57fe5b60200260200101516001600160a01b03168382815181106200033c57fe5b60200260200101516001600160a01b03167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a360010162000295565b505050565b610aa380620003976000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806392bf2be01161006657806392bf2be0146100f45780639d23d9f21461011a578063abfd5310146101da578063b3596f071461029c578063f2fde38b146102d457610093565b8063170aee73146100985780636210308c146100c0578063715018a6146100e45780638da5cb5b146100ec575b600080fd5b6100be600480360360208110156100ae57600080fd5b50356001600160a01b03166102fa565b005b6100c861035e565b604080516001600160a01b039092168252519081900360200190f35b6100be61036d565b6100c861040f565b6100c86004803603602081101561010a57600080fd5b50356001600160a01b031661041e565b61018a6004803603602081101561013057600080fd5b81019060208101813564010000000081111561014b57600080fd5b82018360208201111561015d57600080fd5b8035906020019184602083028401116401000000008311171561017f57600080fd5b50909250905061043f565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101c65781810151838201526020016101ae565b505050509050019250505060405180910390f35b6100be600480360360408110156101f057600080fd5b81019060208101813564010000000081111561020b57600080fd5b82018360208201111561021d57600080fd5b8035906020019184602083028401116401000000008311171561023f57600080fd5b91939092909160208101903564010000000081111561025d57600080fd5b82018360208201111561026f57600080fd5b8035906020019184602083028401116401000000008311171561029157600080fd5b5090925090506104dc565b6102c2600480360360208110156102b257600080fd5b50356001600160a01b03166105a7565b60408051918252519081900360200190f35b6100be600480360360208110156102ea57600080fd5b50356001600160a01b0316610784565b61030261087c565b6000546001600160a01b03908116911614610352576040805162461bcd60e51b81526020600482018190526024820152600080516020610a4e833981519152604482015290519081900360640190fd5b61035b81610880565b50565b6002546001600160a01b031690565b61037561087c565b6000546001600160a01b039081169116146103c5576040805162461bcd60e51b81526020600482018190526024820152600080516020610a4e833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6001600160a01b03808216600090815260016020526040902054165b919050565b6060808267ffffffffffffffff8111801561045957600080fd5b50604051908082528060200260200182016040528015610483578160200160208202803683370190505b50905060005b838110156104d4576104b58585838181106104a057fe5b905060200201356001600160a01b03166105a7565b8282815181106104c157fe5b6020908102919091010152600101610489565b509392505050565b6104e461087c565b6000546001600160a01b03908116911614610534576040805162461bcd60e51b81526020600482018190526024820152600080516020610a4e833981519152604482015290519081900360640190fd5b6105a1848480806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506040805160208088028281018201909352878252909350879250869182918501908490808284376000920191909152506108ca92505050565b50505050565b6001600160a01b038082166000908152600160205260408120549091166105cc610a0f565b6001600160a01b0316836001600160a01b031614156105f657670de0b6b3a764000091505061043a565b6001600160a01b038116610686576002546040805163b3596f0760e01b81526001600160a01b0386811660048301529151919092169163b3596f07916024808301926020929190829003018186803b15801561065157600080fd5b505afa158015610665573d6000803e3d6000fd5b505050506040513d602081101561067b57600080fd5b5051915061043a9050565b6000816001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106c157600080fd5b505afa1580156106d5573d6000803e3d6000fd5b505050506040513d60208110156106eb57600080fd5b50519050600081131561070157915061043a9050565b6002546040805163b3596f0760e01b81526001600160a01b0387811660048301529151919092169163b3596f07916024808301926020929190829003018186803b15801561074e57600080fd5b505afa158015610762573d6000803e3d6000fd5b505050506040513d602081101561077857600080fd5b5051925061043a915050565b61078c61087c565b6000546001600160a01b039081169116146107dc576040805162461bcd60e51b81526020600482018190526024820152600080516020610a4e833981519152604482015290519081900360640190fd5b6001600160a01b0381166108215760405162461bcd60e51b8152600401808060200182810382526026815260200180610a286026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b8051825114610920576040805162461bcd60e51b815260206004820152601a60248201527f494e434f4e53495354454e545f504152414d535f4c454e475448000000000000604482015290519081900360640190fd5b60005b8251811015610a0a5781818151811061093857fe5b60200260200101516001600085848151811061095057fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106109a857fe5b60200260200101516001600160a01b03168382815181106109c557fe5b60200260200101516001600160a01b03167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a3600101610923565b505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220459526b5cb5c3612c5edea57a3be504809db7272306e254e532a1ced0759e4ea64736f6c63430006080033";
