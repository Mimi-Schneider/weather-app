function displayTemperature (response) {
    console.log(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description"); 
    let humidityElement=document.querySelector("#humidity");
    let windElement = document.querySelector ("#wind");
    let feelsElement = document.querySelector("#feels");

    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = response.data.wind.speed;
    feelsElement.innerHTML = Math.round(response.data.temperature.feels_like);

}

let apiKey = "389bf9e2068049a646a1betcf8f0o632";

let apiUrl =`https://api.shecodes.io/weather/v1/current?query=Salt Lake City&key=${apiKey}&units=imperial`
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);