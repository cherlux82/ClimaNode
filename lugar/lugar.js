const axios = require("axios");


const getLugarLatLong = async(direccion) => {
    const direccionEncoded = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/?locate=location?city=${direccionEncoded}&auth=975355441248173869630x47128&json=1`,
        timeout: 20000,
        headers: { 'Content-Type': 'application/json' }
    });

    const resp = await instance.get();

    // console.log(resp);

    if (resp.data.standard) {
        const localidad = resp.data.standard.city;
        const lat = resp.data.latt;
        const lng = resp.data.longt;

        return {
            localidad,
            lat,
            lng
        };


    } else {
        throw new Error(`No se encontro informacion acerca de ${direccion}`)
    }
}

module.exports = {
    getLugarLatLong
}