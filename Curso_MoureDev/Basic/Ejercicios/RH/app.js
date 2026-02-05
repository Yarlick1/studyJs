import Empleado from './empleado.js'; //esqueleto de datos
import { EmpleadoSinProyectos } from './empleado.js'; //error personalizado

let empleado1 = new Empleado("Ana", "Desarrolladora", 2500, ["Web", "App", "DB"]);
let empleado2 = new Empleado("Luis", "Diseñador", 1500, ["Logo"]);
let empleado3 = new Empleado("Yael", "Manager", 3000, []);
let empleado4 = new Empleado("Pedro", "Pasante", 500, ["Auxiliar"]);

let empleados = [empleado1, empleado2, empleado3, empleado4];

let auditoriaEmpresarial = (datosEmpleados) => {
    try {
        console.info("Inicio de la Auditoría...")

        // console.table(datosEmpleados)
        console.group("Auditoría")
        datosEmpleados.forEach(empleado => {
            try {
                console.groupCollapsed("Detalles Técnicos")
                console.info(empleado)
                // console.log(empleado.proyectos)
                if (empleado.proyectos.length == 0) {
                    throw new EmpleadoSinProyectos(`Alerta: Empleado ${empleado.nombre} sin carga de trabajo`)
                }
                if (empleado.salario < 1000) {
                    throw new TypeError(`El sueldo de ${empleado.nombre} es menor al sueldo minimo`)
                }
                console.groupEnd()

            } catch (e) {
                if (e instanceof EmpleadoSinProyectos) {
                    console.error("⚠️", e.message);
                } else if (e instanceof TypeError) {
                    console.error("‼️", e.message);
                }
                console.groupEnd()
            }
        });
        console.groupEnd()

    } finally {
        console.log("Fin de la Auditoría")
    }



}

let bonoProyecto = (empleadosBono) => {
    let empleadoLevel = []

    console.group("Empelados con bono");
    empleadosBono.forEach(empleadoBono => {
    let salarioFinal = empleadoBono.salario;
        if (empleadoBono.proyectos.length > 2) {
            let bono = empleadoBono.salario * 0.05
            salarioFinal = empleadoBono.salario + bono
            console.info(`${empleadoBono.nombre} recibe un bono de ${bono} por trabajar en mas de 2 proyectos. Quedando en un salario total de ${salarioFinal}`)
        }
        if (salarioFinal > 2000) {
           empleadoLevel.push({...empleadoBono, salario: salarioFinal})
       }
    });
    console.groupEnd();

    console.group("Filtro Elite")
    console.table(empleadoLevel)
    console.groupEnd()
}


auditoriaEmpresarial(empleados)
bonoProyecto(empleados)