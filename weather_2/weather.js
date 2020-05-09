// weather class
class Weather {
  constructor(city) {
    this.key = 'c67e244a7154d8456c95925b44ac0de6';
    this.city = city;
  }

  //getUser function
  async getCity() {
    const cityResponse = await fetch(
      `http://api.weatherstack.com/current?access_key=${this.key}&query=${this.city}`
    );

    const response = await cityResponse.json();
    return response;
  }

  changeCity(newCity) {
    this.city = newCity;
  }
}
