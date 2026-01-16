/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
// let carro = {
//     modelo: "Honda",
//     puertas: 4,
//     deportivo: false
// }
// // 2. Accede y muestra su valor
// console.log(carro)
// // 3. Agrega una nueva propiedad
// carro.asientos = 5
// console.log(carro)
// // 4. Elimina una de las 3 primeras propiedades
// delete carro.puertas
// console.log(carro)
// // 5. Agrega una función e invócala
// //Lo agregue al objeto carro 
// carro.drive = function(){
//     console.log("Esta manejando")
// }
// console.log(carro)
// carro.drive()
// // 6. Itera las propiedades del objeto
// for(key in carro){
//     console.log(`${key} : ${carro[key]}`)
// }
// // 7. Crea un objeto anidado
// let telefono = {
//     marca: "Moto",
//     version: "Motov8",
//     almacenamiento: 250,
//     app: {
//         default: ["Camara", "Fotos", "Calendario"],
//         download: ["App Bancarias", "Juegos"] 
//     }
// }
// // 8. Accede y muestra el valor de las propiedades anidadas
// console.log(telefono.app)
// // 9. Comprueba si los dos objetos creados son iguales
// console.log(carro === telefono)
// // 10. Comprueba si dos propiedades diferentes son iguales
// console.log(carro.modelo === telefono.marca)

// EJERCICIOS EXTRAS

// 1. El Perfil del Usuario (Manipulación y Métodos)
// let usuario = {
//     nombre : "Yael",
//     apellido: "Garay Colin",
//     edad: 24 ,
//     estadoActivo: true
// }
// // Nueva propiedad: Agrega una propiedad llamada seguidores con un valor inicial de 0
// usuario.seguidores = 5
// console.log(usuario)
// // Modificación: Cambia la edad por un nuevo número.
// usuario.edad = 25
// console.log(usuario)
// // Eliminación: Elimina la propiedad apellido
// delete usuario.apellido
// console.log(usuario)
// // Método: Crea un método llamado perfilCompleto que retorne un string con el nombre y la cantidad de seguidores (ej: "Yael tiene 0 seguidores").
// usuario.perfilCompleto = function(){
//     return `${this.nombre} tiene ${this.seguidores} seguidores`
// }
// // Acción: Incrementa manualmente la propiedad seguidores en 1 y luego llama al método para ver el cambio.
// console.log(usuario.perfilCompleto())

// 2. El Concesionario (Objetos Anidados e Iteración)
// let coche = {
//     marca: "Honda",
//     modelo: "Civic",
//     especificaciones: {
//         motor: "V8",
//         color: "negro",
//         transmision: "estandar"
//     }
// }
// // Iteración: Usa un bucle  para recorrer únicamente el objeto anidado especificaciones e imprimir en consola cada clave y su valor (ej: "motor: V8").
// for(key in coche.especificaciones){
//     console.log(`${key} : ${coche.especificaciones[key]}`)
// }

// // Actualización: Cambia el color del coche accediendo a través del objeto principal.
// coche.especificaciones.color = "blanco"
// console.log(coche.especificaciones)

// 3. El Inspector de Identidad (Referencias y Lógica)
let libroA = {
    titulo: "Javascript Pro",
    autor: "Desconocido"
}
let libroB = {
    titulo: "Javascript Pro",
    autor: "Desconocido"
}
let libroC = libroA
console.log(libroA === libroB) //Apesar de que los objetos son iguales, estos toman sus referencias las cuales no son iguales o tambien podemos entenderlo como el espacio en memoria que guardan los objetos no son identicos
console.log(libroA === libroC) //Puedo entender que como libroC es libroA, es como si compararamos libroA con libroA o viceversa
// Prueba final: Cambia el título de libroC. ¿Qué le pasó al título de libroA?
libroC.titulo = "Java Pro"
console.log(libroA) //Lo que paso es que como libroC es libroA, cualquier modificacion que se haga en el libroC es como si se la hicieramos al libroA