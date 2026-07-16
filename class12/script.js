// setTimeout(function(){

// }, milliseconds);


setTimeout(function(){

    alert("Welcome to JavaScript");

},5000);

console.log("Program Started");
setTimeout(function(){
    console.log("Hello Students");
},3000);

console.log("Program Ended");

//calling function after few seconds
function greet(){

    console.log("Good Morning");

}

setTimeout(greet,3000);

//clear timer
const timer = setTimeout(function(){

    console.log("OTP Expired");

},10000);

clearTimeout(timer);

//setInterval-Runs repeatedly after every given interval.
setInterval(function(){

    console.log("Hello");

},1000);

//Every second Current time updates.
setInterval(function(){

    console.log(new Date());

},1000);

//let count = 1;

setInterval(function(){

    console.log(count);

    count++;

},1000);

//clear interval
let count = 1;

const timerr = setInterval(function(){

    console.log(count);

    count++;

    if(count==6){

        clearInterval(timerr);

    }

},1000);

//mini project example
let time = 10;

const timerrr = setInterval(function(){

    console.log(time);

    time--;

    if(time<0){

        clearInterval(timerrr);

        console.log("Time Up");

    }

},1000);


const colors = [

"red",

"blue",

"green",

"yellow",

"pink"

];


// mini task-color changer

// let index=0;

// setInterval(function(){

// document.body.style.backgroundColor=colors[index];

// index++;

// if(index==colors.length){

// index=0;

// }

// },1000);


//mini task 
const heading =
document.getElementById("heading");

setTimeout(function(){

heading.innerText="JavaScript Class";

},3000);

//mini task 
const countt =
document.getElementById("count");

let number=0;

setInterval(function(){

number++;

countt.innerText=number;

},1000);


//tasks for studemnts

//Print Welcome after 5 seconds
//Print Hello every second
//Stop after 10 counts
//create count down timer
//create digital clock
//create a stop watch
//create a typing animation with changing letters
//create a backgrounf changing after every 2 seconds