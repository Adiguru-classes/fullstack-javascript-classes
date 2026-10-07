// Arrays
//array elements
// const z=10;
//  z=20;
// console.log(z)




var a=[1,3,7,9,67];//array of numbers
console.log(a)
console.log(a[2])
var num = [80,78,56,34,20] //array of numbners data type
var color = ['pink', 'red', 'blue', 'black'];//array of strings data type
console.log(color)
var mix = [null, true, false, 90, 'value'];//array of mixed data type

console.log(num.length);//5  //length = number of elements

console.log(num);
console.log(num[2]);//accessing particular elememt in an array

console.log(typeof (num));//object

const fruit = ["Apple", "Mango", "Banana"];
fruit[2] = "Orange";//updating a value mango to orange in array
console.log(fruit)

// verfication of array
console.log(Array.isArray(num));//if this return true, then its an array

//convert array to string
console.log(num.toString());

console.log(num.join('*'));
console.log(num.join('/'));
console.log(num.join(''));
console.log(num.join(' '));

//push() & pop()

var players=['virat','rohit','dhoni','gill' ,'kohli','sachin'];
console.log(players);
players.push('hardik');//it will add element at last of an array
console.log(players)

players.pop();//it will remove the last element of an array
console.log(players)


// players.pop('kohli');
// console.log(players);


color.pop();//remove last element from an array
console.log(color);//

color.push('white');//add new element at last in an array
console.log(color);

//shift() & unshift()

var animals=['dog','cat','tiger','lion','elephant'];
console.log(animals)
animals.shift();//it will remove first element from an array
console.log(animals)
animals.unshift('monkey');//add new element at start in an array
console.log(animals)


color.shift();//remove element from start in an array
console.log(color);

color.unshift('violet');//add new element at start in an array
console.log(color);

//splice: add & remove element from between array
//Modifies the original array.
//Returns an array of removed elements, if any.

// const animal=['goat','hyena','cow','antelope','buffalo'];
// console.log(animal)
// const spliced=animal.splice(1,3)
// console.log(spliced)
// console.log(animal);//output:original array is modified here

// splice method-it will modify the original array
const nums = [1,67,89,12, 23, 46, 55,79,86,98];
console.log(nums);
const spliced = nums.splice(4,2);//start index value from where you want to delete/add, how many elements to be deleted, new elements to be added
console.log(spliced);
console.log(nums);

console.log(nums)//otput:1 ,original array is modified here


var colors = ['pink', 'red', 'blue', 'black'];//array of strings
colors.splice(0, 1,);//start index value from where you want to delete/add, how many elements to be deleted, new elements to be added
console.log(colors);


const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
const splicedFruits = fruits.splice(1, 2,'mango','grapes');
console.log(splicedFruits); // Output: ['banana', 'cherry']
console.log(fruits);

const names=['raj','santu','chintu','chinna','kushi'];
names.splice(1,2,'hai','hello','mani');
console.log(names);

//add in b/w
color.splice(2, 0, 'blue', 'orange');
console.log(color);

//delete in b/w
color.splice(2, 1);
console.log(color);

color.splice(2, color.length - 2);
console.log(color);

//slice method:
//Does not modify the original array.
//Returns a new array with the extracted elements

const numbers = [23,34,56,76,89,100];
const sliced = numbers.slice(0, 1); // Slices from given index value 
// numbers.slice(0,2);
console.log(sliced); // Output:34,56,76
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

var  student=["vivek","rohith","yashu","charan"];
var result= student.splice(1,2,'rajkumar')
console.log(result);
console.log(student);


const fruitss = ['apple', 'banana', 'cherry', 'date', 'fig'];
const slicedfruits = fruitss.splice(1, 2);
console.log(slicedfruits); // Output: ['banana', 'cherry']
console.log(fruits)

const namess=['raj','santu','chintu','chinna','kushi'];
namess.splice(1,2,'hai','hello','mani');
console.log(namess);

//concat
// var color = ['pink', 'red', 'blue', 'black'];//array of strings
var concatArr = color.concat(num, mix);
console.log(concatArr);

var x=[1,2,3]
var x1=['vasmsi','parvez','mahesh']
var resultt= x.concat(x1)
console.log(resultt)

//extract of array 
var extractArr = num.slice(0, 3);//return an array with 0, 1, 2 index
console.log(extractArr);

console.log(num);

//reverse
const numss=[1,2,3,4,5];
numss.reverse();
console.log(numss);


//split (convert string to array)
// var str = '8-9-8-9-9';
// console.log(str.split('-'));

//object is madeup of key and value pairs

// var student1={

// name:'vivek',
// age:20,
// role:'developer'
// }
// console.log(student1)
 


//task
//display first 3 elements in an array
//remove 4th (index) element and add 2 element there
//find the duplicate in a string (use array)
//reverse a string (use array method)


//take an array and reverse it wiyhout using inbuilt method
//take an array of numbers and covert it to descending order
//take an array of sportsmen object print whose country in india

