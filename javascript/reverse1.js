function sum(a,b){
	var String1 = "";
	var String2 = "";
   
    for (var i = a.length - 1; i >= 0; i--) { 
        String1 += a[i]; 
    }

    for (var i = b.length - 1; i >= 0; i--) { 
        String2 += b[i]; 
    }
    return String2+String1;
	
}
console.log(sum('hello','world'));