# OBJETOS EN JAVASCRIPT

Los objetos son estructuras que nos permiten guardar información relacionada
dentro de una misma entidad.

Un objeto puede tener:

- propiedades → datos
- métodos → funciones

Ejemplo:

Una persona tiene:

- nombre
- edad
- ciudad

Todo eso puede agruparse en un objeto.

---

# Sintaxis básica

```javascript
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires"
};

console.log(persona);
```

---

# Acceder a propiedades

Para acceder a un dato del objeto usamos un punto `.`

```javascript
console.log(persona.nombre);
console.log(persona.edad);
```

---

# Modificar propiedades

Las propiedades de un objeto pueden cambiar.

```javascript
persona.edad = 31;

console.log(persona.edad);
```

---

# Métodos

Un objeto también puede guardar funciones.

```javascript
const persona = {
    nombre: "Juan",

    saludar() {
        console.log("Hola");
    }
};

persona.saludar();
```
