import {IVA, calcularTotal} from './carrito.js'
import Carro from './carrito.js'



const miCarrito = new Carro();
miCarrito.agregar({
    nombre: "Laptop", precio: 1000
})
miCarrito.agregar({
    nombre: "Silla Gamer", precio: 500
})

const total = calcularTotal(miCarrito.lista)