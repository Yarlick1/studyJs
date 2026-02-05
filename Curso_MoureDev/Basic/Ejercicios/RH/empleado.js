export default class Empleado{
    constructor(nombre, puesto, salario, proyectos=[]){
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
        this.proyectos = proyectos;
    }
}

export class EmpleadoSinProyectos extends Error{
    constructor(message){
        super(message);
    }
}