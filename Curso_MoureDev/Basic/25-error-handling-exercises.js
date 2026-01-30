/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
// let miVariable
// try{
//     console.log(miVariable.email)
// } catch {
//     console.log("Error")
// }
// 2. Captura una excepción utilizando try-catch y finally
// let string = "  "
// let funcion = () =>{
//     let cadena = string.trim();
//     if (cadena.length == 0) {
//         throw new Error("La cadena de texto es vacia")
//     }else{
//         console.log(string)
//     }
// }
// 5. Lanza una excepción personalizada
// try {
//     funcion()
// } catch (error) {
//     console.log("Control del error: ",error.message)
// } finally {
//     console.log("El contenido de la variable es: ",string)
// }
// 3. Lanza una excepción genérica
// throw new Error("Error generico");
// 4. Crea una excepción personalizada

// class ErrrorPersonalizado extends Error {
//     constructor(message, texto){
//         super(message)
//         this.texto = texto
//     }
//     lengthTexto(){
//         return this.texto.length
//     }
// }
// let textoString = (string) =>{
//     let cadena = string.trim();
//     if (cadena.length == 0) {
//         throw new ErrrorPersonalizado("No puedes tener una caden de texto vacia", string)
//     }else{
//         console.log(string)
//     }
// }
// try {
//     textoString("")
// } catch (error) {
//     console.log("Control del error: ",error)
// }

// 6. Lanza varias excepciones según una lógica definida
// function registrarUsuario(nombre, edad) {
//     // 1. Error de tipo (TyperError): Si no manda un string en el nombre
//     if (typeof nombre !== "string") {
//         throw new TypeError("El nombre debe ser un texto")
//     }

//     //2. Error de logica (Error Genérico): Si el nombre es muy corto
//     if (nombre.length < 3) {
//         throw new Error("El nombre es demasiado corto");
//     }

//     //3. Error de Rango (RangeError): Si la edad no tiene sentido
//     if (edad <= 0 || edad > 120) {
//         throw new RangeError("La edad debe estar entre 1 y 120 años");
//     }

//     return `Usuario ${nombre} registrado con exito`
// }
// try {
//     console.log(registrarUsuario("Yael", 250))
// } catch (error) {
//     // no solo dices "hubo un error", sino que investigas qué tipo de error fue para responder correctamente
//     if(error instanceof TypeError){
//         console.error("¡Oye! Revisa el tipo de dato:", error.message)
//     } else if (error instanceof RangeError) {
//         console.error("La edad esta fuera de rango:", error.message)
//     } else if(error instanceof Error){
//         console.error("Revisa si tu nombre es correcto:", error.message)
//     }

// }

// let retiro = (montoDinero, saldoActual) =>{
//     if (typeof montoDinero !== "number" || typeof saldoActual !== "number") {
//         throw new TypeError("El dato que ingresaste no es un numero");
//     }
//     if (montoDinero > saldoActual){
//         throw new Error("El moto es mayor al saldo actual")
//     }
//     if (montoDinero <= 0) {
//         throw new RangeError("El monto es invalido")
//     }
//     let saldoNuevo = saldoActual - montoDinero
//     return `Retiro existoso, tu saldo actual es de ${saldoNuevo}`
// }
// // dinero(10,10)
// try {
//     console.log(retiro(10,9))
// } catch (e){
//     if (e instanceof TypeError) {
//         console.error("Tipo de dato incorrecto:", e.message)
//     } else if(e instanceof RangeError){
//         console.error("Revisa el monto:", e.message)
//     } else if (e instanceof Error) {
//         console.error("Revisa tu saldo:", e.message)
//     }
// }

// 7. Captura varias excepciones en un mismo try-catch

// class ValidacionMayus extends Error{
//     constructor(stringOriginal, message){
//         super(message)
//         this.stringOriginal = stringOriginal
//     }
//     obtenerMinusculas(){
//         let minusculasEncontradas = ""
//         for(let char of this.stringOriginal){
//             if(char !== char.toUpperCase()){
//                 minusculasEncontradas += char
//             }
//         }
//         return minusculasEncontradas
//     }
// }
// let envio = (string) =>{
//     if(typeof string !== "string"){
//         throw new TypeError("Debe ser una cadena de texto");
//     }
//     if(string.trim().length <= 0){
//         throw new Error("Cadena vacia");
//     }
//     if(string !== string.toUpperCase()){
//         throw new ValidacionMayus(string,"Deben ser todas Mayusculas");
//     }
//     return string
// }
// try{
//     console.log(envio("HOla Mundo"))
// } catch (error){
//     if(error instanceof TypeError){
//         console.error("Tipo de dato invalido:",error.message)
//     } else if (error instanceof ValidacionMayus) {
//         console.error("X: ",error.message)
//         console.error(`Letras prohibidas detectadas: "${error.obtenerMinusculas()}"`)
//     } else if (error instanceof Error) {
//         console.error("Debes colocar algo:",error.message)
//     }
// }
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
// let datos = (array) => {
//     array.forEach(element => {
//         try {
//             let trans = parseFloat(element);

//             // Validamos si la transformación falló (NaN) o si no es un número real
//             if (Number.isNaN(trans)) {
//                 throw new Error(`[${element}] no se puede transformar a número`);
//             }

//             console.log("Transformado con éxito:", trans);

//         } catch (error) {
//             // Este catch atrapa el error de "Hola", lo imprime,
//             // ¡y deja que el forEach pase al siguiente elemento!
//             console.error("Error detectado:", error.message);
//         }
//     });
// }

// datos([5, 10, "Hola", true, "Mundo", 5, 2, 1]);
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
// let miFuncion = (objeto, propiedadEspecifica) => {
//   if (!(propiedadEspecifica in objeto)) {
//     throw new propiedadEspecificaClase(
//       propiedadEspecifica,
//       "No se encuentra en el objeto",
//     );
//   }

//   return `La propiedad "${propiedadEspecifica}" si existe en el objeto`;
// };
// class propiedadEspecificaClase extends Error {
//   constructor(propiedad, message) {
//     super(message);
//     this.propiedad = propiedad;
//   }
// }
// try {
//   console.log(
//     miFuncion(
//       {
//         name: "Yael",
//         apellidosP: "Garay",
//         apellidoM: "Colin",
//         edad: 24,
//       },
//       "yael",
//     ),
//   );
// } catch (error) {
//   if (error instanceof propiedadEspecificaClase) {
//     console.error("XX", error.message, "la siguiente propiedad:",error.propiedad);
//   }
// }
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
// let inicioSesion = (usuario, pass) => {
//     let bdd = {
//         user: "yarlick",
//         pass: "yael123",
//     };

//     let i = 0;
//     let intentos = 10;
//     while (i < intentos) {
//         try {
//             if (usuario === bdd.user && pass == bdd.pass) {
//                 console.log("Iniciaste Sesion")
//                 break;
//             } else{
//                 i++
//                 let intentoActual = i
//                 throw new UsuarioPassIncorrecto(usuario, pass, `Intento ${intentoActual} de 10`);
//             }
//         } catch (error) {
//             console.error("Datos incorrectos, Vuelve a intentar - ", error.message);
//             if (i > intentos){
//                 console.error("Gastaste el numero de intentos disponibles")
//             }
//         }
//     }
// };

// class UsuarioPassIncorrecto extends Error {
//     constructor(usuario, pass, messange) {
//         super(messange);
//         this.usuario = usuario;
//         this.pass = pass;
//     }
// }
// inicioSesion("yarlick", "yael123");

// EJERCICIOS EXTRAS

// 1. El Validador de Inventario (Objetos + Operador in)
// const bodega = { manzanas: 10, peras: 6 };

// class ProductoNoEncontrado extends Error {
//     constructor(nombreProducto, message) {
//         super(message)
//         this.nombreProducto = nombreProducto
//     }
// }

// let venderProducto = (nombreProducto, cantidad) => {
//     if (!(nombreProducto in bodega)) {
//         throw new ProductoNoEncontrado(nombreProducto,"El producto no se encuentra en stock");
//     }
//     if (cantidad > bodega[nombreProducto]) {
//         throw new Error(`Stock insuficiente para ${nombreProducto}. Solo hay ${bodega[nombreProducto]} unidades`);
//     }
//     bodega[nombreProducto] -= cantidad
//     return `Venta exitosa: ${cantidad} ${nombreProducto}. Stock restante: ${bodega[nombreProducto]}`
// }

// try {
//     console.log(venderProducto("peras", 5))

// } catch (error) {
//     if (error instanceof ProductoNoEncontrado) {
//         console.error("Logistica: ",error.message)
//     }else {
//         console.error("Ventas: ",error.message)
//     }

// }

// 2. El Procesador de Precios (Bucle Resiliente)
// let precios = [100, "200", "gratis", 300, null, 500]

// let impuesto = (array) => {
//     array.forEach(element => {
//         try{
//             let numeroReal = parseFloat(element)
//             if (Number.isNaN(numeroReal)) {
//                 throw new Error("Esto no es un numero")
//             } else {
//                 let impuestoApli = numeroReal * 1.16
//                 console.log(`El precio con impuestos queda en $${Math.round(impuestoApli)}`)
//             }

//         } catch (e){
//             if (e instanceof Error) {
//                 console.error("¡ATENCIÓN!:",e.message)
//             }
//         }
//     });
// }

// impuesto(precios)

// 3. El "Pasamanos" de Errores (Rethrow)
// const ahora = new Date()
// let baseDeDatos = () =>{
//     throw new Error("Fallo de conexión")
// }
// let servicioUsuario = () =>{
//     try {
//         baseDeDatos()
//     } catch (error) {
//         console.error(`Log: Intento de conexión fallido a las ${ahora.toLocaleDateString()}`)
//         throw error;

//     }
// }

// try {
//     servicioUsuario()
// } catch (error) {
//     console.error(error.message)
// }

// 1. El Validador de "Configuración de App"
// let config = {
//     nombreApp: "Facebook",
//     version: "1.2",
// }

// class ErrorDeConfiguracion extends Error{
//     constructor(message){
//         super(message)
//     }
// }

// let iniciarApp = (config,array) =>{
//     array.forEach(element => {
//         if (!(element in config)) {
//             throw new ErrorDeConfiguracion(`Falta la siguiente propiedad a la configuración ${element}`)
//         }
//     });
//     return `Configuración completada`
// }
// let validacion = ["nombreApp", "version", "estado"]
// try {
//     console.log(iniciarApp(config,validacion))
// } catch (error) {
//     if (error instanceof ErrorDeConfiguracion) {
//         console.error("¡ATENCIÓN!:",error.message)
//     }
// }

// 2. La Calculadora con "Memoria Selectiva" (Bucle + Tipos)
// const operaciones = [{ a: 5, b: 10 }, { a: "8", b: 2 }, { a: 7, b: null }, { a: 4, b: 4 }]

// let suma = (array) =>{
//     // console.log(array)
//     array.forEach(element => {
//         try{
//             let verificacionNumeroA = parseFloat(element.a)
//             let verificacionNumeroB = parseFloat(element.b)
//             if (Number.isNaN(verificacionNumeroA) || Number.isNaN(verificacionNumeroB) ) {
//                 throw new TypeError("No se puede sumar");
//             }
//             console.log( verificacionNumeroA + verificacionNumeroB)
//         } catch (e){
//             if (e instanceof TypeError) {
//                 console.error("No es un numero:",e.message)
//             }
//         }
//     });
// }

// suma(operaciones)

// 3. El Sistema de "Cierre de Archivos" (Uso de finally)
// let procesarDocumento = (texto) => {
//     try {
//         console.log("Abriendo archivo....")
//         if (typeof texto == "number") {
//             throw new Error("No se pueden procesar numeros solo texto");
//         }
//         console.log(texto)
//     } catch (error) {
//         if (error instanceof Error) {
//             console.error("¡Advertencia! :", error.message)
//         }
//     } finally {
//         console.log("Cerrando archivo... Liberando memoria")
//     }
// }
// procesarDocumento(12)

//Ejercicio FINAL

// 🏦 El Sistema de Transferencias Interbancarias
// const miCuenta = { titular: "Yarlick", saldo: 1000, bloqueada: false };
// const transferencias = [{ id: 1, monto: 200 }, { id: 2, monto: 1500 }, { id: 3, monto: "50" }, { id: 4, monto: 300, fraude: false }];
// class FondosInsuficientesError extends Error {
//     constructor(message) {
//         super(message)
//     }
// }
// class CuentaBloqueadaError extends Error {
//     constructor(message) {
//         super(message)
//     }
// }
// let procesadorPagos = (transferenciasArray, cuenta) => {
//     transferenciasArray.forEach(element => {
//         try {
//             // 1. ¿Hay fraude? (Si la propiedad existe Y es verdadera)
//             if ("fraude" in element && element.fraude === true) {
//                 throw new Error("Transacción cancelada por posible Fraude");
//             }

//             // 2. ¿La cuenta está operativa? (Validación de estado)
//             if (cuenta.bloqueada) {
//                 throw new CuentaBloqueadaError("La cuenta se encuentra bloqueada");
//             }

//             // 3. ¿Tenemos dinero? (Validación de monto)
//             let montoReal = parseFloat(element.monto);
//             if (cuenta.saldo < montoReal) {
//                 throw new FondosInsuficientesError("Saldo insuficiente para esta operación");
//             }

//             // 4. SI TODO PASÓ: Ejecutamos la transacción
//             cuenta.saldo -= montoReal;
//             console.log(`✅ ID ${element.id}: Transferencia exitosa. Nuevo saldo: $${cuenta.saldo}`);

//         } catch (e) {
//             // Tus catch están perfectos, solo recuerda usar 'else if'
//             // para evitar que un error entre en dos bloques.
//             if (e instanceof CuentaBloqueadaError) {
//                 console.error("⚠️", e.message);
//             } else if (e instanceof FondosInsuficientesError) {
//                 console.error("⚠️", e.message);
//             } else {
//                 console.error("🚨 Alerta de Seguridad:", e.message);
//             }
//         } finally {
//             console.log(`Audit Log: Transacción ${element.id} procesada.`);
//         }
//     });
// }
// procesadorPagos(transferencias, miCuenta)

// Sistema de Carga de Usuarios en una Base de Datos
// let BD = {
//     usuariosRegistrados: [],
//     capacidadMaxima: 3,
//     conectar: () => {
//         console.log("📡 Conectando a DB...");
//     },
//     desconectar: () => {
//         console.log("🔌 Desconectando de DB...");
//     },
// };
// const nuevosUsuarios = [
//     { nombre: "Yael", email: "yael@test.com" },
//     { nombre: "Ana", email: "ana-sin-arroba" }, // Error de Email
//     { nombre: 12345, email: "bot@test.com" }, // Error de Tipo
//     { nombre: "Pedro", email: "pedro@test.com" },
//     { nombre: "Laura", email: "laura@test.com" }, // Excederá capacidad
// ];

// class EmailInvalidoError extends Error {
//     constructor(message) {
//         super(message);
//     }
// }

// let importador = (bddinfo, usuarioNuevos) => {
//     try {
//         bddinfo.conectar();
//         // console.log(usuarioNuevos)
//         //Recorremos los usuariosNuevos, el cual esta en un array
//         usuarioNuevos.forEach((element) => {
//             console.log(`Usuario ${element.nombre} en revision....`)
//             try {
//                 if (!(typeof element.nombre == "string")) {
//                     throw new TypeError(`Tipo de dato incorrecto para el usuario "${element.nombre}"`)
//                 }
//                 if (!(element.email.includes("@"))) {
//                     throw new EmailInvalidoError(`El correo no es valido para el usuario "${element.nombre}"`)
//                 }
//                 //Si excede la cantidad maxima, lanza error
//                 if (bddinfo.usuariosRegistrados.length >= bddinfo.capacidadMaxima) {
//                     throw new Error("Capacidad de BD agotada. No se pudo registrar a " + element.nombre)
//                 }
//                 //Si pasa las dos primeras condiciones agregamos los usuarios
//                 bddinfo.usuariosRegistrados.push(element)
//                 console.log(`✅, Usuario ${element.nombre} Registrado`)



//             } catch (e) {
//                 // Captura individual para que el bucle siga
//                 if (e instanceof TypeError) console.error("‼️ Error de Tipo:", e.message);
//                 else if (e instanceof EmailInvalidoError) console.error("⚠️ Error de Email:", e.message);
//                 else console.error("💾 Error de Sistema:", e.message);
//             }
//         });

//     } finally {
//         // 4. Se ejecuta UNA SOLA VEZ al terminar todo el forEach
//         bddinfo.desconectar();
//     }
// };
// importador(BD, nuevosUsuarios);


// 🧪 El Laboratorio Químico: "Protocolo de Seguridad"
const Laboratorio = {
    catalogoLegal: ["Oxígeno", "Nitrógeno", "Helio", "Hidrógeno"],
    limiteSeguridad: 100, // No se pueden mezclar más de 100ml en total
    mezclasExitosas: 0,
    abrirSilo: () => console.log("🏗️ Silo de sustancias abierto..."),
    cerrarSilo: () => console.log("🔒 Silo de sustancias cerrado.")
};

const recetasRecibidas = [
    { id: "R1", nombre: "Mezcla Aire", componentes: ["Oxígeno", "Nitrógeno"], cantidades: [20, 30] },
    { id: "R2", nombre: "Mezcla Volátil", componentes: ["Hidrógeno", "Plutonio"], cantidades: [10, 5] }, // Plutonio no es legal
    { id: "R3", nombre: "Mezcla Pesada", componentes: ["Oxígeno", "Helio"], cantidades: [60, 50] }, // Suma 110 (Inestable)
    { id: "R4", nombre: "Mezcla Pura", componentes: ["Helio"], cantidades: [15] }
];
class SustanciaProhibidaError extends Error {
    constructor(message) {
        super(message)
    }
}

class ReaccionInestableError extends Error {
    constructor(message) {
        super(message)
    }
}
let procesarRecetas = (datosLab, recetas) => {
    // console.log(datosLab)
    datosLab.abrirSilo()

    try{

    recetas.forEach(receta => {
        try {
            console.log(`Revisión de la receta ${receta.id}`)
            receta.componentes.forEach(sustancia => {
                if (!(datosLab.catalogoLegal.includes(sustancia))) {
                    throw new SustanciaProhibidaError("Sustancia prohibida")
                }
            })
            // Bucle para sumar las cantidades de cada receta
            let resultado = 0
            receta.cantidades.forEach(cantidad =>{
                resultado += cantidad        
            })
            //Validamos si las cantidades no superan lo establecido
            if (resultado > datosLab.limiteSeguridad) {
                throw new ReaccionInestableError(`Reacción inestable en ${receta.id}`)
            } 
            datosLab.mezclasExitosas += 1
            console.log(`Receta Exitosa ${receta.id}`)
        } catch (e) {
            if (e instanceof SustanciaProhibidaError) {
                console.error("⚠️:", e.message)
            } else if(e instanceof ReaccionInestableError){
                console.error("ADVERTENCIA:",e.message)
            }
        }
    })
    } finally {
        datosLab.cerrarSilo(); 
        console.log("Total de recetas con Mezcla Exitosa", datosLab.mezclasExitosas)
    }
    

}
procesarRecetas(Laboratorio, recetasRecibidas)