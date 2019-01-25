//Requierds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==============================================='.green);
    console.log(`===Tabla del ${base} desde 1 hasta ${limite}===`.yellow);
    console.log('==============================================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(colors.rainbow(`${base} x ${i} = ${base*i}\n`));

    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolove, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`${base} y ${limite} no es un numero`.red);
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`Tablas/Tabla del ${base}.txt`, colors.blue(data), (err) => {
            if (err) reject(err);
            else resolove(`Tabla_de_${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};