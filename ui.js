class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        this.cityImage = document.getElementById('w-city-image');
    }
    paint(weather, pic) {
        console.log(weather);
        this.location.textContent = `${weather.city.name}, ${weather.city.country}`;
        this.desc.textContent = `${weather.list[0].weather[0].description}`;
        this.string.textContent = `${(weather.list[0].main.temp).toFixed(0)} ℃`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.list[0].main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${(weather.list[0].main.feels_like).toFixed(0)} ℃`;
        this.pressure.textContent = `Pressure: ${(weather.list[0].main.pressure)} hpa`;
        this.wind.textContent = `Wind:  ${(weather.list[0].wind.speed).toFixed(1)} m/s`;
        this.cityImage.setAttribute('src', `${pic.urls.regular}`);

    }
}