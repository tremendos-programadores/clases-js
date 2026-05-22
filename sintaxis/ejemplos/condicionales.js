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

//function puedeComprarAlcohol(edad) {
//  const puede = edad >= 18;
//if (puede) {
//  console.log("puede comprar alcohol")
//}
//return puede
//}


// const viejo_puede_comprar_chupi = puedeComprarAlcohol(90);
// const pibe_puede_comoprar_chupi = puedeComprarAlcohol(16);
//console.log(viejo_puede_comprar_chupi);
//console.log(pibe_puede_comoprar_chupi)



// ELSE 
// es una palabra reservada de js que se usa como "ruta de escape" de un bloque if 
// el bloque else NO lleva una condición
// sintaxis es:
// if {} else {
// ...codigo a ejecutar si se entra en el else
// }

// ejemplo
// function puedeComprarAlcohol(edad) {
// const puede = edad >= 18;
//if (puede) {
//    console.log("puede comprar alcohol")
//} else {
//    console.log("NO puede comprar alcohol")
//}
//return puede;
//}

// const resultado = puedeComprarAlcohol(17)
//console.log(resultado)


// else if 
// es una palabra reservada de js que nos permite "encadenar" condiciones tras un if
// la sintaxis de else if es EXACTAMENTE IGUAL a un if
// if (...) {...} else if (...) {...} else if (...) {...}

function puedeComprarMerca(edad) {

    if (typeof edad !== "number") {
        console.error("La edad debe ser un número")
        return false;
    }

    const esMayorDeEdad = edad >= 18 && edad < 65;
    const esMenorDeEdad = edad < 18;
    const esJubilado = edad >= 65;
    if (esMenorDeEdad) {
        console.log("a vos te cobro mas caro");
    } else if (esMayorDeEdad) {
        console.log("disfrute su merca")
    } else if (esJubilado) {
        console.log("descuento por PAMI")
    } else {
        console.log("yo no le vendo a los fanstasmas");
    }
    return esMenorDeEdad || esMayorDeEdad || esJubilado || false;
}
console.log(puedeComprarMerca(16))
console.log(puedeComprarMerca(30))
console.log(puedeComprarMerca(65))
console.log(puedeComprarMerca("muchotexto"))
console.log(puedeComprarMerca({ color: "rojo" }))
