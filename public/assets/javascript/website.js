document.addEventListener('DOMContentLoaded', function() {
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
  var proxy =  "https://cors-anywhere.herokuapp.com/";
  var queryURL = "https://api.darksky.net/forecast/" + APIKey1 + "/38.846218,-77.306374"

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: proxy + queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
      $(".probRain").html(response.currently.precipProbability + "%");
      $(".cityTemp").html(response.currently.temperature + " °F");

      // Log the data in the console as well
      console.log("Prob. Rain: " + response.currently.precipProbability);
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
      setInterval(function(){
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

  var APIKey2 = "ZAjQEsHcP3gXuoxr-iw9hHU1_5LX-Nc5Qqg2_M2Hv41cBy8DT7QVq7nu64-I-NVIWThqYJwEb08BDgD2HVQv-sdr4TaZvVsCNWoY51mO3YTarER2ps9da2cck0tbXHYx";

  // Here we are building the URL we need to query the database. You need to use the proxy to avoid the CORS error. Go here for more info:https://www.freecodecamp.org/forum/t/solved-having-trouble-getting-response-from-dark-sky-api/100653/2
  // var proxy =  "https://cors-anywhere.herokuapp.com/";
  //www.yelp.com/biz/ace-mobile-auto-detailing-fairfax
  var proxy =  "https://cors-anywhere.herokuapp.com/";
  var queryURL = "https://api.yelp.com/v3/businesses/f5CEHI2aNAriY23TObBQxw/reviews/" + APIKey1

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: proxy + queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
      // $(".probRain").html(response.currently.precipProbability + "%");
      // $(".cityTemp").html(response.currently.temperature + " °F");

      // Log the data in the console as well
      // console.log("Prob. Rain: " + response.currently.precipProbability);
      // console.log("Humidity: " + response.main.humidity);
      // console.log("Temp (F): " + response.main.temp);
      // console.log("Clouds: " + response.clouds + "%")
    });


