import Pizza from './pizza.js';

//instanciar 
let pizza1 = new Pizza("Hawaiana", ["piña", "tocino", "tomate"], 15)
let pizza2 = new Pizza("Peperoni", ["peperoni", "queso", "tomate"], 20)
let pizza3 = new Pizza("Carnes", ["peperoni", "jamon", "tomate", "tocino"], 50)

let pedido = [pizza1, pizza2, pizza3]

let revisarPedido = (pizzas) => {
    try {
        console.group("Pedidos PIZZA")
        console.info("Revisión de pedidos.....")

        let totalPremium = 0
        pizzas.forEach(pizza => {
            try {
                console.log( pizza)

                if(pizza.ingredientes.length === 0){
                    throw new Error(`Ingredientes Invalidos para la pizza: ${pizza.nombre}`)
                }

                if(pizza.precio < 0){
                    throw new Error(`La pizza ${pizza.nombre} no puede valer ${pizza.precio}`)
                }
                


                if (pizza.ingredientes.length > 3) {
                    console.info(`La Pizza ${pizza.nombre} es una Pizza Especial`)
                }
                if (pizza.precio >= 20) {
                    console.info(`${pizza.nombre} es una Pizza Premium`)
                    totalPremium += 1
                }

            } catch (e) {
                if (e instanceof Error) {
                    console.error("ERROR",e.message)
                }
            }
        })
        console.log(`Total de Pizzas Premium: ${totalPremium}`)
        console.assert(totalPremium > 0, "No valido, algo paso en el contador")
    } finally {
        console.info("Revisión finalizada")
    }
    console.groupEnd()
}

let filtrarPizzasPorIngrediente = (array, busqueda) =>{
    let filtroPizza = [];
    console.group("Filtro");
    console.info("Busqueda del ingrediente en todos los pedidos....");
    // console.log(array,busqueda)
    array.forEach(pedido =>{
        if (pedido.ingredientes.includes(busqueda)) {
            filtroPizza.push(pedido);
        } 
    });
    console.log(`Estas son los pedidos que tienen ese ingrediente `);
    return filtroPizza;
}

revisarPedido(pedido)
console.table(filtrarPizzasPorIngrediente(pedido,"tocino"))