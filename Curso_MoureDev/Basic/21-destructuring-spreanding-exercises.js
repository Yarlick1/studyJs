// /*
// Clase 36 - Ejercicios: Desestructuración y propagación
// Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
// */

// // 1. Usa desestructuración para extraer los dos primeros elementos de un array 
// let array = ["Yael" , "Ulrick", "Garay", "Colin"]
// let [elemento1, elemento2, ,] = array
// console.log(`Elemento 1: ${elemento1}. Elemento 2: ${elemento2}`)

// // 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
// let array2 = [1, 2, 3]
// let [element1, element2, element3, element4 = "Nuevo elemento"] = array2
// console.log(element1)
// console.log(element2)
// console.log(element3)
// console.log(element4)
// // 3. Usa desestructuración para extraer dos propiedades de un objeto
// let object ={
//     name: "Yael Ulrick",
//     last: "Garay Colin",
//     age: 25,
//     job: {
//         place: "Toluca",
//         institution: "INEGI"
//     }
// }
// let {name, last} = object
// console.log(name)
// console.log(last)
// // 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
// //    a nuevas variables con nombres diferentes
// let {name: nombres, last: apellidos} = object
// console.log(nombres)
// console.log(apellidos)
// // 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
// let {job:{place: propiedad1}, job:{ institution: propiedad2}} = object
// console.log(propiedad1)
// console.log(propiedad2)
// // 6. Usa propagación para combinar dos arrays en uno nuevo
// let sprending = [...array,...array2]
// console.log(sprending)
// // 7. Usa propagación para crear una copia de un array
// let copyArray = [...array]
// console.log(copyArray)
// // 8. Usa propagación para combinar dos objetos en uno nuevo
// let object1 = {
//     brand: "HP",
//     processor: "Intel i7"
// }
// let object2 = {
//     brand2: "Lenovo",
//     processor2: "Ryzen 7"
// }
// let combineObjects = {...object1, ...object2}
// console.log(combineObjects)
// // 9. Usa propagación para crear una copia de un objeto
// let copyObject = {...object1}
// console.log(copyObject)
// // 10. Combina desestructuración y propagación
// let array3 = ["Prueba", "Esto", "es un array"]
// let [elementos1, , ,elementoPropagacion = [...array]] = array3
// console.log(elementos1)
// console.log(elementoPropagacion)

// //Opcion2 
// let telefono = {
//     pantalla: "5 pulgadas",
//     entrada: "C",
//     bateria: "40000 mAh",
//     almacenamiento: {
//         fotos: 2,
//         documentos: 5
//     }
// }
// let {pantalla : pantallaTelefono, almacenamiento:{fotos: storagePhotos}, ...losDemas} = telefono

// console.log(pantallaTelefono)
// console.log(storagePhotos)
// console.log(losDemas) // los que faltan la combianción de una destructuración con propagacion en un objeto

// EJERCICIOS EXTRAS
// 1. El Intercambio Fugaz: Tienes dos variables: let a = "Fuego" y let b = "Agua". Usa desestructuración de arrays para intercambiar sus valores en una sola línea de código, de modo que a valga "Agua" y b valga "Fuego".
// let a = "Fuego";
// let b = "Agua";
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// 2. La Mezcla Prohibida:
// let userBase = {
//     id: 1,
//     name: "Yael"
// }
// let userDetails = {
//     job: "Devoloper",
//     city: "Toluca"
// }
// let fullProfile = {...userBase , ...userDetails, status: "Active"}
// console.log(fullProfile)
// 3. El Selector de Invitados: Tienes
// let invitados = ["Ana", "Juan", "Pedro", "Luis", "Maria", "Lucía"]

// let [anfitrion, coAnfitrion, ...listaGeneral] = invitados
// console.log(listaGeneral)

// 4. Desestructuración en Funciones:
// let coche = {
//      marca: "Tesla", 
//      modelo: "Model 3", 
//      anio: 2023 
// }
// let mostrarCoche = ({marca:nombreMarca, modelo:nombreModelo, anio:fechaSalida}) =>{
//     return `Coche: ${nombreMarca} ${nombreModelo} (${fechaSalida})`
// }
// console.log(mostrarCoche(coche))

// 5. El Rescate del Objeto Anidado:
// const escuela = {
//     nombre: "Tech Academy",
//     direccion: 
//     { 
//         calle: "Av. Siempre Viva",
//         numero: 742 
//     },
//     cursos: ["JS", "Python", "React"]
// };
// let {direccion:{calle:street}, cursos:[,segundoCurso,]} = escuela
// console.log(street)
// console.log(segundoCurso)

// Ejercicios MAX

// 1. El Consultor de API (Desestructuración Profunda)
// const apiResponse = {
//     status: 200,
//     data: {
//         id: "USR-789",
//         info: {
//             personal: {
//                 firstName: "Yael",
//                 lastName: "Garay"
//             },
//             tags: ["Developer", "Student", "Tech-Enthusiast"]
//         }
//     }
// };
// Reto A
// let {data:{info:{personal:{firstName: nombre,lastName: apellido}}}} = apiResponse
// console.log(nombre)
// console.log(apellido)
// // Reto B
// let {data:{info:{tags:[, , pasion]}}} = apiResponse
// console.log(pasion)

// 2. El Filtro de Propiedades (Spread + Rest)
// const productoPrivado = {
//     sku: "LAP-5521",
//     nombre: "Laptop Pro 16",
//     precioVenta: 1500,
//     costoFabrica: 800,
//     impuestos: 150,
//     proveedorId: "PROV-99"
// };
// let {costoFabrica, proveedorId, ...todoLoDemas} = productoPrivado
// let productoPublico = {...todoLoDemas, disponible:true}
// console.log( productoPublico)

// 3. La Función "Configuradora" (Parámetros Inteligentes)
// let crearBanner = ({titulo, color = "Negro", duracion= 3000}) => {
//     return `Banner: ${titulo} en color ${color} por ${duracion}ms`
// }
// console.log(crearBanner({titulo: "Oferta de Lunes"}))

// EJERCICIOS MAX MAX
// 1. El Fusionador de Configuraciones (Dominando el Spread)
// const configBase = {
//     volumen: 80,
//     dificultad: "Normal",
//     graficos: "Medios"
// };

// const configUsuario = {
//     volumen: 100,
//     dificultad: "Experto"
// };
// // Reto: Crea un objeto llamado configFinal. Debe contener todas las propiedades de configBase, pero las que existan en configUsuario deben sobrescribir a las de la base.
// let configFinal ={...configBase, ...configUsuario}
// console.log(configFinal)

// 2. La Super-Calculadora (Valores Predeterminados en Funciones)
// let resultado
// let operacion = ({a =0, b=0, tipo="Suma"}) =>{
//     if (tipo == "Suma") {
//         resultado= a+b
//     }else if(tipo == "multiplicacion"){
//         resultado=a*b
//     }
//     return resultado
// }
// console.log(operacion({}))

// 3. El Reconstructor de Datos (Rest + Spread Combinado)
// const tareaAntigua = {
//     id: 101,
//     titulo: "Aprender JS",
//     completada: false,
//     puntos: 10,
//     prioridad: "Alta"
// };
// // Paso A
// let {puntos, prioridad, ...resto} = tareaAntigua
// let informacionEsencial = resto
// // Paso B:
// let tareaModerna = {...informacionEsencial, completada: true, ultimaActualizacion: "19-01-2026"}
// console.log(informacionEsencial)

// EJERCICIOS EXTRAS MAX
// 1. El Sistema de Inventario (Spread + Lógica)
// const inventario = [
//     { id: 1, nombre: "Mouse", stock: 10 },
//     { id: 2, nombre: "Teclado", stock: 5 }
// ];  

// const nuevaActualizacion = { id: 2, stock: 15 };
// let [element1, element2] = inventario
// const producto2Actualizado = {...element2, stock: nuevaActualizacion.stock}
// let inventarioActualizado = [element1, producto2Actualizado]
// console.log(inventarioActualizado)

// 2. Desestructuración de Retorno de Función
// let obtenerEstado = () =>{
//     return ["Activo", () => {console.log("Cambiando estado...")}]
// }
// let [valor, ejecutar] = obtenerEstado()
// ejecutar()

// 3. El Objeto "Transformer" (Rest Profundo)
// const registro = {
//     matricula: "A-55",
//     datos: {
//         nombre: "Yael",
//         notas: [8, 9, 10],
//         extra: "Dato innecesario"
//     },
//     colegio: "High School"
// };
// let {datos:{nombre,notas:mejorNota}, ...resto} = registro
// console.log(mejorNota[0])
// const metadatos = {...resto}
// console.log(metadatos)