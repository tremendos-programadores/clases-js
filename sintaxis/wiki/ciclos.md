# Ciclos

un ciclo es una estructura ( bloque de código ) que ejecuta de forma repetitiva y esta repetición de ejecucuón puede ser determinado o indeterminado 

## Ciclos indeterminados 
- while ( no se recomienda usar ) 
- do while ( jamás lo había usado )

`while` es una palabra reservada de js, su sintáxis es muy similar a un `if` ya que ejcuta un bloque de código si una condición se cumple. En el caso de while este bloque al finalizar su ejecución vuelve a checkear la condición para en el caso de que la condición se siga cumpliendo, volver a ejecutar el código

#### ejemplo de ciclo infinito ( malo )
```javascript
while (true) {
    /// ... codigo
}
```

#### ejemplo de un ciclo finito ( ok )
```javascript
let botellas_de_vino = 10;
while (botellas_de_vino > 0) {
    console.log("me tomo un vino");
    botellas_de_vino--;
}
```

## Ciclos determinados 
- for ( recomendado aunque existen métodos de array )

`for` es una palabra reservada de js que se utiliza para ejecutar un bloque de código una cantidad determinada de veces

#### ejemplo de un ciclo for
```javascript
for (let indice = 0; condicion; indice++) {
    /// ....codigo
}
```

```javascript
let botellas_de_vino = 10;
for (let indice = 0; indice < botellas_de_vino; indice++) {
    console.log("me tomo un vino");
}
```