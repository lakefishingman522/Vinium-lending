/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from 'ethers';
import {Provider} from 'ethers/providers';
import {UnsignedTransaction} from 'ethers/utils/transaction';

import {TransactionOverrides} from '.';
import {ReserveLogic} from './ReserveLogic';

export class ReserveLogicFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ReserveLogic> {
    return super.deploy(overrides) as Promise<ReserveLogic>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ReserveLogic {
    return super.attach(address) as ReserveLogic;
  }
  connect(signer: Signer): ReserveLogicFactory {
    return super.connect(signer) as ReserveLogicFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ReserveLogic {
    return new Contract(address, _abi, signerOrProvider) as ReserveLogic;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'reserve',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'liquidityRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'stableBorrowRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'averageStableBorrowRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'variableBorrowRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'liquidityIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'variableBorrowIndex',
        type: 'uint256',
      },
    ],
    name: 'ReserveDataUpdated',
    type: 'event',
  },
];

const _bytecode =
  '0x611152610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100b35760003560e01c80638acb830b1161007b5780638acb830b146101bb578063bde2ece714610206578063c38f451a14610242578063ebc1add114610274578063f51fedb4146102bb578063fade6ba0146102e5576100b3565b80630c1282ce146100b85780632bf7f292146100f65780633373b4c01461012257806358ba22fa1461017b5780637d368d2e1461019e575b600080fd5b6100e4600480360360408110156100ce57600080fd5b50803590602001356001600160a01b0316610311565b60408051918252519081900360200190f35b81801561010257600080fd5b506101206004803603602081101561011957600080fd5b5035610376565b005b81801561012e57600080fd5b50610120600480360360c081101561014557600080fd5b508035906001600160a01b0360208201358116916040810135821691606082013581169160808101359160a09091013516610386565b6100e46004803603604081101561019157600080fd5b508035906020013561046e565b6100e4600480360360208110156101b457600080fd5b503561048f565b8180156101c757600080fd5b50610120600480360360a08110156101de57600080fd5b508035906001600160a01b03602082013516906040810135906060810135906080013561052d565b81801561021257600080fd5b506101206004803603608081101561022957600080fd5b5080359060208101359060408101359060600135610579565b81801561024e57600080fd5b506101206004803603604081101561026557600080fd5b50803590602001351515610605565b81801561028057600080fd5b506101206004803603608081101561029757600080fd5b508035906001600160a01b0360208201351690604081013590606001351515610697565b8180156102c757600080fd5b50610120600480360360208110156102de57600080fd5b50356106b2565b6100e4600480360360408110156102fb57600080fd5b50803590602001356001600160a01b03166106c2565b60008061031d846106f5565b90508061032e576000915050610370565b60006103496001600160a01b0385163063ffffffff6107f516565b905061036b61035e828463ffffffff61089f16565b839063ffffffff6108f916565b925050505b92915050565b600c01805460ff60d01b19169055565b60098601546001600160a01b0316156103d05760405162461bcd60e51b81526004018080602001828103825260248152602001806110b06024913960400191505060405180910390fd5b85546103e1576103de61093d565b86555b60048601546103f8576103f261093d565b60048701555b6009860180546001600160a01b03199081166001600160a01b0397881617909155600a87018054821695871695909517909455600b860180548516938616939093179092556008850155600c9093018054600160e01b9216939092169290921760ff60e01b19169190911760ff60e81b19169055565b60008260030154600014610486578260030154610488565b815b9392505050565b60008160020154600014156105215781600c0160009054906101000a90046001600160a01b03166001600160a01b03166334762ca56040518163ffffffff1660e01b815260040160206040518083038186803b1580156104ee57600080fd5b505afa158015610502573d6000803e3d6000fd5b505050506040513d602081101561051857600080fd5b50519050610528565b5060028101545b919050565b6105368561094d565b6000610551610544876106f5565b859063ffffffff61089f16565b905061056486828563ffffffff610a0516565b6105718686856000610a63565b505050505050565b600c840154600160d01b900460ff16156105c45760405162461bcd60e51b81526004018080602001828103825260288152602001806110d46028913960400191505060405180910390fd5b600c8401805460ff60d01b1916600160d01b17905560058401839055600684018290556007840181905583546105ff576105fc61093d565b84555b50505050565b600c820154600160c81b900460ff1615610666576040805162461bcd60e51b815260206004820152601a60248201527f5265736572766520697320616c726561647920656e61626c6564000000000000604482015290519081900360640190fd5b600c9091018054911515600160d81b0260ff60d81b1960ff60c81b19909316600160c81b1792909216919091179055565b6106a08461094d565b806105ff576105ff8484600085610a63565b600c01805460ff60c81b19169055565b60006104886106d0846106f5565b6106e96001600160a01b0385163063ffffffff6107f516565b9063ffffffff61089f16565b600061037082600b0160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561074a57600080fd5b505afa15801561075e573d6000803e3d6000fd5b505050506040513d602081101561077457600080fd5b5051600a840154604080516318160ddd60e01b815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b1580156107bd57600080fd5b505afa1580156107d1573d6000803e3d6000fd5b505050506040513d60208110156107e757600080fd5b50519063ffffffff61089f16565b600061080083610d6f565b1561081657506001600160a01b03811631610370565b826001600160a01b03166370a08231836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561086c57600080fd5b505afa158015610880573d6000803e3d6000fd5b505050506040513d602081101561089657600080fd5b50519050610370565b600082820183811015610488576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000600282046109358361092961091c876b033b2e3c9fd0803ce8000000610d94565b849063ffffffff61089f16565b9063ffffffff610ded16565b949350505050565b6b033b2e3c9fd0803ce800000090565b6000610958826106f5565b905080156109e1576001820154600c83015460009161098491600160a01b900464ffffffffff16610e2f565b835490915061099a90829063ffffffff610e7a16565b83556002830154600c8401546000916109c091600160a01b900464ffffffffff16610eb2565b90506109d9846004015482610e7a90919063ffffffff16565b600485015550505b50600c01805464ffffffffff60a01b1916600160a01b4264ffffffffff1602179055565b6000610a28610a1384610f01565b610a1c84610f01565b9063ffffffff6108f916565b90506000610a44610a3761093d565b839063ffffffff61089f16565b8554909150610a5a90829063ffffffff610e7a16565b90945550505050565b600a8401546040805163487b7e7960e11b815290516000926001600160a01b0316916390f6fcf2916004808301926020929190829003018186803b158015610aaa57600080fd5b505afa158015610abe573d6000803e3d6000fd5b505050506040513d6020811015610ad457600080fd5b505190506000610af36001600160a01b0386163063ffffffff6107f516565b9050610b07856001600160a01b0316610d6f565b15610b1f57610b1c813463ffffffff610f1716565b90505b600c860154600090819081906001600160a01b03166357e37af089610b5a89610b4e898d63ffffffff61089f16565b9063ffffffff610f1716565b8c600a0160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610baa57600080fd5b505afa158015610bbe573d6000803e3d6000fd5b505050506040513d6020811015610bd457600080fd5b5051600b8e0154604080516318160ddd60e01b815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b158015610c1d57600080fd5b505afa158015610c31573d6000803e3d6000fd5b505050506040513d6020811015610c4757600080fd5b5051604080516001600160e01b031960e088901b1681526001600160a01b039095166004860152602485019390935260448401919091526064830152608482018990525160a4808301926060929190829003018186803b158015610caa57600080fd5b505afa158015610cbe573d6000803e3d6000fd5b505050506040513d6060811015610cd457600080fd5b50805160208083015160409384015160018e0184905560038e0182905560028e018190558d5460048f015486518681529485018490528487018c905260608501839052608085019190915260a0840152935192965094509192506001600160a01b038a16917f131cf1f61e39fd78f61f07d78533f5b6c13629c80ef6965983e92c72efbaa4a4919081900360c00190a2505050505050505050565b6001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14919050565b600082610da357506000610370565b82820282848281610db057fe5b04146104885760405162461bcd60e51b81526004018080602001828103825260218152602001806110fc6021913960400191505060405180910390fd5b600061048883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610f59565b600080610e494264ffffffffff851663ffffffff610f1716565b90506000610e5d610a136301e13380610f01565b905061036b610e6a61093d565b6106e9878463ffffffff610e7a16565b60006104886b033b2e3c9fd0803ce8000000610929610e9f868663ffffffff610d9416565b6b019d971e4fe8401e740000009061089f565b600080610ecc4264ffffffffff851663ffffffff610f1716565b90506000610ee4856301e1338063ffffffff610ded16565b905061036b82610ef561091c61093d565b9063ffffffff610ffb16565b600061037082633b9aca0063ffffffff610d9416565b600061048883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611055565b60008183610fe55760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610faa578181015183820152602001610f92565b50505050905090810190601f168015610fd75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610ff157fe5b0495945050505050565b600060028206611017576b033b2e3c9fd0803ce8000000611019565b825b90506002820491505b8115610370576110328384610e7a565b9250600282061561104a576110478184610e7a565b90505b600282049150611022565b600081848411156110a75760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610faa578181015183820152602001610f92565b50505090039056fe526573657276652068617320616c7265616479206265656e20696e697469616c697a65645265736572766520697320616c726561647920656e61626c656420617320636f6c6c61746572616c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220a6cf4b703fd4b963f2a9ab15609b5318e5c9a06973d99e5e3de799807de3a90964736f6c63430006080033';
