const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

// 



const getInfo = async(direccion) => {
    try {
        const ubicacion = await lugar.getLugarLatLong(argv.direccion);
        const temperatura = await clima.getClima(ubicacion);
        return `El clima de ${ubicacion.localidad} es de ${temperatura}`;
    } catch (e) {
        throw e;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));