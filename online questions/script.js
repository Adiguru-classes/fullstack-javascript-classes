console.log("hello")


// In Javascript write a function that takes a string, splits the string by dots (.) 
// and returns the second last string 
// from that split. If there are no dots in the original string return an empty string.
//  For example the parameter "ggg.ttt.com", the function returns "ttt".

function getSecondLastPart(inputString) {
    // Split the string by dots
    const parts = inputString.split('.');

    // Check if there are at least two parts after the split
    if (parts.length < 2) {
        return '';
    }

    // Return the second last part
    return parts[parts.length - 2];
}

// Example usage
console.log(getSecondLastPart("ggg.ttt.com")); // Output: "ttt"
console.log(getSecondLastPart("example.com")); // Output: "example"
console.log(getSecondLastPart("com")); // Output: ""