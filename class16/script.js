// // Save data
// localStorage.setItem("username", "raj");

// // Get data
// let name = localStorage.getItem("username");
// console.log(name); // Output: raj

// // // Remove item
// localStorage.removeItem("username");

// // // Clear all local storage
// localStorage.clear();

localStorage.setItem("username", "rajkumar");

let user = localStorage.getItem("username");  // "rajkumar"
console.log(user);
localStorage.removeItem("username");
console.log(localStorage.getItem("username")); // null

localStorage.clear();

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
