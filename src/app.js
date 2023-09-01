function formatDate(timestamp) {
    let date = new Date (timestamp);
    let hours = date.getHours();
    if (hours <10 ){
        hours=`0${minutes}`;
    }
    let minutes = date.getMinutes();
    if (minutes <10 ){
        minutes=`0${minutes}`;
    }
    let days = 
    ["Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}


function displayTemperature (response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description"); 
    let humidityElement=document.querySelector("#humidity");
    let windElement = document.querySelector ("#wind");
    let feelsElement = document.querySelector("#feels");
    let dateElement = document.querySelector ("#date");
    let iconElement = document.querySelector("#current-icon"); 

    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = response.data.wind.speed;
    feelsElement.innerHTML = Math.round(response.data.temperature.feels_like);
    dateElement.innerHTML = formatDate(response.data.time*1000);
    iconElement.setAttribute("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
    iconElement.setAttribute("alt",response.data.condition.icon);
}

let apiKey = "389bf9e2068049a646a1betcf8f0o632";
let city = "Salt Lake City";
let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);