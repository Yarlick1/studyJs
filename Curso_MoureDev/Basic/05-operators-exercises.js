/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 5
let b = 5

let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let exponente = a ** b
let resto = a % b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asigSuma = a += b
let asigResta = a -= b
let asigMulti = a *= b
let asigDivision = a /= b
let asigExponente = a **= b
let asigResto = a %= b
// console.log(asigSuma)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
// console.log(5 >= 5 && 5 >= 5)
// console.log(2 >= 5 || 5 >= 5)
// console.log(!(2 >= 5 && 5 >= 5))
// console.log(15 > 5 && 20 < 21 || 25 > 10)
// console.log(!(40 >= 41 && 20 >= 20) || (10 < 12 || !(10 < 15)))

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// console.log(!(5 >= 5 && 5 >= 5))
// console.log(2 <= 1 || 5 > 5)
// console.log((2 >= 5 && 5 >= 5))
// console.log(15 < 5 && 20 < 21 || 25 < 10)
// console.log((40 >= 41 && 20 >= 20) || !(10 < 12 || !(10 < 15)))

// 5. Utiliza el operador lógico and

// console.log(5 >= 5 && 10 < 11)

// 6. Utiliza el operador lógico or

// console.log(5 >= 5 || 10 < 11)

// 7. Combina ambos operadores lógicos

// console.log(5 >= 5 && 10 < 11 || 5 >= 5 || 10 < 11)

// 8. Añade alguna negación

// console.log(!(5 >= 5 && 10 < 11 || 5 >= 5 || 10 < 11))

// 9. Utiliza el operador ternario

// let isAdult = false

// let mensaje = isAdult ? "Soy aldulto" : "Todavia soy menor de edad"
// console.log(mensaje)

// 10. Combina operadores aritméticos, de comparáción y lógicas
// let ariSuma = 5 + 5
// console.log(ariSuma === "10" && ariSuma <= 11)