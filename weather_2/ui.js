//ui class
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }
  paint(data) {
    this.location.innerHTML = data.location.name;
    this.desc.innerHTML = data.current.weather_descriptions;
    this.string.innerHTML = data.current.temperature;
    this.icon.setAttribute('src', data.current.weather_icons);
    this.humidity.innerHTML = `Relative Humidity: ${data.current.humidity}`;
    this.feelsLike.innerHTML = `Relative Feels Like: ${data.current.feelslike}`;
    this.dewpoint.innerHTML = `Relative dewpoint: ${data.current.visibility}`;
    this.wind.innerHTML = `Relative Wind ${data.current.wind_speed}`;
  }
}
