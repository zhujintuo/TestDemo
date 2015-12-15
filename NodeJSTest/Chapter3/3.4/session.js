var start=function(res,req)
{
}

function newSession(res){
	var chars="0123456789ABCDEFJHIJKLMNOPQRSTURWXTZabcdefghiklmnopqrstuvwxyz";
}

function cleanSession(){
	for(sess in sessions){
		if(sess.expires<Date()){
			delete sessions[sess.SESSID];
		}
	}
}

exports.start=start;