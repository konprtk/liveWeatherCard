// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle');
// xhr.setRequestHeader('x-rapidapi-key', '8ffdf1f20dmsh593fb8ea2e1bfadp15538ejsn736901f69346');
// xhr.setRequestHeader('x-rapidapi-host', 'weather-by-api-ninjas.p.rapidapi.com');

// xhr.send(data);




// ha varcha commented code kaahi kamicha nahiye, kaaran apn khalachy code
// ni je karatoy tech ha suddha karto pn using EventListeners and all that suff



const apiKey = "7H0pJ0AaLhkt8w4TKZwcveTwnz9z9BET";

async function checkWeather(city) {
  try {
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`
    );
    const data = await response.json();
    // console.log("API Response:", pratik);


    // Swapnil, I have modify some code here, jo ki necessary hota okay
    // jo ki aplya page la render karayal mahatvacha hota, api through alela data tithe page vr show karayala. 

    const dailyForecasts = data.timelines.daily[0];
    const temperature = dailyForecasts.values.temperatureAvg;
    const humidity = dailyForecasts.values.humidityAvg;
    const windSpeed = dailyForecasts.values.windSpeedAvg;


    // and her also, this is DOM je ki HTML manipulate karayach kaam karte 
    // Adhi chya(tujhya) code madhe he navt, he kaay karte ki jo data API through yeto na te apaly page var show karte means modify karte 
    // using classes and I have added some constants above.


    //P.S By the way thank you mhanayachi garaj nahi 😁.

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
