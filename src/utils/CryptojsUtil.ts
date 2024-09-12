// Include CryptoJS library (make sure to include it in your project)
// You can download it from: https://cryptojs.gitbook.io/docs/
// We can download it into our project through below npm install commands
// npm install crypto-js
// npm install --save-dev @types/crypto-js

let CryptoJSUtil = require("crypto-js")

// Get the SALT from the system environment variable
const SALT = process.env.SALT || "defaultSalt";

//Encryption function
export function encrypt(text: string) {
    const cipherText = CryptoJSUtil.AES.encrypt(text, SALT).toString();
    return cipherText;
}

//Decryption function
export function decrypt(cipherText: string) {
    const bytes = CryptoJSUtil.AES.decrypt(cipherText, SALT);
    const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
    return originalText;
}