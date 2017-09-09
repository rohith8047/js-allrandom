function first10(str){
var a="";
if(str.length>10){
	for(i=0;i<10;i++){
	  a=a+str[i];
	}
	}
else{
	for(i=0;i<str.length;i++){
	  a=a+str[i];
	}
}
return a;
}
console.log(first10("asdfkjghbldfnhglkjgdhjlkfdglh"));