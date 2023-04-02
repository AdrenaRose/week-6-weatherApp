let apiKey = "ac3f111a6c43635ae1941078ccac0b18";
let fetchButton = document.getElementById("search-button");
let searchHistory = document.getElementById("search-history");

document.getElementById("search-button").addEventListener("click", doClicky);

function getWeather() {
  let city = document.getElementById("cityInput").value;
  let weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    apiKey;
  fetch(weatherUrl).then(function (response) {
    return response.json();
    })
    .then(function displayWeather(data) {
  let { name } = data;
  let { description, icon } = data.weather[0];
  let { temp, humidity } = data.main;
  let { speed } = data.wind;
  console.log(name, icon, description, temp, humidity, speed);
});
}

function doClicky() {
  // document.getElementById("cityInput").value;
  getWeather();
}

// let weather = {
//   getWeather: function (city) {
//     city = document.getElementById("cityInput").value;
//     fetch(weatherUrl)
//       .then((response) => response.json())
//       .then((data) => this.displayWeather(data));
//   },

//   displayWeather: function (data) {
//     let { name } = data;
//     let { icon, description } = data.weather[0];
//     let { temp, humidity } = data.main;
//     let { speed } = data.wind;
//     console.log(name, icon, description, temp, humidity, speed);
//   },
// };

// document.getElementById("search-button").addEventListener("click", getWeather);

// function getForecast() {
//   let forecastUrl =
//     "https://api.openweathermap.org/data/2.5/forecast?q=Richmond&units=imperial&appid=ac3f111a6c43635ae1941078ccac0b18";
//   fetch(forecastUrl)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// getForecast()
