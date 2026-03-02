/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
let laptop = {
    marca: "DELL",
    procesador: "Intel core Ultra 5",
    hacerDocumentos() {
        console.log("Usa Word");
    }
}

// console.log(laptop)
// laptop.hacerDocumentos()
laptop.hacePresentaciones = function () {
    console.log("Usa PowerPoint");
}
// console.log(laptop)
// laptop.hacePresentaciones()

// 2. Crea un objeto que herede de otro

let computadora = Object.create(laptop)
computadora.hacePresentaciones()

// 3. Define un método de instancia en un objeto
function Trabajo(lugar, hrs) {
    this.lugar = lugar
    this.hrs = hrs
}

Trabajo.prototype.info = function () {
    console.log(`Yo trabajo en ${this.lugar} y estoy ahí durante ${this.hrs}hrs.`);
}

let trabajo = new Trabajo("SEMUJERES", 8)
console.log(trabajo)
trabajo.info()
// 4. Haz uso de get y set en un objeto

// 5. Utiliza la operación assign en un objeto

// 6. Crea una clase abstracta

// 7. Utiliza polimorfismo en dos clases diferentes

// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy