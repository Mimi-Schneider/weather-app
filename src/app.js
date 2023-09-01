function formatDate(timestamp) {
    let date = new Date (timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDate();
    return `${day} ${hours}:${minutes}`;
}


function displayTemperature (response) {
    console.log(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description"); 
    let humidityElement=document.querySelector("#humidity");
    let windElement = document.querySelector ("#wind");
    let feelsElement = document.querySelector("#feels");
    let dateElement = document.querySelector ("#date");

    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = response.data.wind.speed;
    feelsElement.innerHTML = Math.round(response.data.temperature.feels_like);
    dateElement.innerHTML = formatDate(response.data.time*1000);
}

let apiKey = "389bf9e2068049a646a1betcf8f0o632";

let apiUrl =`https://api.shecodes.io/weather/v1/current?query=Salt Lake City&key=${apiKey}&units=imperial`
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);