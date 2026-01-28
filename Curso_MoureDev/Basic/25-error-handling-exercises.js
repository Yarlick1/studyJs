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
let inicioSesion = (usuario, pass) => {
    let bdd = {
        user: "yarlick",
        pass: "yael123",
    };

    let i = 0;
    let intentos = 10;
    while (i < intentos) {
        try {
            if (usuario === bdd.user && pass == bdd.pass) {
                console.log("Iniciaste Sesion")
                break;
            } else{
                i++
                let intentoActual = i
                throw new UsuarioPassIncorrecto(usuario, pass, `Intento ${intentoActual} de 10`);
            }
        } catch (error) {
            console.error("Datos incorrectos, Vuelve a intentar - ", error.message);
            if (i > intentos){
                console.error("Gastaste el numero de intentos disponibles")
            }
        }
    }
};

class UsuarioPassIncorrecto extends Error {
    constructor(usuario, pass, messange) {
        super(messange);
        this.usuario = usuario;
        this.pass = pass;
    }
}
inicioSesion("yarlick", "yael123");
