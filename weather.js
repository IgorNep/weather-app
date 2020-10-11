class Weather {
    constructor(city) {
        this.apiKey = 'de62ea5a86531205f0daadbc5f17ad8c';
        this.city = city;
        this.unsplashAccessKey = '98c47c48e0988c240ddf75baaf76676244b91bb544d4b9f3c4a13976c4e5930f';
        this.unsplashSecretKey = 'c71d41326405f9fcf349ebd925b557c01fbbffaec58a38312a881211b5ee8ee1';
    }


    //Fetch data from api
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&appid=${this.apiKey}`);

        const respPhoto = await fetch(`https://api.unsplash.com/photos/random/?query=${this.city}&client_id=${this.unsplashAccessKey}`);

        const respData = await response.json();

        const respPhotoData = await respPhoto.json();

        return {
            respData,
            respPhotoData
        }

    }
    //Change weather location
    changeLocation(city) {
        this.city = city;
    }

}