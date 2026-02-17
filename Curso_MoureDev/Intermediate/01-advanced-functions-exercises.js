/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
// console.group("Ejercicio 1:")
// let mensaje = function (nombre) {
//     return `Hola!, ${nombre}`
// }
// function persona() {
//     return mensaje;
// }
// const hablar = persona()
// console.log(hablar("Yael"))
// console.groupEnd()

// // 2. Implementa una función currificada que multiplique 3 números
// console.group("Ejercicio 2:")
// function multi(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c
//         }
//     }
// }
// console.log("Funcion currificada:", multi(2)(2)(2))
// let multiAB = multi(5)(5)
// console.log("Funcion currificada AB:", multiAB(2))
// console.groupEnd()
// // 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
// console.group("Ejercicio 3:")

// function potencia(numero, p) {
//     if (p === 0) return 1;
//     return numero * potencia(numero, p - 1);
// }
// console.log(potencia(5, 2))

// console.groupEnd()

// // 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
// console.group("Ejercicio 4:")
// function createCounter(inicio) {
//     let valorInicial = inicio
//     return {
//         increment: () => console.log("El valor incremento", valorInicial++),
//         decrement: () => console.log(`El valor disminuyo:`, valorInicial--),
//         getValue: () => `Valor es: ${valorInicial}`
//     }
// }
// const miContador = createCounter(5);
// miContador.increment()
// miContador.increment()
// miContador.decrement()
// miContador.decrement()
// console.log(miContador.getValue())


// console.groupEnd()
// // 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
// console.group("Ejercicio 5:")
// function sumManyTimes(multiplier, ...numbers) {
//     let resultSum = 0
//     numbers.forEach(number => { resultSum += number })
//     console.log("El resultado de la suma es:", resultSum)
//     return `El resultado de la multiplicacion es ${resultSum * multiplier}`
// }
// console.log(sumManyTimes(5, 1, 2))
// console.groupEnd()
// // 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
// console.group("Ejercicio 6:")
// let numero = [1, 2, 3];

// function suma(numeros, callback) {
//     let result = 0;
//     numeros.forEach(numero => {
//         result += numero
//     })
//     callback(result)
// }


// suma(numero, (result) => { console.log(`El resultado de la suma de todos los numeros es :`, result) })
// console.groupEnd()
// // 7. Desarrolla una función parcial
// console.group("Ejercicio 7:")
// function firstname(name) {
//     return function (lastName, age) {
//         return `Hola ${name} ${lastName}, ya cumpliste ${age} años de edad.`
//     }
// }

// let person = firstname("Yael");
// console.log(person("Garay Colin", 24))

// console.groupEnd()
// // 8. Implementa un ejemplo que haga uso de Spread
// console.group("Ejercicio 8:")
// let array = ["Yael Ulrick", 24, "yael@gmail.com", "Toluca, EDOMEX"]
// function usuario(nombre, edad, correo, ciudad) {
//     return `Bienvenido ${nombre}, estos son tus datos: Correo: ${correo},  Edad: ${edad}, Ciudad: ${ciudad}`
// }
// console.log(usuario(...array))
// console.groupEnd()

// // 9. Implementa un retorno implícito
// console.group("Ejercicio 9:")
// let sumaImplicita = (a, b) => a + b;
// console.log(sumaImplicita(5, 5))
// console.groupEnd()
// // 10. Haz uso del this léxico
// console.group("Ejercicio 10:")
// let persona1 = {
//     nombre: "Yael",
//     edad: 24,
//     caminar: function () {
//         console.log(`${this.nombre} Camina todas las mañanas`);
//     },
//     transporte: () => {
//         console.log(`${this.nombre} toma el camión para llegar a su destino`);
//     }
// };

// persona1.transporte()
// console.groupEnd()

// Ejercicios Extras

// 1. El Generador de Prefijos (Retorno de funciones)

// function crearPrefijo(prefijo) {
//     return function (nombre) {
//         return `${prefijo}${nombre}`
//     };
// }

// const superHeroe = crearPrefijo("Super");
// console.log(superHeroe("Yael"))

// const doctor = crearPrefijo("Dr.");
// console.log(doctor("Moure")); // "Dr.Moure"

// 2. Mini-Gestor de Inventario (Closures y Objetos)
// function crearTienda(nombreProducto, stockInicial) {
//     const stock = stockInicial;

//     return {

//         comprar: () => {
//             if (stock > 0) {
//                 stock--
//                 console.log("Producto Vendido");
//             } else {
//                 console.log("Sin existencias");
//             }
//         },
//         reponer: (cantidad) => stock += cantidad,
//         verEstado: () => `Producto ${nombreProducto} y quedan ${stock} en stock`
//     };
// }

// const venta = crearTienda("Telefono", 5)
// venta.comprar()
// console.log(venta.verEstado())
// console.log(venta.reponer(5))
// console.log(venta.verEstado())
// venta.comprar()
// venta.comprar()
// venta.comprar()
// console.log(venta.verEstado())

// 3. La Suma Infinita (Currying y Recursividad)
// function suma(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return a + b + c + d;
//             }
//         }
//     }
// }

// console.log(suma(5)(5)(5)(5))

// function sumaInfinita(a) {
//     return function (b) {
//         if (b !== undefined) {
//             // Si recibo un número, vuelvo a llamar a la función con la suma acumulada
//             return sumaInfinita(a + b);
//         }
//         // Si no recibo nada (paréntesis vacíos), devuelvo el total
//         return a;
//     };
// }

// console.log(sumaInfinita(5)(5)(10)(2)(2)()); // Resultado: 24

// 4. El Transformador de Arrays (Callbacks + Spread/Rest)
// function procesarLista(operacion, ...numeros) {
//     return operacion(numeros);
// }

// function suma(numeros) {
//     let suma = 0;
//     numeros.forEach(numero => { suma += numero })
//     return suma;
// }

// function resta(numeros) {
//     const respuesta = numeros.reduce((acumulador, valor) => acumulador - valor);
//     return respuesta;
// }

// function multi(numeros) {
//     const resultado = numeros.reduce((acumulador, valor) => acumulador * valor);
//     return resultado;
// }
// console.log(procesarLista(suma, 5, 6, 8));
// console.log(procesarLista(resta, 6, 5));

// let entrada = [6, 2]
// console.log(procesarLista(multi, ...entrada));


// 1. El Validador de Contraseñas (Funciones Parciales / Currying)
// function validarLargo(minimo) {
//     return function (string) {
//         if (string.length >= minimo) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// let validarLargo = (minimo) => (string) => string.length >= minimo;
// const esCorta = validarLargo(5);
// console.log(esCorta("abc")); // false
// console.log(esCorta("123456")); // true

// // 2. El Acumulador de Puntos (Closures)
// function crearJugador(nombre) {
//     let puntos = 0;
//     return {
//         ganarPunto: () => {
//             puntos++
//             return `+1 Punto para el jugador ${nombre} `
//         },
//         verPuntaje: function () {
//             return `${nombre} tiene los siguientes puntos: ${puntos}pt.`;
//         }
//     }
// }
// const jugador1 = crearJugador("Yael");
// const jugador2 = crearJugador("Magdiel");
// console.log(jugador1.ganarPunto())
// console.log(jugador1.ganarPunto())
// console.log(jugador2.ganarPunto())
// console.log(jugador2.ganarPunto())
// console.log(jugador2.ganarPunto())
// console.log(jugador2.ganarPunto())
// console.log(jugador1.verPuntaje())
// console.log(jugador2.verPuntaje())

// 3. El "Gritador" Progresivo (Recursividad)
// function gritar(palabra, instesidad) {
//     if (instesidad == 0) {
//         return palabra;
//     } else if (instesidad > 0) {
//         return gritar(palabra, instesidad - 1) + "!";
//     }
// }
// // console.log(gritar("Hola", 5))

// // 4. La Calculadora Flexible (Callbacks)
// function operar(a, b, callback) {
//     callback(a, b);
// }

// let sumar = (a, b) => { console.log(a + b) };
// let multlplicar = (a, b) => { console.log(a * b) };
// let exponencial = (a, b) => { console.log(a ** b) };

// operar(2, 5, sumar);
// operar(2, 5, multlplicar);
// operar(5, 2, exponencial);
// operar(5, 2, (a, b) => { console.log(a - b) });

// 1. El Formateador de Precios (Currying + Retorno Implícito)
// let formatearMoneda = (simbolo) => (valor) => simbolo + valor.toFixed(2);

// const simbol = formatearMoneda("$")
// console.log(simbol(12))


// 2. El Gestor de Permisos (Callbacks + Lógica de Arrays)

// function ejecutarAccion(usuario, accion, callbackError) {
//     if (usuario == "admin") {
//         return `Acción ${accion} permitida`;
//     } else {
//         return callbackError(accion);
//     }
// }

// function error(accion) {
//     return `¡PELIGRO! El usuario intentó ${accion} isn permiso`;
// }

// console.log(ejecutarAccion("usuario", "descargar", error))

// 3. El Buscador de Carpetas (Recursividad Real)

// function contarCapeta(objeto) {
//     let total = 1;
//     for (let sub of objeto.subcarpetas) {
//         total += contarCapeta(sub);
//     }
//     return total;
// }

// const miPC = {
//     nombre: "Disco C",
//     subcarpetas: [
//         { nombre: "Fotos", subcarpetas: [] },
//         {
//             nombre: "Proyectos", subcarpetas: [
//                 { nombre: "JS", subcarpetas: [] }
//             ]
//         }
//     ]
// };
// Debería devolver 4 (Disco C, Fotos, Proyectos, JS)

// console.log(contarCapeta(miPC));

//NO TENGO IDEA DE COMO HACER ESTE EJERCICIO num3., DAME PISTAS.

// 4. La Fábrica de Funciones (Closures + Estado)
// function crearLogger(nombreModulo) {
//     let numeroEntrada = 0;
//     return function (mensaje) {
//         numeroEntrada++
//         return `${nombreModulo} - Registro ${numeroEntrada}: ${mensaje}`
//     }
// }

// const modulo = crearLogger("Modulo1");
// console.log(modulo("este es el mensaje"));
// console.log(modulo("Nuevo mensaje"));
// console.log(modulo("Nuevo mensaje"));
// console.log(modulo("Nuevo mensaje"));

//Nuevo ejercicio

// function contarCapeta(objeto) {
//     let total = 1;
//     for (let sub of objeto.subcarpetas) {
//         total += contarCapeta(sub);
//     }
//     return total;
// }


// const empresa = {
//     nombre: "CEO",
//     subcarpetas: [
//         { nombre: "Ventas", subcarpetas: [] },
//         {
//             nombre: "IT", subcarpetas: [
//                 { nombre: "Soporte", subcarpetas: [] },
//                 {
//                     nombre: "Devs", subcarpetas: [
//                         { nombre: "Frontend", subcarpetas: [] }
//                     ]
//                 }
//             ]
//         }
//     ]
// };
// console.log(contarCapeta(empresa))

// 1. El Sistema de Descuentos (Currying + Lógica)
// function aplicarDescuento(porcentaje) {
//     return function (precio) {
//         let descuento = precio * porcentaje;
//         return precio - descuento;
//     }
// }
// const descuentoVIP = aplicarDescuento(0.20);
// console.log(descuentoVIP(100)); // 80
// console.log(descuentoVIP(500)); // 400



// 2. La Caja Fuerte (Closures)
// function crearCajaFuerte(claveInicial) {
//     let clave = claveInicial;
//     return {
//         cambiarClave: (claveVieja, claveNueva) => {
//             if (claveVieja == clave) {
//                 clave = claveNueva;
//                 return `Clave actualizada`;
//             } else {
//                 return `Acesso denegado`;
//             }
//         },
//         verClave: (verificar) => {
//             if (verificar == clave) {
//                 return `La clave esta guardada`
//             } else {
//                 return `Acesso denegado`;
//             }
//         }
//     }
// }

// let clave = crearCajaFuerte(123)

// console.log(clave.verClave(123))
// console.log(clave.cambiarClave(123, 321))
// console.log(clave.verClave(321))

// 3. El Árbol Genealógico (Recursividad)

// function buscarPariente(persona, nombreABuscar) {
//     if (persona.nombre === nombreABuscar) return true;

//     //Caso recursivo: Buscar
//     for (let hijo of persona.hijos) {
//         //si llama al hijo devuelve true, lo mando hacia arriba
//         if (buscarPariente(hijo, nombreABuscar)) {
//             return true;
//         }
//     }

//     //Si recorri todo y no encontré nada
//     return false;
// }

// const familia = {
//     nombre: "Abuelo",
//     hijos: [
//         { nombre: "Tío", hijos: [] },
//         {
//             nombre: "Papá", hijos: [
//                 { nombre: "Tú", hijos: [] }
//             ]
//         }
//     ]
// };
// console.log(buscarPariente(familia, "Abuelo"))// -> true

// buscarPariente(familia, "Batman")// -> false

// 4. El Filtro Personalizado (Callbacks)
// function miFiltro(array, condicion) {
//     let resultado = [] // Aqui guardaremos los que pasen true

//     for (let elemento of array) {
//         //le preguntamos la callback: "¿Este elemento te gusta?"
//         if (condicion(elemento)) {
//             resultado.push(elemento); //si retorna true lo guardamos
//         }
//     }

//     return resultado;
// }
// const numeros = [1, 2, 3, 4, 5, 6];
// const pares = miFiltro(numeros, (n) => n % 2 === 0);
// console.log(pares); // [2, 4, 6]

// Reto: El Transformador
// function transformarArray(array, callback) {
//     let vacio = [];
//     for (elemento of array) {
//         vacio.push(callback(elemento));
//     }
//     return vacio;
// }

// console.log(transformarArray([1, 2, 3, 4], (n) => n * 10))

// Ejercicio para reforzar Recursividad
// function buscarPersona(objeto, nombreABuscar) {
//     if (objeto.nombre == nombreABuscar) return true

//     for (hijos of objeto.hijos) {


//         if (buscarPersona(hijos, nombreABuscar)) {
//             return true
//         }
//     }
//     return false;
// }


// const familia = {
//     nombre: "Abuelo",
//     hijos: [
//         { nombre: "Tío", hijos: [] },
//         {
//             nombre: "Papá", hijos: [
//                 { nombre: "Tú", hijos: [] }
//             ]
//         }
//     ]
// };

// console.log(buscarPersona(familia, "hola"));

//Respecto a tu pregunta, si se seguiria ejecutando y en lugar de que el resultado sea la multiplicación solo nos mostraria el elemento del array que recorrio


// 🏆 Reto Final de Despedida: "El Contador de Sesiones" (Closures + Lógica)
// function monitorAcceso(claveCorrecta) {
//     let intentos = 0;
//     return function (clave) {
//         if (intentos >= 3) {
//             return `Cuenta bloqueada`;
//         } else if (clave == claveCorrecta) {
//             return `Acesso concedido`;
//         } else {
//             intentos++;
//             return `Clave incorrecta. inteto ${intentos}`;
//         }
//     }
// }

// const login = monitorAcceso(123);
// console.log(login(321))
// console.log(login(321))
// console.log(login(321))
// console.log(login(321))
// console.log(login(123))
// const newLogin = monitorAcceso(123);
// console.log(newLogin(321))
// console.log(newLogin(123))

// 1. Recursividad: El "Efecto Dominó" (Básico)
// La recursividad es como una fila de fichas de dominó: cada ficha golpea a la siguiente hasta que llegas a la última.

// function cuentaRegresiva(numero) {
//     if (numero == 0) {
//         return `!BOOM!`;
//     }
//     console.log(numero);
//     return cuentaRegresiva(numero - 1)
// }
// console.log(cuentaRegresiva(5))

// 2.- Callbacks: La MAquina de saludos
// Un callback no es más que una función que tú "guardas" para usarla después, como un botón de una máuqina.

// function procesarNombre(nombre, callback) {
//     return callback(nombre);
// }

// let enMayusculas = (n) => n.toUpperCase()
// let enMinusculas = (n) => n.toLowerCase()

// console.log(procesarNombre("Yael", enMayusculas));
// console.log(procesarNombre("Yael", enMinusculas));

//Callbackl dee validación
// function revisarNumero(n, callback) {

//     if (callback(n)) {
//         return "Es un buen numero"
//     } else {
//         return "No es tan bueno..."
//     }
// }

// console.log(revisarNumero(3, (n) => n % 2 == 0));

//Recursividad de suma
// function sumarHasta(n) {
//     if (n == 1) {
//         return 1;
//     }
//     // console.log(n);
//     return n + sumarHasta(n - 1);
// }
// console.log(sumarHasta(2))

// 1. Reto de Recursividad: "El Explorador de Profundidades"

