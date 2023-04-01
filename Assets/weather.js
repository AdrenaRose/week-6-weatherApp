let apiKey = "ac3f111a6c43635ae1941078ccac0b18";
let fetchButton = document.getElementById("search-button");
let searchHistory = document.getElementById("search-history");

document.getElementById("search-button").addEventListener("click", getApi);

function getApi() {
  let requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Richmond&units=imperial&appid=ac3f111a6c43635ae1941078ccac0b18";
  fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// document.querySelector(".btn").addEventListener("click", getApi);
