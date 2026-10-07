let stud1='raj';
let stud2='ravi';
let stud4='rahul'
let stud3='rajesh'
let stud5='rajesh'
console.log(stud1)
console.log(stud2)
console.log(stud3)
console.log(stud4)
console.log(stud5)


let students=['raj','ravi','rahul','rajesh','rajesh']
console.log(students)
console.log(students[1]);
students.map((student, index, array) => {
    console.log(student,index,array);
});
// console.log(students.indexof['raj'])


let student={
    name:'ravi',
    age:30,
    contact:8989898989
}
console.log(student)
console.log(student.age)

let allstudents=[
    {
    name:'ravi',
    age:20,
    contact:767676767
},{
    name:'ravi',
    age:28,
    contact:8989898989
},{
    name:'rahul',
    age:38,
    contact:9897696
}
]

console.log(allstudents)
console.log(allstudents[1])
console.log(allstudents[1].name)
console.log(allstudents.name)

const studentNames = allstudents.map(student => student.name);
console.log(studentNames)

//same with loop
const studen=[{name:'raj',age:30},{name:'ravi',age:20},{name:'kiran',age:35}]
const studentNam = [];

for (let i = 0; i < studen.length; i++) {
    console.log(studen[i])
    studentNam.push(studen[i].name);
}

console.log(studentNam);

// const studentNames = allstudents.map(student => console.log(student.name));
// console.log(studentNames)



//it is normal  function and we are atatching this function to map method or function as call back functiin
function getStudentName(student) {
    return student.name;
}

const studentName = allstudents.map(getStudentName);//map will call this function for every studmet objectbin array
console.log(studentName)


//without rteturn

const names = allstudents.map(function(student) {
    return student.name
    // console.log(student.name);//raj,ravi,rahul
});
console.log(names)//undefined

students.map(student => student.name);//impicit return-When we use an arrow function without curly braces, the expression is automatically returned.

students.map(student => {
    return student.name;//explicit return
});

//filter method
let marks=[2,40,60,80,100]
// const passedMarks = [];

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] >= 50) {
//         passedMarks.push(marks[i]);
//     }
// }

// console.log(passedMarks);

const passedMarks = marks.filter(mark => mark >= 50);
console.log(passedMarks);

const s = [
    { name: "Raj", marks: 85 },
    { name: "Kumar", marks: 45 },
    { name: "Raj", marks: 72 },
    { name: "Anil", marks: 35 }
];

const passedStudents = s.filter(student => student.marks >= 50);
// const passedStudents = s.filter(student => student.name == 'Raj');

console.log(passedStudents);


//find method-find() stops as soon as it finds the first match.
const ss = [
    { name: "Raj", marks: 85 },
    { name: "Kumar", marks: 45 },
    { name: "Ravi", marks: 72 },
    { name: "Anil", marks: 35 }
];

const result = ss.find(student => student.name === "Ravi");
// const result = ss.find(student => student.marks === 72);

console.log(result);

