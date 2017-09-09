function vowels(str){
	var a="";
	for(var i=0; i<=str.length; i++){
		if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i]==="u"){
			continue;
			}	
		
		else {
			a += str[i];
		}
	}
		return a;
	}

console.log(vowels("helloworls"));