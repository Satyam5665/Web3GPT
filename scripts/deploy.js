const hre = require("hardhat");

async function main() {
  const NAME = "GPTMembership";
  const SYMBOL = "GPT";

  const GPTMembership = await hre.ethers.getContractFactory("GPTMembership");

  const gptMembership = await GPTMembership.deploy(NAME, SYMBOL);

  await gptMembership.deployed();

  console.log("GPTMembership:" + gptMembership.address);
}

main().catch((err) => {
  console.log(err);
  process.exitCode = 1;
});
