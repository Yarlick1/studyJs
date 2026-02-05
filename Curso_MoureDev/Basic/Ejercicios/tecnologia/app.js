import Productos from './producto.js'

let producto1 = new Productos("MacBook", "Laptop", 3, 1200)
let producto2 = new Productos("iPhone 15", "Movil", 10, 900)
let producto3 = new Productos("Teclado", "Accesorio", 2, 50)
let producto4 = new Productos("Monitor", "Accesorio", 15, -100)

let conjuntoProductos = [producto1, producto2, producto3, producto4]

let gestionarInventario = (productos) => {
    console.group("Inventario")
    try {
        console.log("Productos:")
        console.log(productos)
        // Validación de Entrada:
        if (productos.length == 0) {
            throw new Error("No hay productos para procesar");
        }
        //grupo de inventario sumado
        console.groupCollapsed("Inventario Valor Total de cada Producto")
            // Procesamiento (Bucle):
            productos.forEach(producto => {
                if (producto.precio <= 0) {
                    throw new TypeError("El precio en invalido")
                }
                if (producto.stock < 5) {
                    console.warn(`¡STOCK CRÍTICO! Solo quedan ${producto.stock} unidades de ${producto.nombre}`)
                }
                if (producto.categoria == "Laptop") {
                    let descuento = producto.precio * 0.10
                    let totalDescuento = producto.precio - descuento
                    console.log("Descuento aplicado a Laptop", producto)
                    console.log("Quedando en un total de: $", totalDescuento)
                }
                //Valor total
                console.log(`Valor total del producto sin descuentos ${producto.nombre} `, producto.stock * producto.precio)
            });
        console.groupEnd()
    } catch (e) {
    console.groupEnd()
        if (e instanceof TypeError) {
            console.error("Tipo de Error:", e.message)
        } else {
            console.error("ERROR:", e.message)
        }
    } finally {
        console.info("Inventario actualizado correctamente")
        console.groupEnd()
    }
}

let filtroProucto = (array) => {
    console.group("Productos Filtrados")
    console.info("Productos mayores a $500:")
    let nuevoArray =[]
    array.forEach(element => {
        if (element.precio > 500) {
            //Continuar el 3. Filtro Avanzado
            nuevoArray.push(element)
        }
    });
    console.table(nuevoArray);
    console.groupEnd()
}
gestionarInventario(conjuntoProductos)
filtroProucto(conjuntoProductos)