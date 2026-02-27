// /*
// Clase 23 - Estructuras avanzadas
// Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
// */

// // 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
// console.group("Ejercicio 1.-")

// let numbers = [1, 2, 3, 4, 5, 6];
// let num = 100
// let exampleMap = numbers.map(numero => num -= numero); //vamos restando el numero total 100 - los numneros de nuestro array
// console.log(exampleMap)

// let strings = ["Yael", "Ulrick", "Ana", "Juan"]
// let exampleFilter = strings.filter(element => element.includes("a"))
// console.log(exampleFilter)

// let exampleReduce = numbers.reduce((previous, current) => previous - current, 50)
// console.log(exampleReduce)
// console.groupEnd()

// // 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
// console.group("Ejercicio 2.-")
// let arrayNum = [1, 2, 3, 4, 5, 6];

// let paresAlCubo = arrayNum.map(n => n ** 3).filter(n => n % 2 == 0);
// console.log(paresAlCubo)
// console.groupEnd()
// // 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
// console.group("Ejercicio 3.-")

// const estante = ["Don Quijote", ["El Principito", "Rayuela", ["Prueba", "Prueba", ["Prueba"]]], "Hamlet"];

// const libros = estante.flat(4);
// console.log("Uso del flat", libros)

// let word = libros.flatMap(libros => libros.split(" "))
// console.log("Uso del flatMap", word)
// console.groupEnd()
// // 4. Ordena un array de números de mayor a menor
// console.group("Ejercicio 4.-")
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let order = numbersArray.sort((a, b) => b - a);
// console.log(order)
// console.groupEnd()
// // 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
// console.group("Ejercicio 5.-")
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([2, 4, 6, 8, 10]);
// let union = new Set([...set1, ...set2]);
// console.log("Union", union)

// let interseccion = new Set([...set1].filter(numero => set2.has(numero)))
// console.log("Intersección", interseccion)

// let diferencia = new Set([...set2].filter(numero => !set1.has(numero)))
// console.log("Diferencia", diferencia)

// console.groupEnd()
// // 6. Itera los resultados del ejercicio anterior

// console.group("Ejercicio 6.-")

// union.forEach(numero => console.log("Itere el set de union", numero))
// interseccion.forEach(numero => console.log("Itere el set de interseccion", numero))
// diferencia.forEach(numero => console.log("Itere el set de diferencia", numero))

// console.groupEnd()
// // 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
// console.group("Ejercicio 7.-")
// const infoUsuarios = new Map([
//     ["nombre", "Yael"],
//     ["edad", 24],
//     ["email", "yael@gmail.com"],
// ]);

// infoUsuarios.forEach((valor, clave) => console.log(`Clave: ${clave}, Valor: ${valor}`));
// console.groupEnd()
// // 8. Dado el mapa anterior, crea un array con los nombres
// console.group("Ejercicio 8.-")

// let soloNombres = [infoUsuarios.get("nombre")];
// console.log(soloNombres)

// console.groupEnd()
// // 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
// console.group("Ejercicio 9.-")
// // console.log(infoUsuarios)


// if (infoUsuarios.get("edad") >= 18) {
//     let emailSet = new Set([infoUsuarios.get("email")]);
//     console.log(emailSet)
// } else {
//     console.log("Menor de edad")
// }

// console.groupEnd();
// // 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
// console.group("Ejercicio 10.-");

// let obj = Object.fromEntries(infoUsuarios); //tranformamos a objeto
// let mapaFinal = new Map();
// mapaFinal.set(obj.email, obj);

// console.log(mapaFinal)



// console.groupEnd();


//EJERCICIOS DE REFORZAMIENTO DEL TEMA ESTRUCTURAS AVANZADAS

// Bloque 1: Arrays Avanzados (Transformación y Búsqueda)
// 1. filter (El Colador)
// let temperaturas = [12, 25, 33, 18, 40, 15, 5];
// let temperaturasAltas = temperaturas.filter(temperatura => temperatura > 30)
// console.log(temperaturasAltas)

// 2. map (El Transformador)
// let precios = [100, 500, 1500, 2000];
// let preciosConDescuento = precios
//     .map(precio => precio * 0.9);
// console.log(preciosConDescuento);

// 3. find y findIndex (El Detective)
// let nombres = ["Yael", "Ulrick", "Ana", "Juan", "Pedro"];
// let primerNombre = nombres.find(elemento => elemento.length >= 5)
// console.log(primerNombre)
// let indice = nombres.findIndex(elemento => elemento.includes("Ana"))
// console.log(indice)
// 4. includes (El Vigilante)
// console.log(nombres.includes("Yael"))

// Bloque 2: Orden y Estructura
// 5. sort y reverse (El Organizador)
// let salvaje = ["Zebra", "Árbol", "Mono", "Gato"];
// let ordenar = salvaje.sort((a, b) => a.localeCompare(b, 'es')).reverse();
// console.log(ordenar)

// 6. flat (El Aplanador)
// let profundo = [1, [2, 3], [4, [5, 6]]];
// console.log(profundo.flat(2))

// Bloque 3: Sets y Maps (Colecciones Únicas)
// 7. Set (Eliminar Duplicados)
// let nombresRepetidos = ["Ana", "Juan", "Ana", "Yael", "Juan"];
// let set = [...new Set(nombresRepetidos)];
// console.log(set)

// 8. Map (Diccionario de Datos)
// let productos = new Map([
//     ["1", "Chetos"],
//     ["2", "Coca"],
//     ["3", "Queso"]
// ]);
// console.log(productos.get("2"))

// Bloque 4: El Peso Pesado
// 9. reduce (El Acumulador)
// let gastos = [5.50, 10.25, 3.75, 1.50];
// console.log(gastos.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0))

// EJERCICIO NIVEL INTERMEDIO
// Bloque 1: Chaining y Objetos Complejos (Arrays)
// 1. filter + map (El Reporte de Ventas)
const ventas = [
    { id: 1, total: 100, pagado: true },
    { id: 2, total: 50, pagado: false },
    { id: 3, total: 200, pagado: true }
];

let pagados = ventas.filter(venta => venta.pagado == true)
    .map(ventaPagada => ventaPagada.id)
// console.log(pagados)

// 2. reduce (El Carrito de Compras)
const carrito = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 }
];

let precioTotal = carrito.map(valor => valor.precio * 1.15).reduce((previo, actual) => previo + actual, 0);
// console.log("Precio total del carrito con Impuestos del 15%:", precioTotal)

// Bloque 2: Transformaciones Avanzadas
// 3. flatMap (Extracción de Tags)
const usuarios = [
    { nombre: "Yael", hobbies: ["programar", "leer"] },
    { nombre: "Ana", hobbies: ["cine", "deporte"] }
];

let hobbies = usuarios.flatMap(elemento => elemento.hobbies)
// console.log(hobbies)

// 4. sort (Orden Inteligente)
const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 20 },
    { nombre: "Yael", edad: 25 }
]

let ordenEdad = personas.sort((a, b) => a.edad - b.edad)
// console.log(ordenEdad)


// Bloque 3: Sets y Maps (Lógica de Conjuntos)
// 5. Set (Intersección de Invitados)
const listaA = ["Ana", "Pedro", "Juan"];
const listaB = ["Juan", "Marta", "Ana"];

//Como no son set no necesito usar Set ya que estan en un array y realizar la intersección
let setB = new Set(listaB) //transformamos la lista b en un set para poder usar la funcion has
let interseccion = new Set(listaA.filter(elemento => setB.has(elemento))); //creo un nuevo set para crear la intersección
let nombresAmbasListas = [...interseccion] //Y ahora el set lo transformamos en array

// console.log(nombresAmbasListas)

// 6. Map (Contador de Frecuencia)

const votos = ["perro", "gato", "perro", "perro", "gato"];
let mapa = new Map();


votos.forEach(voto => {
    let cuentaActual = mapa.get(voto) || 0;
    mapa.set(voto, cuentaActual + 1);
});

// console.log(mapa)

// Bloque 4: Búsqueda y Condición
// 7. find + includes (El buscador de archivos)
const archivos = ["index.html", "style.css", "script.js", "foto.png"];

let busquedaImg = archivos.find(archivo => archivo.includes(".png"))
// console.log(busquedaImg)

// 8. some y every (Validación de Datos)
const inventario = [10, 5, 0, 20, 8];

let retoA = inventario.every(n => n > 0)
let retoB = inventario.some(n => n > 15)
// console.log(retoA) //false
// console.log(retoB) //true

// Nivel Maestro: El Desafío Final (3 Ejercicios "Todo en Uno")
// 1. La Auditoría de Usuarios (Fusión total)
const registros = ["yael", "ana", "yael", "pedro", "ana", "yael"];

let creacionMapa = (ingreso) => {
    let usuarios = new Map(); //Al usar el forEch e insertarle los elementos al mapa hace que no se duplique entonces considere no usar la transformación a SET

    ingreso.forEach(ingreso => usuarios.set(ingreso.toUpperCase(), ingreso.length))

    return usuarios;
}
// console.log(creacionMapa(registros))

// 2. El Analista de Inventario (Chaining Avanzado)
const productos = [
    { nombre: "Teclado", precio: 50, stock: 10, categoria: "Tech" }, //500
    { nombre: "Libro", precio: 20, stock: 0, categoria: "Cultura" }, //No pertenece 0
    { nombre: "Mouse", precio: 30, stock: 5, categoria: "Tech" }, //150
    { nombre: "Monitor", precio: 200, stock: 3, categoria: "Tech" } // 600
];

let valorTotalTech = productos.filter(p => p.categoria === "Tech" && p.stock > 0).reduce((acc, p) => acc + (p.precio * p.stock), 0)
// console.log(`El valor total de inventario en la categoria "Tech" es: $${valorTotalTech}`);

// 3. El Super Buscador (Lógica Condicional)
const cursos = [
    { titulo: "JavaScript", etiquetas: ["js", "web", "programacion"] },
    { titulo: "Python", etiquetas: ["data", "ia", "back"] },
    { titulo: "React", etiquetas: ["js", "web", "frontend"] }
];

let buscar = (etiqueta) => {
    let filtroCurso = cursos.filter(curso => curso.etiquetas.includes(etiqueta))
    let nEtiquetas = filtroCurso.every(nCurso => nCurso.etiquetas.length > 2);

    if (nEtiquetas === true) {
        console.log(`Todos los cursos tiene mas de 2 etiquetas`)
        return { ...filtroCurso }
    } else {
        return `Puede que haya un curso con menos de 2 etiquetas`;
    }
}
// console.log(buscar("data"));

// El Procesador de Notificaciones de una App.
const eventosEnvio = [
    { id: 101, cliente: "yael", monto: 150, categoria: "comida", entregado: true },
    { id: 102, cliente: "ana", monto: 50, categoria: "farmacia", entregado: false },
    { id: 101, cliente: "yael", monto: 150, categoria: "comida", entregado: true }, // DUPLICADO
    { id: 103, cliente: "pedro", monto: 300, categoria: "comida", entregado: true },
    { id: 104, cliente: "ana", monto: 100, categoria: "comida", entregado: true },
    { id: 105, cliente: "yael", monto: 200, categoria: "comida", entregado: true }
];
const mapEliminaDuplicados = new Map();  //creamos una variable que guarde el mapa
eventosEnvio.forEach(elemento => mapEliminaDuplicados.set(elemento.id, elemento)); //iteramos cada elemento para ejecutar un set al mapa
let eventosEnvioSinDuplicados = Array.from(mapEliminaDuplicados.values()); // transformamos los objetos limpios a un array

const resumenGastos = eventosEnvioSinDuplicados
    .filter(pedido => pedido.categoria == "comida" && pedido.entregado === true)
    .reduce((mapa, pedido) => {
        const gastoActual = mapa.get(pedido.cliente) || 0;
        mapa.set(pedido.cliente, gastoActual + pedido.monto);
        return mapa;
    }, new Map());


let resumenArr = Array.from(resumenGastos.values());
// console.log(resumenArr)

let validacion = resumenArr.every(elemento => elemento > 100)
// console.log("¿Todos los clientes gastaron mas de 100? R:", validacion)

// Reto A: El "Limpiador de IDs" (Foco: Limpieza)
const ids = [10, 20, 10, 30, 40, 20, 50];

let sinDuplicadosSet = [...new Set(ids)] //el set me ayuda a no duplicar pero mantengo los datos en un array
// console.group("Reto A")
// console.log(sinDuplicadosSet)
// console.groupEnd()
// Reto B: El "Sumador por Categoría" (Foco: Acumulación)
// console.group("Reto B")

const compras = [
    { cat: "fruta", precio: 5 },
    { cat: "limpieza", precio: 10 },
    { cat: "fruta", precio: 7 }
];


let newMap = new Map(); //creo el mapa

compras.forEach(compra => newMap.set(compra.cat, (newMap.get(compra.cat) || 0) + compra.precio));

// console.log(newMap)
// console.groupEnd()

// console.group("Reto C");
// Reto C: La "Lista de Correos" (Foco: Chaining)
const gente = [
    { n: "Y", mail: "y@a.com", ok: true },
    { n: "A", mail: "a@a.com", ok: false }
];

let correo = gente.filter(persona => persona.ok === true).map(persona => persona.mail)
// console.log(correo)



// console.groupEnd()


// El Gestor de Inventario de una Tienda de Ropa.
const llegadaAlmacen = [
    { producto: "Camisa", talla: "S", unidades: 5 },
    { producto: "Pantalón", talla: "M", unidades: 10 },
    { producto: "Camisa", talla: "M", unidades: 8 },
    { producto: "Zapato", talla: "42", unidades: 3 },
    { producto: "Pantalón", talla: "L", unidades: 12 },
    { producto: "Camisa", talla: "L", unidades: 2 }
];

// console.group("Datos recibidos")
// console.log(llegadaAlmacen)
// console.groupEnd()

// console.group("Agrupar y Sumar")

let mapaSumar = new Map();
llegadaAlmacen.forEach(prenda => mapaSumar.set(prenda.producto, (mapaSumar.get(prenda.producto) || 0) + prenda.unidades));
// console.log(mapaSumar);

// console.groupEnd()

// console.group("Filtrar las mas vendidas")

let unidades = Array.from(mapaSumar)
    .filter(prenda => prenda[1] > 10)

// console.log(unidades)
// console.groupEnd()

// console.group("La Verificación Final");

let tamañoXL = llegadaAlmacen.some(producto => producto.talla.includes("XL"));
// console.log(tamañoXL)

// console.groupEnd();


// El Escenario: "Análisis de Hashtags y Engagement"
const posts = [
    { id: 1, user: "Yael", likes: 150, tags: ["js", "web"] },
    { id: 2, user: "Ana", likes: 300, tags: ["react", "web"] },
    { id: 1, user: "Yael", likes: 150, tags: ["js", "web"] }, // DUPLICADO
    { id: 3, user: "Yael", likes: 50, tags: ["js", "node"] },
    { id: 4, user: "Pedro", likes: 500, tags: ["python", "ia"] },
    { id: 5, user: "Ana", likes: 200, tags: ["react", "backend"] }
];

let mapPost = new Map();
let depuradoDatos = posts.filter(post => mapPost.set(post.id, post));

let datosDepuradosParaUsar = Array.from(mapPost.values()); //Limpiar datos Duplicados

// contador global de hashtags
let mapTags = new Map();
let nTag = datosDepuradosParaUsar.forEach(post => {
    post.tags.flatMap(tag => mapTags.set(tag, (mapTags.get(tag) || 0) + 1));
});

// console.log(mapTags);
let mapLikes = new Map();
datosDepuradosParaUsar.forEach(usuario => mapLikes.set(usuario.user, (mapLikes.get(usuario.user) || 0) + usuario.likes)); //sumo los likes que corresponden al mismo usuario

let usuarioLikes = Array.from(mapLikes);//Así solo tengo un array con los usuarios con todos sus likes sumados
let influencers = usuarioLikes.filter(usuario => usuario[1] > 200).map(usuario => usuario[0]);

// console.log("Usuarios que tiene más de 200 likes", influencers)

//verificación si alguna publicación tiene una letra a
let verificacionTags = datosDepuradosParaUsar.some(post => post.tags.includes("ia"));
// console.log(verificacionTags)


let solucion = (entrada) => {
    if (!entrada) return [];

    const resultado = [];
    let caracterActual = entrada[0];
    let conteo = 0;//1

    for (const char of entrada) {
        if (char === caracterActual) {
            conteo++
        } else {
            resultado.push([caracterActual, conteo]);

            caracterActual = char;
            conteo = 1
        }
    }

    resultado.push([caracterActual, conteo]);

    return resultado;

}

// console.log(solucion("aaaabbbcca"));

// El Escenario: "El Club de Lectura"
const biblioteca = [
    { id: 1, titulo: "JavaScript Pro", cat: "Programación", puntos: 10 },
    { id: 2, titulo: "Clean Code", cat: "Programación", puntos: 8 },
    { id: 1, titulo: "JavaScript Pro", cat: "Programación", puntos: 10 }, // REPETIDO
    { id: 3, titulo: "Hábitos Atómicos", cat: "Personal", puntos: 10 }
];

let bibliotecaLimpia = new Map();

biblioteca.forEach(libro => bibliotecaLimpia.set(libro.id, libro))

let bibliotecaL = Array.from(bibliotecaLimpia.values());

let librosProgramacion = bibliotecaL.filter(libro => libro.cat === "Programación").reduce((acumulador, libroActual) => acumulador + libroActual.puntos, 0);
console.log(librosProgramacion)