// 1 loop = 1 iteration
// for loops
// syntax
// for(statement1; statement2; statement3) {
//block of code
// }

// statement 1-> initialization
// statement2 -> condition
// statement3 -> inc/dec

// steps of execution
// st1 -> st2 -> BOC -> st3 ->st2 -> BOC -> st3

for (var j = 10; j >= 0; j--) {
    console.log(j);//10 9 8 ... 1 0
}

for (var i = 0; i <= 20; i = i + 2) {
    console.log(i);//0,2,4,6....20
}

for (var i = 1; i <= 20; i = i + 2) {
    console.log(i);//1 3 5 7 9...19
}

for (var x = 0; x <= 0; x++) {
    console.log(x);//
}

//iterate over array
var arr = [90, 78, 67, 78, 100];//5

for (var i =0; i < arr.length; i++) {
    console.log(arr[i]);//90 78 67 78 100

    if (arr[i] == 100) {
        console.log('found');
    }
    // for() {

    // }
}


for(let i = 1; i <= 10; i++){
    
    if(i % 2 != 0){
        console.log(i);
    }
}

let num = 5;

for(let i = 1; i <= 10; i++){
    console.log(num * i);
}

let sum = 0;

for(let i = 1; i <= 5; i++){
    sum = sum + i;
}

console.log(sum);
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


var i=0
while (i < 5) {
    console.log(i);
    i++;
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

// infinite loop

// do while
// do {
//block of code
// } while(condition)

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
        console.log();
    }
    else {

    }
}

// continue
// continue: it terminate current loop and continue

console.log('CONTINUE');
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
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

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
