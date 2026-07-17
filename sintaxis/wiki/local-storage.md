# Local Storage
 
localstorage es una API ( aplication programming interface | capa de abstracción entre 2 sistemas ) del navegador. Nos permite guardar información de forma persistente en el navegador.
Los ÚNICOS posibles valores a guardar en el localstorage son strings.
El formato del localstorage es {[key: string]: string}

### Como se agrega un conjunto de clave/valor al localstorage ?


```javascript
localstorage.setItem("key", "value")
```

ejemplo con carrito de compra

```javascript
const item = "10"
localstorage.setItem("bananas", item)
```

ejemplo con carrito de compras con múltiples items 
```javascript
const items = [
    {product_id: 1, product_name: "bananas", cant:10},
    {product_id: 7, product_name: "casancrem", cant:2}
    ]

const items_as_string = JSON.stringify(items)
// items_as_string = '[{"product_id":1,"product_name":"bananas","cant":10},{"product_id":7,"product_name":"casancrem","cant":2}]'

localstorage.setItem("carrito", items_as_string)
```

### Como se obtiene un valor del localstorage ?

```javascript
localstorage.getItem("key")
```

```javascript
const data = localstorage.getItem("bananas")
// data = "10"
```

```javascript
const items_as_string = localstorage.getItem("carrito")
// items_as_string = '[{"product_id":1,"product_name":"bananas","cant":10},{"product_id":7,"product_name":"casancrem","cant":2}]'

const items = JSON.parse(items_as_string);
// items = [
//    {product_id: 1, product_name: "bananas", cant:10},
//    {product_id: 7, product_name: "casancrem", cant:2}
//    ]
```