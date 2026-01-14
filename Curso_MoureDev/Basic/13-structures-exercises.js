/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ["Perro", "Gato", "Elefante", "Jirafa"]
// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Leon")
animales.push("Jaguar")
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(3, 1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let libros = new Set(["Book1","Book2","Book3","Book4","Book5"])
// 5. Añade dos más. Uno de ellos repetido
console.log(libros)
libros.add("Book1")
libros.add("Book6")
console.log(libros)
// 6. Elimina uno concreto a tu elección
libros.delete("Book6")
console.log(libros)
// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1 , "Enero"],
    [2 , "Febrero"],
    [3 , "Marzo"],
    [4 , "Abril"],
    [5 , "Mayo"],
    [6 , "Junio"],
    [7 , "Julio"],
    [8 , "Agosto"],
    [9 , "Septiembre"],
    [10 , "Octubre"],
    [11, "Noviembre"],
    [12 , "Diciembre"],
])
console.log(meses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has(5))
console.log(meses.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let mesesVerano = ["junio", "julio", "agosto"]
meses.set("meses de verano" , mesesVerano)
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = ["Yael", "Ulrick", "Garay", "Colin"]

let mySet = new Set(array)
meses.set("Array transformado a Set", mySet)
console.log(meses)