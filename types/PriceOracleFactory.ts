/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { PriceOracle } from "./PriceOracle";

export class PriceOracleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<PriceOracle> {
    return super.deploy(overrides) as Promise<PriceOracle>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): PriceOracle {
    return super.attach(address) as PriceOracle;
  }
  connect(signer: Signer): PriceOracleFactory {
    return super.connect(signer) as PriceOracleFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceOracle {
    return new Contract(address, _abi, signerOrProvider) as PriceOracle;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "AssetPriceUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "EthPriceUpdated",
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
    inputs: [],
    name: "getEthUsdPrice",
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
        name: "_asset",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256"
      }
    ],
    name: "setAssetPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256"
      }
    ],
    name: "setEthUsdPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101d0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806351323f7214610051578063a0a8045e1461007f578063b3596f0714610099578063b951883a146100bf575b600080fd5b61007d6004803603604081101561006757600080fd5b506001600160a01b0381351690602001356100dc565b005b610087610137565b60408051918252519081900360200190f35b610087600480360360208110156100af57600080fd5b50356001600160a01b031661013d565b61007d600480360360208110156100d557600080fd5b5035610158565b6001600160a01b03821660008181526020818152604091829020849055815192835282018390524282820152517fce6e0b57367bae95ca7198e1172f653ea64a645c16ab586b4cefa9237bfc2d929181900360600190a15050565b60015490565b6001600160a01b031660009081526020819052604090205490565b60018190556040805182815242602082015281517fb4f35977939fa8b5ffe552d517a8ff5223046b1fdd3ee0068ae38d1e2b8d0016929181900390910190a15056fea264697066735822122099f53b6981b65616d385dea54c4fed741a17ffabec0ee5d7980361b3fcabd5b564736f6c63430006080033";
