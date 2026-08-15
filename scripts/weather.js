const apiKey = "6c9324999e479f36620b920566109aec";
const weatherForm = document.querySelector(".weatherForm")
const weatherInput = document.querySelector(".weatherInput");
const card = document.querySelector(".weatherCard");


window.addEventListener('DOMContentLoaded', () => {
    const savedInput = localStorage.getItem('savedInput');
    if (savedInput) {
      weatherInput.value = savedInput;
    }
});

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = weatherInput.value;
  const inputValue = weatherInput.value;
  localStorage.setItem('savedInput', inputValue);

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch(error) {
      console.error(error);
    }
  }
})

async function getWeatherData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiURL);

  if (!response.ok) {
    throw new Error("Could not fetch weather data")
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  const {name: city, main: {temp, humidity}, weather: [{description, id}], wind: {speed}} = data;
  console.log(data);

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h3");
  const tempDisplay = document.createElement("h4");
  const humidityDisplay = document.createElement("h4");
  const descDisplay = document.createElement("h4");
  const windDisplay = document.createElement("h4");
  const weatherEmoji = document.createElement("h4");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(2)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  windDisplay.textContent = `Wind Speed: ${speed} km/h`;
  descDisplay.textContent = `Status: ${description}`
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("gradient-text", "underline")
  tempDisplay.classList.add("gradient-text")
  humidityDisplay.classList.add("gradient-text")
  windDisplay.classList.add("gradient-text")
  descDisplay.classList.add("gradient-text", "capitalise")
  weatherEmoji.classList.add("weatherEmoji")

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(windDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {

  switch(true) {
    case (weatherId >= 200 && weatherId < 300):
      return "⛈️";
    case (weatherId >= 300 && weatherId < 600):
      return "🌧️";
    case (weatherId >= 600 && weatherId < 700):
      return "❄️";
    case (weatherId >= 700 && weatherId < 800):
      return "🌫️";
    case (weatherId === 800):
      return "☀️";
    case (weatherId >= 801 && weatherId < 810):
      return "⛅";
    default:
      return "🛸";
  }

}