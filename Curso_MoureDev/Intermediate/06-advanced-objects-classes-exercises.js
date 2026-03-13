/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
let laptop = {
    marca: "DELL",
    procesador: "Intel core Ultra 5",
    hacerDocumentos() {
        // console.log("Usa Word");
    }
}

// console.log(laptop)
// laptop.hacerDocumentos()
Object.getPrototypeOf(laptop).hacePresentaciones = function () { //accedo al prototipo para crear una nueva funcion en el objeto
    // console.log("Usa PowerPoint");
}
// console.log(laptop)
// laptop.hacePresentaciones()

// 2. Crea un objeto que herede de otro

let computadora = Object.create(laptop)
// computadora.hacePresentaciones()

// 3. Define un método de instancia en un objeto
function Trabajo(lugar, hrs) {
    this.lugar = lugar
    this.hrs = hrs
}

Trabajo.prototype.info = function () {
    // console.log(`Yo trabajo en ${this.lugar} y estoy ahí durante ${this.hrs}hrs.`);
}

let trabajo = new Trabajo("SEMUJERES", 8)
// console.log(trabajo)
// trabajo.info()
// 4. Haz uso de get y set en un objeto
const mayorEdad = {
    _edad: 0,
    get edad() {
        if (this._edad < 18) {
            console.log(`Tienes ${this._edad}`);
            console.error("Eres menor de edad");
        } else {
            console.log(`Tienes ${this._edad}`);
            console.log("Eres mayor de edad")
        }
    },
    set edad(edadValidar) {
        this._edad = edadValidar;

    }
}
// mayorEdad.edad = 18;
// mayorEdad.edad
// 5. Utiliza la operación assign en un objeto
let futbol = { nombre: "America", posicion: 18 };
let liga = { nombreLiga: "LigaMX", equipos: 18 }

let deporte = Object.assign(liga, futbol);
// console.log(deporte)
// 6. Crea una clase abstracta
class Computadora {
    constructor(marca) {
        if (new.target === Computadora) {
            throw new Error("No puedes instanciar una clase abstracta");
        }
        this.marca = marca;
    }

    procesador() {
        throw new Error("No puedes usar este metodo, aplica polimorfismo")
    }
}
// let prueba = new Computadora("HP");
// console.log(prueba)

// 7. Utiliza polimorfismo en dos clases diferentes
class HP extends Computadora {
    procesador() {
        console.log("Intel 5");
    }
}
class DELL extends Computadora {
    procesador() {
        console.log("Ryzen 7");
    }
}

let hp = new HP("HP");
// hp.procesador()

let dell = new DELL();
// dell.procesador()
// 8. Implementa un Mixin
const memoriaRam = {
    ram() {
        console.log(`${this.marca} tiene 8GB de ram`);
    }
}

Object.assign(HP.prototype, memoriaRam);

// hp.ram()
// 9. Crea un Singleton

class Perro {
    constructor(name) {
        if (Perro.instance) {
            return Perro.instance;
        }
        this.name = name;
        Perro.instance = this;
    }
}

let nombrePerro = new Perro("Lia")
let NuevoNombre = new Perro("Juan")
// console.log(nombrePerro.name)
// console.log(NuevoNombre.name)
// siempre se llamara lia y no se le podra cambiar el nombre
// 10. Desarrolla un Proxy
const miProxy = {
    get(target, property) {
        console.log("Tu edad es:");
        return target[property];
    },
    set(target, property, value) {
        if (property === "num" && value < 0) {
            throw new Error("La edad es incorrecta")
        }
        if (property === "num" && value > 17) {
            console.log("Eres mayor de edad", value)
        }
        target[property] = value;
        return true;
    }
}

class Edad {
    constructor(num) {
        this.num = num;
    }
}

let prueba = new Proxy(new Edad(10), miProxy);
// console.log("---proxy---")
// console.log(prueba.num)
// prueba.num = 18
// console.log(prueba.num)

//EJERCICIOS EXTRAS

// 1. El Sistema de Audio (Herencia, Abstracción y Polimorfismo)

class DispositivoSonido {
    constructor(nombre) {
        if (new.target === DispositivoSonido) {
            throw new Error("No puedes instanciar la clase absatracta");
        }
        this.nombre = nombre;
    }
    reproducir() {
        throw new Error("No puedes usar esta funcion");
    }
}


class Radio extends DispositivoSonido {
    reproducir() {
        console.log("Sintonizando música...")
    }
}

class ParlanteBluetooth extends DispositivoSonido {
    reproducir() {
        console.log("Conectado y reproduciendo...");
    }
}

let radio = new Radio("Luis");
// radio.reproducir();
let bluetooth = new ParlanteBluetooth("JBL");
// bluetooth.reproducir();

// console.log(radio instanceof DispositivoSonido);

// 2. La Configuración Protegida (Proxy, Singleton y Get/Set)
class Configuracion {
    constructor(volumen) {
        if (Configuracion.instance) {
            return Configuracion.instance;
        }
        this.volumen = volumen;
        Configuracion.instance = this;
    }

}

const proxy = {
    get(target, property) {
        console.log("Estas intentando leer una propiedad")
        return target[property]
    },
    set(target, property, value) {
        if (value < 0 || value > 100) {
            console.log("Valor invalido, no se modifica el volumen");
        } else {
            target[property] = value;

        }
    }
}

let volumen = new Proxy(new Configuracion(10), proxy);
// console.log(volumen.volumen)
// volumen.volumen = 30
// console.log(volumen.volumen)
// volumen.volumen = 50
// console.log(volumen.volumen)

// 3. El Super-Objeto de Usuario (Mixins, Assign y Symbols)

//Usuario que toma prestadas habilidades de otros objetos

const ID_INTERNO = Symbol("id_interno");

let HabilidadAdmin = {
    borrarUsuario() {
        console.log(`Se borrara el usuario con el ID: ${this[ID_INTERNO]}`)
    }
}

class Usuario {
    constructor() {
        this[ID_INTERNO] = Math.random();
    }
}

Object.assign(Usuario.prototype, HabilidadAdmin);
let usuario = new Usuario();
// console.log(usuario[ID_INTERNO])
// usuario.borrarUsuario()



// Ejercicios de calentamiento:

// 1. Calentamiento de ""

const persona = {
    nombre: "Yael",
    edad: 25
}

const proxyEdad = {
    get(target, proprty) {
        return target[proprty];
    },
    set(target, property, value) {
        if (value < 0 || target[property] < 0) {
            console.error("Valor invalido");
        } else {
            target[property] = value;
        }
    }
}


let caletamientoProxy = new Proxy(persona, proxyEdad)

// console.log(caletamientoProxy.edad);
// caletamientoProxy.edad = 15
// console.log(caletamientoProxy.edad);

// 2. Calentamiento de "Identidad Única" (Singleton)
console.log("---");

class BaseDeDatos {
    constructor() {
        if (BaseDeDatos.instance) {
            return BaseDeDatos.instance;
        }
        BaseDeDatos.instance = this;
    }
}

// let bd1 = new BaseDeDatos()
// let bd2 = new BaseDeDatos()
// console.log(bd1 === bd2)

// 3. Calentamiento de "ADN compartido" (Mixins)
console.log("---");

const HabilidadNavegar = {
    flotar() {
        console.log("Estoy en el agua");
    }
}

class Coche {

}

Object.assign(Coche.prototype, HabilidadNavegar);

let coche = new Coche()
// coche.flotar()


// El Escenario: "SecurePay System"
// Vas a crear un sistema que procese transacciones. Debe ser único, seguro y flexible.

// 1. El Núcleo (Singleton + Abstracta)
let CLAVE_API = Symbol("clave");

const LoggerMixin = {
    registrar(mensaje) {
        console.log(`[LOG]: ${mensaje}`);
    }
}


class ProcesadorBase {
    constructor() {
        if (new.target === ProcesadorBase) {
            throw new Error("No puedes instanciar esta clase");
        }
    }
}

class SistemaPagos extends ProcesadorBase {
    constructor() {
        if (SistemaPagos.instance) {
            return SistemaPagos.instance;
        }
        super();
        this[CLAVE_API] = Math.floor(Math.random() * 10)
        SistemaPagos.instance = this;
    }

    procesar(monto) { console.log(`Procesando cargo de $${monto}....`) }
}

Object.assign(new SistemaPagos(), LoggerMixin);


class SistemaPruebas extends ProcesadorBase {
    procesar(monto) {
        console.log("Modo prueba. No se genero Cargo", monto)
    }
}

const proxyPagos = {
    get(target, property) {
        return "Acceso denegado";
    },
    set(target, property, monto) {
        if (monto < 1) {
            throw new Error("El monto debe ser mayor a 0");
        } else if (typeof monto !== 'numero') {
            throw new Error("El monto debe ser un numero");
        } else {
            target[property] = monto;
        }
    }
}


// Pruebas singleton
const sp1 = new SistemaPagos();
const sp2 = new SistemaPagos();
console.log(sp1 === sp2);
console.log("---");

// Prueba de seguridad
const sp3 = new Proxy(new SistemaPagos(), proxyPagos);
console.log(sp3.CLAVE_API)

try {
    sp3.CLAVE_API = -50;

} catch (e) {
    console.log("Bloqueo de seguridad:", e.message);
}

try {
    sp3.CLAVE_API = "Cien numeros";
} catch (e) {
    console.log("Bloqueo de seguridad:", e.message);
}

// Prueba de Funcionalidad y Mixins (Polimorfismo)
sp1.registrar("Iniciando transacción de prueba....")

const sistemaReal = new SistemaPagos();
sistemaReal.procesar(100)

const sistemaPruebas = new SistemaPruebas();
sistemaPruebas.procesar(100)