// Dummy product data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById('products');
    let html = '';
    products.forEach(product => {
        html += `<div class="product">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>`;
    });
    productsSection.innerHTML = html;
}

// Function to add product to cart
function addToCart(productId) {
    // Dummy function for demonstration
    alert(`Product with ID ${productId} added to cart!`);
}

// Display products when the page loads
window.onload = displayProducts;
