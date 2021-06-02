import { expect } from "chai";
import { ethers, waffle } from 'hardhat'
import { shyftLPStakingTestFixture } from './shared/fixtures'

const createFixtureLoader = waffle.createFixtureLoader

describe("Shyft Staking", function() {
  const [wallet, alice, bob, other] = waffle.provider.getWallets();
  let loadFixture: ReturnType<typeof createFixtureLoader>;

  before('create fixture loader', async () => {
    loadFixture = createFixtureLoader([wallet, other])
  })

  beforeEach('deploy contracts', async () => {
    const { shyftLpStaking } = await loadFixture(shyftLPStakingTestFixture)
  })

  it("deposit/withdrea", async function() {

  });
});
