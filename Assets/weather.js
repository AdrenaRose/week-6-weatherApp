let apiKey = "ac3f111a6c43635ae1941078ccac0b18";
let fetchButton = document.getElementById("search-button");
let searchHistory = document.getElementById("search-history");

//add clickEvent function to the search button - when user clicks search, execute clickEvent
document.getElementById("search-button").addEventListener("click", clickEvent);

//fetch current weather data to get today's weather and display it on the page
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
    });
}

//fetch forecast data and call the getData function to display that data on the page
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
    .then(function (data) {
      getData(
        data,
        dayjs().add(1, "day").subtract(12, "hour").unix(),
        "description1",
        "temp1",
        "windspeed1",
        "humidity1"
      );
      getData(
        data,
        dayjs().add(2, "day").subtract(12, "hour").unix(),
        "description2",
        "temp2",
        "windspeed2",
        "humidity2"
      );
      getData(
        data,
        dayjs().add(3, "day"),
        "description3",
        "temp3",
        "windspeed3",
        "humidity3"
      );
      getData(
        data,
        dayjs().add(4, "day"),
        "description4",
        "temp4",
        "windspeed4",
        "humidity4"
      );
      getData(
        data,
        dayjs().add(5, "day"),
        "description5",
        "temp5",
        "windspeed5",
        "humidity5"
      );
    });
}

//create function for displaying weather on page
function getData(data, dateToStopOn, descId, tempId, windId, humidId) {
  for (var i = 0; i < data.list.length; i++) {
    let date = data.list[i].dt;
    if (date >= dateToStopOn) {
      console.log(i);
      let { description, icon } = data.list[i].weather[0];
      let { temp, humidity } = data.list[i].main;
      let { speed } = data.list[i].wind;
      document.getElementById(descId).innerHTML = description;
      document.getElementById(tempId).innerHTML = Math.round(temp) + "°F";
      document.getElementById(windId).innerHTML = Math.round(speed) + "MPH";
      document.getElementById(humidId).innerHTML = humidity;
      return;
    }
  }
}

//Defines the clickEvent function to call the getWeather and getForecast functions
function clickEvent() {
  getWeather();
  getForecast();
}
