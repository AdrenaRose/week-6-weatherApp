let fetchButton = document.getElementById("search-button");
let searchHistory = document.getElementById("search-history");

function getLatLong(){
  let 
}

function getApi() {
  let requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=ac3f111a6c43635ae1941078ccac0b18";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // for(var i = 0; i < data.length; i++)
      // {

      // }
    });
}

fetchButton.addEventListener("click", getApi);
