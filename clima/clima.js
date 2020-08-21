const axios = require("axios");


const getClima = async(direccion) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${direccion.lat}&lon=${direccion.lng}&appid=162bd7b5403ed2a3a57eb89a8524c6eb&units=metric`;
    console.log(url);
    const resp = await axios.get(url);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}