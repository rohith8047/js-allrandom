
// 1

var x, y, z;
x = 5;
y = 6;
z = x + y;
console.log(z);

// 2

console.log(Date());

// 3
var a=(5 + 6) * 10;
console.log(a);

// 4
var x;
x=5;
console.log(x*10);


// 5
var x,y;
x=2+y;
y=x*3;
console.log(y);

// 6
var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
console.log(lastName);

// 7

txt1="hello";
txt2="hi";
console.log(txt1+=txt2)


var a="Im reborn to \"hunt\" again";
console.log(a);

// 8

var x = 'It\'s alright';
var y = "We are the so-called \"Vikings\" from the north.";
console.log(x+y);

// 9

var x = "John";
var y = new String("Jo");
console.log(x+y);

// 10
var x = "John";             
var y = new String("John");
console.log(x===y);

// 11

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12);
console.log(res);


// 12
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 4);
console.log(res);

// 13
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);


// 14
str = "Please visit Microsoft and Microsoft! Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n);

// 15
str = "Please visit Microsoft! Please visit Microsoft!";
var n = str.replace(/MICROSOFT/gi, "W3Schools");
console.log(n);

// 16
var text1 = "Hello World!";
var text2 = text1.toUpperCase();
console.log(text2);

// 17
var text1 = "Hello World!";
var text2 = text1.toLowerCase();
console.log(text2);


// 18
var str = "HELLO WORLD";
var y=str.charAt(7);   
console.log(y); 