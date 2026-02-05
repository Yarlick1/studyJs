import {sumar} from './matematicas.js'

export function sumarTodo(arr){
    let total=0
    arr.forEach(element => {
       total += element
    });
    console.log(total) 
}