function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }
  
  function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let feelsElement = document.querySelector("#feels");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#current-icon");

    fahrenheitTemperature = response.data.temperature.current;
  
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = response.data.wind.speed;
    feelsElement.innerHTML = Math.round(response.data.temperature.feels_like);
    dateElement.innerHTML = formatDate(response.data.time * 1000);
    iconElement.setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
    iconElement.setAttribute("alt", response.data.condition.icon);
  }
  
  function search(city) {
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
  }
  
function displayCelsiusTemp(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let celsiusTemperature = (fahrenheitTemperature-32)*(5/9);
    temperatureElement.innerHTML =Math.round(celsiusTemperature);
}

  let fahrenheitTemperature = null; 
  
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);

  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", displayCelsiusTemp);

  search("Salt Lake City");