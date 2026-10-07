
console.log('BEFORE FETCH')

// fetch("https://fakestoreapi.com/products")


// .then(function(response){
// console.log(response)
//     return response.json();

// }).then(function(products){

//     console.log(products);

// }).catch(function(error){

//     console.log(error);

// });

console.log('hy,i am AFTER fetch')

async function getProducts(){
    const response =await fetch("https://fakestoreapi.com/products");
    console.log(response)
    const p =await response.json();
    console.log(p)
}

getProducts();


const a=fetch("https://fakestoreapi.com/products")  
console.log(a)


async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json(); // Wait for JSON to be ready
    console.log(data)
    document.getElementById('output').textContent =
      `Name: ${data.name}, Email: ${data.email}`;
  } catch (error) {
    document.getElementById('output').textContent = "Error fetching user.";
    console.error(error);
  }
}



async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products'); // get 6 products
    const products = await response.json();
    console.log(products)

    const productContainer = document.getElementById('productContainer');

    // Use map to create HTML for each product
    const a = products.map(ramesh => `
      <div class="product">
        <img src="${ramesh.image}" alt="${ramesh.title}">
        <h4>${ramesh.title}</h4>
        <p>$${ramesh.price}</p>
        <h3>${ramesh.description}</h3>
      </div>
    `).join('');

    productContainer.innerHTML = a;

  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}

// fetchProducts();

//questions

//what is the difference between .then and .catch and async await
//what is the difference between .then and .catch
