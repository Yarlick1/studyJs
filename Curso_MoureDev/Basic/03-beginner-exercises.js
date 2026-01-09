// 1. Escribe un comentario en una línea

// Este es un comentario 

// 2. Escribe un comentario en varias líneas

/*Este es 
un comentario
en varias
linea de 
codigo en
Visual Studio Code*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let isString = "Mi nombre es Yael"
let isNumber = 24
let isBolean = true
let isUndefined = undefined
let isNull = null
let isSymbol = Symbol("dato symbol")
let isBigInt = BigInt(111111111111111111n)
let isBigInt2 = 483902432743829748932432n

// 4. Imprime por consola el valor de todas las variables

console.log(isString)
console.log(isNumber)
console.log(isBolean)
console.log(isUndefined)
console.log(isNull)
console.log(isSymbol)
console.log(isBigInt)
console.log(isBigInt2)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof isString)
console.log(typeof isNumber)
console.log(typeof isBolean)
console.log(typeof isUndefined)
console.log(typeof isNull)
console.log(typeof isSymbol)
console.log(typeof isBigInt)
console.log(typeof isBigInt2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

isString = "Cambie mi nombre a Ulrick"
isNumber = 50
isBolean = false
isUndefined = undefined
isNull = null
isSymbol = Symbol("Cambio")
isBigInt = 22222222222222222222222222n


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

isString = 80
isNumber = true
isBolean = "texto"
isUndefined = null
isNull = undefined
isSymbol = BigInt("5555555555555555555555555555555555555555555555555555555555555555555")
isBigInt = Symbol("Esto es un simbolo")
console.log(isString)
console.log(isNumber)
console.log(isBolean)
console.log(isUndefined)
console.log(isNull)
console.log(isSymbol)
console.log(isBigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const alias = "Wolfrick"
const age = 24
const isAdult = true
const isUndefined2 = undefined
const isNull2 = null
const isSymbol2 = Symbol("Simbolo")
const isBigInt3 = BigInt(33333333333333333333333333333333333333333333333333)

// 9. A continuación, modifica los valores de las constantes
// Cabe recalcar que una constante no puede modificarse, si las modifique pero al momento de ejecutar sale error, entonces para cumplir con el ejercicio 10 comente todas las que me marcaban error
// alias ="Nuevo valor"
// age = 10
// isAdult = false
// isUndefined2 = undefined
// isNull2 = null
// isSymbol2 = Symbol("NuevoSimbolo")
// isBigInt3 = BigInt(111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse