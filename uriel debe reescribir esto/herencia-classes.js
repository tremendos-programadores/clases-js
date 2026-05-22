class Mamifero {
    nombre;
    edad;
    extremidades;
    vive = true;

    constructor(nombreArg, edadArg) {
        this.nombre = nombreArg;
        this.edad = edadArg || 0;
    }

    morir() {
        console.log("grr!")
        this.vive = false
    }

}

const pulgoso = new Mamifero("Pulgoso")

// console.log(JSON.stringify(pulgoso))


class Felino extends Mamifero {

    colorPelaje;
    cola = {
        color: "negro",
        largo: 0,
        manchas: false
    };
    #setCola(setColaArg) {
        if (!setColaArg) {
            return;
        }

        if (typeof setColaArg !== "object") {
            throw "Error, el argumento cola no es un obj"
        }

        Object.keys(setColaArg).forEach(k => {
            this.cola[k] = setColaArg[k] ?? this.cola[k] ?? null
        })
    }

    constructor(nombreArgFelino, edadArgFelino, colorPelajeArg, colaArg) {
        super(nombreArgFelino, edadArgFelino);
        this.extremidades = 4;
        this.colorPelaje = colorPelajeArg || "amarillo";
        this.#setCola(colaArg);
    }

}

const mufa = new Felino("mufa", undefined, "negro")

const michi_blanco = new Felino("michi blanco", undefined, "blanco", { color: "blanco", espojosa: true, largo: "30cm" })

// console.log(JSON.stringify(michi_blanco))

class Gato extends Felino {

    dueño;
    vacunas;

    constructor(nombreArgGato, dueñoArgGato, vacunasArgGato, edadArgGato, colorPelajeArgGato, colaArgGato) {
        super(nombreArgGato, edadArgGato, colorPelajeArgGato, colaArgGato);
        this.dueño = dueñoArgGato;
        this.vacunas = vacunasArgGato;
    }
}
const pepe = { nombre: "josé", apellido: "argento", edad: 42 }
const gatito = new Gato("garritas", pepe, ["anti-rabica", "anti-pulgas", "anti-parasitaria"], undefined)
gatito.morir()

console.log(JSON.stringify(gatito))