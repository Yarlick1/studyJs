/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let myName = "Yael Ulrick"
let myJob = "INEGI"

let message = "Yo soy " + myName + " y trabajo en el " + myJob
console.log(message)

// 2. Muestra la longitud de una cadena de texto
console.log("La longitud de la cadena mensaje es de = " + message.length)

// 3. Muestra el primer y último carácter de un string
console.log("El primer carácter de mi mensaje es= " + message[0] + " Ultimo carácter de mi mensaje es = " + message[message.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
let upperMessage = "primer texto"
let lowerMessage = "SEGUNDO TEXTO"
console.log("Este mensaje se transformo a mayúsculas = " + upperMessage.toUpperCase())
console.log("Este mensaje se transformo a minúsculas = " + lowerMessage.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let textLarge = `Este Texto
esta en una misma
variable
pero en varias
lineas de 
codigo`
console.log(textLarge)

// 6. Interpola el valor de una variable en un string

let interpolarVariable = `Hola ${myName}!, no sabia que trabajabas en el ${myJob}`
console.log(interpolarVariable)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(interpolarVariable.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(interpolarVariable.includes("Yael"))
// 9. Comprueba si dos strings son iguales
let saludo = "Hola"
let saludo2 = "HolA"
let comprobacion =  saludo === saludo2
let respuesta = comprobacion ? "Si es igual":"No son iguales"
console.log(`Entre el saludo 1 y 2 son iguales? respuesta = ${respuesta}`)

// 10. Comprueba si dos strings tienen la misma longitud

let saludo3 = "Hola"
let saludo4 = "Hola"
let comprobacion2 =  saludo3.length == saludo4.length
let respuesta2 = comprobacion2 ? `Si la longitud del los saludos es de s1${saludo3.length},s2${saludo4.length}`:`No la longitud no es la misma s1:${saludo3.length},${saludo4.length}`
console.log(`Entre el saludo 1 y 2 tienen la misma longitud? respuesta = ${respuesta2}`)