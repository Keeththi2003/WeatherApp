const apiKey = "6e6516b386ca8bc0f1b36db78b26d7ea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey + "&units=metric");

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".city").innerHTML = "City not found";
        return;

    }
    else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity-value").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind-value").innerHTML = Math.round(data.wind.speed) + " " + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        }

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
