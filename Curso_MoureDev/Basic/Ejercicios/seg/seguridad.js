const token = "12345"
export default token

export function validarToken(t){
    if (t == token) {
        console.log("Clave Correcta")
    } else{
        console.log("Clave incorrecta")
    }
}