const { ethers } = require("hardhat");



const main = async () => {



  const Market = await ethers.getContractFactory('NFTMarket')
  const market = await Market.deploy()
  await market.deployed()
  const marketAddress = market.address

  console.log("tx hash market:", market.deployTransaction.hash)
  console.log("NftMarket deployed to: ", marketAddress)

  const NFT = await ethers.getContractFactory("NFT")
  const nft = await NFT.deploy(marketAddress)
  await nft.deployed()
  const nftContractAddress = nft.address
  console.log("tx hash market: ", nft.deployTransaction.hash)
  console.log("nft address:", nftContractAddress)
  

}

main()