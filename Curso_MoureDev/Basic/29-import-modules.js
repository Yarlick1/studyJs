// importanción de modulos
import { add, PI , name , Circle} from "./28-export-modules.js";

import importacion_defectp from "./28-export-modules.js"
//funciones

console.log(add(5,10))

// Propiedades

console.log(PI)
console.log(name)

//Clases
let circulo = new Circle(10)
console.log(circulo.radio)
console.log(circulo.area())

// importación por defecto
console.log(importacion_defectp(10,5))

//Proyecto modular
// import {myImport} from './directory/file.js'

