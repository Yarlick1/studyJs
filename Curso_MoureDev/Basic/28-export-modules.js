// Exportación de modulos

//funciones

export function add(a, b) {
    return a + b
}

console.log(add(2,2))


// Propiedades

export const PI = 3.1516
export let name = "Yael"

// Clases

export class Circle {
    constructor(radio){
        this.radio = radio
    }

    area(){
        return Math.PI * Math.pow(this.radio, 2)
    }
}

// Exportación por defecto

export default function subtract(a, b){
    return a - b
}