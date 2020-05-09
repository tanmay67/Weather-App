//init weather object
const weather = new Weather('Boston');
//init ui object
const ui = new UI();
//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getCity()
    .then((data) => {
      ui.paint(data);
    })
    .catch((err) => console.log(err));
}

const changeBtn = document.querySelector('#w-change-btn');
changeBtn.addEventListener('click', (e) => {
  const inputCity = document.querySelector('#city').value;
  if (inputCity !== '') {
    weather.changeCity(inputCity);
    getWeather();
    $('#data-target').modal('hide');
  }
});
