// declaration of function
// syntax
// function functionname() {

// }
// console.log('first')
// setTimeout(function() {console.log("second");}, 3000); //1000ms=1 sec
// console.log('third');

//basic function
function k(){ //declaring the function
    console.log("helloo world"); //function block of code
  }
// k(); 
k()//calling the function

 function j(){
    k()
    console.log('i am j')
 }
j()

//  var a='rajkumar';
//  console.log(a)
//   raj(); // Output: Hello ramesh!
  
//function assigning to another avriable
  let rajj=function(){
            console.log("Hello Rajkumar!");
  }
  rajj() //output : Hello Ramresh!

  let a=10;
  let b=7;

  function addd(a, b) {
        console.log(a+b)
     return a + b;
  }
//   addd(5,7)
  let resultt = addd(5, 7);
  console.log(resultt);  // Output: 12

  let vall=resultt +10;
  console.log(vall)
  
  const multiplyy = function(a, b) {
    return a * b;
  };
  let resulttt=  multiplyy(5, 7);
  console.log(resulttt); // Output: 35

  setTimeout(function() {console.log("Anonymous function!");}, 3000); //1000ms=1 sec

//   function greet(name = "Guest") {
//     console.log("Hello, " + name + "!");
//   }
//   greet();           // Output: Hello, Guest!
//   greet("Raj");      // Output: Hello, Raj!
  

// // Function declaration
// function greet() {
//     console.log("Hello, World!");
// }
// greet(); // Output: Hello, World!

// const greet2 = function() {
//     console.log("Hello, World!");
// };
// greet2(); // Output: Hello, World!

//arrow function:A shorter syntax for function expressions, introduced in ES6.
//Arrow functions do not have their own this context and cannot be used as constructors.
//arrow function;
const Raj = () => {
    console.log("Hello, World!");
};
Raj(); // Output: Hello, World!

const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

const divide = (a, b) => a / b;
// Calling the arrow function with two arguments
console.log(divide(10, 2)); // Output: 5


function add1() {
    //block of code
    console.log( 10 + 20);
}
add1();
// add();

//using return statement,the o/p will be stored in result and we can use further if need
function add2(a, b) {
    return a + b;
}
// Calling the function with two arguments
const result = add2(5, 3);
console.log(result); // Output: 8

const doubleResult = result * 2; // result can be used further
console.log(doubleResult); // Output: 16

function raj(a,b){
var res=(a+b)
console.log(res)
// return res;
}
// console.log(raj(7,4))
raj(7,4)

//function without using return statement
function add3(a, b) {
    console.log(a + b); // The result is just displayed, not returned
}
add3(5, 3); // Output: 8
// The result is not returned, so you can't store or use it further
// The following line would throw an error because add() doesn't return anything
const result2 = add3(5, 3); // result would be undefined
console.log(result2); // Output: undefined

//parameterized function
//reusability 
function subtract(a, b, c) {//parameters
    console.log(c);
    var result = 0;
    return result;
    console.log(a - b);

}

subtract(20, 10, [78, 565, 45]);//arguments

subtract(30, 5, [70, 45]);


//passing function as a value

//we can access global scope variable anywhere in this doc
// var x = 20;//global scope
// console.log(x);

function multiply(a, b) {
    // console.log(x);

    //local scope
    var result = a * b;
    console.log(result)

    return result;//we are returning the value from function
}


// console.log(result);//gives error
var r = multiply(20, 10);//passing function as a value
console.log(r);


//self-invoking function/ anonymous function
(function () {
    console.log(10 + 20);
})();

//parameterized
(function (x, y) {
    console.log(x - y);
})(20, 10);


// Hoisting
// num = 90;//initializing
// console.log(num);//using the variable
// var num;//declaration


// //initialization are not hoisted
// var t;//declaration
// console.log(t);//

// t = 100;//initialization

// //ideal way
// var val = 20;


// Timing events methods
// setTimeout(function, millisecond);

// 1 sec = 1000ms

//callback function
// setTimeout(function () {
//     console.log('set Timeout');
// }, 4000);//4 sec


// setInterval(function () {
//     console.log('set Interval');
// }, 2000);//2 sec

// function displayUser(user) {
//     console.log(`Name: ${user.name}, Age: ${user.age}`);
// }
// const user = { name: "Bob", age: 25 };
// // Passing an object as an argument
// displayUser(user); // Output: Name: Bob, Age: 25


// task
// create parametized method/function to multiply 3 numbers
// create parametized method to divide 2 numbers
// and display result in console




//callback
// function division(a, b) {
//     console.log(a / b);
// }

// function calculate(cb) {
//     cb(20, 2);
// }

// calculate(division);

//foreach: It doesn’t create a new array and modifies the original array 
//only if you explicitly do so within the loop.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(ramesh) {
    console.log(ramesh*2);
});

// Output:
// 2
// 4
// 6
// 8
// 10
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" }
];

// Using forEach to log the title and author of each book
books.forEach(function(r) {
    console.log(`Title: ${r.title}, Author: ${r.author}`);
});

// const books1 = [
//     { title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { title: "1984", author: "George Orwell" },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { title: "The Catcher in the Rye", author: "J.D. Salinger" }
// ];

// Create an empty array to store the book titles
let emptyarray = [];
// Use forEach to push each title into the bookTitles array
books.forEach(function(book) {
    emptyarray.push(book.title);
});

console.log(emptyarray); 

//2. map():The map method creates a new array with the results of calling a provided function 
//on every element in the array. It returns a new array without modifying the original array.
const numbers1 = [1, 2, 3, 4, 5];

// Using map to create a new array with each number doubled
const doubledNumbers = numbers1.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10];

const numbers2 = [1, 2, 3, 4, 5];


const squaredNumbers = numbers2.map(number => number * number);

console.log(squaredNumbers); 

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 58 },
    { name: "Charlie", score: 92 },
    { name: "David", score: 74 },
    { name: "Eve", score: 62 }
];

// Using map to create a new array with students' name and grade status
const studentGrades = students.map(student => {
    return {
        name: student.name,
        status: student.score >= 60 ? "Passed" : "Failed"
    };
});

console.log(studentGrades);
/* Output:
[
  { name: "Alice", status: "Passed" },
  { name: "Bob", status: "Failed" },
  { name: "Charlie", status: "Passed" },
  { name: "David", status: "Passed" },
  { name: "Eve", status: "Passed" }
]
*/

//3. filter()
//The filter method creates a new array with all elements that pass the test implemented by the
// provided function. It returns a new array without modifying the original array.
const numbers4 = [1, 2, 3, 4, 5];

// Using filter to create a new array with only even numbers
const evenNumbers = numbers4.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 35 },
    { name: "Mike", age: 18 },
    { name: "Sarah", age: 30 }
];

// Using filter to create a new array with people aged 30 or above
const adults = people.filter(person => person.age >= 30);

console.log(adults);
/* Output:
[
  { name: "Jane", age: 35 },
  { name: "Sarah", age: 30 }
]
*/

//4. find()
//find method returns the first element in the array that satisfies the provided testing function.
// If no elements match, it returns undefined.
const people1 = [
    { name: "Alice", age: 29 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Using find to get the first person who is older than 28
const person = people1.find(function(person) {
    return person.age > 28;
});

console.log(person); // Output: { name: "Bob", age: 30 }

const numbers5 = [3, 5, 7, 8, 10, 11];

// Using find to get the first even number
const firstEvenNumber = numbers5.find(number => number % 2 === 0);

console.log(firstEvenNumber); // Output: 8

//5.sort:sort()
//The sort method sorts the elements of an array in place and returns the sorted array.
//By default, it sorts the array in ascending order based on the string Unicode code points of elements.
const numbers6 = [5, 3, 8, 1, 2];

// Using sort to sort the numbers in ascending order
numbers6.sort(function(a, b) {
    return a - b;
});

console.log(numbers);

//// Sorting the array in ascending order
const numbers7 = [34, 12, 5, 67, 23];
const sortedAscending = numbers7.sort((a, b) => a - b);
console.log(sortedAscending); // Output: [5, 12, 23, 34, 67]

//Step-by-Step Sorting:
//Compare 34 and 12: 34 - 12 = 22 (positive, so 12 comes before 34)
//Compare 34 and 5: 34 - 5 = 29 (positive, so 5 comes before 34)
//Compare 34 and 67: 34 - 67 = -33 (negative, so 34 stays before 67)
//Compare 34 and 23: 34 - 23 = 11 (positive, so 23 comes before 34)
//Continue this process until all elements are compared.

// Sorting the array in descending order
const sortedDescending = numbers.sort((a, b) => b - a);
console.log(sortedDescending); // Output: [67, 34, 23, 12, 5]

//Sorting Process:
//The comparison function (a, b) => b - a is used, which is the reverse of the previous function.
//This function will return a negative number if b is greater than a, meaning b should come before a.
//Step-by-Step Sorting:

//Compare 5 and 12: 12 - 5 = 7 (positive, so 12 comes before 5)
//Compare 5 and 23: 23 - 5 = 18 (positive, so 23 comes before 5)
//Continue this until all elements are compared.

//6.some:
//The some method tests whether at least one element in the array passes the test implemented 
//by the provided function. It returns a boolean (true or false).
const numbers8 = [1, 2, 3, 4,5];
const hasNumberGreaterThan4 = numbers8.some(function(number) {
    return number > 4;
});
console.log(hasNumberGreaterThan4); // Output: true

const numbers9 = [1, 3, 5, 7, 8];

const hasEvenNumber = numbers9.some(number => number % 2 === 0);
console.log(hasEvenNumber); // Output: true

const values = [4, 9, 10, 5];

// Using some to check if there is any number greater than 10
const hasGreaterThanTen = values.some(value => value > 10);
console.log(hasGreaterThanTen); // Output: false

// 7.findIndex():
//The findIndex method returns the index of the first element in the array that satisfies
// the provided testing function. If no elements match, it returns -1.
const numb = [1, 2, 3, 4, 5];
// Using findIndex to find the index of the first number greater than 3
const index = numb.findIndex(function(number) {
    return number > 5;
});
console.log(index)

//reduce method
const numm = [2, 3, 4];

const product = numm.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, );  // Initial value is 1
console.log(product);  // Output: 24 (2 * 3 * 4 = 24)

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattened = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);

console.log(flattened);  // Output: [1, 2, 3, 4, 5, 6];

const peoples = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Mike', age: 35 },
    { name: 'Emily', age: 28 }
  ];
  
  const totalAge = peoples.reduce((sum, person) => {
    return sum + person.age; // Here we are only using the 'age' property of the 'person' object
  });
  
  console.log(`Total Age: ${totalAge}`);  // Output: Total Age: 118

  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue] += 1;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(fruitCount); 


//callback functions;

function chintu(f){
    const d="rajkumar"
    f(d)
}

function raj(c){
console.log('hai,i am',c)
}
chintu(raj)
// raj() 


// task


  // 1. what is for-Each method and take an array of objects and print key and values console it.
  // 2. Take an employees  array of objects and using for each method to push employees location into new array using push method
  // 3. What is map method? using array of numbers return the numbers which divide by 7
  // 4. take an array of objects with 6 key value and pairs and print that array in console using map method
  // 5. take an above example array data and  print the  username and company in the console using map method
  // 6. take an array of objects with students with their marks and print the students whose marks are greater then 50
  // 7. what is some method ? take an example for some method using array of objects
  // 8. what is find method ? take an example for find method using array of objects
  // 9. take an array of employees objects  and print location hyd employee using findindex method
  // 10. take an array of numbers and covert it to descending order and take an
 // 11. take an array of sportsmen object print whose country in india using some method
 //12.what are different types of function in javascript and take an example for all types of functions
  //13.what are different types of function methods in javascript and take an example for all types of function methods
//14.whast is call back function? and take an example for call back function
//15.what is higher order function? and take an example for higher order function  




