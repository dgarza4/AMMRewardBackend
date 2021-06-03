/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestErc20 } from "../TestErc20";

export class TestErc20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    amountToMint: BigNumberish,
    overrides?: Overrides
  ): Promise<TestErc20> {
    return super.deploy(amountToMint, overrides || {}) as Promise<TestErc20>;
  }
  getDeployTransaction(
    amountToMint: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(amountToMint, overrides || {});
  }
  attach(address: string): TestErc20 {
    return super.attach(address) as TestErc20;
  }
  connect(signer: Signer): TestErc20__factory {
    return super.connect(signer) as TestErc20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestErc20 {
    return new Contract(address, _abi, signerOrProvider) as TestErc20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToMint",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010e1380380620010e1833981810160405281019062000037919062000145565b6200004933826200005060201b60201c565b5062000296565b6000816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200009e9190620001e6565b905081811015620000e6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000dd90620001b3565b60405180910390fd5b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b6000815190506200013f816200027c565b92915050565b6000602082840312156200015857600080fd5b600062000168848285016200012e565b91505092915050565b600062000180601083620001d5565b91507f6f766572666c6f772062616c616e6365000000000000000000000000000000006000830152602082019050919050565b60006020820190508181036000830152620001ce8162000171565b9050919050565b600082825260208201905092915050565b6000620001f38262000243565b9150620002008362000243565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200023857620002376200024d565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b620002878162000243565b81146200029357600080fd5b50565b610e3b80620002a66000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063095ea7b31461006757806323b872dd1461009757806340c10f19146100c757806370a08231146100e3578063a9059cbb14610113578063dd62ed3e14610143575b600080fd5b610081600480360381019061007c91906109f5565b610173565b60405161008e9190610bcf565b60405180910390f35b6100b160048036038101906100ac91906109a6565b610265565b6040516100be9190610bcf565b60405180910390f35b6100e160048036038101906100dc91906109f5565b6105dc565b005b6100fd60048036038101906100f89190610941565b6106b5565b60405161010a9190610caa565b60405180910390f35b61012d600480360381019061012891906109f5565b6106cd565b60405161013a9190610bcf565b60405180910390f35b61015d6004803603810190610158919061096a565b6108f2565b60405161016a9190610caa565b60405180910390f35b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516102539190610caa565b60405180910390a36001905092915050565b600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561032a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032190610c0a565b60405180910390fd5b82816103369190610d2c565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508084826104069190610cd6565b1015610447576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043e90610bea565b60405180910390fd5b83816104539190610cd6565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508481101561051b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051290610c8a565b60405180910390fd5b84816105279190610d2c565b6000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040516105c69190610caa565b60405180910390a3600193505050509392505050565b6000816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106289190610cd6565b90508181101561066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066490610c2a565b60405180910390fd5b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b60006020528060005260406000206000915090505481565b6000806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610754576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074b90610c4a565b60405180910390fd5b82816107609190610d2c565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508084826107f29190610cd6565b1015610833576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082a90610c6a565b60405180910390fd5b838161083f9190610cd6565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516108de9190610caa565b60405180910390a360019250505092915050565b6001602052816000526040600020602052806000526040600020600091509150505481565b60008135905061092681610dd7565b92915050565b60008135905061093b81610dee565b92915050565b60006020828403121561095357600080fd5b600061096184828501610917565b91505092915050565b6000806040838503121561097d57600080fd5b600061098b85828601610917565b925050602061099c85828601610917565b9150509250929050565b6000806000606084860312156109bb57600080fd5b60006109c986828701610917565b93505060206109da86828701610917565b92505060406109eb8682870161092c565b9150509250925092565b60008060408385031215610a0857600080fd5b6000610a1685828601610917565b9250506020610a278582860161092c565b9150509250929050565b610a3a81610d72565b82525050565b6000610a4d601a83610cc5565b91507f6f766572666c6f772062616c616e636520726563697069656e740000000000006000830152602082019050919050565b6000610a8d601683610cc5565b91507f616c6c6f77616e636520696e73756666696369656e74000000000000000000006000830152602082019050919050565b6000610acd601083610cc5565b91507f6f766572666c6f772062616c616e6365000000000000000000000000000000006000830152602082019050919050565b6000610b0d601483610cc5565b91507f696e73756666696369656e742062616c616e63650000000000000000000000006000830152602082019050919050565b6000610b4d601a83610cc5565b91507f726563697069656e742062616c616e6365206f766572666c6f770000000000006000830152602082019050919050565b6000610b8d601883610cc5565b91507f756e646572666c6f772062616c616e63652073656e64657200000000000000006000830152602082019050919050565b610bc981610d9e565b82525050565b6000602082019050610be46000830184610a31565b92915050565b60006020820190508181036000830152610c0381610a40565b9050919050565b60006020820190508181036000830152610c2381610a80565b9050919050565b60006020820190508181036000830152610c4381610ac0565b9050919050565b60006020820190508181036000830152610c6381610b00565b9050919050565b60006020820190508181036000830152610c8381610b40565b9050919050565b60006020820190508181036000830152610ca381610b80565b9050919050565b6000602082019050610cbf6000830184610bc0565b92915050565b600082825260208201905092915050565b6000610ce182610d9e565b9150610cec83610d9e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d2157610d20610da8565b5b828201905092915050565b6000610d3782610d9e565b9150610d4283610d9e565b925082821015610d5557610d54610da8565b5b828203905092915050565b6000610d6b82610d7e565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610de081610d60565b8114610deb57600080fd5b50565b610df781610d9e565b8114610e0257600080fd5b5056fea2646970667358221220cae32289027d321c18b0ee84c320b504e006dda26d848b24f8e3133abc9b400264736f6c63430008000033";