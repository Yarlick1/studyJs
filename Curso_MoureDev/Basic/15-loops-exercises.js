/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios
let i
// 1. Crea un bucle que imprima los números del 1 al 20
// for(i = 1; i <= 20; i++){
//     console.log(`Número ${i}`)
// }
// i = 1
// while (i <= 20){
//     console.log(`Número ${i}`)
//     i++
// }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
// let sumaTotal = 0
// for(i = 1; i <= 100; i++){
//     sumaTotal += i
// }
// console.log(sumaTotal)
// i = 1
// let sumaTotal = 0
// while(i <= 100){
//     sumaTotal += i
//     i++
// }
// console.log(sumaTotal)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
// for(i = 2; i <= 50; i += 2){
//     console.log(i)
// }
// i = 2
// while(i <= 50){
//     console.log(i)
//     i += 2
// }
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
// let names = ["Yael", "Juan", "David", "Pepe"]

// for(value of names){
//     console.log(value)
// }
// i = 0
// while(i < names.length){
//     console.log(names[i])
//     i++
// }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
// let string = "Hola me llamo Yael Ulrick"
// let stringMin = string.toLowerCase()
// let stringFinal = stringMin.replaceAll(" ", "")
// let num = 0
// for (vocal of stringFinal){
//     if (vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u") {
//         num++
//     }
// }
// console.log(`El número de vocales del string "${string}" es de = ${num}`)
// // 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
// let arrayNumber = [2, 8, 5]
// let acumuladora = 1

// for(i = 0; i < arrayNumber.length; i++){
//     acumuladora = acumuladora * arrayNumber[i]
// }
// console.log(acumuladora)
// i=0
// while(i < arrayNumber.length){
//     acumuladora = acumuladora * arrayNumber[i]
//     i++
// }
// console.log(acumuladora)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
// let multi = 5

// for(i = 1; i <= 10; i++){
//     let resultado = multi * i
//     console.log(`${multi} x ${i} = ${resultado}`)
// }
// 8. Usa un bucle para invertir una cadena de texto
// let string = "Hola"
// let invertir = string.length - 1 
// for(i = invertir; i >= 0; i--){
//     console.log(string[i])
// }
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// let a = 0
// let b = 1
// let siguiente = 1
//    console.log(a)
//    console.log(b)
// for(i=1; i <=8; i++){
//    siguiente = a + b
//    a = b
//    b = siguiente
//    console.log(siguiente)
// }

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

// let arrayNumber = [1 , 2, 20, 50, 20]
// let arrayNew = []
// for (nuevo of arrayNumber){
//     if (nuevo > 10) {
//         arrayNew.push(nuevo)
//     }
// }
// console.log(`Nuevo Array = ${arrayNew}`)

// EJERCICIOS EXTRAS PARA REFORZAR
// 1. El Cajero del Supermercado
// let carrito = [15.50, 20.00, 5.75, 100.00, 2.50]
// let total = 0
// for (i= 0; i < carrito.length; i++){
//     total += carrito[i] 
//     //0 = 0 + 15.50
//     //15.50 = 15.50 + 20.00
//     //35.5 = 35.5 + 5.75
//     //41.25 = 41.25 + 100.00 
//     //141.25 = 141.25 + 2.50
//     //total = 143.75
// }
// if (total > 100) {
//     console.log(`El total de su compra es $${total} - ¡Tiene envio gratis!`)
// }else {
//     console.log(`El total de su compra es $${total}`)
// }
// i = 0
// while (i < carrito.length) {
//     total += carrito[i]
//     i++
// }
// if (total > 100) {
//     console.log(`El total de su compra es $${total} - ¡Tiene envio gratis!`)
// }else {
//     console.log(`El total de su compra es $${total}`)
// }

// 2. Constructor de Frases (Acumulación de Strings)
// let palabras = ["JavaScript", "es", "un", "lenguaje", "poderoso"]
// let completa = ""
// for(word of palabras){
//     completa = completa + word + " "
// }
// console.log(completa) 
// // opcion2 
// for(i=0; i < palabras.length; i++){
//     completa = completa  + palabras[i] + " "
// }
// console.log(completa) 
// opcion3
// i=0
// while(i < palabras.length){
//     completa = completa + palabras[i] + " "
//     i++
// }
// console.log(completa) 


// 3. Contador de Números Específicos (Filtro y Acumulación)
// let calificaciones = [45, 80, 60, 100, 92, 55, 70, 40]

// let alumnosA = 0
// let alumnosR = 0
// for(recorrido of calificaciones){
//     if (recorrido >= 60) {
//         alumnosA++
//     } else{
//         alumnosR++
//     }
// }
// console.log(`Aprobados = ${alumnosA}. Reprobados = ${alumnosR}`)
// // opcion 2
// i=0
// while (i < calificaciones.length) {
//     console.log(calificaciones[i])
//     if (calificaciones[i] >=60) {
//         alumnosA++
//     } else{
//         alumnosR++
//     }
//     i++
// }
// console.log(`Aprobados = ${alumnosA}. Reprobados = ${alumnosR}`)
