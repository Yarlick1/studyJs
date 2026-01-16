/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
// function sum(a =0, b=0){
//     return a + b
// }
// console.log(sum(10, 5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
// let array = [3, 1, 2]
// let myFunc = (arrayNum) => {
    // let maximo = 0
//   for(i=0; i < arrayNum.length; i++){
//     if (arrayNum[i] > maximo ) {
//         maximo = arrayNum[i]
//     }
// }
//     return maximo
// }
// console.log(myFunc(array))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
// let inputString = "Hola Yael Ulrick Como estas?"
// let string = inputString.toLowerCase()

// let funcVocal = (recString) => {
    // let totalVocales = 0

//     for(i=0; i < recString.length; i++){
//         if (recString[i] == "a" || recString[i] == "e" || recString[i] == "i" || recString[i] == "o" || recString[i] == "u") {
//             totalVocales++
//         }
//     }
//     return totalVocales

// }
// console.log(funcVocal(string))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
// let array = ["Hola", "Yael"]
// let newArray1 = []
// let newArray = (parametArray) => {
//     parametArray.forEach(element => {
//         elementMayus = element.toUpperCase()
//         newArray1.push(elementMayus)
//     });
//     return newArray1
// }
// console.log(newArray(array))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
// let numPrimo = (numero) =>{
//     for(i=2; i < numero; i++){
//         if (numero % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(numPrimo(11))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
// let array1 = ["Manzana", "Pera", "Fresa"]
// let array2 = ["Manzana", "Pera", "Sandia"]
// let join = []
// function joins(conca1, conca2) {
//     for (i = 0; i < conca1.length; i++) {
//         for (j = 0; j < conca2.length; j++) {
//             if (conca1[i] === conca2[j]) {
//                 join.push(conca1[i])
//             }
//         }
//     }
//     return join
// }
// console.log(joins(array1,array2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
// let arrayNumber = [1, 2, 3, 4, 5, 6];
// let acumulados = 0;
// let sumPares = (numbers) => {
//     for (i= 0; i < numbers.length; i++){
//         let resi = numbers[i] / 2
//         if(resi % 1 === 0){
//             acumulados += numbers[i]
//             console.log("Los numero pares son: " + numbers[i])
//         }
//     }
//     console.log(`La suma de los numeros pares es = ${acumulados}`)
// }
// Opcion 2 con forEch
// let sumPares = (numbers) => {

//     numbers.forEach((element) => { 
//         if(element % 2 === 0){
//             acumulados += element
//             console.log("Los numero pares son: " + element)
//         }
//     });
//     console.log(`La suma de los numeros pares es = ${acumulados}`)
// }
// console.log(sumPares(arrayNumber))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
// let arrayNumber = [1, 2, 3, 4, 5]
// let numberPotencia = []
// let potenciaNumber = 0
// let potencia = (numbers) => {
//     for(i = 0; i< numbers.length; i++){
//         potenciaNumber = numbers[i]**2
//         numberPotencia.push(potenciaNumber)
//     }
//     console.log(numberPotencia)
// }
// potencia(arrayNumber)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
// let string = "Hola Yael"

// let inverso = (cadena) =>{
//     let invertir = cadena.split(' ').reverse().join(' ')
//     console.log(invertir)
// }
// inverso(string)
// 10. Crea una función que calcule el factorial de un número dado
// let numeroInput = 10
// let resultado = 1
// let factorial = (number) =>{
//     for(i=2; i <= number; i++){
//             resultado *= i
//         }
//         console.log(resultado)
// }
// factorial(numeroInput)