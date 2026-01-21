// "El Sistema de Notificaciones"
const mensajes = [{id: 1, texto: "Hola"}, {id: 2, texto: "Mundo", autor: "Admin"}, {id: 3, texto: "JS"}]
// Iteración: Recorre el array de mensajes usando un bucle for...of.
const bandejaDeEntrada = []
// console.log(mensajes)
for(elementos of mensajes){
    // Desestructuración con Valor Predeterminado: 
    // Dentro del bucle, desestructura cada objeto para obtener id, texto y autor. Si el autor no existe en el objeto, su valor predeterminado debe ser "Anónimo".
    const {id, texto, autor = "Anonimo"} = elementos
    // Procesamiento (Spread/Rest):
    let nuevoObjeto = {id, texto, autor, fecha: "2026-01-19"}
    bandejaDeEntrada.push(nuevoObjeto)

}
// Reporte Final:
let [primerMensaje, ...demasMensajes] = bandejaDeEntrada
console.log(primerMensaje)
console.log(demasMensajes)



