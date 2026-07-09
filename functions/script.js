// console.log("Hello Raj");
// console.log("Hello Raj");
// console.log("Hello Raj");
// repeat..
function saikumar(){
    console.log('hy saikkumar')
}
saikumar()



function submit(){
        prompt('enter ur age')
    alert('successful login')
}


function rajkumar() {

    console.log('hy rajkumar')
}
rajkumar()

//basic function
function grt() {   //cretae function
    console.log("Hello Raj"); //store some data inside it
}
grt()  //call function

//Function with Parameters
function sai(name) {
    console.log("Hello " + name);
}

sai("Ravi");
sai("Suresh");

//function with return value
function add(a, b) {
    return a + b;  //console.log only displays the value but return sends the avlue back to function
}

let result = add(10, 20);

console.log(result);

const a=10;
const res=result+a
console.log(res)

//function stored inside a variable
const ab= function () {
    console.log("Hello Raj");
};

ab()

//anonymous function
// function() {
//     console.log("Hello");//it gives error
// }

//setimeout function-1000ms=1 second
const n="raj"
setTimeout(function () {
    if(n=='raj'){
        console.log('its working')
    }
}, 2000);



//arrow function=shorter syntax for function
function add(a, b) {  //normal function
    return a + b;   
}

const greet = () => {    //arrow function-its commonly used in modern javascript
    console.log("Hello Raj"); 
};

greet();

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(function (raj) {  //normal function
    return raj * 2;
});

const doubledNumber = numbers.map(num => num * 2);//arrow function-its shorter syntax

//immediate invoked function
(function () {
    console.log("Hello Raj");
})();


//callback function-passing as an argument to another function