// GLOBAL SCOPE-can be accessed anywhere

let studentName = "Raj";

console.log(studentName); // Raj

function showStudent() {
    console.log(studentName); // Raj
}

showStudent();

//function scope-can be accessed within the function
function greet() {

    let message = "Hello Students";

    console.log(message);//Raj

}

greet();

// console.log(message);//refrence error

//outer scope can be accessed by inner
let company = "Adiguru";

function course() {

    console.log(company);

}

course();

//inner scope cannot be accessed by outer
function course() {

    let trainer = "Raj";

}

// console.log(trainer);

//var ignores block scope
// function demo() {  //function scope

//     if (true) {  //block scope
//         var city = "Hyderabad";

//     }
//                 console.log(city);



// }
//  //global scope
// demo();

//let and const respects block scope
function demo() {

    if (true) {

        let city = "Hyderabad";
        const state='telanagna'
 
    }

    console.log(city);//reference error
    console.log(state)//reference error

}

demo();


// //Var vs Let vs Const
function demo() {

    if (true) {

        var a = 10;

        let b = 20;

        const c = 30;

    }

    console.log(a);

    console.log(b);

    console.log(c);

}

demo();

// //let isnide same block
// if (true) {

//     let age = 25;

//     console.log(age);

// }

// //const inside same block
// if (true) {
//     const course = "JavaScript";

//     console.log(course);

// }
