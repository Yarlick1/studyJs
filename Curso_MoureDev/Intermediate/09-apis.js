// Apis es el conjunto de reglas que nos permiten contectarnos a otras aplicaciones. Obtener datos de diferentes servicios externos


//Manejo de APIs

// - APIs REST - (HTTP + URLs + JSON)

// Metodos HTTP - Protocolo 
// - GET = Soliciar datos. Dame los datos de una URL
// - POST = Enviar datos 
// - PUT = Envia datos para actualizar un recurso
// - DELETE = eliminar un recurs

// Códigos de respuestas HTTP:
// - 200 OK = indica éxito
// - 201 = Ha ido bien pero envia con recursos
// - 400 = Significa que hay un error por parte del cliente
// - 404 = Se solicita algo que no existe o que el servidor no sabe donde esta
// - 500 = Error Lado servidor 


// Consumir una API en JS 
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; //USO TEMPORAL ignorar temporalmente las validaciones de certificados de seguridad por NODE.JS
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        //Transforma la respuesta a JSON
        return response.json()
    })
    .then(data => {
        // Procesa los datos
        // console.log(data);
    })
    .catch(error => {
        //Captura errores
        console.log("Error", error);
    })



// Uso Async/Await

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("EEERROOOOR", error);
    }
}

// getPosts();
// Solicitud POST

async function createPost() {
    try {
        const newPost = {
            userId: 1,
            title: "Este es el título de mi post",
            body: "Este es el cuerpo de mi post"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content_Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("EEERROOOOR", error);
    }
}

// createPost();

// Manejo de errores

// fetch("https://jsonplaceholder.typicode.com/yael")
//     .then(response => {
//         //Transforma la respuesta a JSON

//         if (!response.ok) {
//             throw new Error(`Status HTTP(url): ${response.status}`)
//         }
//         return response.json()
//     })
//     .then(data => {
//         // Procesa los datos
//         // console.log(data);
//     })
//     .catch(error => {
//         //Captura errores
//         console.log("Error", error);
//     })

// Métodos HTTP adicionales

// - PATCH - Actualiza parcialmente un recurso
// - OPTIONS - Pregunta al servidor que metodos estar permitidos para un recurso

async function partialPostUpdate() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH",
            headers: {
                "Content_Type": "application/json"
            },
            body: JSON.stringify({ title: "Este es el nuevo titulo de mi post" })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("EEERROOOOR", error);
    }
}

// partialPostUpdate()

// Autenticación mediante API Key

async function getWeather(city) {
    const apikey = "4b4d78bba02bf2d2328e4bb7c1a74f55";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("EEERROOOOR", error);
    }

}

getWeather("Madrid"); // así podemos ver información del clima de estsa ciudad, mediante una funcion asincrona, CON NUESTRA API KEY, solo que sucede un error por que ocupa una suscripción


// Otros métodos de autenticación y Autorización
// - Bearer Tokens =
// - JWT  = nos permite modelar un obj mas seguro para pasarle al servidor mas datos 

// Versionado de APIs = para mantenibilidad de aplicaciones
// - https://api.example.com/v1/resources
// - https://api.example.com/v2 /resources

// Otras APIs
// https://pokeapi.co/



async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Habilidades de ${data.name}`);
        data.abilities.forEach(ability => {
            console.log(ability.ability.name);
        });
    } catch (error) {
        console.log("EEERROOOOR", error);
    }

}

getPokemon("pikachu");