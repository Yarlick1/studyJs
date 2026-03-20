// Manejo del DOM (Document Object Model)

// - Selección de elementos 

// Métodos básicos (selector HTML)

const myElementById = document.getElementById("id");

const myElementsByClass = document.getElementsByClassName("class");

const myElementsByTags = document.getElementsByTagName("tag"); //seleccion por la etiqueta que es una colección de elementos

// Métodos mas modernos (selector CSS)

document.querySelector(".paragraph");
document.querySelectorAll(".paragraph");

// - Manipulación de elementos

const title = document.getElementById("title");
title.textContent = "Hola JavaScript";

const container = document.querySelector(".container");
container.innerHTML = "<p>Esto es un nuevo párrafo</p>";

// - Modificación de atributos

// Obtención del atributo
const link = document.querySelector("a");
const url = link.getAttribute("href")

// Establecimiento del atributo 
link.setAttribute("href", "https://example.com");

// Comprobación de atributo
const hasTarget = link.hasAttribute("target");

// Eliminación de atributos
link.removeAttribute("target");

// - Interacción con las clases css
const box = document.querySelector(".box")
box.classList.add("selected"); // añade
box.classList.remove("selected"); // elimina
box.classList.toggle("selected"); // añade si no existe, la elimina si ya existe

const button = document.querySelector("button");

button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px";

// - Creación y eliminación de elementos

// Creación

const newParagraph = document.createElement("p");
newParagraph.textContent = "Este es un nuevo parrafo creado desde JS";
newParagraph.style.padding = "8px";

container.appendChild(newParagraph); //lo añade como hijo

const itemList = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "Nuevo elemento";

// Inserción en un lugar concreto

const secondItem = itemList.children[1]; // eligimos el item concreto
itemList.insertBefore(newItem, secondItem); // insertamos el elementos antes de [tal elemento]

itemList.append(newItem); // inserta al final del listado
itemList.prepend(newItem); // inserta al principio del listado
secondItem.before(newItem); //inserta antes
secondItem.after(newItem); //inserta despues

// Eliminación moderna

newParagraph.remove();

// Eliminación tradicional
const parent = newParagraph.parentElement;
parent.removeChild(newParagraph);

// Elementos del DOM

function showMsg() {
    alert("Clic!")
}

const sendButton = document.querySelector("#send");
sendButton.addEventListener("click", showMsg)
sendButton.addEventListener("click", () => {
    alert("Clic con arrow function");
});

// Eventos comunes

document.addEventListener("DOMContentLoaded", () => { // espera a que cargue todo el DOM 
    console.log("Termino de cargar el DOM");
})


sendButton.addEventListener("mouseenter", () => { // Cuando el mouse pasa por encima
    sendButton.style.backgroundColor = "green";
});

sendButton.addEventListener("mouseleave", () => { // Cuando el mouse sale del elemento
    sendButton.style.backgroundColor = "blue";
});


const form = document.querySelector("form");
form.addEventListener("submit"), (event) => { // acción para que haga algo despues de que se da submit en un formulario
    // codigo
}
