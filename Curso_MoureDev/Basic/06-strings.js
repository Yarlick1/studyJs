//Strings

// Concatenación 

let myName = "Yael"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acesso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[2])
console.log(greeting[3])

// Metodos comunes
console.log(greeting.toUpperCase()) //Transforma a mayusculas
console.log(greeting.toLowerCase()) //Transforma a minusculas
console.log(greeting.indexOf("Yael")) //Nos arroja la posicion en donde encuentra la palabra o letra, si hay -1 no ecuentra
console.log(greeting.includes("Yael")) //Comprueba si existe arrojandonos un booleano
console.log(greeting.slice(0, 10)) //Muestra que hay entre el indicie x al indice x
console.log(greeting.replace("Yael","Ulrick")) //replice si encuentra la palabra o valor x , lo remplaza por el valor x

// Template literals (platillas literales)

//interpolar variables
let mensaje = `Hola este es mi 
mensaje en el curso de JS`

console.log(mensaje)

let email = "yael@gmail.com"
console.log(`Hola ${myName}!. Tu email es ${email}`)