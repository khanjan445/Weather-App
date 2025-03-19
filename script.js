document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim();
    if (city === "") {
        console.log("Please enter a city name.");
        return;
    }

    console.log('City entered:', city);
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    console.log(`Fetching weather data for: ${city}`);
}
