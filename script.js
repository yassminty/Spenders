
var MenuThings= document.getElementById("MenuThings");
MenuThings.style.maxHeight = "0px";
function menutoggle(){
    if (MenuThings.style.maxHeight = "0px"){
        MenuThings.style.maxHeight = "200px";
    }
    else{
        MenuThings.style.maxHeight = "0px";
    }
}

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");


function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
}



var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://spendersshoppes-3fdc.restdb.io/rest/contact",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "65c83936c8b8253b470d9e1f",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://spendersshoppes-3fdc.restdb.io/rest/contact",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "65c83936c8b8253b470d9e1f",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://spendersshoppes-3fdc.restdb.io/rest/contact/(ObjectID)",
    "method": "DELETE",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "65c83936c8b8253b470d9e1f",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  // Function to add an item to the cart
function addToCart(productId, productName, price) {
  // Check if cart exists in local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  let existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      productId: productId,
      productName: productName,
      price: price,
      quantity: 1
    });
  }

  // Save the updated cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Refresh the cart display
  displayCart();
}

// Function to display the cart
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';

  cart.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.productName} - $${item.price} x ${item.quantity}`;
    cartDiv.appendChild(itemDiv);
  });
}

// Function to display the products
function displayProducts() {
  // This is where you would fetch products from an API
  // For simplicity, we'll just hardcode some products here
  let productsDiv = document.getElementById('products');

  let products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];

  products.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
    `;
    productsDiv.appendChild(productDiv);
  });
}

// Call function to display products
displayProducts();

// Event listener for the cart icon
document.getElementById('cart-icon').addEventListener('click', function() {
  displayCart(); // Display the cart when the icon is clicked
});
