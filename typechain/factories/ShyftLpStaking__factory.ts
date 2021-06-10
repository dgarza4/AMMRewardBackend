/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ShyftLpStaking } from "../ShyftLpStaking";

export class ShyftLpStaking__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _shyftContractAddress: string,
    _shyftPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ShyftLpStaking> {
    return super.deploy(
      _shyftContractAddress,
      _shyftPerBlock,
      _startBlock,
      overrides || {}
    ) as Promise<ShyftLpStaking>;
  }
  getDeployTransaction(
    _shyftContractAddress: string,
    _shyftPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _shyftContractAddress,
      _shyftPerBlock,
      _startBlock,
      overrides || {}
    );
  }
  attach(address: string): ShyftLpStaking {
    return super.attach(address) as ShyftLpStaking;
  }
  connect(signer: Signer): ShyftLpStaking__factory {
    return super.connect(signer) as ShyftLpStaking__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShyftLpStaking {
    return new Contract(address, _abi, signerOrProvider) as ShyftLpStaking;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_shyftContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_shyftPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ContractFunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shyftPerBlock",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "fund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLockedShyftView",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
    ],
    name: "getLpSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
    ],
    name: "harvest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
    ],
    name: "pendingShyftReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "perBlockShyftAllocated",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accShyftPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_shyftPerBlock",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shyftTokenContract",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620030253803806200302583398181016040528101906200003791906200016e565b6000620000496200013860201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806004819055505050506200024a565b600033905090565b600081519050620001518162000216565b92915050565b600081519050620001688162000230565b92915050565b6000806000606084860312156200018457600080fd5b6000620001948682870162000140565b9350506020620001a78682870162000157565b9250506040620001ba8682870162000157565b9150509250925092565b6000620001d182620001ec565b9050919050565b6000620001e582620001c4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200022181620001d8565b81146200022d57600080fd5b50565b6200023b816200020c565b81146200024757600080fd5b50565b612dcb806200025a6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806364482f79116100b857806393f1a40b1161007c57806393f1a40b14610303578063ab185cd314610334578063cb20fc4314610364578063ddc6326214610382578063e2bbb158146103b2578063f2fde38b146103ce57610137565b806364482f7914610273578063715018a61461028f5780637b1837de146102995780638da5cb5b146102b55780638dbb1e3a146102d357610137565b806351eb05a6116100ff57806351eb05a6146101e35780635312ea8e146101ff5780635a4a7f031461021b5780635ecbbf9814610239578063630b5ba11461026957610137565b8063081e3eda1461013c5780631526fe271461015a5780631eaaa0451461018d578063441a3e70146101a957806348cd4cb1146101c5575b600080fd5b6101446103ea565b6040516101519190612a45565b60405180910390f35b610174600480360381019061016f919061225a565b6103f7565b6040516101849493929190612850565b60405180910390f35b6101a760048036038101906101a291906122e8565b610457565b005b6101c360048036038101906101be9190612337565b6105c9565b005b6101cd61080d565b6040516101da9190612a45565b60405180910390f35b6101fd60048036038101906101f8919061225a565b610813565b005b6102196004803603810190610214919061225a565b6109c0565b005b610223610b15565b6040516102309190612835565b60405180910390f35b610253600480360381019061024e919061225a565b610b3b565b6040516102609190612a45565b60405180910390f35b610271610c3d565b005b61028d60048036038101906102889190612373565b610c70565b005b610297610d50565b005b6102b360048036038101906102ae91906121f5565b610e8a565b005b6102bd61112e565b6040516102ca91906127ba565b60405180910390f35b6102ed60048036038101906102e89190612337565b611157565b6040516102fa9190612a45565b60405180910390f35b61031d600480360381019061031891906122ac565b611174565b60405161032b929190612a60565b60405180910390f35b61034e6004803603810190610349919061225a565b6111a5565b60405161035b9190612a45565b60405180910390f35b61036c6113d6565b6040516103799190612a45565b60405180910390f35b61039c6004803603810190610397919061225a565b611488565b6040516103a99190612a45565b60405180910390f35b6103cc60048036038101906103c79190612337565b6115f1565b005b6103e860048036038101906103e391906121cc565b61183d565b005b6000600280549050905090565b6002818154811061040757600080fd5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b61045f6119e6565b73ffffffffffffffffffffffffffffffffffffffff1661047d61112e565b73ffffffffffffffffffffffffffffffffffffffff16146104d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ca906129a5565b60405180910390fd5b80156104e2576104e1610c3d565b5b600060045443116104f5576004546104f7565b435b9050600260405180608001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018381526020016000815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030155505050505050565b600060028381548110610605577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060040201905060006003600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905082816000015410156106b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a790612a05565b60405180910390fd5b6106b984610813565b600061070382600101546106f564e8d4a510006106e7876003015487600001546119ee90919063ffffffff16565b611a0490919063ffffffff16565b611a1a90919063ffffffff16565b905061070f3382611a30565b610726848360000154611a1a90919063ffffffff16565b826000018190555061076064e8d4a51000610752856003015485600001546119ee90919063ffffffff16565b611a0490919063ffffffff16565b82600101819055506107b733858560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611c589092919063ffffffff16565b843373ffffffffffffffffffffffffffffffffffffffff167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568866040516107fe9190612a45565b60405180910390a35050505050565b60045481565b60006002828154811061084f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906004020190508060020154431161087057506109bd565b60008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108cf91906127ba565b60206040518083038186803b1580156108e757600080fd5b505afa1580156108fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091f9190612283565b9050600081141561093a5743826002018190555050506109bd565b600061094a836002015443611157565b905060006109658460010154836119ee90919063ffffffff16565b90506109a76109948461098664e8d4a51000856119ee90919063ffffffff16565b611a0490919063ffffffff16565b8560030154611cde90919063ffffffff16565b8460030181905550438460020181905550505050505b50565b6000600282815481106109fc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060040201905060006003600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050610ab33382600001548460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611c589092919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05958360000154604051610afe9190612a45565b60405180910390a360008160000181905550505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060028381548110610b78577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906004020190508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610be591906127ba565b60206040518083038186803b158015610bfd57600080fd5b505afa158015610c11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c359190612283565b915050919050565b6000600280549050905060005b81811015610c6c57610c5b81610813565b80610c6590612c81565b9050610c4a565b5050565b610c786119e6565b73ffffffffffffffffffffffffffffffffffffffff16610c9661112e565b73ffffffffffffffffffffffffffffffffffffffff1614610cec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce3906129a5565b60405180910390fd5b8015610cfb57610cfa610c3d565b5b8160028481548110610d36577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906004020160010181905550505050565b610d586119e6565b73ffffffffffffffffffffffffffffffffffffffff16610d7661112e565b73ffffffffffffffffffffffffffffffffffffffff1614610dcc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc3906129a5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610efa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef190612925565b60405180910390fd5b60008111610f3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3490612985565b60405180910390fd5b80600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401610f9991906127ba565b60206040518083038186803b158015610fb157600080fd5b505afa158015610fc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe99190612283565b101561102a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611021906129c5565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8330846040518463ffffffff1660e01b8152600401611089939291906127d5565b602060405180830381600087803b1580156110a357600080fd5b505af11580156110b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110db9190612231565b508173ffffffffffffffffffffffffffffffffffffffff167f0939f6f4877faf071412e527bc4c6d0bd65ad077e52b57334f7765265647a7f1826040516111229190612a45565b60405180910390a25050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600061116c8383611a1a90919063ffffffff16565b905092915050565b6003602052816000526040600020602052806000526040600020600091509150508060000154908060010154905082565b600080600283815481106111e2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060040201905060006003600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008260030154905060008360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016112ae91906127ba565b60206040518083038186803b1580156112c657600080fd5b505afa1580156112da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112fe9190612283565b9050836002015443118015611314575060008114155b15611387576000611329856002015443611157565b905060006113448660010154836119ee90919063ffffffff16565b90506113826113738461136564e8d4a51000856119ee90919063ffffffff16565b611a0490919063ffffffff16565b85611cde90919063ffffffff16565b935050505b6113cb83600101546113bd64e8d4a510006113af8688600001546119ee90919063ffffffff16565b611a0490919063ffffffff16565b611a1a90919063ffffffff16565b945050505050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161143391906127ba565b60206040518083038186803b15801561144b57600080fd5b505afa15801561145f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114839190612283565b905090565b600080600283815481106114c5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060040201905060006003600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506115336000610813565b6115776040518060400160405280600c81526020017f63757272656e74426c6f636b0000000000000000000000000000000000000000815250438460030154611cf4565b6000816000015411156115e55760006115ce82600101546115c064e8d4a510006115b2876003015487600001546119ee90919063ffffffff16565b611a0490919063ffffffff16565b611a1a90919063ffffffff16565b90506115da3382611a30565b8093505050506115ec565b6000925050505b919050565b6116306040518060400160405280600c81526020017f63757272656e74426c6f636b000000000000000000000000000000000000000081525043611d93565b60006002838154811061166c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060040201905060006003600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506116d984610813565b60008160000154111561173e576000611730826001015461172264e8d4a51000611714876003015487600001546119ee90919063ffffffff16565b611a0490919063ffffffff16565b611a1a90919063ffffffff16565b905061173c3382611a30565b505b61178f3330858560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611e2f909392919063ffffffff16565b6117a6838260000154611cde90919063ffffffff16565b81600001819055506117e064e8d4a510006117d2846003015484600001546119ee90919063ffffffff16565b611a0490919063ffffffff16565b8160010181905550833373ffffffffffffffffffffffffffffffffffffffff167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a158560405161182f9190612a45565b60405180910390a350505050565b6118456119e6565b73ffffffffffffffffffffffffffffffffffffffff1661186361112e565b73ffffffffffffffffffffffffffffffffffffffff16146118b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b0906129a5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611929576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192090612945565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600081836119fc9190612b42565b905092915050565b60008183611a129190612b11565b905092915050565b60008183611a289190612b9c565b905092915050565b60003090506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401611a9291906127ba565b60206040518083038186803b158015611aaa57600080fd5b505afa158015611abe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae29190612283565b905080831115611ba157600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85836040518363ffffffff1660e01b8152600401611b4992919061280c565b602060405180830381600087803b158015611b6357600080fd5b505af1158015611b77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b9b9190612231565b50611c52565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040518363ffffffff1660e01b8152600401611bfe92919061280c565b602060405180830381600087803b158015611c1857600080fd5b505af1158015611c2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c509190612231565b505b50505050565b611cd98363a9059cbb60e01b8484604051602401611c7792919061280c565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611eb8565b505050565b60008183611cec9190612abb565b905092915050565b611d8e838383604051602401611d0c939291906128e7565b6040516020818303038152906040527f969cdd03000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611f7f565b505050565b611e2b8282604051602401611da99291906128b7565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611f7f565b5050565b611eb2846323b872dd60e01b858585604051602401611e50939291906127d5565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611eb8565b50505050565b6000611f1a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fa89092919063ffffffff16565b9050600081511115611f7a5780806020019051810190611f3a9190612231565b611f79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f7090612a25565b60405180910390fd5b5b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6060611fb78484600085611fc0565b90509392505050565b606082471015612005576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ffc90612965565b60405180910390fd5b61200e856120d4565b61204d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612044906129e5565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161207691906127a3565b60006040518083038185875af1925050503d80600081146120b3576040519150601f19603f3d011682016040523d82523d6000602084013e6120b8565b606091505b50915091506120c88282866120e7565b92505050949350505050565b600080823b905060008111915050919050565b606083156120f757829050612147565b60008351111561210a5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161213e9190612895565b60405180910390fd5b9392505050565b60008135905061215d81612d39565b92915050565b60008135905061217281612d50565b92915050565b60008151905061218781612d50565b92915050565b60008135905061219c81612d67565b92915050565b6000813590506121b181612d7e565b92915050565b6000815190506121c681612d7e565b92915050565b6000602082840312156121de57600080fd5b60006121ec8482850161214e565b91505092915050565b6000806040838503121561220857600080fd5b60006122168582860161214e565b9250506020612227858286016121a2565b9150509250929050565b60006020828403121561224357600080fd5b600061225184828501612178565b91505092915050565b60006020828403121561226c57600080fd5b600061227a848285016121a2565b91505092915050565b60006020828403121561229557600080fd5b60006122a3848285016121b7565b91505092915050565b600080604083850312156122bf57600080fd5b60006122cd858286016121a2565b92505060206122de8582860161214e565b9150509250929050565b6000806000606084860312156122fd57600080fd5b600061230b868287016121a2565b935050602061231c8682870161218d565b925050604061232d86828701612163565b9150509250925092565b6000806040838503121561234a57600080fd5b6000612358858286016121a2565b9250506020612369858286016121a2565b9150509250929050565b60008060006060848603121561238857600080fd5b6000612396868287016121a2565b93505060206123a7868287016121a2565b92505060406123b886828701612163565b9150509250925092565b6123cb81612bd0565b82525050565b60006123dc82612a89565b6123e68185612a9f565b93506123f6818560208601612c4e565b80840191505092915050565b61240b81612c2a565b82525050565b600061241c82612a94565b6124268185612aaa565b9350612436818560208601612c4e565b61243f81612d28565b840191505092915050565b6000612457602383612aaa565b91507f66756e643a206d75737420706173732076616c6964205f66726f6d206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006124bd602683612aaa565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612523602683612aaa565b91507f416464726573733a20696e73756666696369656e742062616c616e636520666f60008301527f722063616c6c00000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612589603183612aaa565b91507f66756e643a20657870656374696e67206120706f736974697665206e6f6e207a60008301527f65726f205f616d6f756e742076616c75650000000000000000000000000000006020830152604082019050919050565b60006125ef602083612aaa565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b600061262f604183612aaa565b91507f66756e643a20657870656374656420616e20616464726573732074686174206360008301527f6f6e7461696e7320656e6f75676820536879667420666f72205472616e73666560208301527f72000000000000000000000000000000000000000000000000000000000000006040830152606082019050919050565b60006126bb601d83612aaa565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b60006126fb601283612aaa565b91507f77697468647261773a206e6f7420676f6f6400000000000000000000000000006000830152602082019050919050565b600061273b602a83612aaa565b91507f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008301527f6f742073756363656564000000000000000000000000000000000000000000006020830152604082019050919050565b61279d81612c20565b82525050565b60006127af82846123d1565b915081905092915050565b60006020820190506127cf60008301846123c2565b92915050565b60006060820190506127ea60008301866123c2565b6127f760208301856123c2565b6128046040830184612794565b949350505050565b600060408201905061282160008301856123c2565b61282e6020830184612794565b9392505050565b600060208201905061284a6000830184612402565b92915050565b60006080820190506128656000830187612402565b6128726020830186612794565b61287f6040830185612794565b61288c6060830184612794565b95945050505050565b600060208201905081810360008301526128af8184612411565b905092915050565b600060408201905081810360008301526128d18185612411565b90506128e06020830184612794565b9392505050565b600060608201905081810360008301526129018186612411565b90506129106020830185612794565b61291d6040830184612794565b949350505050565b6000602082019050818103600083015261293e8161244a565b9050919050565b6000602082019050818103600083015261295e816124b0565b9050919050565b6000602082019050818103600083015261297e81612516565b9050919050565b6000602082019050818103600083015261299e8161257c565b9050919050565b600060208201905081810360008301526129be816125e2565b9050919050565b600060208201905081810360008301526129de81612622565b9050919050565b600060208201905081810360008301526129fe816126ae565b9050919050565b60006020820190508181036000830152612a1e816126ee565b9050919050565b60006020820190508181036000830152612a3e8161272e565b9050919050565b6000602082019050612a5a6000830184612794565b92915050565b6000604082019050612a756000830185612794565b612a826020830184612794565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000612ac682612c20565b9150612ad183612c20565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612b0657612b05612cca565b5b828201905092915050565b6000612b1c82612c20565b9150612b2783612c20565b925082612b3757612b36612cf9565b5b828204905092915050565b6000612b4d82612c20565b9150612b5883612c20565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612b9157612b90612cca565b5b828202905092915050565b6000612ba782612c20565b9150612bb283612c20565b925082821015612bc557612bc4612cca565b5b828203905092915050565b6000612bdb82612c00565b9050919050565b60008115159050919050565b6000612bf982612bd0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612c3582612c3c565b9050919050565b6000612c4782612c00565b9050919050565b60005b83811015612c6c578082015181840152602081019050612c51565b83811115612c7b576000848401525b50505050565b6000612c8c82612c20565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612cbf57612cbe612cca565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b612d4281612bd0565b8114612d4d57600080fd5b50565b612d5981612be2565b8114612d6457600080fd5b50565b612d7081612bee565b8114612d7b57600080fd5b50565b612d8781612c20565b8114612d9257600080fd5b5056fea2646970667358221220b45df7fdbb0b5d967a3f4a5b5c7b4bd9572f23a9dda9b9b423bd1ef50ca18fc464736f6c63430008000033";
