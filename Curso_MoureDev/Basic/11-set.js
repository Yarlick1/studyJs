//Estructura de datos
// set

// Declaracion

// let mySet = new Set()

// console.log(mySet)
// //Inicializarlo

// mySet = new Set(["Yael", "Ulrick", "Garay", "Colin"])
// console.log(mySet)

// //metodos comunes

// // add y delete

// mySet.add("nuevoElemento")
// console.log(mySet)

// mySet.delete("nuevoElemento")
// console.log(mySet)

// console.log(mySet.delete("Yael"))


// // has nos muestra con un valor booleano si existe el elemento

// console.log(mySet.has('Yael'))
// console.log(mySet.has('Ulrick'))

// // size tamaño

// console.log(mySet.size)

// // convertir un set a Array

// let myArray = Array.from(mySet)
// console.log(myArray)

// // convertir un array a set
// mySet = new Set(myArray)
// console.log(mySet)

//NO ADMINTE DUPLICADOS

//EJERCICIOS

//Ejercicio 1: Control de Invitados (Set Básico)
// let invitados = new Set(["Yael", "Ulrick", "Andrea"])
// invitados.add("Yael")
// invitados.add("Roberto")
// invitados.delete("Ulrick")
// let verificar = invitados.has("Andrea") ? "Andrea si se encuentra" : "Andrea no se encuentra en la lista" 
// console.log(`Tamaño del set = ${invitados.size}` )
// console.log(invitados)
// console.log(verificar)

// Ejercicio 2: Limpiador de Duplicados (Array a Set)
// let codigosSucios = ["A1", "B2", "A1", "C3", "B2", "D4", "A1"]
// let mySet = new Set(codigosSucios)
// mySet.add("E5")
// let codigosLimpios = Array.from(mySet)
// console.log(codigosLimpios + " Longitud: " + codigosLimpios.length)

// Ejercicio 3: Diccionario de Intereses (Comparación y Métodos)
// let intereses = new Set(["Programación", "Música", "Ajedrez"])
// intereses.has("Cocina") ? "Ya tiene el Cocina en Interes" : intereses.add("Cocina")
// intereses.delete("Música")
// intereses.clear()
// console.log(intereses) 