import { ethers } from "hardhat";

async function main() {
  const Page = await ethers.getContractFactory("Vic");
  const PageNFT = await Page.deploy();

  await PageNFT.deployed();

  console.log(` NFT deployed to ${PageNFT.address}`); 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
