/* 
TAREA:
crear una vista que contenga 2 elementos
un btn que al darle click genere cuadrados de 250px x 250px de un color random
un contenedor donde se van a ir generando estos elementos de colores random

BONUS: al dale click a un elemento con un color random, quiero que me muestre por consola el mensaje "soy un cuadrado, de color X" ( el formato deberà ser rgb(0/255,0/255,0/255) ) 
BONUS BONUS: 
cada cuadrado deberìa tener un btn de "eliminar" ( este btn tendrà como texto un tachito de basura 🧺" y al darle click, se eliminarà el cuadrado de la vista.
la lista cuadrados de colores se deberà guardar en el localstorage, y se deberà actualizar cada vez que se genere o elimine un nuevo cuadrado de color random
*/

const COLORS_KEY = 'colors'
let colors = (JSON.parse(localStorage.getItem(COLORS_KEY))) ?? [];




class NuevoCuadrado {
    constructor(color) {
        this.element = document.createElement('div');
        this.element.style.width = "250px";
        this.element.style.height = "250px";
        this.element.style.border = "1px solid black";
        this.element.style.display = "flex";
        this.element.style.flexDirection = "row"
        this.element.style.justifyContent = "end"
        this.element.style.backgroundColor = color ?? this._randomRGB();
        this.name = this.element.style.backgroundColor
        this.element.appendChild(this._createButtonDelete(color));
    }

    _randomColorValue() {
        return Math.floor(Math.random() * 255)
    }
    _randomRGB() {
        const r = this._randomColorValue();
        const g = this._randomColorValue();
        const b = this._randomColorValue();
        return `rgb(${r}, ${g}, ${b})`;
    }

    _createButtonDelete(color) {
        const btn = document.createElement('button');
        btn.textContent = "🗑";
        btn.style.width = "35px"
        btn.style.height = "35px"
        btn.style.fontSize = "25px";
        colors.push(this.name);
        if (!color) {
            localStorage.setItem(COLORS_KEY, JSON.stringify(colors))
        }
        btn.addEventListener('click', () => {
            colors = colors.filter(c => c !== this.name)
            localStorage.setItem(COLORS_KEY, JSON.stringify(colors))
            this.removerCuadro();
        });
        return btn;
    }

    removerCuadro() {
        this.element.remove();
    }


}



const root = document.querySelector('.root');

const botonCuadrados = document.createElement('button');
botonCuadrados.textContent = "Crear nuevo cuadrado";
botonCuadrados.style.marginBottom = "20px"
root.appendChild(botonCuadrados);

const contentCuadros = document.createElement('div');
contentCuadros.style.display = 'flex';
contentCuadros.style.flexWrap = 'wrap'
contentCuadros.style.gap = '10px';
root.appendChild(contentCuadros);

botonCuadrados.addEventListener('click', () => {
    const nuevo = new NuevoCuadrado();
    console.log('soy un cuadrado, de color ' + nuevo.name);
    contentCuadros.appendChild(nuevo.element);
});


colors.forEach(color => {
    const nuevo = new NuevoCuadrado(color);
    console.log('soy un cuadrado, de color ' + nuevo.name);
    contentCuadros.appendChild(nuevo.element);
});