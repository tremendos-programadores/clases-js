const obj = {
    clave: "valor",
    "-clave2": "valor2",
    _clave: "clave3",
    obj: {},
    fn:()=> {console.log("holis soy una fn")}
}

console.log(obj["-clave2"])


const texto="-clave2";
const fafafa= "asdasdasdsa"

console.log(obj[texto])
console.log(obj[fafafa])
obj["fn"]();

class MiComponente {
    onInit() {
        console.log("inicializando componente")
    }
}

const instancia = new MiComponente()
instancia.onInit()