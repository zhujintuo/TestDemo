var crypto=require('crypto');
var hmac=crypto.createHmac('md5','Karl');
hmac.update(new Buffer("Karl","binary"));
var encode=hmac.digest('hex');
console.log("binary data:"+encode);

var hmac=crypto.createHmac('md5','Karl');
hmac.update("karl");
var encode=hmac.digest('hex');
console.log("string:"+encode);

var hmac=crypto.createHmac('sha1','Karl');
hmac.update("Karl");
var encode=hmac.digest('hex');
console.log("string sha1:"+encode);