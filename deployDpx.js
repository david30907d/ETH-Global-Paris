const hre = require("hardhat");
const {sushiMiniChefV2Address, sushiPid, sushiSwapDpxLpTokenAddress} = require("../test/utils");
async function main() {
  const dpxSLP = await hre.ethers.getContractAt('IERC20Uniswap', sushiSwapDpxLpTokenAddress);
  const DpxArbitrumVault = await hre.ethers.getContractFactory("DpxArbitrumVault");
  let dpxArbitrumVault = await DpxArbitrumVault.deploy(dpxSLP.address, sushiMiniChefV2Address, sushiPid);
  console.log('Deployed dpxArbitrumVault Address:', dpxArbitrumVault.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })