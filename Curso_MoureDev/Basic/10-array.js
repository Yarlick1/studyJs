//Estructuras de Datos
// array

// Declaración

// let myArray = []
// let myArray2 = new Array()

// console.log(myArray)
// console.log(myArray2)

// // Inicialización

// myArray = [1]
// myArray2 = new Array(1)

// console.log(myArray)
// console.log(myArray2)

// myArray = [1, 2 , 3, 4]
// myArray2 = new Array(1, 2 , 3, 4)

// console.log(myArray)
// console.log(myArray2)

// myArray = ["yael", "2" , "30", 4, true]
// myArray2 = new Array("1", "2" , "30", "4")

// console.log(myArray)
// console.log(myArray2)

// myArray2 = new Array(3)
// myArray2[0] = "Yael"
// myArray2[1] = "Ulrick"
// myArray2[2] = "Wolf"

// console.log(myArray)
// console.log(myArray2)

// //Metodos comunes

// myArray = []

// //push y pop

// myArray.push("Yael") //permite introducir elemento al array al final
// myArray.push(25)
// let pop = myArray.pop() //elimina el ultimo elemento del array y lo devuelve

// //shift y unshift

// console.log(myArray.shift())//elimina el primer elemento del array y lo devuelve
// console.log(myArray)

// myArray.unshift("Nuevo", "elemento") //introduce nuevo elementos al principio
// console.log(myArray)

// // length

// console.log(myArray.length) //longitud del array

// //clear

// myArray = []

// // slice 
// myArray.push("Nuevo", "elemento" ,37, "Nuevo", "elemento") // muestra estos elemenos
// let myNewArray = myArray.slice(1 ,4)
// console.log(myNewArray)

// //splice

// myArray = ["Yael", "ulrick", "Garay", "Colin"]

// myArray.splice(0, 1, "Ya") // elimna el elementos y añado el ultimo capo
// console.log(myArray)

// Ejercios

// 1. Gestión de una Fila de Espera (Shift / Push)

// let fila = ["Yael", "Ulrick", "Andrea"]

// fila.push("Roberto")
// fila.shift()
// fila.unshift("Elena")
// let resultado = `La fila es ${fila}, osea con ${fila.length} personas`
// console.log(resultado)

// 2. El Inventario de Mochila (Pop / Slice)

// let mochila = ["Linterna", "Agua", "Comida", "Cuerda", "Brújula"]
// mochila.pop()
// mochila.splice(3 , 1)

// let kitEmergencia = mochila.slice(0, 2)
// console.log(mochila)
// console.log(kitEmergencia)


// 3. El Menú del Día (Splice / Sustitución)
// let menu = ["Sopa", "Pasta", "Carne", "Postre"]

// menu.splice(1, 1, "Arroz")
// menu.splice(2, 1)
// menu.push("Helado")
// console.log(menu)

// Ejercicio 4: Clasificación de Números
// let numeros = [10, 20, 30, 40, 50]
// numeros.pop()
// numeros.shift()
// numeros.unshift(100)
// numeros.push(200)
// let centro = numeros.slice(1 , 3)
// console.log(numeros)
// console.log(centro)

// Ejercicio 5: Editor de Texto (Simulación)
// let palabras = ["El","sol","brilla","mucho","hoy"]
// palabras.splice(3, 1, "fuertemente")
// palabras.splice(3, 2)
// palabras.push("siempre", "radiante")
// console.log(palabras)
// console.log(palabras.indexOf("siempre"))

// Ejercicio 6: Gestión de Frutas
// let frutas = ["Manzana", "Pera", "Naranja"]
// frutas.push("Uva","Mango")
// frutas.splice(0, 1, "Sandia", "Melón")
// frutas.reverse()
// console.log(frutas)