//Local Storage Methods;
// setItem()
// getItem()
// removeItem()
// clear()

// setItem()-Stores data.
//localStorage.setItem(key, value);

localStorage.setItem("name", "Raj");
// localStorage.setItem("username", "rajkumar");


//getItem-gets data
const name = localStorage.getItem("name");
console.log(name);
let user = localStorage.getItem("username");  // "rajkumar"
console.log(user);

//removeItem()- Deletes one item.
//  localStorage.removeItem("username");
// console.log(localStorage.getItem("username")); // null

//clear()
// localStorage.clear();

//session storage
// Save data
sessionStorage.setItem("theme", "dark");

// Get data
let theme = sessionStorage.getItem("theme");  // "dark"
console.log(theme)

// Remove a specific item
sessionStorage.removeItem("theme");

// Clear all sessionStorage
sessionStorage.clear();

//practical example
const input = document.getElementById("name");

const button = document.getElementById("save");

button.addEventListener("click", function () {

    localStorage.setItem("username", input.value);

});

//display stored data
const username = localStorage.getItem("username");
console.log(username);

//auto fill input
const inputt = document.getElementById("name");
inputt.value = localStorage.getItem("username");

//store numbers
localStorage.setItem("age", 25);
console.log(localStorage.getItem("age"));


//store objects
const student = {
    name: "Raj",
    age: 25
};
localStorage.setItem(
    "student",
    JSON.stringify(student)

);

const students = JSON.parse(

    localStorage.getItem("students")
);

console.log(student);

//session storage-Session Storage stores data only until the browser tab is closed.
//sessionStorage.setItem()
//sessionStorage.getItem()
//sessionStorage.removeItem()
//sessionStorage.clear()

sessionStorage.setItem("city", "Hyderabad");

console.log(sessionStorage.getItem("city"));