// Number
var num = 20;//number
var numTwo = 20.36;//decimal number
console.log(num, numTwo);


var name = "str  kumar";
console.log(name.length);//3

var name = "strkumar";
console.log(name.toUpperCase());//str

var name = "str";
console.log(name.toLowerCase());//str

var name = "str";

console.log(name)
console.log(name.trim());//"str"

var city = "Delhi";
console.log(city.charAt(4));

var city = "Hyderabad";
console.log(city.indexOf("e"));

var city = "Hyderabad";
console.log(city.includes("der"));//true

var city = "Hyderabad";
console.log(city.startsWith("Hyd"));//true

var city = "Hyderabad";
console.log(city.replace("Hyder", "parvez"));//ahmadabad

var city = "Hyderabad";
console.log(city.slice(2, 3));//Hyder

var firstName = "str";
var lastName = "Kumar";
console.log(firstName + lastName);

var z='hello world'
console.log(z)//strkumar(no space between them)

var first = "str";
var last = "Kumar";
console.log(first.concat(" ", last));//"str kumar"(adding spaces)

//how to check datatype for a variable
console.log(typeof (num));//typeof is method
console.log(typeof (numTwo));
console.log(num);

//convert string to number
console.log(parseInt("89.88"));//return the integer number part
console.log(parseFloat('89.678'));//return the number
console.log(Number('89hj'));//NaN
console.log(Number('uehfij'));//NaN
console.log(typeof (NaN));//number
console.log(Number(' '));//0

//convert number to string
var ramesh=30;
console.log(ramesh);//30
// console.log(ramesh.tostring());'30'
// console.log(num.tostring());//'20'
console.log(num.toFixed(4));//return a string value with fixed decimal places '20.00'
console.log(num.toExponential(3));//return a string withe exponenetial values (with specified decimal places)


//string

var firstName = 'ali na';//leading spaces
var lastName = 'joe';
console.log(firstName);
console.log(firstName.length);//return the length of the string

// var firstName = ' ali na ';//leading and trailing spaces
// var lastName = "joe";

//numeric string
// '89998'

//alpha string 
// 'hfgkhkj'

//alpha-numeric string 
// 'fijeij8989'

//non-numeric
// 'hgbfh' or '&$%^&**/(){}:"'

// properties & methods
//length 
console.log(firstName.length);//return the length of the string

// index/position starts from 0
var str = 'front-end _ development: html, css, js  are basic technol     ogies of front-end develop end end end end    ';
console.log(str.length);//
console.log(str.indexOf('html'));//to find index value of a word
console.log(str.indexOf('hello'));//if word is not present, then it return -1

//searching in a string
console.log(str.indexOf('end',3));//return the index/position value of the first occurence of the specified word
//optional, we can pass second parameter as index/position value(then it will start searching after that position value)

console.log(str.lastIndexOf('end'));//return the index/position value of the last occurence of the specified word
console.log(str.search('end'));//return the index/position value of the first occurence of the specified word
console.log(str.indexOf('hello'));//if word is not present, then it return -1
// console.log(str.indexOf("end", "html"));

// var str = 'front-end _ development: html, css, js  are basic technol     ogies of front-end develop end end end end    ';

//extraction of strings 
console.log(str.slice(2, 8));//return the string from 2nd index till 7th index
console.log(str.slice(7));//return complete string from 7th index till the end
console.log(str.replace('end', 'HELLO'));//what word to replace, with what word//we have yto replace that wordwoith particular word
console.log(str.replaceAll('end', 'END'));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());//remove traling and leading spaces
console.log(str.charAt(9));//return character at specified index/position
console.log(str.charCodeAt(0));//return the unicode values

console.log(typeof (str));//

// var x = str.slice(2, 8);
// x.toLowerCase();
// console.log(x);
 var a=10
 console.log(typeof(a))
// Boolean
console.log(20 > 0);//truefalse
console.log(20 < -1);//
console.log(typeof (20 > 0));//boolean
console.log(typeof(true));

// undefined (absent or unknown value)
var val;
console.log(val);//variable is defined, but value is not defined
console.log(typeof (val));//undefined

// null (no value or empty value)
var numVal = null;
console.log(numVal);//null
console.log(typeof (numVal));//object


// console.log(t);//give errors (variable is not declared) 




//task
//extract first five letters from a string ('gfuh ieiuei')
//get the length of a string and make it uppercase ('hduej dij')
//take a string, make it lowerscase and trim it (' BVHDBGSH ISJI  ')
//revise primitive datatype
//replace specified word in a string ('', '')
//practice parseInt, parseFloat
//Write a program to get the length of a string and make it uppercase
//Write a program to take a string, make it lowercase and trim it
//what are data types in javascript;
//convert string to number
//convert number to string
//convert boolean to string
//convert string to boolean
//convert number to boolean
//convert boolean to number
//.what is console in javascripot
