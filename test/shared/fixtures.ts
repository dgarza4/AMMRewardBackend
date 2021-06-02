import { ethers } from "hardhat";
import { BigNumber } from 'ethers'

import {
    ShyftLpStaking,
    TestToken
  } from '../../typechain'

interface TokensFixture {
    token0: TestToken
}

async function tokensFixture(): Promise<TokensFixture> {
    const tokenFactory = await ethers.getContractFactory('TestERC20')
    const token0 = (await tokenFactory.deploy(BigNumber.from(2).pow(255))) as TestToken
    return { token0 }
}

export const shyftLPStakingTestFixture = async function() {
    const shyftLPStakingFactory = await ethers.getContractFactory('ShyftLPStaking')
    const { token0: shyftContract } = await tokensFixture()
    const shyftLpStaking = (await shyftLPStakingFactory.deploy(shyftContract, 10, 5000000)) as ShyftLpStaking

    return { shyftLpStaking }
}