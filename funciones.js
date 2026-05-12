// que es una FUNCIÓN ?
// bloque de código ( en gral es reutilizable ) que se define con la palabra reservada function
// y se ejecuta con el nombre de la función definida, seguido de paréntesis
// las funciones pueden recibir ARGUMENTOS
// los argumentos van entre los paréntesis separados por coma

// function NOMBRE_FN (ARGUMENTOS) {
// ......código
// }
function saludar(nombre, apellido, dni, ip) {
    console.log("hola " + nombre + " " + apellido + " cuyo DNI es " + dni + ", se que tu IP es " + ip);
    return 4;
}

//saludar("Mirtha", "Legrand", 1, "1")

//const saludoCarlitos = saludar("Carlitos","Tevez",301234561, "192.168.0.0");
//console.log(saludoCarlitos)







function encuadernar(tapa, contratapa, hojas) {
    // console.log("agarro la tapa del libro: " + tapa?.titulo)
    // console.log("agarro la contratapa del libro: " + tapa?.titulo)
    // console.log("encuaderno tapa y contratapa")
    hojas?.forEach(hoja => {
        // console.log("encuaderno la hoja " + hoja?.pagina)
    });

    const libro = { tapa: tapa, contratapa: contratapa, hojas: hojas };
    return libro;
}






const tapa_el_principito = { titulo: "El Principito", autor: "Pepe", editorial: "La editorial de Pepe" };
const contratapa_el_principito = { sinopsis: "El Principito crece a lo largo del viaje ( alto viaje )", codigo_barras: 1010111010 }
const hojas_el_principito = [
    { pagina: 1, texto: "el principito" },
    { pagina: 2, texto: "vivía muy contento" },
    { pagina: 3, texto: "hasta que un día" },
    { pagina: 4, texto: "se murió. FIN" }
]

// const libro_el_principito = encuadernar(tapa_el_principito, contratapa_el_principito, hojas_el_principito);

// console.log(libro_el_principito)

// como definir funciones 


const tapa_sherlock_holmes = { titulo: "Sherlock Holmes", autor: "Pipo", editorial: "La editorial de Pipo" };
const contratapa_sherlock_holmes = { sinopsis: "Sherlock Holmes crece a lo largo del viaje ( alto viaje )", codigo_barras: 10100011010 }
const hojas_sherlock_holmes = [
    { pagina: 1, texto: "Sherlock Holmes" },
    { pagina: 2, texto: "vivía muy contento" },
    { pagina: 3, texto: "hasta que un día" },
    { pagina: 4, texto: "se murió. FIN" }
]







const libro_sherlock =  encuadernar(tapa_sherlock_holmes, contratapa_sherlock_holmes, hojas_sherlock_holmes)

console.log(libro_sherlock)