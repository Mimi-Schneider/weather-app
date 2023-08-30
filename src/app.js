function displayTemperature (response) {
    console.log(response.data.temperature.current);

}

let apiKey = "389bf9e2068049a646a1betcf8f0o632";

let apiUrl =`https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);