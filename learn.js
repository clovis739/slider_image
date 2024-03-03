let a ="clovis"
let y = a
 
let sum = y + " " + "nad ngush"+ " " + y
// console.log(sum)
r= 30
t=4
num1 = t+r
sun_val = r/t
sum_val = sun_val  + num1
console.log(num1 + " " + sum_val + " " + sun_val)
val =(a===y)
console.log(val)

// document.getElementById("#time").innerHTML = 10*27;

myFuncton();

let pet  ;
function myFuncton() {
    let petName = "clovis"
    console.log(petName)
}

function anotherFuncton() {
    let petName = "tycriz"
    console.log(petName)
    console.log(pet)
}
anotherFuncton();
console.log(pet)
// anotherFuncton();

let num = 10;
console.log(num);
function fun() {
	console.log(num);
}
fun(); // calling the function
// Changing the content of array is
// possible in cost array
const arr1 = ["pankaj", "sumit", "chandan", "ajay"];

console.log(arr1.toString());

arr1[2] = "Narayan"; // possible
console.log("  ")
console.log(test);
var test = 12;

console.log(arr1.toString());

var test = 12;
function foo(){
	var test = 100;
	console.log(test);
}
foo();
console.log(test);

let now = 10
// now++
now--;
console.log(now);
y &= a
console.log(y)

function* innerGenerator() { 
	yield 1; 
	yield 2; 
	yield 3; 
} 

function* outerGenerator() { 
	yield* innerGenerator(); 
} 

const generator = outerGenerator(); 

console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value);

let person = {
    firstName: 'clovis',
    lastName: "tycriz",
    phone: 12345687
}
console.log(delete person.phone)
console.log(person)
console.log(" ")
let arr = [1,2,3,4,5]
console.log(delete arr[0]);
console.log(delete arr[1]);
console.log(arr)

function Func1() { 
	console.log('one'); 
	// return 'one'; 
} 
function Func2() { 
	console.log('two'); 
	// return 'two'; 
} 
function Func3() { 
	console.log('three'); 
	return 'three'; 
} 

// Three expressions are 
// given at one place 
let x = (Func1(), Func2(), Func3()); 

console.log(x);

for (let a =0, b=6; a<=5; a++, b--){
    console.log(a,b);
}
// function(x) {return x};

(function (x) {return x});

function gfg() {
	// AND short circuit
	console.log(false && true)
	console.log(true && true)
	// OR short circuit
	console.log(true || false)
	console.log(false || true)
	console.log(false || false)
}
gfg();
// Since first operand is false and operator
// is AND, Evaluation stops and false is
// returned.
console.log(true && true && true && false)

// Whole expression will be evaluated.
console.log(" ")
console.log(true && true && true)
console.log(" ")
let arr2 = [1,2,3,4,5,6]
for(let value of arr2){
    console.log(value)
}

const courses = { 

	// Declaring a courses object 
	firstCourse: "C++ STL", 
	secondCourse: "DSA Self Paced", 
	thirdCourse: "CS Core Subjects"
}; 

// Creating a new empty object with 
// prototype set to courses object 
const student1 = Object.create(courses); 

// Defining student1 properties and methods 
student1.id = 123; 
student1.firstName = "Prakhar"; 
student1.showEnrolledCourses = function () { 
	console.log(courses); 
} 

// Iterating over all properties of 
// student1 object 
for (let prop in student1) { 
	console.log(prop + " -> "

    + student1[prop]); 
}


// try {
//    alert("welcome to my page");
// }
// catch(err){
//     console.log(err)
// }

// obj_prop: new Date(setTimeout)

// func_prop: function(){
// 	console.log("welcome")
// }
// console.log(obj_prop.toLocaleTimeString())
// """"Using constructors to create function and objects"""

function vehicle(name, marker, engine){
	this.name = name;
	this.marker = marker;
	this.engine = engine;
}

// new keyword to create an object
let car =  new vehicle("Gt", "BMW", "199css");
// property accessors
console.log(car.name);
console.log(car.marker);
console.log(car['engine']);

let car1 = {
	name: 'GTA',
	maker: 'BMW',
	engine: '199ccs',
	start: function(){
		console.log('starting the engine....');
	}
};
// car1.start();

// adding property to the object
car1.brakesType = 'All Disc';
console.log(car1);
console.log(car1.name);
// adding a stop function()later to the object

car1.stop = function(){
	console.log('stopping the engine applying brakes to the engine');
}
car1.start();
car1.stop()

const coder = {
	isStudying : false,
	printIntroduction : function(){
		console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
	}
};
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = 'yes';
me.printIntroduction();
