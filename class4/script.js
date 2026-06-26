// else if
var lastName = 'jenvv';
var firstName='alexvv'

if (firstName == 'alex') {
    console.log(firstName);
}
else if (lastName == 'jen') {
    console.log(lastName);
}
else if (firstName == 'alina') {
    console.log('correct');
}
else {
    console.log('wrong input');
}


var score = 85;

if (score >= 90) {
    console.log('You got an A.');
} else if (score >= 80) {
    console.log('You got a B.');
} else if (score >= 70) {
    console.log('You got a C.');
} else {
    console.log('You need to improve.');
}


//nested if else conditions
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        console.log('Welcome, Admin.');
    } else {
        console.log('Welcome, User.');
    }
} else {
    console.log('Please log in.');
}
// Output: Welcome, User.



// Switch statement: The switch statement in JavaScript is used to execute one block of 
//code from multiple options based on the value of an expression. It is often used 
//when you have multiple possible values for a single variable or expression.
let day = 3;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}
// Output: Wednesday

//switch with default case:The default case will be executed if 
//none of the specified case values match the expression.
let grade = 'B';
switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Fair');
        break;
    case 'D':
        console.log('Poor');
        break;
    default:
        console.log('Invalid grade');
}
// Output: Good

//using variables in switch
let x = 10;
let y = 20;

switch (x + y) {
    case 30:
        console.log('x + y is 30');
        break;
    case 40:
        console.log('x + y is 40');
        break;
    default:
        console.log('Unknown sum');
}
// Output: x + y is 30

let color = 'red';
switch (color) {
    case 'red':
        console.log('Red');
    case 'blue':
        console.log('Blue');
    case 'green':
        console.log('Green');
    default:
        console.log('Unknown color');
}
// Output:
// Red
// Blue
// Green
// Unknown color

var age = 18;
switch (age) {// age === case numbers
    case 1:
        console.log('wrong input');
        break;

    case 2:
        console.log('wrong input');
        break;

    case 18:
        alert('eligible');
        break;

    default:
        console.log('default case');
        break;
}

//do an example on nested if else
//do an example on switch
