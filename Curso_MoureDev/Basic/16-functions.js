// Funciones

//Simple
function myFunc(){
    console.log("¡Hola función!")
}
for(i=0; i<5;i++){
    myFunc()
}

// con parametros
 function myFuncWithParams(name){
    console.log(`Hola ${name}`)
 }

 myFuncWithParams("Yael")

 // funciones anónimas

 const myFunc2 = function (name) {
    console.log(`Hola ${name}`)
 }
 myFunc2("Ulrick")

 // Arrow Functions / Funciones flechas

 const myFunc3 = (name) => {
    console.log(`Hola ${name}`)
 }
 myFunc3("Garay")

 const myFunc4 = (name) => console.log(`Hoola ${name}`)
 myFunc("Colin")


 // Parametros

 function sum(a, b){
    console.log( a + b)
 }
 sum(5, 10)

 function defaultSum(a = 0, b= 0){
    console.log( a + b)
 }
 // por defecto
 defaultSum()
 defaultSum(5)
 defaultSum(5, 10)
 defaultSum(b=5)


 //retorno de valores
 function mul(a, b){
    return a * b
 }

 console.log(mul(5, 2))

 //Funciones anidadas
 function exters(){
        console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
 intern()
 }
 exters()
//  intern() error fuera del scope

//Funciones de orden superior
// son funciones que reciben otras funciones como argumento

function applyFunc(func, param){
    func(param)
}
applyFunc(myFunc4,"Funcion de orden superior")

// forEach - es una funcion que permite ejecutar bucles asociados a elementos iterar

myArray = [1, 2, 3, 4]
let mySet = new Set(["Esto", "es", "un", "Set"])
let myMap = new Map([
    ["name", "Yael"],
    ["email", "yael.go@gmail.com"],
    ["age", 24]
])

myArray.forEach(function (value) {
    console.log(value)
});

mySet.forEach(value => console.log(value));
myMap.forEach(value => console.log(value));
