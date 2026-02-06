/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
console.group("Ejercicio 1:")
let mensaje = function (nombre) {
    return `Hola!, ${nombre}`
}
function persona(nombre) {
    return mensaje(nombre)
}
console.log(persona("Yael"))
console.groupEnd()

// 2. Implementa una función currificada que multiplique 3 números
console.group("Ejercicio 2:")
function multi(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}
console.log("Funcion currificada:", multi(2)(2)(2))
let multiAB = multi(5)(5)
console.log("Funcion currificada AB:", multiAB(2))
console.groupEnd()
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
console.group("Ejercicio 3:")

function potencia(numero, p) {
    if (p <= 0) {
        return `Termino la potencia de ${numero}`;
    }
    let respuesta = numero ** p
    console.log(`${respuesta}`)
    return potencia(numero, p - 1);
}
console.log(potencia(5, 4))

console.groupEnd()

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
console.group("Ejercicio 4:")
function createCounter() {
    // console.log(valorInicial)
    let valorInicial = 1
    return objec = {
        increment: () => console.log("El valor incremento", valorInicial++),
        decrement: () => console.log(`El valor disminuyo:`, valorInicial--),
        getValue: () => `Valor es: ${valorInicial}`
    }
}
const incrementarValor = createCounter()
const decrementarValor = createCounter()
const obtenerValor = createCounter()

incrementarValor.increment()
incrementarValor.increment()
incrementarValor.increment()

decrementarValor.decrement()
decrementarValor.decrement()

console.log(obtenerValor.getValue())

console.groupEnd()
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
console.group("Ejercicio 5:")
function sumManyTimes(multiplier, ...numbers) {
    let resultSum = 0
    numbers.forEach(number => { resultSum += number })
    console.log("El resultado de la suma es:", resultSum)
    return `El resultado de la multiplicacion es ${resultSum * multiplier}`
}
console.log(sumManyTimes(5, 1, 2))
console.groupEnd()
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico