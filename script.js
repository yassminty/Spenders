
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