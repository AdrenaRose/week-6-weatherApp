let apiKey = "ac3f111a6c43635ae1941078ccac0b18";
let fetchButton = document.getElementById("search-button");
let searchHistory = document.getElementById("search-history");

document.getElementById("search-button").addEventListener("click", clickEvent);

function getWeather() {
  let city = document.getElementById("cityInput").value;
  let weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    apiKey;
  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function displayWeather(data) {
      let { name } = data;
      let { description, icon } = data.weather[0];
      let { temp, humidity } = data.main;
      let { speed } = data.wind;
      document.getElementById("currentTemp").innerHTML =
        "Current Temperature in " + city + " is " + Math.round(temp) + "°F";
      document.getElementById("currentWindspeed").innerHTML =
        "Windspeed is " + Math.round(speed) + " MPH";
      document.getElementById("currentHumidity").innerHTML =
        "Humidity is " + humidity + "%";
      document.getElementById("searchHistory").append(city);
      console.log(name, icon, description, temp, humidity, speed);
    });
}

function clickEvent() {
  // document.getElementById("cityInput").value;
  getWeather();
  getForecast();
}

function getForecast() {
  let city = document.getElementById("cityInput").value;
  let forecastUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=" +
    apiKey;
  fetch(forecastUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function displayForecast(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        let date = data.list[i].dt;
        // let { description, icon } = data.list[i].weather[0];
        // let { temp, humidity } = data.list[i].main;
        // let { speed } = data.list[i].wind;
        if (date !== dayjs().format()) {
          console.log("Hello");
        }
      }
    });
}
