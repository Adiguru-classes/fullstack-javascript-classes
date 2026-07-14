let form = document.getElementById("registrationForm");


form.addEventListener("submit", function (e) {

    // Stop form from refreshing the webpage
    e.preventDefault();


    // STEP 1:
    // Get all input values

    let name = document
        .getElementById("name")
        .value
        .trim();


    let email = document
        .getElementById("email")
        .value
        .trim();


    let age = document
        .getElementById("age")
        .value;


    let password = document
        .getElementById("password")
        .value;


    let confirmPassword = document
        .getElementById("confirmPassword")
        .value;


    let course = document
        .getElementById("course")
        .value;


    let terms = document
        .getElementById("terms")
        .checked;



    // STEP 2:
    // Clear old error messages

    document.getElementById("nameError").innerHTML = "";

    document.getElementById("emailError").innerHTML = "";

    document.getElementById("ageError").innerHTML = "";

    document.getElementById("passwordError").innerHTML = "";

    document.getElementById("confirmPasswordError").innerHTML = "";

    document.getElementById("courseError").innerHTML = "";

    document.getElementById("termsError").innerHTML = "";

    document.getElementById("successMessage").innerHTML = "";



    // STEP 3:
    // Assume form is valid initially

    let isValid = true;



    // STEP 4:
    // Validate Name

    if (name === "") {

        document.getElementById("nameError")
            .innerHTML = "Name is required";

        isValid = false;

    }
    else if (name.length < 3) {

        document.getElementById("nameError")
            .innerHTML = "Name must contain at least 3 characters";

        isValid = false;

    }



    // STEP 5:
    // Validate Email

    if (email === "") {

        document.getElementById("emailError")
            .innerHTML = "Email is required";

        isValid = false;

    }
    else if (!email.includes("@")) {

        document.getElementById("emailError")
            .innerHTML = "Please enter a valid email";

        isValid = false;

    }



    // STEP 6:
    // Validate Age

    if (age === "") {

        document.getElementById("ageError")
            .innerHTML = "Age is required";

        isValid = false;

    }
    else if (Number(age) < 18) {

        document.getElementById("ageError")
            .innerHTML = "Age must be 18 or above";

        isValid = false;

    }



    // STEP 7:
    // Validate Password

    if (password === "") {

        document.getElementById("passwordError")
            .innerHTML = "Password is required";

        isValid = false;

    }
    else if (password.length < 6) {

        document.getElementById("passwordError")
            .innerHTML = "Password must contain at least 6 characters";

        isValid = false;

    }



    // STEP 8:
    // Validate Confirm Password

    if (confirmPassword === "") {

        document.getElementById("confirmPasswordError")
            .innerHTML = "Please confirm your password";

        isValid = false;

    }
    else if (password !== confirmPassword) {

        document.getElementById("confirmPasswordError")
            .innerHTML = "Passwords do not match";

        isValid = false;

    }



    // STEP 9:
    // Validate Course

    if (course === "") {

        document.getElementById("courseError")
            .innerHTML = "Please select a course";

        isValid = false;

    }



    // STEP 10:
    // Validate Terms Checkbox

    if (terms === false) {

        document.getElementById("termsError")
            .innerHTML = "Please accept Terms & Conditions";

        isValid = false;

    }



    // STEP 11:
    // Check final result

    if (isValid === true) {

        document.getElementById("successMessage")
            .innerHTML = "Registration Successful!";

    }

});