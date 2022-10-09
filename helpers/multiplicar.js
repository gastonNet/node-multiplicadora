const fs = require('fs');
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';

    for (let i = 0; i < hasta + 1; i++) {
      salida += `${base} x ${i} es igual a ${base * i}\n`;
    }

    if (listar) {
      console.log('===== tabla creada ====');
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
