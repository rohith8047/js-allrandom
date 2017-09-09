function strslice(str){
	var a="";
	for(var i=0;i<7 && i!==str.length;i++){
		a+=str[i];
	}
	return a;
}

console.log(strslice("helloworld"));


