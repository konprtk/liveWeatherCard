const apiKey = "7H0pJ0AaLhkt8w4TKZwcveTwnz9z9BET";

async function checkWeather(city) {
  try {
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`
    );
    const data = await response.json();
    // console.log("API Response:", pratik);

    const dailyForecasts = data.timelines.daily[0];
    const temperature = dailyForecasts.values.temperatureAvg;
    const humidity = dailyForecasts.values.humidityAvg;
    const windSpeed = dailyForecasts.values.windSpeedAvg;

    document.querySelector(".temp").textContent = `${temperature}°C`;
    document.querySelector(".city").textContent = city.toUpperCase();
    document.querySelector(".humidity").textContent = `${humidity}%`;
    document.querySelector(".wind").textContent = `${windSpeed} KM/H`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  checkWeather(city);
});


document.addEventListener("DOMContentLoaded", () => {
  const defaultCity = "Pune";
  document.getElementById("cityInput").value = defaultCity;
  checkWeather(defaultCity);
});
