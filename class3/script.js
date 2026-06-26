// conditional statements

// if() {
//blck of code
// }

// var x=10;
// alert('x value is 10');


// alert('welcome to browser')
// alert('hello')

var student="rajkumar";

if(student=="raj"){
    console.log("hello raj");
}else{
console.log("wrong input");
}

let age = 16;  
if(age >= 18){
   console.log("Eligible to Vote");
}
else{
   console.log('not eligible ');//not eligi"not leigibeble
}



// var a='hello world'
console.log('hello world')

var firstName = 'alina';
if (firstName == 'alina') {
    console.log(firstName);
}

// if else
if (firstName == 'alina') {
    console.log(firstName);
}
else {
    console.log('wrong input');
}


let marks = 75;

if(marks >= 90){
   console.log("Grade A");
}
else if(marks >= 70){
   console.log("Grade B");//Grade B
}
else if(marks >= 50){
   console.log("Grade C");
}
else{
   console.log("Fail");

}

// Ternary operator (shortcut syntax for if & else)
// (condition) ? (its executed if it is true) : (its executed if it is false)
var stud='akshay'
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
var ag = 18;
switch (ag) {// age === case numbers
    case 12:
        console.log('wrong input');
        break;

    case 14:
        console.log('wrong input');
        break;

    case 18:
        // alert('eligible');
        console.log('age matching')
        break;

    default:
        console.log('default case');
        break;
}

//increments and decrements
let count = 5;
count++;
console.log(count);//6

let likes = 100;

likes++;
console.log(likes);//101

//multiple counts
let coun = 1;
coun++;
coun++;
coun++;
console.log(count);

let x=5;
x++;
console.log(x)

//decrement operateor
let y = 10;
y--;
console.log(count);


// Operators
// Arithmetic operator
var num = 10;
var numTwo = 20;
var add = num + numTwo;//addition
console.log(add)
var sub = numTwo - num;//subtraction
console.log(sub)
var mul = num * numTwo;//multiplication
console.log(mul)
var mod = numTwo % num;//modulus return remainder
console.log(mod)
var divi = numTwo / num;//dividion return quotient
console.log(divi)

// increment & decrement
sub++;//sub = sub + 1
add--;//add = add - 1

++sub;
--add;
console.log(add, sub, mul, mod, divi);

// post & pre increment/decrement
var j = ++mul;
// mul = mul + 1
// x = mul
console.log(x, mul);//201, 201

//
var k = mul++;
// y = mul;
// mul = mul + 1;
console.log(y, mul);

//
var numVal = num--;
// numVal = num;//10
// num = num - 1;//9

numVal++;//11
console.log(num, numVal);// 9 11

console.log(0 - 1);

//
var numResult = ++numTwo;
//numTwo = numTwo + 1;//21
//numResult = numTwo;//21

numResult++;//22
numTwo--;//20

console.log(numResult, numTwo);//22 20


// Opearor Precedence
//priority of opeartor in execution
//()
// * / -> first
// + - -> second 
// L -> R

var t = 10 + (70 / 10) * 9 - 10;
// 10 + 7 * 9 - 10;
// 10 + 63 - 10;
// 73 - 10
// 63

console.log(t);

// Assignment Operators
var val = 20;//assignmnet opearator

val += 5;//val = val + 5
val -= 10;//val = val - 10
val *= 2;//val = val * 2
val /= 10;//val = val / 10


// String Operators (+)
//concatenate
var str = 'hello';
var strVal = 'world';
console.log(str + ' ' + strVal);//\helloworld or hello world

//implicit coersion: automatic type conversion
console.log(20 + str);//20hello
console.log(20 * 20 + strVal);//400world
console.log(20+20+strVal)//40world
console.log(str + 20 + 20);//hello2020
console.log(20 + str + 20);//20hello20
console.log(strVal + 20);//world20
console.log("20" / 20);//NaN
console.log(Number(''));//0
console.log('20hello' / 20);//NaN
console.log('20' + 20);//2020
console.log(10 + '0');//100
console.log(2+'2'+70)

// Rules
//check for operator precedence
//operands
//numeric or non-numeric string
//result 

// Comparison Operator

var a = 9;
var b = '9';

console.log(a == b);//true-look for value
console.log(a === b);//false-look for value and datatype // strict checking
console.log(a != 10);//look for value
console.log(a !== '9');//look for value and datatype
console.log(a > 10);//false
console.log(9 < 10);//true
console.log(a >= 9);//
console.log(b <= 9);//

// Logical Operator
// && || !
console.log(a == b && a === b && a !== '9');//false if all conditions are true, then it return true otherwise false
console.log(b === a || a === b || a !== '9');//true fif anyone statement is true, then it is true otherwise false
console.log((a == b || a === b) && (a !== '9'));//
console.log(!(a == b));//


console.log(false == null);//false
console.log(true >  false);//1 > 0
console.log(undefined == null);//true
console.log((true + false) > 2);//

let value=11;
if(value%2==0){
    console.log('even')
}else{
    console.log('odd');
}


//task
//using conditional statements do few examples in javascript in number, string, boolean
//find the biggest of 3 numbers (89, 78, 56)
 
//take an numbers and check whether the value is even or odd
//given number is multiple of 3 or not e.g.10900
//check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not

//calculate simple interest ((p/r * t) * 100 )
//given year leap year or not (29 in feb): 2020
//0-6 display day week depending upon what user is entering (0-> sunday) : using switch


//ATM Machine and style it
//balance & query
//withdraw (amount)
//change pin
//mini statement
//saving & current acc.
//print receipt
//enter pin nunber


// Implicit coersion:
//practice questions on implicit coersion
 console.log('a' - 1);//nan
console.log('A' + 1);//A1
console.log(2 + '2' + '2');//222
console.log('hello' + 'world' + 89);//helloworld89
console.log('hello' - 'world' + 89);//nan
console.log('hello' + 78);//hello78
console.log('78' - 90 + '2');//nan
console.log(2 - '2' + 90);//nan
console.log(89 - '90' / 2);//nan
console.log(true == false) > 2 


// practice expression with operators
// operator precedence (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

// practice on pre & post

//
//var numVal = 30;
//var u = --numVal;
//numVal++;
//console.log(u);//
//console.log(numVal);//

//
//var a = 40;
//var b = a++;
//b++;
//console.log(a);//
//console.log(b);//

//
// var f = 50;
// var g = f++;
// g--;
// console.log(g);//
// console.log(f);//

//
//var val = 10;
//val++;
//var h = --val;
//h++;
//console.log(h);
//console.log(val);

//
//var num = 20;
// num++;
// var t = ++num;
// num++;
// --num
// console.log(num, t);

//
//var num = 10;
// --num;
// var y = ++num + 10;
// --y;
// console.log(y);
// console.log(num);

//
//var num = 30;
// ++num;
// num++ - 10;
// console.log(num)


//task 
let color = "red";

if(color === "green"){
   console.log("Go");
}
else if(color === "yellow"){
   console.log("Ready");
}
else{
   console.log("Stop");
}