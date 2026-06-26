function loadMessage() {
  fetch('message.txt')
    .then(response => response.text()) // Get plain text
    .then(ramesh => {
      document.getElementById('out').textContent = ramesh;
    })
    .catch(error => {
      document.getElementById('out').textContent = "Error loading message.";
    });
}

function getUser() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      // Display user name and email
      document.getElementById('output').textContent =
        `hi my ,Name: ${data.name}, Email: ${data.email}`;
    })
    .catch(error => {
      document.getElementById('output').textContent = "Failed to load user.";
    });
}

//different types of http methods
//difference between get and post
//what is .then and .catch
//what is response.json
//what is response.text
//what is fetch  
//take an example for fetch
//do an example with xmlhttprequest
//what is ready state
//what is status in  http request
//what is status text
