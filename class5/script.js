// 1 loop = 1 iteration
// for loops
// syntax

// for (initialization; condition; increment or decrement) {

// }
// 
// for(statement1; statement2; statement3) {
//block of code
// }

// statement 1-> initialization
// statement2 -> condition
// statement3 -> inc/dec

// steps of execution

// st1 -> st2 -> BOC -> st3 ->st2 -> BOC -> st3

//for loop

for (let i = 1; i <= 5; i++) {

    console.log(i);

}

console.log('i am rajkumar');
console.log('i am rajkumar');
console.log('i am rajkumar')
console.log('i am rajkumar')
console.log('i am rajkumar')
console.log('i am rajkumar')



for (let i = 1; i <= 5; i++) { //increment
    console.log("hy,i am rajkumar");
}
for (var j = 5; j > 0; j--) {
    console.log(j);//
}

for (var i = 0; i <= 20; i = i + 2) {
    console.log(i);//
}

for (var i = 1; i <= 20; i = i + 2) {
    console.log(i);//1 3 5 7 9...19
}

for (var x = 0; x <= 0; x++) {
    console.log(x);//
}


//iterate over array
var arr = [90, 78, 67, 78, 100];//5

for (var i =0; i<arr.length; i++) {
    console.log(arr[i]);//90 78 67 78 100

    if (arr[i] == 100) {
        console.log('found');
    }else{
        console.log('not found')
    }
    // for() {

    // }
}

var students=["vivek","rohith","x","y","z"]
for (var i=0;i<students.length;i++){
    console.log(students[i])

    if(students[i]=='x'){
        console.log("available")
    }
}


for(let i = 0; i <= 10; i++){
    // console.log(i)

    if(i % 2 == 0){
        console.log(i);
    }
}



let num = 5;

for(let i = 1; i <= 10; i++){
    console.log(num * i);
}



let sum = 0;

for(let i = 1; i <= 5; i++){
    // console.log(i)
    sum = sum + i;
    // console.log(sum)
}
console.log(sum);

const fruits = ["Apple","Banana","Mango"];//lenghth -3

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}


//Looping Strings
const name = "Raj kumar";

for(const c of name){
    console.log(c);
}

const word = "JavaScript";

for(let i=0;i<word.length;i++){
    console.log(word[i]);
}

//looping objects
const student = {
    name:"Raj",
    age:25,
    city:"Hyderabad"
};

for(const key in student){
    console.log(key);
}//output:name,age,city

//to get values
for(const key in student){ //key=name     key=age

    console.log(student[key]);
}

//to get both keys and values
for(const key in student){
    console.log(key  , student[key]);
}

// infinite loop
// for(var i = 0; i >= 0; i++){}


// while loops
//syntax
// while(condition) {
//block of code
// }

let password = "";

while(password !== "admin"){
    password = prompt("Enter Password");
}


var i=0  //initialisation
while (i < 5) {   //condition
    console.log(i);
    i++; //increment
}

var z = 10;
while (z >= 0) {
    console.log(z);//10 9 8 7 6 5 4 3 2 1
    z--;
}


var z = 10;
while (z >= 0) {
    z--;//9 8 7 6 5 4 3 2 1 0 -1
    console.log(z);
}

var i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++
}

let pin = "";

while (pin !== "1234") {
    pin = prompt("Enter PIN");
}

 console.log("Login Successful");
// prompt('enter name')

// infinite loop

// do while
// do {
//block of code
// } while(condition)

//do while lop will execute the code first and checks teh condition next
let i2 = 1;

do {

    console.log(i2);
    i++;

} while (i2 <= 5);1,2,3,4,5

// Runs once even if condition is false.
let number = 10;

do {
    console.log(number);//10

} while (number < 5);


var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

var y = 1;
do {
    console.log(y);
} while (y < 0);

// infinite loop

// var a = 10;
// do {
//     console.log(a);//10 9
//     a--;
// } while (a < 10);


// statement
// break: it will terminate loop/ switch
// continue: it terminate current loop and continue


for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);//90 78 67 78 100

    if (arr[i] == 100) {
        console.log('found');
    }
    // else {
    //     console.log('not found');
    // }
}



console.log('BREAK');

//90 78 98 89 100
for (var i = 0; i < arr.length; i++) {

    if (arr[i] === 78) {
        console.log('found');
        break;
        // console.log();
    }
    else {

    }
}

// continue
// continue: it terminate current loop and continue

for (let i = 1; i <= 10; i++) {

    if (i == 5) {
        continue;//

    }
    console.log(i);

}

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 78) {
        console.log('found');
    }

    continue;
    console.log(arr[i]);
}




//iterate over strings

var count = 0;
var str = 'Hi, hellolll';

for (var i = 0; i <str.length; i++) {
    console.log(str[i]);
    if (str[i] == 'z') {
        count++;//2
        continue;
        // console.log(str[i]);
    }
}

console.log(count);

for (var i = 0; i < str.length; i++) {
    if (str[i] == 'l') {
        console.log(i);
        break;
        console.log(i);
    }

    continue;
}


//for loops using array of objects
et users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];l

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name, users[i].age);//Alice 25
                                             //Bob 30
                                            //Charlie 35
}


//for loop using break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(i)
        break; // Exit the loop when i equals 5
    }
    console.log(i);//0 1 2 3 4
}

//while loop using break statement 
var i = 0;
while (i < 10) {
    console.log(i);//0 1 2 3
    if (i === 3) {
        break; // Exit the loop when i equals 3
    }
    i++;
}

//using continue statement in for loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the code in this iteration when i equals 5
    }
    console.log(i);//0 1 2 3 4  6 7 8 9
}

//using continue in while loop
var i = 0;
while (i < 10) {
    i++;
    if (i === 5) {
        continue; // Skip the rest of the code in this iteration when i equals 5
    }
    console.log(i);//1 2 3 4 6 7 8 9 10
};

const greet = name => {
    const message = `Hello, ${name}!`;
    return message;
};

console.log(greet("Alice")); //give this example withpout using template literals

//finding smallest number from an array
const a = [12, 8, 130, 5,7,44];
let smallnum = a[0];  
for (let i = 1; i < a.length; i++) {
    if (a[i] < smallnum) {
        smallnum = a[i];  
    }
}
console.log(smallnum);