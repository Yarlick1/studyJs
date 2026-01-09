//Operadores

//Operadores aritmeticos
let a = 5
let b = 10
console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicacion
console.log(a / b) //Division

console.log(a % b) //Resto de la division
console.log(a ** b) //Exponente

console.log(a++) //Incremento
console.log(b--) //Decremento

//Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2 //Suma y asigna al mismo tiempo
console.log(myVariable)

myVariable -= 2 //opera y asigna al mismo tiempo
myVariable *= 2 //opera y asigna al mismo tiempo
myVariable /= 2 //opera y asigna al mismo tiempo
myVariable %= 2 //opera y asigna al mismo tiempo
myVariable **= 2 //opera y asigna al mismo tiempo


//Opereadores de comparación

console.log(a > b) //mayor que
console.log(a < b) //menor que
console.log(10 >= 10) //menor o igual
console.log(10 <= 10) //mayor o igual
console.log(a == a) //igualdad por valor
console.log(a === "6") //igual de identidad
console.log(a != 6) //Nos da el resultado contrario 

// Truthy values (valores verdaderos)

//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
//El boolean true

//Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacias

//Operadores Logicos
// Comparan su valor booleano

// and (&&) si hay un falso ya no se cumple y el resultado es falso 
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)


//or (||) si hay minimo una que se cumple es true
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)


// not (!)
console.log(!true)
console.log(!false)
console.log(5 > 10 || 15 > 20)
console.log(!(5 > 10 && 15 > 20))

//Operadores Ternarios
//Otra forma de escribir condicionales 

const isRaining = false
//variable  ?(if)    si es verdadero o si cumple la condicion        : (else)si no se cumple
isRaining ? console.log("Esta lloviendo") : console.log("No está lloviendo")