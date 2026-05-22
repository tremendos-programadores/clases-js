
# Condicionales

Los condicionales son estructuras que permiten tomar decisiones en el código.

Sirven para ejecutar una acción solamente cuando se cumple una condición.

---

# La palabra `if`

En JavaScript usamos `if` para crear condiciones.

## Ejemplo

```javascript
let edad = 20;

if (edad >= 18) {
  console.log("Puede comprar alcohol");
}
```

---

# Explicación del ejemplo

La condición:

```javascript
edad >= 18
```

significa:

> “edad mayor o igual a 18”

Si la condición es verdadera, el código dentro de las llaves `{}` se ejecuta.

En este caso:

```javascript
console.log("Puede comprar alcohol");
```