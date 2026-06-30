// var aa='vamshi'//
// // console.log(aa)
// console.log(typeof(aa))//string
// console.log(typeof(bb))//number

// var cc="10";
// console.log(typeof(cc))//string

// let aa='vamshi';

// const names='vamshi';
// const a=10










 const c ="10"//

console.log(c);
console.log(typeof(c)); //string


let d=20
console.log(d);
console.log(typeof(d));

const e=30
console.log(e);

let r="rajkumar"
console.log(r);

var s=30;
var s=10;
console.log(s);



const name = "John"; // String



console.log(name)
// const name='raj'
// console.log(name)
// let greeting = 'Hello, world!'

//1.Scope
function testVar() {
    if (true) {
      var x = 10; // Function-scoped
    }
    console.log(x); // 10 (Accessible outside the block)
  }
  
  function testLet() {
    if (true) {
      let y = 20; // Block-scoped

    }
    // console.log(y); // Error: y is not defined (Block-scoped)

  }
  
  testVar();
  testLet();


//2.Hoisting
// console.log(a); // undefined (due to hoisting)
// var a = 5;

// console.log(b); // Error: Cannot access 'b' before initialization
// let b = 10;

//3.Reassignment

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
const z=70
// z = 70; // Error: Assignment to constant variable
console.log(z); // 60

//Global scope
let globalVar = "I am global!"; // Global scope

function showGlobal() {
  console.log(globalVar); 
}
showGlobal(); // Output: I am global!
console.log(globalVar); // Output: I am global!

//Function scope
function testVar() {
    var insideFunction = "I am inside a function";
    console.log(insideFunction); // Works inside the function
  }
  
  testVar();
  console.log(insideFunction);

  //block scope
  if (true) {
    let blockVar = "I am block-scoped";
    console.log(blockVar); // Works inside the block
  }
  console.log(blockVar)//it dpoesnt work


  //scopes and hoisting together
  function demoScopeHoisting() {
    console.log(a); // undefined (hoisted but not initialized yet)
    var a = 5;
  
    // console.log(b); // Error: Cannot access 'b' before initialization
    let b = 10;
  
    // Block scope example
    if (true) {
      var c = 15; // Function-scoped (accessible throughout the function)
      let d = 20; // Block-scoped (only accessible inside this block)
    }
  
    console.log(c); // Output: 15 (var is function-scoped)
    // console.log(d); // Error: d is not defined (let is block-scoped)
  }
  
  demoScopeHoisting();



  






