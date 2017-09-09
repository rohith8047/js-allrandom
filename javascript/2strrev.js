function strrev(str1,str2){
var a="";
for(i=str1.length-1;i>=0;i--){
	a=a+str1[i];
}
var b="";
for(i=str2.length-1;i>=0;i--){
	b=b+str2[i];
}
return(a+b)
}

console.log(strrev("hello","world"));