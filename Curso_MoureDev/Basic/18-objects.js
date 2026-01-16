// Objetos

// sintaxix

let person = {
    name: "Yael",
    age: 24,
    alias: "Ulrick"
}

// Acceso a propiedades

//Notacion punto
console.log(person.name)

// Notación de corchetes

console.log(person["name"])

// Modificación de propiedades

person.name = "Ulrick Colin"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age
console.log(person)

// Nueva propiedad

person.email = "yaelcolin@gmail.com"

person["age"]= 24
console.log(person)

// Métodos (Funciones)

let person2 = {
    name: "Yael",
    age: 24,
    alias: "Ulrick",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()

// Anidación de objects

let person3 = {
    name: "Yael",
    age: 24,
    alias: "Ulrick",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function() {
            console.log("Estoy trabajando en " + person3.job.name)
        }
    }
}

// console.log(person3)
// console.log(person3.name)
// console.log(person3.job.name)
// person3.job.work()

//Igualdad de objects

let person4 = {
    name: "Yael",
    age: 24,
    alias: "Ulrick",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function() {
            console.log(`Estoy trabajando en ${this.name}`)
        }
    }
}

console.log(person3)
console.log(person4)

console.log(person3 == person4)
console.log(person3 === person4)// apresar de que son iguales, los objetos se guardan de manera distinta, lo cual en memoria hace que tengan una diferencia apesar de que exista un objeto con las mismas propiedades
console.log(person3.name == person4.name)// si comparamos sus propiedades, ahí si, ya que sus propiedades se guardan como los datos primitivos

// Iteración

for(key in person4){
    console.log(key + " : " + person4[key])
}


// Buenas practicas
// Cuando usas interpolacion en los objetos es con this para hacer la referencia dentro de un objeto ${this.name} dentro del cual se encuentra

// Funciones como objects (no es una buena practica)

function Person(name, age){ // Deberia ser una clase
    this.name = name
    this.age = age
}
let person5 = new Person("Yael", 24)
console.log(person5)
console.log(person5.name)
console.log(typeof person5)
console.log(typeof person4)

