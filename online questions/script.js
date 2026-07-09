//1.count lowercase letyetrs from a string-example:"abcABC123" ===> 3

function lowercaseCount(str) {
    let count = 0;

    for (let char of str) {
        if (char === char.toLowerCase() && char !== char.toUpperCase()) { //if both conditions are true count will increase and second condition is to tackle numbers and special characters from getting count
            count++;
        }
    }

    return count;//function value can be replace dby anythng which function returns
}

console.log(lowercaseCount("abcABC123"));//3

//shorter version
function lowercaseCount(str){
  return  (str.match(/[a-z]/g) || []).length;
}

//2.return the day
function whatday(num) {

    if (num === 1) {
        return "Sunday";
    } else if (num === 2) {
        return "Monday";
    } else if (num === 3) {
        return "Tuesday";
    } else if (num === 4) {
        return "Wednesday";
    } else if (num === 5) {
        return "Thursday";
    } else if (num === 6) {
        return "Friday";
    } else if (num === 7) {
        return "Saturday";
    } else {
        return "Wrong, please enter a number between 1 and 7";
    }
}

console.log(whatday(2));

//3.calculate teh age

function calculateAge(birthYear, currentYear) {
    let difference = currentYear - birthYear;

    if (difference > 0) {
        return "You are " + difference + " years old.";
    } else if (difference < 0) {
        return "You will be born in " + (-difference) + " years.";
    } else {
        return "You were born this very year!";
    }
}

console.log(calculateAge(1996, 2026));