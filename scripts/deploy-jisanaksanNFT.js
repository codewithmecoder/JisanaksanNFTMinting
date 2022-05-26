const hre = require("hardhat");

async function main() {
  const JisanaksanNFT = await hre.ethers.getContractFactory("JisanaksanNFT");
  const jisanaksanNFT = await JisanaksanNFT.deploy();

  await jisanaksanNFT.deployed();

  console.log("JisanaksanNFT deployed to:", jisanaksanNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
