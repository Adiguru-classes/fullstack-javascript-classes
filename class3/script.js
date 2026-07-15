// conditional statements

// if() {
//blck of code
// }else

// var x=10;
// alert('x value is 10');


// alert('welcome to browser')
// alert('hello')

var student="rajkumar";

if(student=="rajkumarr"){
    console.log("hello raj");
}
else{
console.log("wrong input");
}

let age = 18;  


if(age = 18){
   console.log("Eligible to Vote");
}
else{
   console.log('not eligible ');//not eligi"not leigibeble
}



// var a='hello world'
console.log('hello world')

var firstName = 'alina'
var secondname='vamshi';

if (firstName == 'alina') {
    console.log(firstName);//alina
}

// if else
if (firstName == 'alina') {
    console.log(firstName);
}
else {
    console.log('wrong input');
}


let parvezmarks = 1;

if(parvezmarks >= 90){
   console.log("Grade A");
}
else if(parvezmarks >= 70){
   console.log("Grade B");//Grade B
}
else if(parvezmarks >= 50){
   console.log("Grade C");
}
else{
   console.log("pass");

}

// Ternary operator (shortcut syntax for if & else)
// (condition) ? (its executed if it is true) : (its executed if it is false)
var stud='akshay';
var res=(stud=='akshay') ? ('hello akshay') : ('wrong input');
console.log(res)

var nums="10";
var results=(nums===10) ? ('correct number') : ('wrong number');
console.log(results)

var result = (firstName == 'alina') ? (firstName) : ('wrong input');
console.log(result);

console.log("10"+"10")

// else if
var lastName = 'xyz';

if (firstName == 'alex') {
    console.log(firstName);
}
else if (lastName == 'xyz') {
    console.log(lastName);
}
else if (firstName == 'alina') {
    console.log('correct');
}
else {
    console.log('wrong input');
}



// switch
var ag = "vamsi";
switch (ag) {// age === case numbers
    case 'raj':
        console.log('wrong input');
        break;

    case 'parvaz':
        console.log('wrong input');
        break;

    case 'vamsi':
        // alert('eligible');
        console.log('age matching')
        break;

    default:
        console.log('default case');
        break;
}

let value=11;
if(value%2==0){
    console.log('even')
}else{
    console.log('odd');
}

let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance) {
    console.log("Collect Cash");
}
else {
    console.log("Insufficient Balance");
}

//task
// Check whether a number is positive or negative.
// Check whether a number is even or odd.
// Check voting eligibility.
// Find the largest of two numbers.
// Find the largest of three numbers.
// Create a grade calculator.
// Check leap year (introduce as a challenge).
// Create a login system.
// ATM withdrawal validation.
// Create a simple calculator using switch.





