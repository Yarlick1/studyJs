// Excepcion

// produce una excepcion
// let myObject
// console.log(myObject.email)

// captura de errores 

// try-catch

// let myObject
// try {
//     // Codigo que intenta ejecutar
//     console.log(myObject)
//     console.log("Finaliza la ejecución sin errores")
// } catch  {
//     //  Bloque de error
//     console.log("Se ha producido un error")
// }

//Captura el error

// let myObject
// try {
//     // Codigo que intenta ejecutar
//     console.log(myObject)
//     console.log("Finaliza la ejecución sin errores")
// } catch (error)  {
//     //  Bloque de error
//     console.log("Se ha producido un error", error.message)
// }

// finally

// let myObject
// try {
//     // Codigo que intenta ejecutar
//     console.log(myObject)
//     console.log("Finaliza la ejecución sin errores")
// } catch (error)  {
//     //  Bloque de error
//     console.log("Se ha producido un error", error.message)
// } finally{
//     console.log("Este código se ejecuta siempre")
// }

// Lanzamiento de errores

// throw

// throw new Error("Se ha producido un error") 

function sumIntegers(a , b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma número enteros")
        
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se esta intentado sumar cero",a,b)
    }
    return a + b

}
try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5"," 10"))
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

// Capturando varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo: ", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error: ", error.message)
    }
}


// Crear excepciones personalizadas

class SumZeroIntegerError extends Error{
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers(){
        console.log(this.a, "+", this.b)
    }
}
try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}