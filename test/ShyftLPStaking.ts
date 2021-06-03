import { expect } from "chai";
import { ethers, waffle } from 'hardhat'
import { Ierc20, ShyftLpStaking, TestErc20 } from "../typechain";
import { shyftLPStakingTestFixture } from './shared/fixtures'

const { time } = require('@openzeppelin/test-helpers');

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
    await time.increase(seconds)
  }

  before('create fixture loader', async () => {
    loadFixture = createFixtureLoader([wallet, other])
  })

  beforeEach('deploy contracts', async () => {
    ({ shyftLpStaking, lpToken, rewardToken, shyftContract } = await loadFixture(shyftLPStakingTestFixture))
    await shyftLpStaking.add(rewardPerBlock, lpToken.address, false);
    await lpToken.mint(alice.address, ethers.utils.parseEther('100000'));
    await lpToken.mint(bob.address, ethers.utils.parseEther('100000'));
  })

  it("deposit/withdraw", async function() {
    await lpToken.connect(alice).approve(shyftLpStaking.address, ethers.utils.parseEther('10000'));
    await shyftLpStaking.connect(alice).deposit(0, 100);
    await shyftLpStaking.connect(bob).deposit(0, 200);
    expect((await shyftContract.balanceOf(shyftLpStaking.address))).to.be.eq(300)
  });
});
