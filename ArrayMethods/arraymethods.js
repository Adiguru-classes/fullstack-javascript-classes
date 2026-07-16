//1.forEach() method-Used to perform an action on every element. It DOES NOT return a new array,it only prints individual values
const raj= [10,20,30];

// nums.forEach(function(number){
//     console.log(number);
// });//output:10 20 30
//  for(var i=1;i<10;i++)
raj.forEach((n)=>{
    console.log(n);//10 20 30
});

//same example with loop
// const numbers = [10,20,30];
// for(let i=0;i<numbers.length;i++){
//     const number = numbers[i];

//     console.log(number);
// }//output 10,20,20

const students = ["Raj","Ravi","Kiran"];

students.forEach(student=>{
    console.log("Welcome",student);
});//Welcome Raj
   //Welcome Ravi
   //Welcome Kiran

//2. map() it performs an actiuon on every elemnt from an array but-it creates a new array
const numbers = [1,2,3];

const doubled = numbers.map(num=>{
    return num*2;
});

console.log(doubled);//[2,4,6]


const prices=[100,200,300];
const gstPrices=prices.map(price=>{
    return price+18;
});

console.log(gstPrices);

//3.filter() method-returns only elements that satisfies the condition
const n=[10,20,30,40,50];

const result=n.filter(a=>{
    return a>25;
});

console.log(result);//

const stud=[
    {name:"Raj",marks:90},
    {name:"Ravi",marks:45},
    {name:"Kiran",marks:70}
];

const passed=stud.filter(student=>{
    return student.marks>=50;
});

console.log(passed);

//4.find() method-returns only the first matching element
const num=[5,7,12,20,30];

const even=num.find(num=>{
    return num%2===0;
});

console.log(even);

//5.findindex()-returns the position
const i=[5,7,12,20];

const index=i.findIndex(num=>{
    return num===5;
});

console.log(index);//output 2

//6.reduce()-Reduce an entire array into ONE value.
const val=[10,20,30,73];

const total=val.reduce((sum,current)=>{
    return sum+current;
},9);

console.log(total);//62

const avg=[2,3,4];

const res=avg.reduce((total,current)=>{
    return total*current;
},2);

console.log(res);

//7.some() method checks whether atleat one element satisfies the condition
const a=[5,7,9,11];

const answer=a.some(num=>{
    return num%2===0;
});

console.log(answer);//true

//8. every()-checks whether all elements satisfies the condition
const b=[2,4,6,7];

const r=b.every(num=>{
    return num%2===0;
});

console.log(r);//true

//9.includes()-Checks whether an element exists.
const fruits=["Apple","Banana","Orange"];

console.log(fruits.includes("Bananaa"));//true

//10.sort() method-it Sorts elements.
const c=[30,40,10,20];

c.sort((a,b)=>a-b);

console.log(numbers);

//11.reverse() method-it reverses an array
const d=[1,2,3];

d.reverse();



console.log(numbers);//3,2,1



//12.call back function
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Raj");
}

processUser(greet); 