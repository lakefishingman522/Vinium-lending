/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { LendingPoolLiquidationManager } from "./LendingPoolLiquidationManager";

export class LendingPoolLiquidationManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LendingPoolLiquidationManager> {
    return super.deploy(overrides || {}) as Promise<
      LendingPoolLiquidationManager
    >;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingPoolLiquidationManager {
    return super.attach(address) as LendingPoolLiquidationManager;
  }
  connect(signer: Signer): LendingPoolLiquidationManagerFactory {
    return super.connect(signer) as LendingPoolLiquidationManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolLiquidationManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolLiquidationManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_collateral",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_purchaseAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_liquidatedCollateralAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_liquidator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_receiveAToken",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "LiquidationCall",
    type: "event"
  },
  {
    inputs: [],
    name: "addressesProvider",
    outputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
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
        name: "_collateral",
        type: "address"
      },
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_purchaseAmount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_receiveAToken",
        type: "bool"
      }
    ],
    name: "liquidationCall",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "reservesList",
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
  "0x6080604052600060015534801561001557600080fd5b5060016000556122608061002a6000396000f3fe6080604052600436106100335760003560e01c8062a718a9146100385780634fe7a6e5146100fb578063c72c4d1014610141575b600080fd5b61007c600480360360a081101561004e57600080fd5b506001600160a01b038135811691602081013582169160408201351690606081013590608001351515610156565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156100bf5781810151838201526020016100a7565b50505050905090810190601f1680156100ec5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561010757600080fd5b506101256004803603602081101561011e57600080fd5b50356109b6565b604080516001600160a01b039092168252519081900360200190f35b34801561014d57600080fd5b506101256109dd565b6001600160a01b03808516600090815260376020908152604080832089851684528184209488168452603890925282209192606092610193611fb8565b6001600160a01b03891660009081526038602090815260409182902082518083018452905481526039805484518185028101850190955280855261028c948e946037949391929083018282801561021357602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101f5575b505060355460408051631f94a27560e31b815290516001600160a01b03909216945063fca513a893506004808201935060209291829003018186803b15801561025b57600080fd5b505afa15801561026f573d6000803e3d6000fd5b505050506040513d602081101561028557600080fd5b50516109ec565b6101c08601819052670de0b6b3a76400001193506102d0925050505760046040518060600160405280602881526020016121d96028913995509550505050506109ac565b6006830154604080516370a0823160e01b81526001600160a01b038c81166004830152915191909216916370a08231916024808301926020929190829003018186803b15801561031f57600080fd5b505afa158015610333573d6000803e3d6000fd5b505050506040513d602081101561034957600080fd5b50518152600061035b60058501610ec9565b11801561038a5750600983015460408051602081019091528354815261038a91600160d01b900460ff16610ede565b151561020082018190526103c05760026040518060600160405280602a8152602001612185602a913995509550505050506109ac565b6103ca8985610ef6565b6040830152602082018190521580156103e557506040810151155b156104125760036040518060600160405280602a8152602001612201602a913995509550505050506109ac565b61043f61138861043383604001518460200151610ff990919063ffffffff16565b9063ffffffff61105a16565b6060820181905288116104525787610458565b80606001515b60808201819052815161047391859187918f918f9190611088565b6101a083018190526101808301919091526080820151111561049b576101a081015160808201525b60068301546001600160a01b03166101e0820152866105785760008b6001600160a01b03166370a08231836101e001516040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561051157600080fd5b505afa158015610525573d6000803e3d6000fd5b505050506040513d602081101561053b57600080fd5b5051610180830151909150811015610576576005604051806060016040528060338152602001612152603391399650965050505050506109ac565b505b61058184611313565b608081015161059b9085908c90600063ffffffff6113cb16565b8060800151816040015110610624576008840154608082015160408051632770a7eb60e21b81526001600160a01b038d81166004830152602482019390935290519190921691639dc29fac91604480830192600092919082900301818387803b15801561060757600080fd5b505af115801561061b573d6000803e3d6000fd5b5050505061072b565b60088401546040808301518151632770a7eb60e21b81526001600160a01b038d8116600483015260248201929092529151921691639dc29fac9160448082019260009290919082900301818387803b15801561067f57600080fd5b505af1158015610693573d6000803e3d6000fd5b505050506007840154604082015160808301516001600160a01b0390921691639dc29fac918c916106c391611712565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561071257600080fd5b505af1158015610726573d6000803e3d6000fd5b505050505b86156107b3576101e08101516101808201516040805163f866c31960e01b81526001600160a01b038d8116600483015233602483015260448201939093529051919092169163f866c31991606480830192600092919082900301818387803b15801561079657600080fd5b505af11580156107aa573d6000803e3d6000fd5b505050506108e3565b6107bc83611313565b6101808101516107d89084908d9060009063ffffffff6113cb16565b806101e001516001600160a01b0316633edb7cb88a8361018001516040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561084257600080fd5b505af1158015610856573d6000803e3d6000fd5b5050506101e082015161018083015160408051634efecaa560e01b81523360048201526024810192909252516001600160a01b039092169250634efecaa59160448083019260209291908290030181600087803b1580156108b657600080fd5b505af11580156108ca573d6000803e3d6000fd5b505050506040513d60208110156108e057600080fd5b50505b6006840154608082015161090f916001600160a01b038d8116923392919091169063ffffffff61175416565b60808082015161018083015160408051928352602083019190915233828201528915156060830152429282019290925290516001600160a01b03808c16928d821692918f16917f54343dd5791108d018f6fb8def2c14d746f777c51e9924962237813a527528709181900360a00190a46000604051806040016040528060098152602001684e6f206572726f727360b81b81525095509550505050505b9550959350505050565b603981815481106109c357fe5b6000918252602090912001546001600160a01b0316905081565b6035546001600160a01b031681565b60008060008060006109fc612052565b610a05896117b4565b15610a225750600094508493508392508291506000199050610ebc565b600060e08201525b87518160e001511015610e0f5760e0810151610a4d908a9063ffffffff6117b916565b610a5657610dff565b878160e0015181518110610a6657fe5b6020908102919091018101516001600160a01b031661020083018190526000908152908b905260409020610a9c600582016117c9565b6080860181905260c08601929092525060a0840191909152600a0a6020808401919091526102008301516040805163b3596f0760e01b81526001600160a01b0392831660048201529051918b169263b3596f0792602480840193829003018186803b158015610b0a57600080fd5b505afa158015610b1e573d6000803e3d6000fd5b505050506040513d6020811015610b3457600080fd5b5051825260a082015115801590610b5c575060e0820151610b5c908b9063ffffffff610ede16565b15610c92576006810154604080516370a0823160e01b81526001600160a01b038f81166004830152915191909216916370a08231916024808301926020929190829003018186803b158015610bb057600080fd5b505afa158015610bc4573d6000803e3d6000fd5b505050506040513d6020811015610bda57600080fd5b50516040830181905260208301518351600092610c0d9291610c019163ffffffff61181016565b9063ffffffff61186916565b610120840151909150610c26908263ffffffff610ff916565b61012084015260a0830151610c5890610c4690839063ffffffff61181016565b6101808501519063ffffffff610ff916565b61018084015260c0830151610c8a90610c7890839063ffffffff61181016565b6101a08501519063ffffffff610ff916565b6101a0840152505b60e0820151610ca8908b9063ffffffff6118ab16565b15610dfd576007810154604080516370a0823160e01b81526001600160a01b038f81166004830152915191909216916370a08231916024808301926020929190829003018186803b158015610cfc57600080fd5b505afa158015610d10573d6000803e3d6000fd5b505050506040513d6020811015610d2657600080fd5b505160608301526008810154604080516370a0823160e01b81526001600160a01b038f811660048301529151610dbe9392909216916370a0823191602480820192602092909190829003018186803b158015610d8157600080fd5b505afa158015610d95573d6000803e3d6000fd5b505050506040513d6020811015610dab57600080fd5b505160608401519063ffffffff610ff916565b6060830181905260208301518351610df692610de49291610c019163ffffffff61181016565b6101408401519063ffffffff610ff916565b6101408301525b505b60e0810180516001019052610a2a565b600081610120015111610e23576000610e3e565b610120810151610180820151610e3e9163ffffffff61186916565b610180820152610120810151610e55576000610e70565b6101208101516101a0820151610e709163ffffffff61186916565b6101a08201819052610120820151610140830151610e8d926118bb565b61010082018190526101208201516101408301516101808401516101a090940151919850965091945090925090505b9550955095509550959050565b5460101c650fffffff0001600160f01b031690565b815160016002830281019190911c1615155b92915050565b6007810154604080516370a0823160e01b81526001600160a01b0385811660048301529151600093849316916370a08231916024808301926020929190829003018186803b158015610f4757600080fd5b505afa158015610f5b573d6000803e3d6000fd5b505050506040513d6020811015610f7157600080fd5b50516008840154604080516370a0823160e01b81526001600160a01b038881166004830152915191909216916370a08231916024808301926020929190829003018186803b158015610fc257600080fd5b505afa158015610fd6573d6000803e3d6000fd5b505050506040513d6020811015610fec57600080fd5b5051909590945092505050565b600082820183811015611053576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000611053612710610c01611075868663ffffffff61181016565b60026127105b049063ffffffff610ff916565b60355460408051631f94a27560e31b81529051600092839283926001600160a01b039092169163fca513a891600480820192602092909190829003018186803b1580156110d457600080fd5b505afa1580156110e8573d6000803e3d6000fd5b505050506040513d60208110156110fe57600080fd5b5051905061110a6120f3565b816001600160a01b031663b3596f07896040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561116057600080fd5b505afa158015611174573d6000803e3d6000fd5b505050506040513d602081101561118a57600080fd5b5051604080830191909152805163b3596f0760e01b81526001600160a01b03898116600483015291519184169163b3596f0791602480820192602092909190829003018186803b1580156111dd57600080fd5b505afa1580156111f1573d6000803e3d6000fd5b505050506040513d602081101561120757600080fd5b5051606082015261121a60058b016117c9565b60c0850152602084015250611233905060058a016118f3565b60a082018190526020820151604083015161128c926104339161125e91600a0a63ffffffff61181016565b610c018560c00151600a0a6112808c886060015161181090919063ffffffff16565b9063ffffffff61181016565b608082018190528510156112fb578493506112f481602001516112e86112c68460c00151600a0a856060015161181090919063ffffffff16565b610c018560a00151600a0a6112808a886040015161181090919063ffffffff16565b9063ffffffff61190416565b9250611306565b806080015193508592505b5050965096945050505050565b600061131e8261192a565b905080156113a7576001820154600983015460009161134a91600160a01b900464ffffffffff16611a2a565b835490915061136090829063ffffffff611a9f16565b83556002830154600984015460009161138691600160a01b900464ffffffffff16611ad8565b905061139f846004015482611a9f90919063ffffffff16565b600485015550505b50600901805464ffffffffff60a01b1916600160a01b4264ffffffffff1602179055565b60078401546040805163487b7e7960e11b815290516000926001600160a01b0316916390f6fcf2916004808301926020929190829003018186803b15801561141257600080fd5b505afa158015611426573d6000803e3d6000fd5b505050506040513d602081101561143c57600080fd5b50516006860154604080516370a0823160e01b81526001600160a01b0392831660048201529051929350600092918716916370a0823191602480820192602092909190829003018186803b15801561149357600080fd5b505afa1580156114a7573d6000803e3d6000fd5b505050506040513d60208110156114bd57600080fd5b50516009870154909150600090819081906001600160a01b03166357e37af0896114fd896114f1898d63ffffffff610ff916565b9063ffffffff61171216565b8c60070160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561154d57600080fd5b505afa158015611561573d6000803e3d6000fd5b505050506040513d602081101561157757600080fd5b505160088e0154604080516318160ddd60e01b815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b1580156115c057600080fd5b505afa1580156115d4573d6000803e3d6000fd5b505050506040513d60208110156115ea57600080fd5b5051604080516001600160e01b031960e088901b1681526001600160a01b039095166004860152602485019390935260448401919091526064830152608482018990525160a4808301926060929190829003018186803b15801561164d57600080fd5b505afa158015611661573d6000803e3d6000fd5b505050506040513d606081101561167757600080fd5b50805160208083015160409384015160018e0184905560038e0182905560028e018190558d5460048f015486518681529485018490528487018c905260608501839052608085019190915260a0840152935192965094509192506001600160a01b038a16917f131cf1f61e39fd78f61f07d78533f5b6c13629c80ef6965983e92c72efbaa4a4919081900360c00190a2505050505050505050565b600061105383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611bee565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526117ae908590611c85565b50505050565b511590565b9051600360029092021c16151590565b54670fffffffffff000019811691601082901c650fffffff0001600160f01b031691602081901c630fff0001600160e01b03169160309190911c610f01600160d01b031690565b60008261181f57506000610ef0565b8282028284828161182c57fe5b04146110535760405162461bcd60e51b81526004018080602001828103825260218152602001806121316021913960400191505060405180910390fd5b600061105383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611d3b565b9051600160029092021c16151590565b6000826118cb5750600019611053565b6118eb836118df868563ffffffff61105a16565b9063ffffffff611da016565b949350505050565b5460301c610f01600160d01b031690565b6000600282046118eb83610c0161191d87612710611810565b849063ffffffff610ff916565b6000610ef08260080160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561197f57600080fd5b505afa158015611993573d6000803e3d6000fd5b505050506040513d60208110156119a957600080fd5b50516007840154604080516318160ddd60e01b815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b1580156119f257600080fd5b505afa158015611a06573d6000803e3d6000fd5b505050506040513d6020811015611a1c57600080fd5b50519063ffffffff610ff916565b600080611a444264ffffffffff851663ffffffff61171216565b90506000611a6d611a586301e13380611dbf565b611a6184611dbf565b9063ffffffff611dd516565b9050611a96611a7a611df8565b611a8a878463ffffffff611a9f16565b9063ffffffff610ff916565b95945050505050565b60006110536b033b2e3c9fd0803ce8000000610c01611ac4868663ffffffff61181016565b60026b033b2e3c9fd0803ce800000061107b565b600080611af24264ffffffffff851663ffffffff61171216565b905080611b0957611b01611df8565b915050610ef0565b6000611b1c82600163ffffffff61171216565b9050600060028311611b2f576000611b40565b611b4083600263ffffffff61171216565b90506000611b58876301e1338063ffffffff61186916565b90506000611b6c828063ffffffff611a9f16565b90506000611b80828463ffffffff611a9f16565b90506000611b9d6002610c01856112808b8b63ffffffff61181016565b90506000611bbc6006610c01856112808a818e8e63ffffffff61181016565b9050611bdf81611a8a8481611bd78a8e63ffffffff61181016565b611a8a611df8565b9b9a5050505050505050505050565b60008184841115611c7d5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c42578181015183820152602001611c2a565b50505050905090810190601f168015611c6f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6060611cda826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611e089092919063ffffffff16565b805190915015611d3657808060200190516020811015611cf957600080fd5b5051611d365760405162461bcd60e51b815260040180806020018281038252602a8152602001806121af602a913960400191505060405180910390fd5b505050565b60008183611d8a5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611c42578181015183820152602001611c2a565b506000838581611d9657fe5b0495945050505050565b6000600282046118eb83610c0161191d87670de0b6b3a7640000611810565b6000610ef082633b9aca0063ffffffff61181016565b6000600282046118eb83610c0161191d876b033b2e3c9fd0803ce8000000611810565b6b033b2e3c9fd0803ce800000090565b60606118eb84846000856060611e1d85611f7f565b611e6e576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611ead5780518252601f199092019160209182019101611e8e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611f0f576040519150601f19603f3d011682016040523d82523d6000602084013e611f14565b606091505b50915091508115611f285791506118eb9050565b805115611f385780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611c42578181015183820152602001611c2a565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906118eb575050151592915050565b604051806102200160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000600281111561201757fe5b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b60405180610260016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581525090565b6040518060e0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7754686572652069736e277420656e6f756768206c697175696469747920617661696c61626c6520746f206c697175696461746554686520636f6c6c61746572616c2063686f73656e2063616e6e6f74206265206c6971756964617465645361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565644865616c746820666163746f72206973206e6f742062656c6f7720746865207468726573686f6c645573657220646964206e6f7420626f72726f7720746865207370656369666965642063757272656e6379a2646970667358221220cd838e55d0ec86c7d078e6d2367f7588dfe773f11a72e64c75bfc9b1ba38215d64736f6c63430006080033";
