const createHash = require('crypto');

export function generateSHA256(data) {
  return createHash("sha256").update(JSON.stringify(data)).digest("hex");
}
