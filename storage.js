class Store {
    static getData() {
        let city;
        if (localStorage.getItem('city') === null) {
            city = 'London';
        } else {
            city = JSON.parse(localStorage.getItem('city'));
        }
        return city;
    }
    static saveData(city) {
        localStorage.setItem('city', JSON.stringify(city));
    }


}