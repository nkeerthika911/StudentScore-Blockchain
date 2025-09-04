const { ethers } = require('ethers');
require('dotenv').config();

// 1. Connect to Sepolia via Alchemy
const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);

// 2. Wallet (signer) for sending transactions
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// 3. Contract info
const contactAddress = process.env.CONTRACT_ADDRESS;
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
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
                "internalType": "string",
                "name": "id",
                "type": "string"
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
                "internalType": "string",
                "name": "",
                "type": "string"
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
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
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
    }
]

// 4. Create contract instance
const contract = new ethers.Contract(contactAddress, contractABI, signer);

const storeHash = async (id, hashValue) => {
    const tx = await contract.storeHash(id, hashValue);
    await tx.wait();
    console.log(`Hash stored for record ${id} ${hashValue}`);
    return tx;
}

const getLatestHash = async (id) => {
    // console.log('getLatestHash:', id);
    const hash = await contract.getLatestHash(id.toString());
    console.log(`Latest hash for record ${id}: ${hash}`);
    return hash;
}

module.exports = {storeHash, getLatestHash };