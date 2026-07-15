// var aa='vamshi'//
// // console.log(aa)
// console.log(typeof(aa))//string
// console.log(typeof(bb))//number

// var cc="10";
// console.log(typeof(cc))//string

// let aa='vamshi';

// const names='vamshi';
// const a=10



console.log("Welcome to JavaScript!");
// This is a single line comment  
//comments are ignored b y javascript
//Temporarily disabling code

/*
This
is
a
multi-line
comment
*/

var studentName = "Raj";
console.log(studentName);

var studentName = "Raj";
studentName = "Kiran";//change value or reassignment

console.log(studentName);

let age = 25;

console.log(age);
age = 26;
console.log(age);

const country = "India";
country = "USA";
console.log(country)//const cant be reassigned

//`var` allows redeclaration and reassignment
var x = 10;
var x = 20; // Redeclaration is allowed
 x = 30;    // Reassignment is allowed
console.log(x); // 30

// `let` allows reassignment but not redeclaration
let y = 40;
// let y = 50; // Error: Cannot redeclare variable
y = 50;    // Reassignment is allowed
console.log(y); // 50

// `const` does not allow redeclaration or reassignment
const z = 60;
// const z=70
// z = 70; // Error: Assignment to constant variable
console.log(z); // 60

//naming rules
let firstName;

let age;

let student1;

let userName;

let $price;

let _count;

//incorrect naming rules
// let 1name;

// let first-name;

// let let;

// let class;



//Data types in javascript
var a= 13 //number,
var a=14
console.log(a)//
console.log(typeof(a))

const ab='sai';
console.log(ab)
console.log(typeof(ab))

const abc='10'
console.log(abc)
console.log(typeof(abc))

const aa=20
var b='sai kumar'//string
var c ="10"//

console.log(a);
console.log(typeof(a))//number
console.log(typeof(b)); //string
console.log(typeof(c)); //string

//boolean
let isLoggedIn = true;
console.log(isLoggedIn);

//undefined
let city;//variable exists but no value assigned
console.log(city);

//null
let phone = null;
console.log(phone);//intentionally empty value


//multiple variables data
let name = "Raj";
let age = 25;
let city = "Hyderabad";

console.log(name);
console.log(age);
console.log(city);

//template literals
let name = "Raj";
let age = 25;

console.log(`My name is ${name}`);

//user inputs
let name = prompt("Enter your name");

console.log(name);

let age = Number(prompt("Enter age"));

console.log(age);

console.log(typeof age);

//alert
alert("Welcome to JavaScript");

//confirm
let answer = confirm("Are you sure?");

console.log(answer);

let length = Number(prompt("Enter length"));
let width = Number(prompt("Enter width"));
let area = length * width;

console.log(area);
