// programación tenemos 2 formas de almacenar datos
// 1 - variables: contenedor nombrado donde se almacenan datos que pueden variar con el tiempo
// 2 - constantes: contendor nombrado donde se almacenan datos que NO pueden variar con el tiempo

// var cero_abs = -273.15;
// var pi = 3.14;
// pi = 999; // esto está muy mal

//const pi = 3.14;

// pi = 999;
//console.log(pi)
// let edad = 0;
// console.log(edad)
// edad = 1;
// console.log(edad)

const zara = {
    lujo: true,
    caro: true,
    para_morochos: false,
    locales: 8201,
    dobla: "derecha"
}

const ojota = {
    talle: 42, color: "negro", rotas: false,
    marca: zara,
    material: {
        goma: 60,
        pintura: 3,
        otros: {
            reciclabes: 12,
            no_reciclables: 25
        }
    }
}

zara.clasista = true;


const ojota2 = ojota;
ojota2.color = "blanco";

let nombre1 = "pepe";
let nombre2=nombre1;
nombre2= "juanito" 

// ojota = {} // MAL!!
// ojota.talle = 43 // válido

//ojota.material.goma=8000

//console.log("tiene " + JSON.stringify(ojota) + "% de goma")
console.log(JSON.stringify(ojota))