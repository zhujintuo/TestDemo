var crypto=require('crypto');

var hash=crypto.createHash('md5');
hash.update(new Buffer("Karl","binary"));
var encode=hash.digest('hex');
console.log("binary data:"+encode);

var hash=crypto.createHash('md5');
hash.update("Karl");
var encode=hash.digest('hex');
console.log("string:"+encode);

var hash=crypto.createHash("sha1");
hash.update("Karl");
var encode=hash.digest('hex');
console.log("string sha1:"+encode);