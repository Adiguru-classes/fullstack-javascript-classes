//promise has 3 states pending,success and rejected

// console.log("Before Fetch");

// const promise = fetch ("https://jsonplaceholder.typicode.com/users");
// console.log(promise);//pending

// console.log("After Fetch");

//success state
// const prom = fetch("https://jsonplaceholder.typicode.com/users");

// prom.then(function(data){

//     console.log("Success!");

//     console.log(data);

// });


//rejected state
// fetch("https://invalid-domain-12345.com/users")//invalid url
// .then(function(response){

//     console.log(response);

// }).catch(function(error){

//     console.log(error);

// });

//promise settimeout
// const promise = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(promise);

// setTimeout(function () {

//     console.log("After 5 Seconds:");

//     console.log(promise);

// }, 5000);


//GET request-load data from message.txt
function loadMessage() {

    fetch("message.txt")
        .then(function (r) {
            console.log(r);
            return r.text();//we convert resposne object into text

        }) .then(function (a) {

            document.getElementById("output").textContent = a;

        })

        .catch(function () {

            console.log("Error");

        });

}

//load data from student.json
function loadStudent() {

    fetch("student.json")

        .then(function (r) {

            return r.json();//here we convert json object to normal javascript object

        })

        .then(function (s) {

            console.log(s);

            document.getElementById("output").innerHTML =  //template literals

                `
                Nameee : ${s.name}<br>
                Age : ${s.age}<br>
                City : ${s.city}
                `;

        });

}

// loadStudent()

//console data frpom public api
// function loadUsers() {

//     fetch("https://jsonplaceholder.typicode.com/users")

//         .then(function (response) {

//             return response.json();

//         })

//         .then(function (users) {

//             console.log(users);

//         })

//         .catch(function () {

//             console.log("Error");

//         });

// }
// loadUsers();

//console only user names
// fetch("https://jsonplaceholder.typicode.com/users")

// .then(function(response){

//     return response.json();

// }).then(function(users){

//     users.forEach(function(user){

//         console.log(user.name);

//     });
// });

// fetch("https://fakestoreapi.com/products")
//     .then(function(response) {

//         return response.json();

//     })
//     .then(function(products) {

//         console.log(products);

//     })
//     .catch(function(error) {

//         console.log(error);

//     });

    const productsContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products")

.then(function(response){

    return response.json();

})

.then(function(products){

    products.forEach(function(product){

        productsContainer.innerHTML += `

            <div>

                <h2>${product.title}</h2>

                <img src="${product.image}" width="150">

                <p>Price: ${product.price}</p>
                <p>category:"${product.category}</p>
                <p>description:"${product.description}</p>
                <p>rating:"${product.rating.rate}"</p>

                <hr>

            </div>

        `;

    });

})

.catch(function(error){

    console.log(error);

});

//POST request
fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {

        "Content-Type": "application/json" //telling the brwser about data format while sending-it labels the parcel with data format ex:html,text,json

    },

    body: JSON.stringify({  //internet cant send js objects directly,The server expects JSON text,it convert javascript object to json "{\"title\":\"JavaScript\",\"body\":\"Learning Fetch API\",\"userId\":1}"-it packs the parcel to json

        title: "JavaScript",

    description: "Learning Fetch API",

        userId: 1

    })

})

.then(function(response){

    return response.json();

})

.then(function(data){

    console.log(data);

});

//PUT request or update request
fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method: "PUT",

    headers: {

        "Content-Type": "application/json"

    },

    body: JSON.stringify({

        id: 1,

        title: "Updated Titlee",

        body: "Updated Content",

        userId: 1

    })

})

.then(function(response){

    return response.json(); //it returns resposne objecta nd data is inside thatt object

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
