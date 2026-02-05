/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export let myFunction =()=>{
    console.log("Esta funcion es de otro fichero")
}

// 2. Exporta una constante
export const nombre ="Yael Ulrick Garay Colin"
// 3. Exporta una clase
export class Animal {
    constructor(sonido,raza){
        this.sonido = sonido
        this.raza = raza
    }
    hacerRuido(){
        console.log("Ese Animal se escucha así: ",this.sonido)
    }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
// export default const constante = "Yael" // marca error de syntaxis
// export default function saludo(){ // Marca error de duplicado a menos que comente o quite una de estas
//     console.log("Hola")
// }
// export default class Persona{ // Marca error de duplicado a menos que comente o quite una de estas
//     constructor(nombre, edad, sexo){
//         this.nombre = nombre
//         this.edad = edad
//         this.sexo = sexo
//     }
// }


