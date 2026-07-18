//basic promise-success
const promise = new Promise(function (resolve, reject) {

    resolve("Promise Completed Successfully!");

});

promise.then(function (message) {

    console.log(message);

});

//basic promsie-failure
const promis = new Promise(function (resolve, reject) {

    reject("Something Went Wrong!");

});

promis.catch(function (error) {

    console.log(error);

});

const downloadFile = new Promise(function (resolve, reject) {

    console.log("Downloading File...");

    setTimeout(function () {

        resolve("Download Completed!");

    }, 3000);

});

downloadFile.then(function (message) {

    console.log(message);

});

//Success & Failure with setTimeout
const internetAvailable = false;

const fetchData = new Promise(function (resolve, reject) {

    console.log("Connecting to Server...");

    setTimeout(function () {

        if (internetAvailable) {

            resolve("Data Loaded Successfully!");

        } else {

            reject("No Internet Connection!");

        }

    }, 3000);

});

fetchData
.then(function (data) {

    console.log(data);

})
.catch(function (error) {

    console.log(error);

});


//Using .finally()
const payment = new Promise(function (resolve, reject) {

    const paymentSuccess = true;

    if (paymentSuccess) {

        resolve("Payment Successful");

    } else {

        reject("Payment Failed");

    }

});

payment
.then(function (message) {

    console.log(message);

})
.catch(function (error) {

    console.log(error);

})
.finally(function () {

    console.log("Thank You for Visiting!");

});

//promise chain -introduction
const student = new Promise(function (resolve, reject) {

    resolve("Raj");

});

student
.then(function (name) {

    console.log(name);

    return "JavaScript";

})
.then(function (course) {

    console.log(course);

});