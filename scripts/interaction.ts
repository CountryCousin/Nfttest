import { ethers } from "hardhat";

// CONTRACT DEPLOYED TO: 0xff957da4fcd8684702e900a6fc58b54255490a88
// OPENSEA LINK TO NFT: https://testnets.opensea.io/assets/rinkeby/0xff957da4fcd8684702e900a6fc58b54255490a88/0

async function main() {
  const Page = await ethers.getContractFactory("Vic");
  const PageNFT = Page.attach(
    "0xff957da4fcd8684702e900a6fc58b54255490a88"
  );

  const NFTName = await PageNFT.name();
  console.log(NFTName);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
