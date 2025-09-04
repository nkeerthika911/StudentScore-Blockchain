// utils/hash.js
const crypto = require('crypto');

function generateSHA256(data) {
    // Convert object to string if it's an object
    console.log('Type:', typeof data);
    const stringData = typeof data === 'object' ? JSON.stringify(data) : data.toString();
    
    // Create SHA256 hash
    const hash = crypto.createHash('sha256').update(stringData).digest('hex');
    
    return hash;
}

module.exports = { generateSHA256 };
