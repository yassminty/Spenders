
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

var RegForm = document.getElementById("register-form");
function register(event){
    event.preventDefault();
}

RegForm.addEventListener('submit', register)
var settings = {
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "65c83936c8b8253b470d9e1f",
    "cache-control": "no-cache"
  }
};

fetch('https://spendersshoppes-3fdc.restdb.io/rest/contact', settings)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the data to the console for testing
        // You can handle the API response data here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

var jsondata = {"username": "email","password": "birthday"};

// Fetching data from another endpoint
fetch('https://spendersshoppes-3fdc.restdb.io/home/db/spendersshoppes-3fdc')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the data to the console for testing
        // You can handle the API response data here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

