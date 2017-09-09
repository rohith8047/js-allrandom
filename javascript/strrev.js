function strrev(str){
var a="";
for(i=str.length-1;i>=0;i--){
	a=a+str[i];
}
return(a);
}

console.log(strrev("hello"));