function acount(str){

var j=0;
for(i=0;i<str.length;i++){
	if((str[i]=="a") || (str[i]=="A")){
	j=j+1;		
	}
	
}
return "Count of A or a is:"+j;
}

console.log(acount("hAelaloawAorald"));