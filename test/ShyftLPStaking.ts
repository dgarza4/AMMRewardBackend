import { expect } from "chai";
import { ethers, waffle, network } from 'hardhat'
import { Ierc20, ShyftLpStaking, TestErc20 } from "../typechain";
import { shyftLPStakingTestFixture } from './shared/fixtures'

import { time } from '@openzeppelin/test-helpers'


const createFixtureLoader = waffle.createFixtureLoader

describe("Shyft Staking", function() {
  const [wallet, alice, bob, other] = waffle.provider.getWallets();
  
  let loadFixture: ReturnType<typeof createFixtureLoader>;
  let shyftLpStaking: ShyftLpStaking;
  let lpToken: TestErc20;
  let rewardToken: TestErc20;
  let shyftContract: TestErc20;

  const rewardPerBlock = 10;

  const timeTravel = async (seconds: Number) => {
    await network.provider.send("evm_increaseTime", [seconds])
    await network.provider.send("evm_mine") // this one will have 02:00 PM as its timestamp
  }

  before('create fixture loader', async () => {
    loadFixture = createFixtureLoader([wallet, other])
  })

  beforeEach('deploy contracts', async () => {
    ({ shyftLpStaking, lpToken, rewardToken, shyftContract } = await loadFixture(shyftLPStakingTestFixture))
    await shyftLpStaking.add(rewardPerBlock, lpToken.address, false);
    await lpToken.mint(alice.address, ethers.utils.parseEther('100'));
    await lpToken.mint(bob.address, ethers.utils.parseEther('200'));
    await shyftContract.mint(wallet.address, ethers.utils.parseEther('1000'));
    await shyftContract.connect(wallet).approve(shyftLpStaking.address, ethers.utils.parseEther('1000'));
    await shyftLpStaking.fund(wallet.address, ethers.utils.parseEther('1000'));
  })

  it("deposit/withdraw", async function() {
    await lpToken.connect(alice).approve(shyftLpStaking.address, ethers.utils.parseEther('100'));
    await lpToken.connect(bob).approve(shyftLpStaking.address, ethers.utils.parseEther('200'));
    await shyftLpStaking.connect(alice).deposit(0, 100);
    await shyftLpStaking.connect(bob).deposit(0, 200);
    expect(await lpToken.balanceOf(shyftLpStaking.address)).to.be.eq(300)
    expect(await shyftLpStaking.connect(alice).pendingShyftReward(0)).to.be.eq(10)
    expect(await shyftLpStaking.connect(bob).pendingShyftReward(0)).to.be.eq(0)

    await timeTravel(10);
    expect(await shyftLpStaking.connect(bob).pendingShyftReward(0)).to.be.eq(Math.trunc(10 / 3 * 2))
    expect(await shyftLpStaking.connect(alice).pendingShyftReward(0)).to.be.eq(Math.trunc(10 / 3 + 10))

    // harvest check

    await shyftLpStaking.connect(alice).harvest(0);
    expect(await shyftContract.balanceOf(alice.address)).to.be.eq(Math.trunc(10));
    await timeTravel(10);
    await shyftLpStaking.connect(bob).harvest(0);
    expect(await shyftContract.balanceOf(bob.address)).to.be.eq(6);
    
    await shyftLpStaking.connect(alice).withdraw(0, 100);
    expect(await lpToken.balanceOf(alice.address)).to.be.eq(ethers.utils.parseEther('100'));

  });
});
