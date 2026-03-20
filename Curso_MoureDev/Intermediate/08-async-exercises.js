/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function saludo(nombre, callback) {
    setTimeout(() => {
        callback(nombre);
    }, 2000);
}

// saludo("Yael", (nombre) => { console.log(`Hola ${nombre}`) })

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback).
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
    setTimeout(() => {
        console.log("Termino el stack 1")
        callback()
    }, 1000)
}

function task2(callback) {
    setTimeout(() => {
        console.log("Termino el stack 2")
        callback()
    }, 1000)
}

function task3(callback) {
    setTimeout(() => {
        console.log("Termino el stack 3")
        callback()
    }, 1000)
}

function fin() {
    console.log("Termino")
}

// task1(() => {
//     task2(() => {
//         task3(() => {
//             console.log("Los task terminaron");
//         })
//     })
// })

// 3. Crea una función para verificar un número que retorne una Promesa.
//    Si el número es par, la promesa se resuelve con el mensaje "Número par".
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function verificar(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve();
        } else {
            reject();
        }
    });
}

// verificar(2).then(() => {
//     console.log("Numero par");
// }).catch(() => {
//     console.log("Numero impar");
// });





// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Primera tarea completada");
            resolve();
        }, 1000);
    })
}

function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Segunda tarea completada");
            resolve();
        }, 2000);
    })
}

function thirdTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tercera tarea completada");
            resolve();
        }, 1500);
    })
}

// firstTask()
//     .then(() => secondTask())
//     .then(() => thirdTask())
//     .then(() => { console.log("Tareas completadas") })

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
function espera(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function executeTasks() {

    await espera(1000);
    console.log("Primera tarea completada async");

    await espera(2000);
    console.log("Segunda tarea completada async");

    await espera(1500);
    console.log("Tercera tarea completada async");
}

// executeTasks()
// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function simular(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUser(id) {
    await simular(2000);
    if (id < 5) return { id, nombre: "Usuario" + id };
    throw "Usuario no encontrado";
}

// getUser(10).then(resolve => {
//     console.log(resolve)
// }).catch(error => {
//     console.log(error)
// })

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
// console.log("Inicio")
// setTimeout(() => console.log("setTimeout ejecutado"), 0)
// Promise.resolve().then(() => console.log("Promesa resuelta"))
// console.log("Fin")

//Respuesta del ejercicio 7 = Se muestra primero el los log sincronos, luego la promesa y por ultimo el setTimeout

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function promise1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Primera promesa");
        }, 5000);
    })
}

function promise2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Segunda promesa");
        }, 2000);
    })
}

function promise3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Tercera promesa");
        }, 3000);
    })
}

// Promise.all([promise1(), promise2(), promise3()])
//     .then(resolve => {
//         console.log(resolve);
//     }).catch(error => {
//         console.log(error)
//     });

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos));
}

async function time() {
    console.log("Empieza el tiempo")
    await waitSeconds(3000);

    console.log("Tiempo finalizado")
}

// time();

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let saldo = 500;

function waitTransaccion(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos));
}

async function checkBalance() {
    await waitTransaccion(1000);
    console.log(`Saldo disponible: $${saldo}`)
}

async function withdrawMoney(amount) {
    await waitTransaccion(2000);
    console.log(`Retirando...$${amount}`);
    if (saldo >= amount) {
        saldo -= amount;
        console.log(`Operación exitosa. Retiraste $${amount}. Saldo restante: $${saldo}`);
    } else {
        console.log(`Error: Fondos insuficientes`);
    }
}

async function iniciarCajero() {
    await checkBalance();
    await withdrawMoney(300);
    await withdrawMoney(300);
}

// iniciarCajero();

// EJERCICIOS EXTRAS

// El Escenario: "El Sistema de Envío de Emails"
function waitEmail(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function enviarEmail(usuario) {
    await waitEmail((Math.floor(Math.random() * 3) + 1) * 1000);

    if (usuario === "Error") {
        throw new Error("Error");
    } else {
        console.log(`Email enviado a ${usuario}`);
    }
}

let usuarios = ["Yael", "Error", "Zulmara"];

async function envio() {
    for (user of usuarios) {
        try {
            await enviarEmail(user)
        } catch (e) {
            console.log(e.message);
        }
    }
}

// envio();

// El Escenario: "El Almacén de Logística"

function waitVerificar(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos));
}

async function verificarStock(producto) {
    await waitVerificar(1500);
    if (producto === "iPhone") {
        console.log("se resuelve")
    } else {
        throw new Error("Producto agotado");
    }
}

async function procesarPago(monto) {
    await waitVerificar(2000);
    if (monto > 0) {
        return `Pago de $${monto} recibido`;
    } else {
        throw new Error("Monto Invalido");
    }
}

async function calcularEnvio(ciudad) {
    await waitVerificar(1000);
    return `Costo de envio para ${ciudad}: $10`;
}

let pedido1 = {
    articulo: "iPhone", precio: 50, ciudad: "CDMX"
}

async function logistica(pedido) {
    try {
        console.log("--- Iniciando proceso de logística ---");

        // 1. Bloqueo secuencial: Si falla, saltamos al catch inmediatamente
        await verificarStock(pedido.articulo);

        // 2. Ejecución paralela: Esperamos a que ambas terminen antes de seguir
        console.log("Stock verificado. Procesando pago y envío en paralelo...");
        const resultados = await Promise.all([
            procesarPago(pedido.precio),
            calcularEnvio(pedido.ciudad)
        ]);

        // Si llegamos aquí, todo salió bien
        console.log("✅ Pedido completado con éxito.", resultados);

    } catch (e) {
        console.log(`❌ Pedido cancelado: ${e.message}`);
    }
}

// logistica(pedido1)


// El Escenario: "El Gestor de Perfiles (ProfileManager)"

function time(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUserData(id) {
    console.log("....Iniciando")
    await time(2000);

    if (id === 1) {
        return { id: 1, nombre: "Yael", tipo: "Admin" };
    } else {
        throw new Error("Usuario no encontrado");
    }
}


//Clase core (sinfleton + Privacidad)
let DATOS_SENSIBLE = Symbol("Datos_Sensibles");

class ProfileManager {
    constructor() {
        if (ProfileManager.instance) {
            return ProfileManager.instance;
        }
        this[DATOS_SENSIBLE];
        ProfileManager.instance = this;
    }

    async inicializarPerfil(id) {
        this[DATOS_SENSIBLE] = await fetchUserData(id);

        console.log(`✅ Perfil de ${this[DATOS_SENSIBLE].nombre} cargado y protegido`)

    }
}

let manejador = {
    get: function (target, property) {
        if (property === DATOS_SENSIBLE) {
            return "Acceso Restringido";
        }

        const value = target[property];
        // Si lo que piden es una función, hay que asegurar que "this" siga siendo el manager
        if (typeof value === "function") {
            return value.bind(target);
        }

        return value;
    }
}

async function ejecutarPruebas() {
    const managerReal = new ProfileManager();
    const managerProtegido = new Proxy(managerReal, manejador);

    console.log("Intentando hackear Symbol: ", managerProtegido[DATOS_SENSIBLE]);

    try {
        await managerProtegido.inicializarPerfil(1)
        await managerProtegido.inicializarPerfil(99);
    } catch (error) {
        console.log("Error gestionado:", error.message);
    }
}

// ejecutarPruebas()

// Reto de Refuerzo: "El Validador de Mensajes"

class Buzon {
    async enviar(mensaje) {
        await (new Promise(resolve => setTimeout(resolve, 1000)));

        if (!mensaje) {
            throw new Error("Mensaje Vacio");
        }
    }
}

let manejador2 = {
    get: function (target, property) {
        if (typeof target[property] === "function") {
            return target[property].bind(target)
        }
        return target[property];
    }
}

async function pruebas() {
    const prueba = new Buzon();
    const pruebaProtegida = new Proxy(prueba, manejador2);
    try {
        await pruebaProtegida.enviar()
    } catch (error) {
        console.log("Error:", error.message)
    }
}


// pruebas()


// "Bank of Gemini Core"

// 1.-Motor Asíncrono
async function validarTransaccion(monto) {
    console.log("Validando Transacción......")
    await (new Promise(resolve => setTimeout(resolve, 1500)));
    if (monto < 0) {
        throw new Error("Valor invalido");
    }
    if (monto > 10000) {
        throw new Error("Requiere autorización manual para montos altos");
    } else {
        console.log("Transacción validada......")
        return monto;
    }

}

let SALDO_INTERNO = Symbol("Saldo_interno");

class Banco {
    constructor() {
        if (Banco.instance) {
            return Banco.instance;
        }
        this[SALDO_INTERNO] = 5000;
        Banco.instance = this;
    }

    async depositar(cantidad) {
        console.log("Iniciando Transacción......")
        let cantidadDeposito = await validarTransaccion(cantidad);
        this[SALDO_INTERNO] += cantidadDeposito;
        console.log("Deposito listo, Saldo actual: ", this[SALDO_INTERNO]);
        return this[SALDO_INTERNO];
    }

    async retirar(cantidad) {
        await validarTransaccion(cantidad);

        if (cantidad > this[SALDO_INTERNO]) {
            throw new Error("Fondos insuficientes");
        } else {
            this[SALDO_INTERNO] -= cantidad
            console.log("Retiro listo, Saldo actual: ", this[SALDO_INTERNO]);
            return this[SALDO_INTERNO];
        }
    }
}

const capaSeguridad = {
    get: function (target, property) {
        const value = target[property];

        if (property === SALDO_INTERNO) {
            throw new Error("Acceso denegado");
        }

        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    },
    set: function (target, property, value) {
        if (value < 0) {
            throw new Error("Valor invalido");
        }
        target[property] = value;
        return true;
    }
}

async function menu() {
    const instanciar = new Banco();
    const instanciarProtegida = new Proxy(instanciar, capaSeguridad);


    try {
        console.log("--- Iniciando ráfaga de transacciones ---");

        // Ejecutamos las 3 operaciones simultáneamente
        await instanciarProtegida.depositar(2000)
        await instanciarProtegida.retirar(1000) // Bajé este para que no falle por fondos
        await instanciarProtegida.depositar(500)

        console.log("Todas las transacciones exitosas.");

    } catch (error) {
        console.log("Error en la ráfaga: ", error.message);
    }
}

menu()