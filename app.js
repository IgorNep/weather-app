

//Get data from local storage
const city = Store.getData();
//init weather object

const weather = new Weather(city);

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {




    const city = document.getElementById('city').value;

    weather.changeLocation(city);
    //get and dsiplay weather
    getWeather();

    //Close Modal
    $('#locModal').modal('hide');
    //clear input 
    document.getElementById('city').value = '';
    //ve data to local storage
    Store.saveData(city);
});

//init new UI
const ui = new UI;

function getWeather() {
    weather.getWeather()
        .then(res => {
            console.log(res.respPhotoData);
            ui.paint(res.respData, res.respPhotoData);
        })
        .catch(err => console.log(err));
}
