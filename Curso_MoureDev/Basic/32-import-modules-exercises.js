// 4. Importa una función
// 5. Importa una constante
// 6. Importa una clase
import { myFunction, nombre , Animal} from "./31-modules-exercises.js";

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// import defecto from './31-modules-exercises.js'

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { miNombre,miFuncion,Juego } from './new/ejercicio-modulos-export.js'

myFunction()
console.log(nombre)

let perro = new Animal("Guau!","Chihuahua")
console.log(perro)
perro.hacerRuido()

// console.log(defecto)

console.log(miNombre)
miFuncion()
let juegos = new Juego(1000,1000)
console.log(juegos.descargas)