import { ethers } from "hardhat";

// CONTRACT DEPLOYED TO: 0xff957da4fcd8684702e900a6fc58b54255490a88
// OPENSEA LINK TO NFT: https://testnets.opensea.io/assets/rinkeby/0xff957da4fcd8684702e900a6fc58b54255490a88/0


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
