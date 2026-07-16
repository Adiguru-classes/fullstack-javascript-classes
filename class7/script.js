//convert number to string
var x = 10.87;
console.log(x.toString());//return a string
console.log(x.toFixed(3));//return a string with a specified decimal places
console.log(x.toExponential(2));
console.log(String(x));

// convert boolean to string
console.log(String(false));//"false"
console.log(String(true));//"true"

// convert string to number
console.log(Number('20'));//return a number
console.log(Number(''));//0
console.log(Number('gdge'));//NaN


// how to capture user input
function getName() {
    //capturing user input in a variable
    var nameVal = document.getElementById('name').value;
    console.log(nameVal);
    alert(nameVal);
}

//Objects
var firstName = 'alina';

// creating an object
// 1. Object literal
// key/value
// property/value pair

var person = {
    name: 'alina',
    age: 20,
    designation: 'developer',
    hobbies: 'dancing',
    married: true,
    contact: {
        mobile: '7878898'
    }
}

// display/access object values
console.log(person); 

console.log(person['name']);
console.log(person.name);

console.log(person.contact);
console.log(person.contact.mobile);


var car = {
    color: 'red',
    model: 'XUV09',
    brand: 'maruti',
    alloy: 'wheels',
    millege: 'u',
    type: 'disesel',
    price: '79809090',
    specialFeatures: {
        detail: 'reverse-parking'
    }
}

console.log(car.alloy);
console.log(car.specialFeatures.detail);


// 2. Object.create
var carVal = {
    color: 'red',
    model: 'XUV09',
    brand: 'maruti',
    alloy: 'wheels',
    millege: 'u',
    type: 'diesel',
    price: '79809090',
    specialFeatures: {
        detail: 'reverse-parking'
    }
}

console.log(carVal)



var obj = Object.create(carVal);

console.log(obj.color);//color is a property of obj now
console.log(obj.type);

console.log(typeof (carVal));
console.log(typeof (obj));

//putting 2 values from one object to another
var colorVal = carVal.color;
var modelVal = carVal.model;
var newObj = {
    color: colorVal,
    model: modelVal
}

console.log(newObj);


// 3. new keyword with Prototype(function constructor) (ES5)
// var objVal = new Fun();

// 4. new keyword with classes (ES6)
// var classVal = new Student();


//To get all the keys/property
console.log(Object.keys(person));//return an array

//To get all the values 
console.log(Object.values(person));//return an array


//delete a property/key from an object
delete person.name;
delete person['contact'];
console.log(person);

//Updation 
person.age = 30;
person.designation = 'tester';
console.log(person);

console.log(`${person}`);

console.log('Hi, my hobby is' + person.hobbies);

console.log(`Hi, my hobby is ${person.hobbies}`);


// adding new after property after creation of object
person.name = 'alina';

console.log(person);


// take input using prompt

var store = prompt('Please enter name');

console.log(store);


//array of objects
var employee = 

[{
    name: 'alex',
    age: 20,
    contact: {
        number: 889889,
        address: ''
    }
}, {
    name: 'alina',
    age: 24,
    contact: {
        number: 8709090,
        address: ''
    }} ,
    {
    name: 'harry',
    age: 22,
    contact: {
        number: 889889,
        address: '2-7-80'
    }
}]
;

console.log(employee);
console.log(employee[2].age);
console.log(employee[2].contact.address);
employee.push({
    name: 'alina',
    age: 24,
    contact: {
        number: 8709090,
        address: ''
    }
});

// employee[2].name = 'alex';
// console.log(employee);


// var student={

// name: 'alina',
// class:"engineering" ,
// rollno:20

// }
// console.log(student)
// console.log(student.name);
// console.log(student.class);
// console.log(student.rollno);

// var students=[
//     {
//     name: 'alina',
//     class:"engineering" ,
//     rollno:20,
//     contact:{
//             number:8090,
//             email:'hL3Zw@example.com'
//         }
    
// },
// {
//     name: 'alex',
//     class:"degree" ,
//     rollno:21,
//     contact:{
//             number:8034,
//             email:'rahjaw@example.com'
//     }
// },
// {
//     name: 'harry',
//     class:"inter" ,
//     rollno:22,
//     contact:{
//             number:7040,
//             email:'rrrhL3Zw@example.com'
//     }

// }
// ]
// students.push({
//     name: 'rajkumar',
//     class:"ece" ,
//     rollno:25,
//     contact:{
//             number:7040,
//             email:'rrrhL3Zw@example.com'
//     }
// })
// console.log(students);
// students.unshift({
//     name: 'rajkumar',
//     class:"computer science" ,
//     rollno:25,
//     contact:{
//             number:7040,
//             email:'rrrhL3Zw@example.com'
//     }
// })

// console.log(students);
// console.log(students[1].contact);
// console.log(students[1].contact.email);
// console.log(students);
// console.log(students[1]);
// console.log(students[1].name);
// console.log(students[1].class);
// console.log(students[1].rollno);
// console.log(students[2].rollno);
 
// console.log(students[1].name);
// console.log(students[1].class);
// console.log(students[1].rollno);

//reverse a string using array methods
// var strVal = 'hihellhdij';//
// var val = strVal.split('');
// console.log(val);
// val.reverse();
// console.log(val.join(''));


//take an array of objects with students with their marks and print the students whose marks are greater then 50
//take an array of objects with employees objects  and print location hyd employee 