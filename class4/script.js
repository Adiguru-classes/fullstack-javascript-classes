//increments and decrements
let count = 7;
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
console.log(coun);

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
console.log(add)//30
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


// var result=val+20;
// console.log(result)

val += 5;//val = val + 5
val -= 10;//val = val - 10
val *= 2;//val = val * 2
val /= 10;//val = val / 10
console.log(val)


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
console.log("20" / 20);//NaN-not a number
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

//AND operator
let age = 20;
let citizen = true;

if (age >= 18 && citizen) {
    console.log("Eligible");
}

//Or-operator
let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Dashboard Access");
}

//not operator
let isBlocked = false;
if (!isBlocked) {
    console.log("Access Granted");
}


console.log(false == null);//false
console.log(true >  false);//1 > 0
console.log(undefined == null);//true
console.log((true + false) > 2);//

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

