const {ethers} = require('ethers');
require('dotenv').config();

const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);

async function main() {
    const blockNumber = await provider.getBlockNumber();
    console.log(`Current Ethereum block number: ${blockNumber}`);
}

main()