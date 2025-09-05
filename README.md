# Student Records on Ethereum Blockchain

This README file includes:

- Project overview
- Folder structure
- Tech stack
- Installation & setup steps (dependencies + .env)
- Guide to setting up Alchemy, Remix IDE, and MetaMask
- Where to find ABI, contract address, private key, and Alchemy URL

## PROJECT OVERVIEW

This project demonstrates how to securely store and verify student data using the Ethereum blockchain. It combines a MongoDB database with blockchain verification to ensure that data remains tamper-proof and trustworthy.

### Features

- Creates student record with name, email, and score (in percentage)
- Stores data in MongoDB and also hashes the data into Ethereum blockchain
- Each update in data generates a new version of the data hash under the same record ID
- Retrieves and verifies data integrity by comparing the MongoDB hash with the blockchain hash
- Detects any data tampering instantly

### Tech Stack

- Express.js - Backend framework for building REST APIs
- MongoDB - NoSQL database for storing student records
- Ethers.js - JavaScript library for interacting with Ethereum blockchain
- Alchemy - Ethereum node provider to connect with Sepolia Testnet
- Remix IDE - Smart contract development and deployment environment
- MetaMask - Ethereum wallet to manage accounts and sign transactions

### Advantages

- Immutability - Blockchain data cannot be altered once stored
- Security - Verifies every retrieval against blockchain data
- Tamper Detection - Unauthorized modifications are easily detected

## FOLDER STRUCTURE
```
project-root/
│── contracts/
│   └── blockchain.js        # Blockchain interaction logic
│
│── controllers/
│   └── studentController.js # Handles student-related API and sends it to studentService
│
│── models/
│   └── studentModel.js      # MongoDB schema for students
│
│── routes/
│   └── studentRoutes.js     # API routes for student operations
│
│── services/
│   └── studentService.js    # Interacts with the DB to post and get records
│
│── utils/
│   └── hash.js              # Utility functions for hashing
│
│── server.js                # Express server entry point
│── package.json             # Project dependencies
│── .env                     # Environment variables
```

## INSTALLATION AND SETUP

### Clone the repository:
```
git clone <repository-url>
cd <repository-folder>
```
### Install dependencies:

```
npm install express mongoose ethers dotenv nodemon
```

### Create a .env file in the project root and add the following:
```
ALCHEMY_URL=<your-alchemy-http-url>
PRIVATE_KEY=<your-metamask-private-key>
CONTRACT_ADDRESS=<your-deployed-contract-address>
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```
### Start the development server:
```
npm start
```
(Make sure you configure nodemon in package.json under scripts)

## ENVIRONMENT SETUP GUIDE

### 1. Alchemy Setup

- Go to Alchemy and create an account
- Create a new App on the Sepolia Testnet
- Copy the HTTP URL (this will be your ALCHEMY_URL in .env)

### 2. MetaMask Wallet

- Install MetaMask as a browser extension
- Create a wallet and save your private key securely
- Fund your wallet with Sepolia test ETH from a faucet
- Use this private key in your .env file under PRIVATE_KEY

### 3. Remix IDE and Smart Contract

- Open Remix IDE
- Write or import your smart contract (e.g., HashStore.sol)
- Compile and deploy the contract on Sepolia Testnet using MetaMask
- Copy the deployed contract address and place it in .env under CONTRACT_ADDRESS
- From the Remix compiler, copy the ABI array and replace the placeholder ABI inside contracts/blockchain.js

## CONCLUSION

Finish all these steps and you are good to go! :)

