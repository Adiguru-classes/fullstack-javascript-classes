//GET request-load data from message.txt
function loadMessage() {

    fetch("message.txt")
        .then(function (response) {
             console.log(response);
            return response.text();//we convert resposne object into text

        }) .then(function (message) {

            document.getElementById("output").textContent = message;

        })

        .catch(function () {

            console.log("Error");

        });

}

//load data from student.json
function loadStudent() {

    fetch("student.json")

        .then(function (response) {

            return response.json();//here we convert json object to normal javascript object

        })

        .then(function (student) {

            console.log(student);

            document.getElementById("output").innerHTML =

                `
                Name : ${student.name}<br>
                Age : ${student.age}<br>
                City : ${student.city}
                `;

        });

}

loadStudent()

//console data frpom public api
function loadUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(function (response) {

            return response.json();

        })

        .then(function (users) {

            console.log(users);

        })

        .catch(function () {

            console.log("Error");

        });

}
loadUsers();

//console only user names
fetch("https://jsonplaceholder.typicode.com/users")

.then(function(response){

    return response.json();

}).then(function(users){

    users.forEach(function(user){

        console.log(user.name);

    });
});


//POST request
fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {

        "Content-Type": "application/json" //telling the brwser about data format while sending-it labels teh poarcel with dat format ex:html,text,json

    },

    body: JSON.stringify({  //internet cant send js objects directly,The server expects JSON text,it convert javascript object to json "{\"title\":\"JavaScript\",\"body\":\"Learning Fetch API\",\"userId\":1}"-it packs the parcel to json

        title: "JavaScript",

        body: "Learning Fetch API",

        userId: 1

    })

})

.then(function(response){

    return response.json();

})

.then(function(data){

    console.log(data);

});

//PUT request
fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "PUT",

    headers: {

        "Content-Type": "application/json"

    },

    body: JSON.stringify({

        id: 1,

        title: "Updated Title",

        body: "Updated Content",

        userId: 1

    })

})

.then(function(response){

    return response.json();

})

.then(function(data){

    console.log(data);

});

//DELETE request
fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "DELETE"

})

.then(function(response){

    console.log("Deleted Successfully");

});
