// Proyecto: "La Biblioteca de Yael"

// 1. Datos iniciales (Estructuras)
// Crea un Array llamado librosNuevos que contenga: "Anatomía", "Virología", "Anatomía", "Pediatría", "Virología".
let librosNuevos = ["Anatomía", "Virología", "Anatomía", "Pediatría", "Virología"]
// Crea un Set para almacenar los títulos únicos (sin repeticiones) de esos libros.
let titulosUnicos = new Set(librosNuevos)
// Crea un Map llamado inventario donde la clave sea el nombre del libro y el valor sea la cantidad de copias disponibles (por ahora, todos empiezan con 5 copias).
// let arrayTitulos = Array.from(titulosUnicos)

let inventario = new Map([
    ])
for (resultLibros of titulosUnicos){
    inventario.set(resultLibros, 5)
}
// console.log(inventario)
// 2. Lógica de Procesamiento (Bucles y Condicionales)
// Limpieza: Pasa los libros del Array al Set para eliminar los duplicados.

// Registro: Recorre el Set y, por cada libro, agrégalo al Map inventario con un valor inicial de 5.

// Simulación de Préstamos:

// Crea un array llamado prestamos que contenga: "Anatomía", "Pediatría", "Anatomía", "Cirugía".
let prestamos = ["Anatomía", "Pediatría", "Anatomía", "Cirugía"]
// Recorre el array de prestamos con un bucle.

// Por cada libro en prestamos:

// Si el libro existe en el inventario, resta 1 a su cantidad de copias.

// Si el libro no existe en el inventario, imprime un mensaje de error: "El libro [Nombre] no forma parte de la biblioteca".

// 3. Reporte Final (Acumulación)
// Crea una variable totalLibrosEnEstante que empiece en 0.

// Recorre tu Map inventario.

// Suma todas las copias restantes de todos los libros en la variable totalLibrosEnEstante.

// Imprime el inventario final completo y el total de libros físicos que quedan en la biblioteca.