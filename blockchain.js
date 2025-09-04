const ethers = require('ethers');
require('dotenv').config();

// 1. Connect to Sepolia via Alchemy
const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);

// 2. Wallet (signer) for sending transactions
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// 3. Contract info
const contactAddress = process.env.CONTACT_ADDRESS;
const contractABI = [[
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "hashValue",
                "type": "string"
            }
        ],
        "name": "storeHash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "version",
                "type": "uint256"
            }
        ],
        "name": "getHashByVersion",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getLatestHash",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "recordHistory",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "version",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "hashValue",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]]

// 4. Create contract instance
export const contract = new ethers.Contract(contactAddress, contractABI, signer);

export async function storeHash(id, hashValue) {
  const tx = await contract.storeHash(id, hashValue);
  await tx.wait();
  console.log(`Hash stored for record ${id}: ${hashValue}`);
}

export async function getLatestHash(id) {
  const hash = await contract.getLatestHash(id);
  console.log(`Latest hash for record ${id}: ${hash}`);
  return hash;
}
