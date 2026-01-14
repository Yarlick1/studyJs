// Loops o Bucles. 

// for

for (let i = 0; i < 5; i++){
    // console.log(`Hola! ${i}`)
}

const number = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < number.length; i++){
    // console.log(`Elemento = ${number[i]}`)
}

// while evalua antes de cada iteración
let i = 0
while (i < 6){
    // console.log(`Hola! ${i}`)
    i++
}

// Bucle infinito
// while (true) {
    
// }

//do while se ejecuta si o si una vez, y despues comprubea si entra al bucle
i = 6
do{
    // console.log(`Hola! ${i}`)
    i++
}  while (i < 5)

// for of - recorre valores de algo que sea iterable (estructura de datos)
let myArray = [1, 2, 3, 4, 5, 6, 7, 8]
let mySet = new Set(["Esto", "es", "un", "Set"])
let myMap = new Map([
    ["name", "Yael"],
    ["email", "yael.go@gmail.com"],
    ["age", 24]
])
let myString = "Esto es un string"

for (let valor of myArray){
    // console.log("Itero el array :" + valor)
}

for (let valor of mySet){
    // console.log("Itero el set :" + valor)
}

for (let valor of myMap){
    // console.log("Itero el map :" + valor)
}

for (let valor of myString){
    // console.log("Itero una cadena de texto :" + valor)
}

// Buenas practicas

// Asegurar de no crear un bucle infinito 
// Uso del break y continue - asi controlamos los bucles
for (let i = 0; i < 10; i++){
    if (i == 1) {
        continue //asi podemos saltar lo que coloquemos dentro de la condicion
    } else if (i == 9){
        break // para el bucle
    }
    console.log(`Hola! ${i}`)
}
