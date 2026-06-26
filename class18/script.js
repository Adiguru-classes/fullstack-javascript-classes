async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json(); // Wait for JSON to be ready
    document.getElementById('output').textContent =
      `Name: ${data.name}, Email: ${data.email}`;
  } catch (error) {
    document.getElementById('output').textContent = "Error fetching user.";
    console.error(error);
  }
}



async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.in/api/products?page=2'); // get 6 products
    const products = await response.json();

    const productContainer = document.getElementById('productContainer');

    // Use map to create HTML for each product
    const a = products.map(ramesh => `
      <div class="product">
        <img src="${ramesh.image}" alt="${ramesh.title}">
        <h4>${ramesh.title}</h4>
        <p>$${ramesh.price}</p>
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
