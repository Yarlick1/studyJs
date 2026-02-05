export default class Libro{
    constructor(titulo, autor, paginas, leido = false){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.leido = leido;
    }
}