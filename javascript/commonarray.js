function unicvalue(arr1,arr2) {
	var out=[];
	for(var i=0;i<=arr1.length;i++){
		for(var j=0;j<=arr2.length;j++){
			if(arr1[i]==arr2[j]) {
				out.push(arr1[i]);
			}
		}
	}
	return out;
}
var arr1=[2,5,3,1,6,8,9];
var arr2=[4,2,7,6,10];
console.log(unicvalue(arr1,arr2));