const apiKey = "a1d8d396588aac4bc91762ffa86029fc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');
    if (response.status = 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {
        var data = await response.json();
        console.log(data);
    }
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "file:///C:/Users/Monster/OneDrive/Masa%C3%BCst%C3%BC/images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "file:///C:/Users/Monster/OneDrive/Masa%C3%BCst%C3%BC/images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "file:///C:/Users/Monster/OneDrive/Masa%C3%BCst%C3%BC/images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "file:///C:/Users/Monster/OneDrive/Masa%C3%BCst%C3%BC/images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "file:///C:/Users/Monster/OneDrive/Masa%C3%BCst%C3%BC/images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "error";

    }
   