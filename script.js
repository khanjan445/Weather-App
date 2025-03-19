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
async function fetchWeatherData(city) {
    const apiKey = '00437b44a85e4337ae0225428251903';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Weather data:', data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
