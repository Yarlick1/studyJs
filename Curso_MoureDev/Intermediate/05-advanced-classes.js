// Clases avanzadas

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hola, soy ${this.name}`);
    }
}

const person = new Person("Yael", 24);
person.greet()

//podemos crear un metodo como antes adentro de la clase
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`);
}

person.sayAge()


// Clase abstractas: sirve para definir una estructura

class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este mpetodo tiene que ser implementado por la subclase");
    }

}

//Error
// let animal = new Animal("Ya");
// console.log(animal)

// - Polimorfismo: capacidad de las clsases abstractas para implementar metodos con comparmientos diferentes

class Cat extends Animal {
    makeSound() {
        console.log("Miau")
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Guau")
    }
}

const cat = new Cat("Lia");
console.log(cat)
cat.makeSound()

const dog = new Dog("Sol")
console.log(dog)
dog.makeSound()

// - Mixins: Técnica para compartir funcionalidad en diferentes clases pero sin utilizar herencia

const FlyMixixn = {
    fly() {
        console.log(`${this.name} Está volando`);
    }
}

class Bird extends Animal { }
class Dragon extends Animal { }

Object.assign(Bird.prototype, FlyMixixn);
Object.assign(Dragon.prototype, FlyMixixn);

const bird = new Bird("Pajaro Y");
console.log(bird.name)
bird.fly()

const dragon = new Dragon("Dragon Y");
console.log(dragon.name)
dragon.fly()

// - Patrón Singleton: patron de diseño que se aplica en las clases que asegura una clase solo se puede instanciar una vez, solo una instancia existe.

class Session {
    constructor(name) {
        if (Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }

}

const session1 = new Session("Yael Ulrick")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)

// - Symbol: tipo de dato primitivo. Identificador unico e inmutable (Se usaban antes). SIMULA LA PROPIEDAD PRIVADA pero se puede modificar

const ID = Symbol("id");

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }
}

const user = new User("Yael")
console.log(user.name)
console.log(user.ID) // vemos que se creo una propiedad semiprivada
console.log(user[ID]) // vemos que se creo una propiedad semiprivada

// - instanceof: revisar si es instancia de

class Car { }
const car = new Car();

console.log(car instanceof Car);

// - create

const anotherCar = Object.create(Car.prototype);

console.log(anotherCar instanceof Car)
console.log(anotherCar);

// - Proxy: Es para interseptear y personalizar las clases para aplicar validaciones, implementar seguridad. Comprobaciones de seguridad, y validaciones 

const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo ");
        }
        target[property] = value;
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }

}

const account = new Proxy(new BankAccount(100), proxy)
console.log("---")
console.log(account.balance)

account.balance = 50
console.log(account.balance)
