/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/
document.addEventListener("DOMContentLoaded", () => {

    // 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
    // const tituloH1 = document.querySelector("#titulo");
    // tituloH1.textContent = "Nuevo titulo desde JS";
    // // 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
    // const imagen = document.querySelector("#myImage");
    // imagen.setAttribute("src", "https://dummyimage.com/1200x400/ff00ff/1e2cf5");
    // // 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
    // const box = document.querySelector("#box");
    // box.classList.add("resultado");
    // // 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
    // const parrafo = document.querySelector("#paragraph");
    // parrafo.style.color = "blue";
    // // 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
    // const btn = document.querySelector("#btn");
    // const lista = document.querySelector("#lista");
    // btn.addEventListener("click", () => {
    //     const newElement = document.createElement("li");
    //     newElement.textContent = "Nuevo elemento";
    //     lista.appendChild(newElement)
    // })
    // // 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
    // const parrafoDelete = document.querySelector("#deleteParagraph");

    // const btnDelete = document.querySelector("#btnDelete");

    // btnDelete.addEventListener("click", () => {
    //     parrafoDelete.remove();
    // })
    // // 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
    // const containet = document.querySelector("#content");
    // containet.innerHTML = "<h2> Nuevo Contenido</h2>"
    // // 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
    // const greetBtn = document.querySelector("#greetBtn");
    // greetBtn.addEventListener("click", () => {
    //     alert("¡Hola!");
    // })
    // // 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
    // const input = document.querySelector("#textInput");
    // const container = document.querySelector("#result");

    // input.addEventListener("input", () => {
    //     container.textContent = input.value
    // })

    // // 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
    // const backgroundBtn = document.querySelector("#backgroundBtn");
    // backgroundBtn.addEventListener("click", () => {
    //     document.body.style.backgroundColor = "red";
    // })


    // EJERCICOS EXTRAS

    async function getUsuarios() {
        const resultado = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!resultado.ok) {
            throw new Error("No se recibieron los datos", resultado.status);
        }
        const datos = await resultado.json();
        datos.forEach(dato => {
            console.log(dato.name)
            console.log(dato.email)
        });
    }

    const tbody = document.querySelector("#cuerpoTabla");


    getUsuarios()
});
