
myArray = [1, 2 , 3, 4]

let person = {
    name: "Yael",
    age: 24,
    alias: "Ulrick"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Destructuración

// Sintaxis arrays
let [myValue0, myValue1, myValue2, myValue3] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)

// Sintaxis arrays con valores predeterminados
let [myValue4, myValue5, myValue6, myValue7, myValue8 =0] = myArray
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)

//Ignorar elementos array

let [myValue9, , , myValue13] = myArray
console.log(myValue9)
console.log(myValue13)

// Sintaxis objects - en lo objetos no se asigna como tal a una variable, se coloca la clave!

let {name3, age, alias } = person
console.log(name3)
console.log(age)
console.log(alias)

// Sintaxis arrays con valores predeterminados
let {name2, age2, alias2, email = "yael"} = person
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

// Sintaxis objects con nuevos nombres de variables
let {name:name4, age : age3, alias:alias3} = person
console.log(name4)
console.log(age3)
console.log(alias3)


// para object anidados
let person3 = {
    name: "Yael",
    age: 24,
    alias: "Ulrick",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function() {
            console.log("Estoy trabajando en " + person3.job.name)
        }
    }
}

let{name: name5, job:{name:jobName}} = person3
console.log(jobName)

//Propagación (...) - Expandir elementos de un array a otro

//Sintaxis Arrays

let myArray2 = [...myArray] // Copia
console.log(myArray2)

let myArray3 = [...myArray, 5, 6] 
console.log(myArray3)

//Combinación de arrays

let myArray4 = [...myArray2,...myArray3]
console.log(myArray4)

//Sintaxis objects
let person4 = {...person} //copia

//Meter mas valores
let person5 = {...person, email: "Yael@gmail"}
console.log(person5)