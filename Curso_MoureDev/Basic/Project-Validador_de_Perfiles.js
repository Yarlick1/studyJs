// El Proyecto: "Validador de Perfiles"
// Debes escribir un código que reciba tres variables iniciales: nombre, edad y rol (por ejemplo: "ADMIN", "estudiante", "Invitado"). Tu programa debe realizar lo siguiente:

// Formateo de Nombre: No importa cómo se ingrese el nombre (ej: "yAEL uLRICK"), debes transformarlo para que la primera letra sea mayúscula y el resto minúscula (solo de la primera palabra para no complicarlo demasiado, o de ambas si te sientes valiente).

// Validación de Edad y Acceso:

// Si es menor de 18, el acceso es "Denegado".

// Si tiene 18 o más, debes revisar su rol:

// Si el rol es "admin" o "moderador", el acceso es "Total".

// Si el rol es cualquier otro, el acceso es "Limitado".

// Generador de Mensaje Personalizado:

// Crea una variable mensajeFinal usando Template Literals que diga: "Hola [Nombre], tu acceso es [Tipo de Acceso]. Tienes [Edad] años y te faltan [X] años para jubilarte (suponiendo que la jubilación es a los 65)."

// Condición Extra: Si la persona ya tiene 65 o más, el mensaje debe decir: "¡Ya puedes jubilarte!" en lugar de cuánto le falta.

// Uso de Switch: Usa un switch para asignar un color al perfil basado en el rol: "admin" -> rojo, "moderador" -> azul, "usuario" -> verde, cualquier otro -> gris.

// Datos de entrada (puedes cambiarlos para probar diferentes escenarios)
let nombreEntrada = "yAEL uLRICK"
let espacio = nombreEntrada.indexOf(" ") + 1
let edad = 17
let acceso = "moderador"
let rol = acceso.toLowerCase()
//Formateo de Nombre:
let firstName = nombreEntrada[0].toUpperCase() + nombreEntrada.slice(1 , espacio).toLowerCase()
let secondName = nombreEntrada[espacio].toUpperCase() + nombreEntrada.slice(espacio + 1).toLowerCase() 
let nombre = firstName + secondName
//Validación de Edad y Acceso:
if (edad < 18) {
    console.log("Acceso denegado, ya que eres menor de edad")
} else{
    switch (rol) {
        case "ADMIN":
        case "MODERADOR":
           acceso = "Total"
            break;
        default:
            acceso = "Limitado"
            break;
    }
    switch (rol) {
        case "ADMIN":
            color = "rojo"
            break;
        case "MODERADOR":
            color = "azul"
            break;
        case "USUARIO":
            color = "verde"
        default:
            color = "gris"
            break;
    }
    let jubilacion = 65 - edad 
    let colorUser = `Segun tu acceso tu color es ${color}`
    let mensajeFinal = `Hola ${nombre}, tu acceso es ${acceso}. ${colorUser}. Tienes ${edad} años y te faltan ${jubilacion} años para jubilarte` 
    console.log(mensajeFinal)
    if( edad >= 65){console.log("Ya puedes jubilarte")}
}

