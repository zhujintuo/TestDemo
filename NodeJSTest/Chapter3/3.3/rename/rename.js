/**
 * http://usejsdoc.org/
 */


var BASE_DIR=__dirname,
    fs=require('fs');
fs.rename(BASE_DIR+'/zhujintuo.txt', BASE_DIR+'/Karl.txt',function(err){
	if(err) throw err;
	console.log('renamed complete');
});