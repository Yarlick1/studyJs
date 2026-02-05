// Console

//log

console.log("Hola JavaScript")

// error

console.error("Este es un mensaje de error.")

// warn

console.warn("Mensaje de advertencia")

// info

console.info("Mensaje de información adicional")

// table

let data = [
    ["Yael" , 24],
    ["Magdiel" , 26],
]

console.table(data)

data = [
    {name :"Yael" , age: 24},
    {name : "Magdiel" , age: 26},
]
console.table(data)


// group

console.group("Usuario:")
console.log("Yael")
console.log("Magdiel")
console.log("Magdiel")
console.groupEnd()

// time (tiempo que tarda en ejecutarse) MIDE

console.time("Tiempo de ejecución")

for(let i; i < 100000; i++){}

console.timeEnd("Tiempo de ejecución")

// assert mensaje de error si es falso lo que evalua

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count mide las cantidad de veces que se realiza algo 
console.count("Click")
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")


// trace Muestra el seguimiento de la pila de la ejecucion

function funcA(){
    funcB()
}
function funcB(){
    console.trace("Seguimiento de la ejecución")

}
funcA()


// clear limpiar consola
// console.clear()