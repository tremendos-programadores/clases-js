// VARIABLES Y CONSTANTES

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

// CONDICIONALES

// que son los condicionales en js ?
// son "estructuras de control" que nos permiten tomar desiciones en el código,
// con una lógica definida por nosotros

// ejemplo:
// una condición puede ser que solo las personas con al menos 18 años puedan comprar alcohol

// if es una palabra reservada para definir una condición

//if (edad >= 18) {
//    // ...
//}


//const edad_viejo = 90;
//if (edad_viejo >= 18) {
//    console.log("puede comprar alcohol")
//}

// const edad_pendejo = 16;
// if (edad_pendejo >= 18) {
//    console.log("puede comprar alcohol")
// }

function puedeComprarAlcohol(edad) {
    const puede = edad >= 18;
    if (puede) {
        console.log("puede comprar alcohol")
    }
    return puede
}


const viejo_puede_comprar_chupi = puedeComprarAlcohol(90);
const pibe_puede_comoprar_chupi = puedeComprarAlcohol(16);
console.log(viejo_puede_comprar_chupi);
console.log(pibe_puede_comoprar_chupi)