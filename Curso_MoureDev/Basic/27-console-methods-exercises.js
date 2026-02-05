/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
// let input = 12
// let errorFunc = (texto)=>{
//     if (typeof texto !== "string") {
//         console.error("Error", new Error("Tipo de dato incorrecto, debe ser una cadena de texto"))
//     } else{
//         console.log(texto)
//     }
// }
// errorFunc(input)
// 2. Crea una función que utilice warn correctamente
// let array = ["Hola","12",""]

// let aviso = (valores)=>{
//     valores.forEach(valor =>{
//         console.log(valor.length)
//         if (valor.length == 0) {
//             console.warn("El array contiene un valor vacio")
//         }
//     })
// }
// aviso(array)
// 3. Crea una función que utilice info correctamente
// let frase = "Hola me llamo Yael"
// let numeroLetras =(letras)=>{
//     console.info(`El numero de letras de la frase "${letras}" es de :`, letras.replaceAll(" ","").length)
// }
// numeroLetras(frase)
// 4. Utiliza table
// let datos = [
//     {nombre: "Yael", edad: 24},
//     {trabajo: "INEGI"},
//     {nombre: "Magdiel", edad: 37, trabajo: "Almoloya"}
// ] 
// console.table(datos)

// 5. Utiliza group
let datos1 = [1,2,3]
let datos2 = ["Yael","Luis"]
let datos3 = [24,50]

console.group("Nombres:")
console.log(datos2)
console.groupEnd()
console.group("Edades:")
console.log(datos3)
console.groupEnd()


// 6. Utiliza time
console.time("Tiempo de ejecución")

for(let i=0; i < 1000000; i++){}

console.timeEnd("Tiempo de ejecución")
// 7. Valida con assert si un número es positivo
let numero= -1
// console.assert(numero >= 0,"El numero NO es positivo")
// 8. Utiliza count

// for(let j=1; j <= 10; j++){
//     console.count("Ejecución num")
// }
// 9. Utiliza trace
console.trace("Aqui puedes encontrar el archivo donde se esta ejecutando este codigo")

// 10. Utiliza clear

console.clear()