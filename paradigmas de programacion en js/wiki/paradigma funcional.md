# JavaScript como Lenguaje Funcional

## 1. Las funciones son “ciudadanos de primera clase”

En JavaScript, una función puede:

- guardarse en variables,
- pasarse como argumento,
- devolverse desde otra función.

### Ejemplo

```javascript
const saludar = nombre => `Hola ${nombre}`;

function ejecutar(fn, valor) {
  return fn(valor);
}

console.log(ejecutar(saludar, "Ana"));
```

Acá `saludar` se trata igual que cualquier otro dato.

---

## 2. Soporta funciones de orden superior

Una función de orden superior es una que recibe o devuelve otras funciones.

### Ejemplo

```javascript
const numeros = [1, 2, 3, 4];

const dobles = numeros.map(n => n * 2);

console.log(dobles);
```

`map` recibe una función y aplica esa lógica a cada elemento.

También existen:

- `filter`
- `reduce`
- `find`
- `some`
- `every`

Todas muy asociadas al estilo funcional.

---

## 3. Permite composición de funciones

La idea funcional es construir programas combinando funciones pequeñas.

### Ejemplo

```javascript
const duplicar = x => x * 2;
const sumarUno = x => x + 1;

const resultado = sumarUno(duplicar(3));

console.log(resultado);
```

Cada función hace una sola cosa.

---

## 4. Facilita funciones puras

Una función pura:

- siempre devuelve el mismo resultado para los mismos parámetros,
- no modifica nada externo.

### Ejemplo

```javascript
function sumar(a, b) {
  return a + b;
}
```

Eso es funcional porque no depende de variables externas ni cambia el estado del programa.

---

## 5. Tiene cierres (*closures*)

Los closures permiten que una función recuerde el contexto donde fue creada.

### Ejemplo

```javascript
function crearMultiplicador(factor) {
  return numero => numero * factor;
}

const porDos = crearMultiplicador(2);

console.log(porDos(5));
```

Esto es muy usado en programación funcional.

---

## 6. Tiene herramientas modernas orientadas al estilo funcional

Desde ES6 en adelante, JavaScript agregó características que favorecen este paradigma:

- arrow functions (`=>`)
- spread operator (`...`)
- destructuring
- `const`
- métodos funcionales de arrays
- `Promise` y programación declarativa

---

# Conclusión

JavaScript no es un lenguaje puramente funcional, pero tiene un fuerte soporte para programación funcional gracias a:

- funciones de primera clase,
- funciones de orden superior,
- closures,
- composición,
- funciones puras,
- y herramientas modernas del lenguaje.

Por eso se considera un lenguaje **multiparadigma** con fuerte influencia funcional.