function handleRequest() {
    var xhttp = new XMLHttpRequest();//creating a http request

    xhttp.onreadystatechange = function () {
        // this is referring to xhttp
        if (this.readyState == 3) {
            alert('processing request');
        }
        else if (this.readyState == 4 && this.status == 200) {
            console.log(this.status);
            console.log(this.readyState);
            console.log(this.responseText);//capture the response
            console.log(this.statusText);
            document.getElementById('display').innerHTML = this.responseText;
        }
    } 
    xhttp.open('GET', 'data.json', true);
    xhttp.send();z

}


function loadMessage() {
  var xhr = new XMLHttpRequest(); // Step 1: Create XHR object

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Step 4: When request is done and successful
      document.getElementById("output").innerHTML = this.responseText;
    }
  };

  xhr.open("GET", "message.txt", true); // Step 2: Set method and URL
  xhr.send(); // Step 3: Send the request
}



function fetchUser() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Parse JSON response
      var data = JSON.parse(this.responseText);

      // Display the user info nicely
      var user = data.results[0];
      var output = `
Name: ${user.name.first} ${user.name.last}
Email: ${user.email}
Country: ${user.location.country}
      `;
      document.getElementById("userData").textContent = output;
    }
  };

  xhr.open("GET", "https://randomuser.me/api/", true);
  xhr.send();
}


// this keyword - refers to owner object

//alone
console.log(this);//refer to window object

var person = {
    firstName: 'alina',
    age: 45,
    lastName: this.age,//this is refering to person
    fullName: function () {
        //this will refer to person
        console.log(this.firstName + this.lastName);//refer to the owner where function is residing
    }
}

console.log(person.firstName);