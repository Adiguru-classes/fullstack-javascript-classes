function add(){

    let num1 = Number(document.getElementById("num1").value);//10
    let num2 = Number(document.getElementById("num2").value);//12

    let result = num1 + num2;

    document.getElementById("result").innerHTML =
    "Result : " + result;

}

function subtract(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 - num2;

    document.getElementById("result").innerHTML =
    "Result : " + result;

}

function multiply(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 * num2;

    document.getElementById("result").innerHTML =
    "Result : " + result;

}

function divide(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 / num2;

    document.getElementById("result").innerHTML =
    "Result : " + result;

}