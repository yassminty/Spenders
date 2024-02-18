
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

var RegForm = document.getElementById("RegForm");


function register(){
    RegForm.style.transform = "translateX(0px)";
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

  var jsondata = {"username": "email","password": "birthday"};


  fetch('https://spendersshoppes-3fdc.restdb.io/home/db/spendersshoppes-3fdc')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the data to the console for testing
    // You can handle the API response data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
