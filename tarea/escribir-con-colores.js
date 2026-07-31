function escribirConColores(lapicera, texto) {
    const texto_keys = Object.keys(texto)
    texto_keys.forEach(key => {
        lapicera[key] = (lapicera[key] ?? 0) - (texto[key] * 0.1);
    })
    return lapicera
}

const lapicera_elias = { blanco: 60, azul: 30, morado: 20 }
const texto_elias = { rojo: 200, azul: 100, morado: 150 }
// resultado escribirConColores(lapicera_elias, texto_elias) 
// {blanco: 60, rojo:-20, azul:20, morado:5 }


const resultado_elias = escribirConColores(lapicera_elias, texto_elias);
console.log(resultado_elias)

const lapicera_uriel = { rojo: 50, azul: 100, verde: 20, violeta:50 }
const texto_uriel = { rojo: 500, azul: 0, verde: 100, naranja: 99 }
// resultado escribirConColores(lapicera_uriel, texto_uriel) 
// { rojo: 0, azul: 100, verde: 10, naranja: -9.9, violeta: 50}
const resultado_uriel = escribirConColores(lapicera_uriel, texto_uriel);
console.log(resultado_uriel)
