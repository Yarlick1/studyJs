// Objetos avanzados

//- Prototipos y Herencia

// - Prototipos: Es un mecanismo por el cual los objetos puedas heredar los metodos o propiedades

let person = {
    name: "Yael",
    age: 24,
    greet() {
        console.log(`Hola, soy ${this.name}`);
    }
}

// console.log(person.__proto__);
// console.log(Object.getPrototypeOf(person));

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`);
}

// person.sayAge()

// Herencia: esta herencia es una forma que usaban antes de usar clases, heredamos las propiedades y metodos de un obj base, pero si queremos actualizar alguna de ellas del obj base no se podra a menos que solo sea al nuevo objeto


let programmer = Object.create(person);
programmer.language = "JavaScript";
console.log(person.language);

console.log(programmer.name);
console.log(programmer.age);
console.log(programmer.language);
programmer.greet()

// - Métodos estáticos y de instacia (Se usaban antes)

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet2 = function () {
    console.log(`Hola, soy ${this.name}`);
}

let new_person = new Person("Yael", 24);
new_person.greet2()

// - Métodos avanzados 

// assign : nos permite copiar propiedades en un destino objeto creando un objeto nuevo

let person_core = { name: "Ulrick" }
let person_details = { age: 24, alias: "Yarlick" }

let fullPerosn = Object.assign(person_core, person_details);
console.log(fullPerosn)

// keys, values, entries

console.log(Object.keys(fullPerosn))
console.log(Object.values(fullPerosn))
console.log(Object.entries(fullPerosn))


