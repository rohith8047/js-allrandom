var car={type:"fiat",model:"500",color:"white"};
console.log(car.type +"is a old car"+ car.model+"is 19s car ");

// 2

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName + " is " + person.age + " years old.");

// 3
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

// 4

var person = {firstName:"John", lastName:"Doe"};
console.log(person.firstName + person.lastName);

// 5
var cars = new Array("audi","volvo","bmw");
console.log(cars[0]);

// 6
var bus =[
' kaveri ',
'kesineni',
'garuda'
];
console.log(bus.toString());

// 7
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1]);