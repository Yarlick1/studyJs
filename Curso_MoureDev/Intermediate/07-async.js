//Programación asincrona

//Código sincrono

console.log("Inicio")

for (let i = 0; i < 100000; i++) { }

console.log("Fin")

// Event Loop (Bucle de eventos)


//Componentes del Event Loop:
// - Call Stack (Pila de ejecución) -Se acaban ejecundo las funciones en orden
// - Web APIs (APIs del navegador) o Node.js - Si se esta ejecutando en un navegador = setTimeout()....
// - Task Queue (Cola de tareas) y MicrotaskQueue - Se almacenan las funciones cuando el CallStack este vacio

//Flujo del Event Loop:
//1. Call Stack
// 2. Operaciones asincronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microstack Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite.

//Código asincrono

// - Callbacks - Recordando es una funcion que se pasa como argumento a otra función y se ejecuta cuando la otra a finalizado

console.log("INICIO");

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("FIN");

// - Problema: Callbacks Hell

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todas las tareas se han completado")
        });
    });
});

// - Promesas - Mejor alternativa para mejorar los Callback Hell

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = false;
        if (ok) {
            console.log("Operación exítosa");
        } else {
            console.log("Se ha producido un error");
        }
    }, 4000);
})

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })

console.log("Fin de las lineas sincronas");

// Encadenar promesas

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado");
            resolve();
        }, 1000);
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado");
            resolve();
        }, 1000);
    })
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado");
            resolve();
        }, 1000);
    })
}

step1Promise()
    .then(step2Promise())
    .then(step3Promise())
    .then(() => {
        console.log("Todos los paso con promesas completados")
    });


// - Async/Await -  - Puedes crear codigo asincrono de una forma mas clara
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


async function process() {
    console.log("Inicia Proceso");


    await wait(5000);
    console.log("Termina el proceso despues de 5 segundos");

    await wait(1000);
    console.log("Termina el proceso despues de 1 segundos");

    await wait(2000);
    console.log("Termina el proceso despues de 2 segundos");



    console.log("Termina Proceso");
}

process()