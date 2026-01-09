/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
// let value = 1
// if (value == 1) {
//     console.log("Yael Ulrick")
// }else{
//     console.log("La variable no ha tomado su valor")
// }
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
// let user = "Yarlick"
// let password = "123"

// if (user == "Yarlick" && password == "123") {
//     console.log("Usuario y contraseña son correctos")
// }else {
//     console.log("Intente de nuevo, credenciales incorrectas")
// }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
// let ingresaNumero = -5

// if (ingresaNumero < 0) {
//     console.log("El numero es negativo")
// } else if (ingresaNumero > 0) {
//     console.log("El numero que ingresaste es positivo")
// } else if (ingresaNumero == 0) {
//     console.log("El numero que ingresaste es cero")
// } else{
//     console.log("no es un numero")
// }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
// let edad = 15

// if (edad >= 18) {
//     console.log("Puedes votar porque eres mayor de edad")
// }else{
//     let aniosFaltantes = 18 - edad
//     console.log(`No puedes votar porque no cumples con la mayoria de edad, te faltan ${aniosFaltantes} año`)
// }
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
// let age = 18
// let isPerson = age >= 18 ? "Eres un adulto" : "Eres un menor de edad"
// console.log(isPerson)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// let input = "marzo"
// let mes = input.toLowerCase()
// let respuesta = input[0].toUpperCase() + input.slice(1)
// if (mes === "marzo" || mes === "abril" || mes === "mayo" || mes === "junio") {
//     console.log("Estamos en temporada de Primavera")
// } else if (mes === "julio" || mes == "agosto") {
//     console.log("Estamos en temporada de Verano")
// } else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
//     console.log("Estamos en temporada de Otoño")
// } else if (mes === "diciembre" || mes === "enero" || mes === "febrero"){
//     console.log("Estamos en temporada de Invierno")
// } else{
//     console.log("Ese no es un mes del año")
// }
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
//     console.log(`${respuesta} Este mes tiene 31 dias`)
// } else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") {
//     console.log(`${respuesta} Este mes tiene 30 dias`)
// } else if (mes === "febrero") {
//     console.log(`${respuesta} Este mes tiene 28 o 29 si es año bisiesto`)
// }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
// let idioma = "Frances"
// let saludo
// switch (idioma) {
//     case "Español":
//         saludo = "Hola, que tal!"
//         break;
//     case "Ingles":
//         saludo = "Hi how are things!"
//         break;
//     case "Frances":
//         saludo = "Salut, comment ça va!!"
//         break;
//     default:
//         saludo = "Ese idioma no existe o no esta en nuestra bdd"
//         break;
// }
// console.log(saludo)
// 9. Usa un switch para hacer de nuevo el ejercicio 6
// let input = "ENERO"
// let mes = input.toLowerCase()
// let message
// let estacionPrimavera = "Estamos en temporada de Primavera"
// let estacionVerano = "Estamos en temporada de Verano"
// let estacionOtoño = "Estamos en temporada de Otoño"
// let estacionInvierno = "Estamos en temporada de Invierno"

// switch (mes) {
//     case "enero":
//         message = estacionInvierno
//         break;
//      case "febrero":
//         message = estacionInvierno
//         break;
//     case "marzo":
//         message = estacionPrimavera
//         break;
//     case "abril":
//         message = estacionPrimavera
//         break;
//     case "mayo":
//         message = estacionPrimavera
//         break;
//     case "junio":
//         message = estacionPrimavera
//         break;
//     case "julio":
//         message = estacionVerano
//         break;
//     case "agosto":
//         message = estacionVerano
//         break;
//     case "septiembre":
//         message = estacionOtoño
//         break;
//     case "octubre":
//         message = estacionOtoño
//         break;
//     case "noviembre":
//         message = estacionOtoño
//         break;
//     case "diciembre":
//         message = estacionInvierno
//         break;
//     default:
//         message = "Ese no es un mes del año"
//         break;
// }
// console.log(message)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let input = "enero"
let mes = input.toLowerCase()
let message



switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        message = "Este mes tiene 31 dias"
        break;
    case "abril":
    case "noviembre":
    case "septiembre":
    case "junio":
        message =  "Este mes tiene 30 dias"
        break;
    case "febrero":
        message = "Este mes tiene 28 o 29 si es año bisiesto"
        break;
    default:
        message = "Ese no es un mes del año"
        break;
}
console.log(message)
