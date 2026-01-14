// Estructuras de datos
// Maps

// Declaración
let myMap = new Map();
console.log(myMap)

// Inicianilacion

myMap = new Map([
    ["name", "Yael"],
    ["email", "yael@gmail.com"],
    ["age", 24]
])
console.log(myMap)

// Metodos y propiedades

// set - actualiza o agrega un elemento

myMap.set("alias", "Ulrick") //agrega
myMap.set("name", "Colin")// actualiza
console.log(myMap)

// get - recupera el valor
console.log(myMap.get("name"))
console.log(myMap.get("srname"))

// has - cumprueba si existe, respuesta en boolean

console.log(myMap.has("name"))
console.log(myMap.has("srname"))

// delete

myMap.delete("email")
console.log(myMap)

//Propiedad keys - listado de claves , values, entries 
console.log(myMap.keys()) // claves
console.log(myMap.values()) // valores de las claves
console.log(myMap.entries()) // recorre todo el mapa

// size
console.log(myMap.size) // tamño del mapa

// clear

myMap.clear()
console.log(myMap)
