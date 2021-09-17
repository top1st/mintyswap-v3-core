const hre = require('hardhat')
const { ethers, network } = hre
const { formatEther, parseEther } = ethers.utils
require('dotenv').config()

async function main() {
  // const [deployer] = await ethers.getSigners();
  const deployer = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.provider)

  const Factory = await hre.ethers.getContractFactory('UniswapV3Factory', deployer)
  const factory = await Factory.deploy()
  await factory.deployed()

  console.log(factory.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
