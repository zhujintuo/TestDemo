/**
 * http://usejsdoc.org/
 */

var http=require('http'),
querystring=require('querystring');

http.createServer(function(req,res){
	var postData='';
	req.setEncoding('utf8');
	req.addListener('data',function(pstDataChunk){
		postData+=pstDataChunk;
	});
	
	req.addListener('end',function(){
		var param=querystring.parse(postData);
		console.log(param);
	});
	
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World\n');
	
}).listen(1337,'127.0.0.1');