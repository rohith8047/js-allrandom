function strpalend(str){
var a="";
for(i=str.length-1;i>=0;i--){
	a=a+str[i];
}
if(a==str){
	return "Yes! The given string " + str + " is palindrome";
	}
else{
	return "No! The given string " + str + " is not palindrome";
}	
}

console.log(strpalend("MADAM"));