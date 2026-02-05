import ClassLibro from './libro.js'

//intanciamos
const libro1 = new ClassLibro("El Quijote", "Cervantes", 500, false)
const libro2 = new ClassLibro("Cuento Corto", "Anónimo", 20, true) // Este tiene pocas páginas
const libro3 = new ClassLibro("Cuento largo", "Anónimo", 200, false) // Este tiene pocas páginas
const libro4 = new ClassLibro("Cuento largo", "Anónimo", 200, false) // Este tiene pocas páginas
const libro5 = new ClassLibro("Cuento Corto", "Anónimo", 20, true) // Este tiene pocas páginas

const miColeccion = [libro1, libro2, libro3, libro4, libro5]

let procesarLibro = (lista) => {
    let largos = 0
    let cortos = 0
    lista.forEach(unlibro => {
        if (unlibro.paginas < 50) {
            console.warn(`"${unlibro.titulo}" es muy corto.`)
            cortos += 1
        } else {
            console.log(`✅ Procesado: ${unlibro.titulo}`);
            largos += 2
        }
        if (unlibro.leido == false) {
            console.info(`Falta por leer: ${unlibro.titulo}`)
        }
    });
    console.log(`Libros cortos ${cortos}`)
    console.log(`Libros largos ${largos}`)
    console.assert(cortos + largos === lista.length, "Algo falló en la cuenta");
}

procesarLibro(miColeccion)
