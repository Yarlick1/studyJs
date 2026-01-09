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

