document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '5d066958a60d315387d9492393935c19';
    const city = 'Kharkiv';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    const temperatureElement = document.getElementById('temperature');
    const pressureElement = document.getElementById('pressure');
    const descriptionElement = document.getElementById('description');
    const humidityElement = document.getElementById('humidity');
    const windSpeedElement = document.getElementById('wind-speed');
    const windDirectionElement = document.getElementById('wind-direction');
    const weatherIconElement = document.getElementById('weather-icon');

    // Виконуємо запит за допомогою fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Оновлюємо відповідні елементи на сторінці з отриманими даними
            temperatureElement.textContent = data.main.temp;
            pressureElement.textContent = data.main.pressure;
            descriptionElement.textContent = data.weather[0].description;
            humidityElement.textContent = data.main.humidity;
            windSpeedElement.textContent = data.wind.speed;
            windDirectionElement.textContent = data.wind.deg;
            weatherIconElement.src = `http://openweathermap.org/img/w/10d.png`;
        })
        .catch(error => {
            console.error('Помилка при отриманні погоди: ', error);
        });
});