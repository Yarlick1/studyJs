// 9. Exporta una función, una constante y una clase desde una carpeta
export const miNombre = "Yael"
export let miFuncion=()=>{
    console.log("Esta es una funcion de otro directorio")
}
export class Juego{
    constructor(descargas,tipo){
        this.descargas = descargas
        this.tipo = tipo
    }
}