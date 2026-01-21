// Clases

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis
let person = new Person("Yael",24, "Ulrick")

// Valores por defecto

class DefaultPerson {
    constructor(name = "Sin nombre", age=0, alias="Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person2 = new DefaultPerson("Yael")
console.log(person2)

// Acceso a propiedades
console.log(person2.age)
console.log(person2.name)
person2.alias = "Ulrick"
console.log(person2)

//Funciones en clases

class PersonWithMethod {
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("La persona camina.")
    }
}
let person3 = new PersonWithMethod("Yael",24,"Ulrick")
person3.walk()

class PrivatePerson {
    #bank
    constructor(name,age,alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
}

let persona4 = new PrivatePerson("YAEL", 24, "ULRICK","1230")

console.log(persona4)
console.log(persona4.bank)

// Getters y Setters

class GetPerson{
    #name
    #age
    #alias
    constructor(name,age,alias){
        this.#name = name
        this.#age = age
        this.#alias = alias
    }

    get name(){ //Solo lectura no escritura alos privades
        return this.#name
    }

}
person5 = new GetPerson("Yael" ,24,"Ulrick")

console.log(person5)
console.log(person5.name)

class GetSetPerson{
    #name
    #age
    #alias
    #bank
    constructor(name,age,alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){ //Solo lectura no escritura alos privades
        return this.#name
    }
    set bank(newBank){ // escritura
        this.#bank = newBank
    }
    get bank(){ //Solo lectura no escritura alos privades
        return this.#bank
    }

}
person6 = new GetSetPerson("Yael" ,24,"Ulrick", "1230")
console.log(person6.bank)
person6.bank = "321"
console.log(person6.bank)

// Herencia

class Animal {
    constructor(name){
        this.name
    }
    sound(){
        console.log("Sonido generico")
    }
}
class Dog extends Animal{
    sound(){
        console.log("Guau!")//sobrescribimos pero podemos usar la de padre con super
    }
    run(){
        console.log("El perro corre")
    }
}
class Fish extends Animal{
    constructor(name, size){
        super(name) //Rescribe su constructor padre
        this.size = size
    }
    swin(){
        console.log("El pez nada")
    }
}
let myDog = new Dog("Wolf")
myDog.run()
myDog.sound()

let myFish = new Fish("Nemo", 10)
myFish.swin()
myFish.sound() // constructor por defecto

// Métodos estaticos

class MathOperations {
    static sum(a,b){
        return a + b
    }
}
// con static no necesitas instanciar la clase para acceder a el
console.log(MathOperations.sum(5, 10))