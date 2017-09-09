function plndrom(str){
	var a="";
	for(i=str.length-1;i>=0;i--){
		a+=str[i];
	}
	if (a==str) {
		console.log("it is palindrom");
		return true;
		
	}
	else{
		console.log("it is not palindrom");
		return false;
		
	}
}

console.log(plndrom("neen"));