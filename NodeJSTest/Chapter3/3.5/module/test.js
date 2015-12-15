var encodeModule = require('./encode_module');
 
console.log('-----encode with hash-----');
var hashEncodeStr = encodeModule.encode('hash', 'md5', 'Karl', 'hex');
console.log(hashEncodeStr);
 
console.log('-----encode with hmac-----');
var hmacEncodeStr = encodeModule.encode('hmac', 'md5', 'Karl', 'hex', 'dan');
console.log(hmacEncodeStr);
 
console.log('-----encode with cipher-----');
var cipherEncodeStr = encodeModule.encode('cipher', 'aes-256-cbc', 'Karl', 'hex', 'salt_from', 'utf8');
console.log(cipherEncodeStr);
 
console.log('-----decode with decipher-----');
var decipherEncodeStr = encodeModule.decode('cipher', 'aes-256-cbc', cipherEncodeStr, 'utf8', 'salt_from', 'hex');
console.log(decipherEncodeStr);