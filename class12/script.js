// setTimeout(function(){

// }, milliseconds);

//example-1
// setTimeout(function(){console.log('hy,i am settimeout')},5000); //1000ms=1 second

// example-2
// console.log("Program Started");
// setTimeout(function(){
//     console.log("displaying products");
// },5000);//3 seconds
// console.log("Program Ended");

//example-3 calling function after few seconds

// function greet(){
//     console.log("Good Morning");

// }
// setTimeout(greet,3000);

//clear timer
const timer = setTimeout(function(){
    console.log("OTP Expired");

},2000);
clearTimeout(timer);

// const timer = setTimeout(function(){

//     console.log("OTP Expired");

// },10000);

// setTimeout(function(){

//     console.log("OTP Verified");

//     clearTimeout(timer);

// },5000);

//setInterval-Runs repeatedly after every given interval.
// setInterval(function(){

//     console.log("Hello");

// },2000);

//Every second Current time updates.
// setInterval(function(){
//     console.log(new Date());

// },2000);

// let count = 1;
// setInterval(function(){

//     console.log(count);
//     count++;

// },2000);

//clear interval
// let count = 1;
// const timerr = setInterval(function(){
//     console.log(count);

//     count++;

//     if(count==5){
//         clearInterval(timerr);
//     }

// },1000);

//mini project example
// let time = 10;
// const timerrr = setInterval(function(){

//     console.log(time);
//     time--;
//     if(time<0){
//         clearInterval(timerrr);
//         console.log("Time Up");
//     }
// },1000);



//mini task-color changer

// const colors = ["red","blue","green","yellow","pink"];

// let index=0;

// setInterval(function(){

// document.body.style.backgroundColor=colors[index];

// index++;

// if(index==colors.length){

// index=0;

// }

// },2000);


//mini task 
// const heading =
// document.getElementById("heading");

// setTimeout(function(){
// heading.innerText="JavaScript Class";
// },3000);

// //mini task 
// const countt =
// document.getElementById("count");

// let number=0;

// setInterval(function(){

// number++;

// countt.innerText=number;

// },1000);


//tasks for studemnts

//Print Welcome after 5 seconds
//Print Hello every second
//Stop after 10 counts
//create count down timer
//create digital clock
//create a stop watch
//create a typing animation with changing letters
//create a backgrounf changing after every 2 seconds