

const miObj = { color: "rojo" }

function Saludar(nombre) {
    console.log("hola " + nombre)
}

function Putear(nombre) {
    console.log(nombre + " puto!")
}

function Loquito(fn, lista_nombres) {
    const nombre = lista_nombres[Number((Math.random() * (lista_nombres.length - 1)).toFixed())]
    fn(nombre)
}