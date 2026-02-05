export const IVA = 0.16

export let calcularTotal = (productos)=>{
    // console.log(productos)
    
    productos.forEach(elemento =>{
        let sumaIVA = elemento.precio * IVA
        elemento.precio += sumaIVA
        console.log(elemento)
    })
   
}

export default class Carrito {
    constructor(lista=[]){
        this.lista = lista
    }
    agregar(producto){
        this.lista.push(producto)
    }
}