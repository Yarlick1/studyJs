/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resolve => resolve.json())
    .then(json => console.log("EJERCICIO 1:", json));
// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch("https://jsonplaceholder.typicode.com/postsfds")
    .then(resolve => {
        if (!resolve.ok) {
            throw new Error(`Hay un error ${resolve.status} (EJERCICIO 2)`)
        }
        return resolve.json();
    })
    .then(json => console.log(json));
// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getJSON() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await respuesta.json();
    console.log("EJERCICIO 3:", data)
}

getJSON()
// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
async function usoPost() {
    try {
        const nuevaPubli = {
            title: "Nuevo titulo",
            body: "Nuevo cuerpo"
        }
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevaPubli)
        });

        if (!respuesta.ok) {
            throw new Error(`Error de tipo ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        console.log("Ejercicio 4:", datos);

    } catch (error) {
        console.error("Error", error.message);
    }

}
usoPost();
// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function actualizarRecurso() {

    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
        });

        if (!respuesta.ok) {
            throw new Error("Error", respuesta.status);
        }
        const datos = await respuesta.json();
        console.log("Ejercicio 5", datos);
    } catch (e) {
        console.log("Ejercicio 5", e.message);
    }

}

actualizarRecurso();
// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function peticionPatch() {
    try {
        const resultado = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: "Modificamos este titulo",
            })
        })

        if (!resultado.ok) {
            throw new Error("Existe algun error");
        }

        const datos = await resultado.json();

        console.log("Ejercicio 6", datos);
    } catch (error) {
        console.error("Error Ejercicio 6:", error.message);
    }
}

peticionPatch();
// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
async function deleteRegistro() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }

        });

        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}`);
        }
        const data = await respuesta.json();

        console.log("Ejercicio 7:", data);
    } catch (error) {
        console.error("Error Ejercicio 7", error.message);
    }
}

deleteRegistro();
// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
//No puedo hacer una solicitud a OpenweatherMap ya que me pide una suscripción de pago para realizar consultas, en su caso usare NewsAPI
async function getNewsAPI() {
    const apikey = "0f86ef15d52649cfb8c6625265058853";
    const url = `https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=${apikey}`;

    try {
        const respuestaAPI = await fetch(url);

        if (!respuestaAPI.ok) {
            throw new Error(`${respuestaAPI.status} Ejercicio 8`);
        }
        const datos = await respuestaAPI.json();

        console.log("Ejercicio 8", datos);
    } catch (error) {
        console.error("Error", error.message);
    }
}

getNewsAPI();

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
// No puedo usar la PokéAPI porque mi red bloquea ese sitio pero en su remplazo usare DummyJSON 
// Obtén los datos de un producto específico (ID: 1), extrae su categoría y, finalmente, realiza una petición para obtener todos los productos que pertenecen a esa misma categoría para mostrar sugerencias al usuario
async function productoGet() {
    try {
        const response = await fetch('https://dummyjson.com/products/1');
        if (!response.ok) {
            throw new Error("Tipo de error", response.status);
        }
        const datos = await response.json();
        let category = datos.category;

        const respuestaFiltro = await fetch(`https://dummyjson.com/products/category/${category}`);
        if (!respuestaFiltro.ok) {
            throw new Error("Tipo de error en el filtro", response.status);
        }
        const filtro = await respuestaFiltro.json();
        console.log("Ejercicio 9", filtro.products);

    } catch (error) {
        console.log("error", error.message);
    }
}

productoGet()
// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
// Hice Enpoint en Thunder Client aqui en  VSCode, y tambien probe un poco ApiDog solo que esa es un poco más compleja ya que tiene muchas mas herramientas que en un futuro me gustaria usar
