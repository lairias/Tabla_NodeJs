const fs = require("fs");

const crearArchivo = (base )=>{
    let salidad = "";
    console.clear();
    console.log("=================");
    console.log(`Tabla del:${base}`);
    console.log("=================")
    for (let numero = 0; numero <= 10; numero++) {
      salidad += `${base} x ${numero} = ${numero * base}\n`;
    }

    fs.writeFile(`Tabla-${base}.txt`, salidad, (erro) => {
      if (erro) throw erro;

      console.log("creado");
    });

}

module.exports = {
crearArchivo
};