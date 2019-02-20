document.addEventListener('DOMContentLoaded', function () {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
});

// JQ for html


//  $('.nav-tabs a').on('shown.bs.tab', function(event){
//     var x = $(event.target).text();         // active tab
//     var y = $(event.relatedTarget).text();  // previous tab
//     $(".act span").text(x);
//     $(".prev span").text(y);
//   });


// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// // Configure Slider
// $('.carousel').carousel({
//   interval: 6000,
//   pause: 'hover'
// });

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


// nav Bar

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
});



//   Lightbox Init
//   $(document).on('click', '[data-toggle="lightbox"]', function (event) {
//     event.preventDefault();
//     $(this).ekkoLightbox();
//   });
// });








// Zim
// Zim will need to do the following:
// * Weather API 
// * Schedule with Patrick








































































// John H.
// weather widget 
// this is the api provided by darksky 

var APIKey1 = "c1bb514e192e30552256903a2f6dbb49";

// Here we are building the URL we need to query the database. You need to use the proxy to avoid the CORS error. Go here for more info:https://www.freecodecamp.org/forum/t/solved-having-trouble-getting-response-from-dark-sky-api/100653/2
var proxy = "https://cors-anywhere.herokuapp.com/";
var queryURL = "https://api.darksky.net/forecast/" + APIKey1 + "/38.846218,-77.306374"

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: proxy + queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function (response) {

    // Log the queryURL
    // console.log(queryURL);

    // Log the resulting object
    // console.log(response);

    // Transfer content to HTML
    $(".probRain").html((response.currently.precipProbability * 100) + "%");
    $(".cityTemp").html(response.currently.temperature + " °F");

    // Log the data in the console as well
    // console.log("Prob. Rain: " + response.currently.precipProbability * 100);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temp (F): " + response.main.temp);
    // console.log("Clouds: " + response.clouds + "%")
  });


// --------------------------------------------------------------------------------------------------------
// This code works but for OpenWeather. We already used the API so I needed to chose another one.
// var APIKey = "a23739c0f73bab1e826b057e9e677284";

// Here we are building the URL we need to query the database
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
//   "q=Fairfax,US&units=imperial&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
//   url: queryURL,
//   method: "GET"
// })
// We store all of the retrieved data inside of an object called "response"
// .then(function(response) {

// Log the queryURL
// console.log(queryURL);

// Log the resulting object
// console.log(response);

// Transfer content to HTML
// $(".cityInput").html(response.name + ", Virginia");
// $(".wind").text("Wind Speed: " + response.wind.speed);
// $(".cityClouds").text(response.clouds.all + "%");
// $(".cityTemp").text(response.main.temp + " °F");

// Log the data in the console as well
//   console.log("Wind Speed: " + response.wind.speed);
//   console.log("Humidity: " + response.main.humidity);
//   console.log("Temp (F): " + response.main.temp);
//   console.log("Coverage: " + response.clouds + "%")
// });

// display time and date in nav bar
function displayRealTime() {
  setInterval(function () {
    $('.timeInput').html(moment().format('hh:mm A'))
  }, 1000);
}
displayRealTime();


function displayRealDate() {

  $('.dateInput').html(moment().format('MMM Do YYYY'));

}
displayRealDate();



// this is the 3d flip Box  for yelp review





// yelp reviews 
// this is the api provided by darksky 

// This is the api for google reviews and google map and google place
var APIKey2 = "AIzaSyD9iuDLMMW7V8Q3dFQ0FpJzHEggXXvGJ14";
// This is the api for Yelp
var APIKey3 = "ZAjQEsHcP3gXuoxr-iw9hHU1_5LX-Nc5Qqg2_M2Hv41cBy8DT7QVq7nu64-I-NVIWThqYJwEb08BDgD2HVQv-sdr4TaZvVsCNWoY51mO3YTarER2ps9da2cck0tbXHYx";

// Here we are building the URL we need to query the database. You need to use the proxy to avoid the CORS error. Go here for more info:https://www.freecodecamp.org/forum/t/solved-having-trouble-getting-response-from-dark-sky-api/100653/2
// var proxy =  "https://cors-anywhere.herokuapp.com/";
//www.yelp.com/biz/ace-mobile-auto-detailing-fairfax



// You need this to get the business id from Yelp that you will place in queryURL1
var queryURL = "https://api.yelp.com/v3/businesses/search?term=ace-mobile-auto-detailing&location=fairfax";
// You take the business id you found in the above (when you console.log it) and you place it betweeen businesses and reviews
var queryURL1 = "https://api.yelp.com/v3/businesses/f5CEHI2aNAriY23TObBQxw/reviews";

// this is the proxy you need to pass teh CORS issue
var proxy = "https://cors-anywhere.herokuapp.com/";


// This is what you use to get google reviews or google place api information:
//   var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" + APIKey2

//  var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" + APIKey2

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: proxy + queryURL1,
  method: 'Get',
  dataType: 'json',
  headers: {
    'Authorization': 'Bearer ' + APIKey3,
  },


  // success: function(data){
  //     console.log('success:  ' + data);
  // }
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function (response) {

    // Log the queryURL
    // console.log(queryURL);

    // Log the resulting object
    // console.log(response);

    // console.log(response.reviews[0].text)

    // Transfer content to HTML
    $("#nameCard1").html(response.reviews[0].user.name);
    $("#nameCard2").html(response.reviews[1].user.name);
    $("#nameCard3").html(response.reviews[2].user.name);

    $("#rating1").html(response.reviews[0].rating);
    $("#rating2").html(response.reviews[1].rating);
    $("#rating3").html(response.reviews[2].rating);


    $("#cardText1a").html(response.reviews[0].text);
    $("#cardText2a").html(response.reviews[1].text);
    $("#cardText3a").html(response.reviews[2].text);



    var picLink0 = (response.reviews[0].user.image_url);
    var picLink1 = (response.reviews[1].user.image_url);
    var picLink2 = (response.reviews[2].user.image_url);


    document.getElementById('cardPic1').src = picLink0;
    document.getElementById('cardPic1a').src = picLink0;
    document.getElementById('cardPic2').src = picLink1;
    document.getElementById('cardPic2a').src = picLink1;
    document.getElementById('cardPic3').src = picLink2;
    document.getElementById('cardPic3a').src = picLink2;


    // $("#cardPic2").html(response.reviews[2].user.image_url);
    // document.getElementById('#cardPic2').src = $("#cardPic2").html(response.reviews[2].user.image_url);
    // $(".cityTemp").html(response.currently.temperature + " °F");

    // Log the data in the console as well
    // console.log("Prob. Rain: " + response.currently.precipProbability);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temp (F): " + response.main.temp);
    // console.log("Clouds: " + response.clouds + "%")
  });







// Photo gallery section  
// this is the api provided by darksky 

// This is the api for google reviews and google map and google place
var APIKey2 = "AIzaSyD9iuDLMMW7V8Q3dFQ0FpJzHEggXXvGJ14";
// This is the api for Yelp
var APIKey3 = "ZAjQEsHcP3gXuoxr-iw9hHU1_5LX-Nc5Qqg2_M2Hv41cBy8DT7QVq7nu64-I-NVIWThqYJwEb08BDgD2HVQv-sdr4TaZvVsCNWoY51mO3YTarER2ps9da2cck0tbXHYx";

// Here we are building the URL we need to query the database. You need to use the proxy to avoid the CORS error. Go here for more info:https://www.freecodecamp.org/forum/t/solved-having-trouble-getting-response-from-dark-sky-api/100653/2
// var proxy =  "https://cors-anywhere.herokuapp.com/";
//www.yelp.com/biz/ace-mobile-auto-detailing-fairfax



// You need this to get the business id from Yelp that you will place in queryURL1
var queryURL = "https://api.yelp.com/v3/businesses/search?term=ace-mobile-auto-detailing&location=fairfax";
// You take the business id you found in the above (when you console.log it) and you place it betweeen businesses and reviews
var queryURL1 = "https://api.yelp.com/v3/businesses/f5CEHI2aNAriY23TObBQxw/reviews";

var queryURL3 = "https://api.yelp.com/v3/businesses/f5CEHI2aNAriY23TObBQxw";

// this is the proxy you need to pass teh CORS issue
var proxy = "https://cors-anywhere.herokuapp.com/";


// This is what you use to get google reviews or google place api information:
//   var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" + APIKey2

//  var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" + APIKey2

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: proxy + queryURL3,
  method: 'Get',
  dataType: 'json',
  headers: {
    'Authorization': 'Bearer ' + APIKey3,
  },


  // success: function(data){
  //     console.log('success:  ' + data);
  // }
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function (response) {

    // Log the queryURL
    // console.log(queryURL);

    // Log the resulting object
    // console.log(response);

    // console.log(response.name)

    // Transfer content to HTML
    // $("#nameCard1").html(response.reviews[0].user.name);
    // $("#nameCard2").html(response.reviews[1].user.name);
    // $("#nameCard3").html(response.reviews[2].user.name);

    // $("#rating1").html(response.reviews[0].rating);
    // $("#rating2").html(response.reviews[1].rating);
    // $("#rating3").html(response.reviews[2].rating);


    // $("#cardText1a").html(response.reviews[0].text);
    // $("#cardText2a").html(response.reviews[1].text);
    // $("#cardText3a").html(response.reviews[2].text);



    var galleryPic1 = (response.photos[0]);
    var galleryPic2 = (response.photos[1]);
    var galleryPic3 = (response.photos[2]);


    document.getElementById('galPic1').src = galleryPic1;
    document.getElementById('galPic2').src = galleryPic2;
    document.getElementById('galPic3').src = galleryPic3;


    // document.getElementById('galPic4').src = picLink1;
    // document.getElementById('galPic5').src = picLink2;
    // document.getElementById('galPic6').src = picLink2;


    // $("#cardPic2").html(response.reviews[2].user.image_url);
    // document.getElementById('#cardPic2').src = $("#cardPic2").html(response.reviews[2].user.image_url);
    // $(".cityTemp").html(response.currently.temperature + " °F");

    // Log the data in the console as well
    // console.log("Prob. Rain: " + response.currently.precipProbability);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temp (F): " + response.main.temp);
    // console.log("Clouds: " + response.clouds + "%")
  });









// Photo gallery section (using yelp api --- another company's pits) 

// This is the api for google reviews and google map and google place
var APIKey2 = "AIzaSyD9iuDLMMW7V8Q3dFQ0FpJzHEggXXvGJ14";
// This is the api for Yelp
var APIKey3 = "ZAjQEsHcP3gXuoxr-iw9hHU1_5LX-Nc5Qqg2_M2Hv41cBy8DT7QVq7nu64-I-NVIWThqYJwEb08BDgD2HVQv-sdr4TaZvVsCNWoY51mO3YTarER2ps9da2cck0tbXHYx";


// Here we are building the URL we need to query the database. You need to use the proxy to avoid the CORS error. Go here for more info:https://www.freecodecamp.org/forum/t/solved-having-trouble-getting-response-from-dark-sky-api/100653/2
// var proxy =  "https://cors-anywhere.herokuapp.com/";
//www.yelp.com/biz/ace-mobile-auto-detailing-fairfax

// You need this to get the business id from Yelp that you will place in queryURL1
var queryURL = "https://api.yelp.com/v3/businesses/search?term=detail-authority&location=fairfax";
// You take the business id you found in the above (when you console.log it) and you place it betweeen businesses and reviews
var queryURL1 = "https://api.yelp.com/v3/businesses/mQovhGbEH6inVOL44L7nFQ/reviews";

var queryURL3 = "https://api.yelp.com/v3/businesses/mQovhGbEH6inVOL44L7nFQ";

// this is the proxy you need to pass teh CORS issue
var proxy = "https://cors-anywhere.herokuapp.com/";


// This is what you use to get google reviews or google place api information:
//   var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" + APIKey2

//  var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" + APIKey2

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: proxy + queryURL3,
  method: 'Get',
  dataType: 'json',
  headers: {
    'Authorization': 'Bearer ' + APIKey3,
  },


  // success: function(data){
  //     console.log('success:  ' + data);
  // }
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function (response) {

    // Log the queryURL
    // console.log(queryURL);

    // Log the resulting object
    // console.log(response);

    // console.log(response.name)

    // Transfer content to HTML
    // $("#nameCard1").html(response.reviews[0].user.name);
    // $("#nameCard2").html(response.reviews[1].user.name);
    // $("#nameCard3").html(response.reviews[2].user.name);

    // $("#rating1").html(response.reviews[0].rating);
    // $("#rating2").html(response.reviews[1].rating);
    // $("#rating3").html(response.reviews[2].rating);


    // $("#cardText1a").html(response.reviews[0].text);
    // $("#cardText2a").html(response.reviews[1].text);
    // $("#cardText3a").html(response.reviews[2].text);



    var galleryPic4 = (response.photos[0]);
    var galleryPic5 = (response.photos[1]);
    var galleryPic6 = (response.photos[2]);


    document.getElementById('galPic4').src = galleryPic4;
    document.getElementById('galPic5').src = galleryPic5;
    document.getElementById('galPic6').src = galleryPic6;


    // document.getElementById('galPic4').src = picLink1;
    // document.getElementById('galPic5').src = picLink2;
    // document.getElementById('galPic6').src = picLink2;


    // $("#cardPic2").html(response.reviews[2].user.image_url);
    // document.getElementById('#cardPic2').src = $("#cardPic2").html(response.reviews[2].user.image_url);
    // $(".cityTemp").html(response.currently.temperature + " °F");

    // Log the data in the console as well
    // console.log("Prob. Rain: " + response.currently.precipProbability);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Temp (F): " + response.main.temp);
    // console.log("Clouds: " + response.clouds + "%")
  });





// ChatBox Javascript 
//Initialize Firebase and change the values of the config values with your own Firebase config values.
var config = {
  apiKey: "AIzaSyD6H7VNIiGB9ykCV5qXp5Lts4UdSCpwou4",
  authDomain: "messagingapp-7b60d.firebaseapp.com",
  databaseURL: "https://messagingapp-7b60d.firebaseio.com",
  projectId: "messagingapp-7b60d",
  storageBucket: "messagingapp-7b60d.appspot.com",
  messagingSenderId: "83093108806"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Variables (SET the first set IN FIREBASE FIRST)
// Note remember to create these same variables in Firebase!
var name = "";
var email = "";
var message = "";
var moderator = "";

// Click Button changes what is stored in firebase
$("#click-button").on("click", function (event) {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get inputs
  name = $("#name-input").val().trim();
  email = $("#email-input").val().trim();
  message = $("#message-input").val().trim();
  typeQuestion = $("#carsList").val().trim();

  // Change what is saved in firebase
  database.ref().push({
    name: name,
    email: email,
    message: message,
    moderator: typeQuestion,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });


  	//Remove the text from the form boxes after user presses the add to schedule button.
  $("#name-input").val("");
  $("#email-input").val("");
  $("#message-input").val("");
  $("#carsList").val("");

});

// Click Button changes what is stored in firebase
$("#close-button").on("click", function (event) {
  // Prevent the page from refreshing
  event.preventDefault();

  	//Remove the text from the form boxes after user presses the add to schedule button.
  $("#name-input").val("");
  $("#email-input").val("");
  $("#message-input").val("");

});



// // Firebase watcher .on("child_added"
// database.ref().on("child_added", function (snapshot) {
//   // storing the snapshot.val() in a variable for convenience
//   var sv = snapshot.val();

//   // Console.loging the last user's data
//   console.log(sv.name);
//   console.log(sv.message);

//   // Change the HTML to reflect
//   $("#name-here").text(sv.name + ":");
//   $("#message-here").text(sv.message);

//   // Handle the errors
// }, function (errorObject) {
//   console.log("Errors handled: " + errorObject.code);
// });




// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
database.ref().on("child_added", function (childSnapshot) {

  // Log everything that's coming out of snapshot
  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().message);


  // full list of items to the well
  $("#displayed-data").prepend("<div id='well'><h4 class='member-name'>" +
    childSnapshot.val().name + ":" +
    " </h4><p class='member-message'> " + childSnapshot.val().message +
    " </p></div>");

    


  // Handle the errors
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});





//allows you to put password on button which then allows you to go to the adminPage
$("#hidden-button").on("click", function (event) {

  var testV = 1;
  var pass1 = prompt('Please Enter Your Password',' ');
  while (testV < 3) {
  if (!pass1) 
  history.go(-1);
  if (pass1.toLowerCase() == "letmein") {
  alert('You Got it Right!');
  // this needs to be changed when you put file on github. it needs the web address that will be associated with admin page 
  window.open("adminPage.html");
  break;
  } 
  testV+=1;
  var pass1 = 
  prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
  }
  if (pass1.toLowerCase()!="password" & testV ==3) 
  history.go(-1);
  return " ";



});









