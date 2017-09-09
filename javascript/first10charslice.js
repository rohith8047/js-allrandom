function first10(str){
	if(str.length>10){
		var a=str.slice(9);
	}
	else{
		a=str;
	}
return a;
}
console.log(first10("asd"));