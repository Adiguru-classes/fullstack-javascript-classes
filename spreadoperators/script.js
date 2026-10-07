const numbers = [10, 20, 30];
const newNumbers = [...numbers];//copying an array
console.log(newNumbers);

const nums = [10, 20, 30];
const newNums = [...nums, 40];

console.log(newNums);

const num = [20, 30, 40];

const newNum = [10, ...num];

console.log(newNum);

const boys = ["Raj", "Rahul"];
const girls = ["Priya", "Anu"];
const students = [...boys, ...girls];

console.log(students);

const todos = ["Learn React", "Practice JS",];

const newTodos = [
    ...todos,
    "Build Project"
];

console.log(newTodos);
//what is spread operators and rest operators in javascript amd whats use of it



//callback function is passing as an argument to another function
// function greet() {
//     console.log("Hello Raj");
// }

// function doSomething(callback) { 
//     callback();
// }

// doSomething(greet);


function greet(name) {
    console.log("Hello " + name);
}

function processUser(c) {  //callback=greet-greet('raj')
    c("Raj");
}

processUser(greet);


function showDetails(name, age) {
    console.log(name);
    console.log(age);
}

function processUser(callback) {
    callback("Raj", 25);
}

processUser(showDetails);


function raj(){
    console.log('i am raj')
}

function rajkumar(a){
a()
}
rajkumar(raj)