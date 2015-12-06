/**
 * http://usejsdoc.org/
 */
var http=require('http'),
    url=require('url'),
    querystring=require('querystring');

http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname,
	paramStr=url.parse(req.url).query,
	param=querystring.parse(paramStr);
	console.log(url.parse(req.url));
	if('/favicon.ico'==pathname) return;
	
	console.log(pathname);
	console.log(paramStr?paramStr:'no params');
	console.log(param);
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('success');
}).listen(1337);
console.log('server running at http://localhost:1337');