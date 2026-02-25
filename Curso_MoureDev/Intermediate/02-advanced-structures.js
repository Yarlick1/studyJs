// Estructuras avanzadas

// Arrays avanzados

// - Métodos funcionales

// forEach (solo recorre)
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(element => console.log(element))

// map - retorna el resultado en un NUEVO array (aplica una funcion para cada uno de lo elementos) 

let doubled = numbers.map(element => element * 2);
console.log(doubled)

// filter - filtra elementos siguiendo la maxima como el map

let evens = numbers.filter(element => element % 2 === 0) // quiero saber los pares de este array filtralo ()
console.log(evens)

// reduce - ejecuta una funcion reductora de maera devolviendo un numero (reduce a un unico valor)
// en el previous acumula los valores, current el valor actual. Por ejemplo el valor inicial es 0. Entonces previous es 0 + valor actual current 1 = 1 ahora previous vale 1 + current 2 = 3 así sucesivamente.
let sum = numbers.reduce((previous, current) => previous + current, 0)
console.log(sum)

// Manipulación 

// flat (aplana un array que tenga una profundidad especifica)

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap - combina las funcionalidades de flat y map, la cual es aplanar el array ejecutando una funcion a cada uno de los elementos

let phrase = ["Hola mundo", "Adios mundo"];
let word = phrase.flatMap(phrase => phrase.split(" "))
console.log(word)

// - Ordenación

// sort - es ordenar siguiendo un orden alfabetico (cadena de texto muy bien y directa), con numeros enteros no sigue el criterio a menos que le indiques un criterio de comparación CREANDO UN NUEVO ARRAY
let unsorted = ["b", "a", "d", "c"];
let sorted = unsorted.sort();
console.log(sorted)

unsorted = [3, 4, 1, 6, 10];
sorted = unsorted.sort((a, b) => a - b)
console.log(sorted)

// reverse - coloca los elementos en el mismo array en reversa

sorted.reverse()
console.log(sorted)

// BUSQEUDA

// include .- si incluye el elemento

console.log(sorted.includes(4))


// find- encuentra el elemento que cumple la condicion devolviendo el elemento en caso de que lo encuentre el primero. Si no lo encuentra devuelve undefined

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven) //recordando que el array esta en reversa

// findIndex - Encuentra el elemento aplicado al indice, quiere decir que si encuentra el primer elemento nos regresa la posicion en la que se encuentra y si no lo encuentra nos retorna -1

sorted = [3, 7, 11, 2];
let firstEvenIndex = sorted.findIndex(element => element % 2 === 0);
console.log(firstEvenIndex)

// SET AVANZADOS
// set para evitar dupllicados
// nos vale para operaciones de conjuntos

// Operaciones

//Elimninación de duplicados

let numbersArrays1 = [1, 2, 2, 3, 4, 5, 6, 6];
numbersArrays1 = [...new Set(numbersArrays1)];
console.log(numbersArrays1);

// si usaramos set pero necesitamos que permanezca el array ¡
const numbersArrays = [1, 2, 2, 3, 4, 5, 6, 6];
const numbersSet = new Set(numbersArrays)
console.log(numbersSet);

// Union - une varios set en un set conbinando

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5]);
const union = new Set([...setA, ...setA])

// Intersección - elementos comunes entres 2 set

const intersection = new Set([...setA].filter(element => setB.has(element))); // has no sayuda a decir lo tiene? coloca el elemento.
console.log(intersection)

// Diferencia - son los elementos que estan en un set y que no se encuentran en otro

const difference = new Set([...setA].filter(element => !setB.has(element))) // los elementos de setA se encuentran en el setB? nos devuelve un set con los elementos que no se encuentran en el setB
console.log(difference)

// Conversion - convertir set en array 
console.log([...setA])

// iteración (recorrer un SET) - 
// con forEach
setA.forEach(element => console.log(element))

// MAPS AVANZADOS
// clave valor
// iterar
let myMap = new Map([
    ["name", "MoureDev"],
    ["age", 37]
]);

// console.log(myMap);
myMap.forEach((value, key) => console.log(`${key}, ${value}`))

// conversión
// Mapa a Array
const arrayFromMap = Array.from(myMap) //tranforma una estructura a un array
console.log(arrayFromMap)

// Mapa a Objeto (diccionario)

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)

// en conclusion los array tiene metodos avanzados para el map para el filter para el reduce, operaciones de ordenación, reverse. Teniamos la eliminacion de duplicado son los set y la posibilidad de trabajar con conjuntos
// importante haceer esas conversiones entre set a array y viseversa. Con mapas metodos de transformacion entre objetos y mapas, mapas objetos ya que son ejemplos abituales de trabajar con estructuras más complejas.