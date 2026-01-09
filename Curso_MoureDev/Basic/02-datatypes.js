//Tipos de datos primitivos

//Cadena de texto (String)
let myName = "Yael Ulrick"
let alias = 'Wolfrick'
let email = `yaelcolin@gmail.com`

//Números (number)
let age = 24 //Entero
let height = 1.80 //Decimal

//Booleanos (boolean)
let isStudent = true
let isTeacher = false

// Undefine Se usa para una propiedad que aun no tiene valor 
let undefineValue
console.log(undefineValue)

//Null Lo que representa es que intencionalmente es que hay una ausencia de valor
let nullValue = null

// Symbol ayuda a intentar evitar colisiones. Es un valor unico
let mySymbol = Symbol("mysimbol")

// BigInt representa numeros ENTEROS demasiado grande algo que no puede representar un number
let myBigInt = BigInt(89932994392943294239432432432789432789432)
let myBigInt2 = 89932994392943294239432432432789432789432n

//Mostrar el tipo de datos que se usa
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof isTeacher)
console.log(typeof undefineValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)
