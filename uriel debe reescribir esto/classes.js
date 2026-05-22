// PROXIMA CLASE HERENCIA ENTRE CLASS

class Panda {
    nombre;
    edad;
    manchas = 5;
    static extinto = false;
    static poblacion = 0;

    constructor(arg_nombre, arg_edad) {
        this.nombre = arg_nombre;
        this.edad = arg_edad || 0;
        Panda.poblacion = Panda.poblacion + 1;
    }

    morir() {
        Panda.poblacion = Panda.poblacion - 1;
        if (Panda.poblacion<=0) {
            Panda.extinto=true
        }
    }
}


const homero = new Panda("Homero")
const qliao = new Panda("Cacho")
console.log(Panda.poblacion, Panda.extinto)

homero.morir()
console.log(Panda.poblacion, Panda.extinto)
qliao.morir()
console.log(Panda.poblacion, Panda.extinto)
