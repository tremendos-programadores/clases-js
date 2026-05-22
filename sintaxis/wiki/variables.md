# Variables, Constantes y Condicionales en JavaScript

## Variables y Constantes

En programación existen dos formas principales de almacenar datos:

- Variables
- Constantes

---

# Variables

Una variable es un contenedor con nombre donde guardamos datos que pueden cambiar con el tiempo.

En JavaScript normalmente se usa `let`.

## Ejemplo

```javascript
let edad = 0;

console.log(edad);

edad = 1;

console.log(edad);
```

### Explicación

1. Creamos una variable llamada `edad`
2. Le asignamos el valor `0`
3. Luego cambiamos su valor a `1`

Las variables son útiles cuando necesitamos guardar información que puede modificarse.

---

# Constantes

Una constante es un contenedor con nombre donde guardamos datos que NO deben cambiar.

En JavaScript se usa `const`.

## Ejemplo

```javascript
const pi = 3.14;

console.log(pi);
```

Si intentamos cambiar su valor:

```javascript
pi = 999;
```

JavaScript mostrará un error.

---

# Diferencia entre Variables y Constantes

| Tipo | ¿Puede reasignarse? |
|---|---|
| `let` | Sí |
| `const` | No |
