// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name) {// funcion almacenada en una constante
    console.log(` Hola, ${name}`);
}

greet("Yael")

function processGreeting(greetFunction, name) {//funcion que recibe como parametros una clase y unvalor
    greetFunction(name);
}

processGreeting(greet, "Ulrick")

function returnGreeting() {// funcion retorna una funcion
    return greet;
}

const greet2 = returnGreeting()

greet2("Yael Ulrick")

// EJERCICIO REFORZAMIENTO
const aplicarDecuento = function (precio) {
    let descuento = precio * 0.10
    return precio - descuento
}

function aplicarIVA(precio) {
    let IVA = precio * 0.16
    return precio + IVA
}

function calcularPrecioFinal(num, Function) {
    return Function(num)
}
console.log(calcularPrecioFinal(100, aplicarDecuento))
console.log(calcularPrecioFinal(100, aplicarIVA))
console.log(aplicarDecuento(100))

// Arrow functions avanzadas
// antes
// const multi = (a, b) =>{
//     return a * b
// }
// retorno implisito
const multi = (a, b) => a * b;
console.log(multi(5, 2))

// // - this léxico (contexto)
const handler = {
    name: "Vanessa",
    greeting: function () {
        console.log(`Hola, ${this.name}`) //Contexto del objeto
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`) //Su propio contexto, this global
    }
}

handler.greeting()
handler.arrowGreeting();

//EJERCICIO DE REFORZAMIENTO
// retorno implícito
let convertirAMayusculas = (string) => string.toUpperCase();
console.log(convertirAMayusculas("hola"))
//
let usuario = {
    nombre: "Yael",
    saludoNormal: function () {
        console.log(`Hola, ${this.nombre}`);
    },
    saludoFlecha: () => {
        console.log(`Hola, ${this.nombre}`);
    }
};
usuario.saludoNormal(); // esta funcion me devulve una propiedad dentro del objeto ya que la funcion normal usa el this como contexto del mismo objeto donde se encuentra la funcion
usuario.saludoFlecha(); // esta funcion lo contrario ya que obtiene el contexto global, en este caso no de nuestro objeto

// IIFE ((Immediately Invoked Function Expression o Expresión de Función Invocada Inmediatamente)
// los IIFE necesitan que sus antecesores indiquen que terminaron su ejecucion con un ;, ya que agarran el contexto anterior
// IIFE clásico

(function () {
    console.log("IIFE clásico");
})();

(() => {
    console.log("IIFE con arrow function");
})();

(function () {
    let numero = "1.0.2";
})();
console.log(numero);
// Arroja un error el cual por lo que entiendo no puede mostrar la variable "version" ya que se declara dentro de la IIFE la cual de manera inmediata termina su ejecución



// Parámetros Rest (...)

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...) = expandir los elementos de un arrar o de otra estructura
const numbers = [1, 2, 3]
function sum2(a, b, c) {
    return a + b + c;
}
console.log(sum2(1, 2, 3))// sin Spread
console.log(sum2(...numbers)) // Con Spead

function listarFrutas(...frutas) { //parámetro rest
    console.log(`Tienes ${frutas.length} frutas en la canasta`)
    console.log(frutas)
}

let frutasBase = ["Manzana", "Pera"];
listarFrutas(...frutasBase) //operador spread
// respuesta: si usamos el operado spread la funcion recibira frutas sueltas, pero si no usamos spread recibira el array dentro del array del operador rest

// Closures (Clausuras) = ( Recuerda el datos sin contaminar el scope global )Guarda el contexto y el estado de la funcion padre

function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(`Contador: ${counter}`)
    }
}
const counter = createCounter()
counter()
counter()
const counter2 = createCounter()
counter2()
counter2()

// Ejercicios Reforzamiento
function crearSaludo(idioma) {
    return function (nombre) {
        console.log(`${idioma},${nombre}`)
    }
}

const saludoEspañol = crearSaludo("Hola")
const saludoIngles = crearSaludo("Hello")

saludoEspañol("Yael")
saludoIngles("Ulrick")

// Recursividad = Se llama a si misma pero con un contexto donde se deje de llamar así misma en algun momento

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

//Ejercicio
function cuentaRegresiva(numero) {
    if (numero <= 0) {
        return `Despegue!`
    }
    console.log(numero)
    return cuentaRegresiva(numero - 1)
}
console.log(cuentaRegresiva(3))
// Si coloco el console.log(numero) despues de que retorno la funcion o realizo la recursiva de mi funcion, el numero no se va imprimir ya que return termina el bloque de codigo para ejecutar nuevamente la funcion

// Funciones parciales = son funcionse anidadas que reciben un parametro y en otra funcion dentro espera a recibir los demas parametros

function partialSum(a) { //parametro fijo
    return function (b, c) { // parametro cambia
        return sum(a, b, c)
    }
}

const sumWith = partialSum(5)
console.log(sumWith(5, 5))
console.log(sumWith(2, 2))

// Currying = Transformar una funcion con varios parametros en una funcion que recibe uno cada vez

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}
//Monton de variantes con parametros
const sumAB = currySum(5)(5)
const sumC = sumAB(5)
console.log(sumC(5))
console.log(sumC(2))
console.log(sumAB(2)(2))

// Ejercicios de reforzamiento

function prepararPizza(tamaño) {
    return function (ingrediente) {
        return `Cocinando una pizza ${tamaño} de ${ingrediente}`;
    }
}
function pizzaGrande() {
    return prepararPizza("Grande");
}

const pizzaG = pizzaGrande();
console.log(pizzaG("Peperoni"))
console.log(pizzaG("Champiñones"))
// Respuesta es una funcion parcial ya que tenemos un parametro fijo el cual es el tamaño y el ingrediente varia


//Callbacks = A una funcion le pasamos una funcion como argumento para cambiar su comportamiento

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log("Mi resultado es:", result)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => { console.log("Mi resultado es (funcion flecha):", result) })

// Ejercicio reforzamiento

function validarPago(monto, callback) {
    console.log(`Validando pago de ${monto}`);
    callback("Pago Aprobado");
}

validarPago(1000, (estado) => { console.log(`Listo: ${estado}. Enciando paquete...`) })
validarPago(1000, (estado) => { console.log(`Listo: ${estado}. Enciando Generando PDF...`) })
//Realmente no tengo respuesta a esa pregunta, podria decir el llamado de funciones externas dependiendo la acción