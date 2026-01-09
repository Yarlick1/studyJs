// const { createElement } = require("react");

const titulo = document.querySelector('h1');

titulo.textContent = 'Ejercicio del Curso JS Dalto';



// EJERCICIO KOFLA

// A) 3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema:
// los precios estan al lado de cada estante con su respectivo helado.
// Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que veamos como podemos ayudarlos

// Roberto tiene $1.5 USD
// Pedro tiene $1.7 USD
// Cofla tiene $3 USD

// Los precios de helados son los siguientes:
// Helado de agua: $0.6 USD
// Helado de crema: $1 USD
// Bombon Helado de marca heladix: $1.6 USD
// Bombon Helado de marca heladovich: $1.7 USD
// Bombon Helado de helardo: $1.8 USD
// Potecito de helado con confites: $2.9 USD
// Pote de 1/4 KG -> $2.9 USD

// CREAR SOLUCIONES: 

//-Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar  
//-Si hay 2 o mas con el mismo precio, mostrar ámbos
//-Cofla quiere saber cuanto es el vuelto
// const heladoAgua = 0.6;
// const heladoCrema = 1;
// const bombonHeladoHeladix = 1.6;
// const bombonHeladoHeladovich = 1.7;
// const bombonHeladoHelardo = 1.8;
// const potecitoHeladoConfites = 2.9;
// const poteCuarto = 2.9;

// const dineroRoberto = 1.5;
// const dineroPedro = 1.7;
// const dineroCofla = 3;



// var dinero = prompt(`
//     Elige al personaje solo colando su numero:

//     1.Roberto $${dineroRoberto} USD
//     2.Pedro: $${dineroPedro} USD
//     3.Cofla: $${dineroCofla} USD


//     `);

// if (dinero == 1) {
//     let opciones = prompt(`Hola Roberto. Solo puedes comprar los siguientes helados, elige una opcion

//             -1.Helado de agua: $${heladoAgua} USD
//             -2.Helado de crema: $${heladoCrema} USD

//         `);
//         if (opciones == 1) {
//             operacion = dineroRoberto - heladoAgua;
//             alert('Gracias por tu compra roberto este es tu cambio ' + operacion);

//         } else if (opciones == 2) {
//             operacion = dineroRoberto - heladoCrema;
//             alert('Gracias por tu compra roberto este es tu cambio ' + operacion);
//         } else{
//             alert("Solo tiene que ser opcion 1 o opcion 2, vuelve a intentarlo.");
//         }
// } else if (dinero == 2) {
//     let opciones = prompt(`Hola Pedro. Solo puedes comprar los siguientes helados elige una opcion
//             -1. Helado de agua: $${heladoAgua} USD
//             -2. Helado de crema: $${heladoCrema} USD
//             -3. Bombon Helado de marca heladix: $${bombonHeladoHeladix} USD
//             -4. Bombon Helado de marca heladovich: $${bombonHeladoHeladovich} USD
//         `);
//         if (opciones == 1) {
//             operacion = dineroPedro - heladoAgua;
//             alert('Gracias por tu compra pedro este es tu cambio $' + operacion + "US");

//         } else if (opciones == 2) {
//             operacion = dineroPedro - heladoCrema;
//             alert('Gracias por tu compra pedro este es tu cambio $' + operacion + "US");
//         } else if (opciones == 3) {
//             operacion = dineroPedro - bombonHeladoHeladix;
//             alert('Gracias por tu compra pedro este es tu cambio $' + operacion + "US");

//         } else if (opciones == 4) {
//             operacion = dineroPedro - bombonHeladoHeladovich;
//             alert('Gracias por tu compra pedro este es tu cambio $' + operacion + "US");

//         } else{
//             alert("Solo tiene que ser opcion 1 o opcion 2, vuelve a intentarlo.");
//         }
// } else if (dinero == 3) {
//     let opciones = prompt(`Hola Cofla. Solo puedes comprar los siguientes helados elige una opcion

//             -Helado de agua: $${heladoAgua} USD
//             -Helado de crema: $${heladoCrema} USD
//             -Bombon Helado de marca heladix: $${bombonHeladoHeladix} USD
//             -Bombon Helado de marca heladovich: $${bombonHeladoHeladovich} USD
//             -Bombon Helado de helardo: $${bombonHeladoHelardo} USD
//             -Potecito de helado con confites: $${potecitoHeladoConfites} USD
//             -Pote de 1/4 KG: $${poteCuarto} USD

//         `);

//         if (opciones == 1) {
//             operacion = dineroCofla - heladoAgua;
//             alert('Gracias por tu compra cofla este es tu cambio $' + operacion + "US");

//         } else if (opciones == 2) {
//             operacion = dineroCofla - heladoCrema;
//             alert('Gracias por tu compra cofla este es tu cambio $' + operacion + "US");
//         } else if (opciones == 3) {
//             operacion = dineroCofla - bombonHeladoHeladix;
//             alert('Gracias por tu compra cofla este es tu cambio $' + operacion + "US");

//         } else if (opciones == 4) {
//             operacion = dineroCofla - bombonHeladoHeladovich;
//             alert('Gracias por tu compra cofla este es tu cambio $' + operacion + "US");

//         } else if (opciones == 5) {
//             operacion = dineroCofla - bombonHeladoHelardo;
//             alert('Gracias por tu compra cofla este es tu cambio $' + operacion + "US");

//         } else if (opciones == 6) {
//             operacion = dineroCofla - potecitoHeladoConfites;
//             alert('Gracias por tu compra cofla este es tu cambio $' + operacion + "US");

//         } else if (opciones == 7) {
//             operacion = dineroCofla - poteCuarto;
//             alert('Gracias por tu compra cofla este es tu cambio $' + operacion + "US");

//         } else{
//             alert("Solo puedes elegir en numero las opciones, vuelve a intentarlo.");
//         }


// }



// else {
//     alert("Lo siento no estas dentro del ejercicio")
// }


//EJERCICIO 2

//A) Un joven muy afortunado logró ganar el primer premio de la loteria... exact, estamos hablando del pobre al que cofla le
//dio una mano, este pobre decide hacer una fiesta para festejar que salio de la pobreza con este millonario compró una maquina que deja
//pasar solamente a lo mayores de edad, entre otras cosas..

//Deja pasar solo a los mayores de edad
//La primer persona que entre despues de las 2AM, no paga.

// let free = false;

// const solucion1 = (time)=>{
//     let frase = prompt("Cuantos años tienes?");
//     if (frase >= 18) {
//         if (time >=2 && time < 7 && free == false){
//             alert("Puedes pasar gratis porque eres la primera persona depsues de las 2AM");
//              free = true;
//         }else{
//             alert("Puedes pasar seran $10 USD");
//         }
//     } else{
//         alert("No eres mayor de edad no puedes entrar");
//     }
// }

// solucion1(10);
// solucion1(11);
// solucion1(2);
// solucion1(5);
// solucion1(8);

// B) Cofla vuelve de la comisaria exausto y por lo cansado que esba se fue a dormir...
// Al otro dia comienzan las clases del ciclo basico de la universidad (porque cofla quiere ser programador y se insciebio en la
// Facultad de Ingenieria para estudiar desarrollo de software)
// En su curso en total son 19 alumnos, pero surgio un problema que complico un poco a la facultad:
// Se rompio el sistema de registro de asistencia y durante los procimos 30 dias no se podrán hacer registros de datos de
// nuestro tipo, por ende las clases no podran comenzar hasta que esto este solucionado

// -Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase.
// - Pasados los 30 días mostrar la situacion final de los alumnos (Nro total de presentes y ausentes)
// -Se puede tener un maximo de 10% de ausencias por semestre, sis e tienen mas aclara que está reprobado.

// let cantidad = prompt("¿Cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
// }

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P"){
//         alumnosTotales[p][1]++;
//     }
// }

// for (i = 0; i < 30; i++){
//     for (alumno in alumnosTotales) {
//         tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     ASISTENCIAS: <b>${alumnosTotales[alumno][1]} <br>
//     AUSENTES: :<b>${30 - alumnosTotales[alumno][1]} <br>`;
//     if ( 30 - alumnosTotales[alumno][1] > 18){
//         resultado += "REPROBADO POR AUSENCIAS <br>";
//     }else {
//         resultado+= "<br><br>";
//     }
//     document.writeln(resultado);
// }


// C) Crea una calculadora

// const suma = ()=>{
// let numero1 = prompt("Primer numero");
// let numero2 = prompt("Segundo numero");
// let resultadoSuma = parseInt(numero1) + parseInt(numero2);
// document.writeln("Tu resultado es " + resultadoSuma);
// }

// const resta = () =>{
// let numero1 = prompt("Primer numero");
// let numero2 = prompt("Segundo numero");
//     let resultadoResta = parseInt(numero1) - parseInt(numero2);
//     document.writeln("Tu resultado es " + resultadoResta);
// }

// const multiplicacion = () =>{
//    let numero1 = prompt("Primer numero");
//    let numero2 = prompt("Segundo numero");
//     let resultadoMulti = parseInt(numero1) * parseInt(numero2);
//     document.writeln("Tu resultado es " + resultadoMulti);
// }

// const division = () =>{
//    let numero1 = prompt("Primer numero");
//    let numero2 = prompt("Segundo numero");
//     let resultadoDivi = parseInt(numero1) / parseInt(numero2);
//     document.writeln("Tu resultado es " + resultadoDivi);
// }

// let operacion = prompt(`Que operación deseas usar?
//     1. suma
//     2. resta
//     3. multiplicacion
//     4. division`);

// if (operacion == 1) {
//     suma();
// } else if(operacion == 2){
//     resta();
// } else if(operacion == 3){
//     multiplicacion();
// } else if(operacion == 4){
//     division();
// } else {
//     alert("debes escribir la opcion en numero");
// }


// A) Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
// De todos los modelos que hay disponibles en esa tienda, a cogla le llamaron la atención 3 telefonos especificamente,
// el antes de comprar esos celulares quiere ver las cualidades y comportamiento de cada uno para poder comprarlos, ahí
// entramos nosotros.

//-Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares.
//-Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram
//-Cada celular debe poder prender, reiniciar, apagar, tomar fotod y grabar.


// B) Implementar todas estas cualidades en los celulares de alta gama
// class celulares{
//     constructor(color, peso, rdp, rdc, ram){
//         this.color = color;
//         this.peso = peso;
//         this.resoluciondp = rdp;
//         this.resoluciondc = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }
//     presionarBotonEncendido(){
//         if(this.encendido == false){
//             alert("Celular prendido");
//             this.encendido = true;
//         }else{
//             alert("El celu ya esta encendido")
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if (this.encendido == true) {
//             alert("Reiniciando celular");
//         } else {
//             alert("Celular esta apagado")
//         }
//     }
//     tomarFoto(){
//         alert(`foto tomada en una resolucion de; ${this.resoluciondc}`);
//     }
//     grabarVideo(){
//         alert(`video tomado en una resolucion de; ${this.resoluciondc}`);
//     }
//     mostrarInfo(){
//         return `
//         Color: <b>${this.color}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         Resolución de Cámara: <b>${this.resoluciondc}</b><br>
//         Resolución de Video: <b>${this.resoluciondp}</b><br>
//         Memoria Ram: <b>${this.memoriaRam}</b><br>
//         `;
//     }
// }

// class celularAltaGama extends celulares{
//     constructor(color, peso, rdp, rdc, ram, rdce){
//         super(color, peso, rdp, rdc, ram);
//         this.resolucionDeCamaraExtra = rdce;
//     }
//     grabarVideoLento(){
//         alert("Esta Grabando en camara lenta");
//     }
//     reconocimientoFacial(){
//         alert("Se inicio el reconocimiento facial");
//     }
//     InfoAltaGama(){
//         return this.mostrarInfo() + `Resolucion de canara Extra: ${this.resolucionDeCamaraExtra}<br>`; 
//     }
// }

// // celu1 = new celulares("rojo", "150g", "5" ,"Full HD", "2GB");
// // celu2 = new celulares("negro", "110g", "4.5" ,"Full HD", "8GB");
// // celu3 = new celulares("azul", "100g", "6" ,"Full HD", "16GB");
// celu1 = new celularAltaGama("blanco", "100g", "6" ,"Full HD", "16GB", "full HD");
// celu2 = new celularAltaGama("azul", "100g", "6" ,"Full HD", "16GB", "HD");

// // celu1.presionarBotonEncendido();
// // celu1.tomarFoto();
// // celu1.grabarVideo();
// // celu1.reiniciar();
// // celu1.presionarBotonEncendido();

// document.writeln(`
//     ${celu1.InfoAltaGama()} <br>
//     ${celu2.InfoAltaGama()} <br>
//     `);


// C) Cofla y atiene su nuevo celular y ahora está mirando las aplicaciones del Play Store
// ya que quiere jugar juegos que sean muy populares, que tengan buena puntuación y que pesen poco, pero las 7 apps que llamaron su atencion son un tantno similares
// y sabe que si se descarga todas, probablemente juegue con todas, pero él se va a descargar solo 2 para tener perdidas innecesarias de tiempo jugando juegos con su celular, pero 
// el problema viene cuando no puede decidirse cual de todas estas aplicaciones es la que va a descargar

// - Crear un sistema que ayude a decidir cual app descargar
// La información de los instaladores debe contener la cantidad de descargas y la puntuación y el peso
// las apps deben poder instalar, abrir, cerrar y desintalar.

// class Apps {
//     constructor(cantDes, puntuacion, peso){
//         this.cantidadDescargas = cantDes;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.instalada = false;
//     }
//     instalar(){
//         if(this.instalada == false){
//             this.instalada = true;
//             alert("La app se instalo correctamente");
//         }
//     }
//     desintalar(){
//          if(this.instalada == true){
//             this.instalada = false;
//             alert("La app se desinstalo correctamente");
//         }
//     }
//     abrir(){
//         if(this.instalada == true){
//             alert("La app esta abierta");
//         } else {
//             alert("La aplicacion no esta instalada")
//         }
//     }
//     cerrar(){
//         alert("La app se cerro");
//     }
//     mostrarInfo(){
//         return `La aplicacion la han descargado ${this.cantidadDescargas}<br>
//         Tiene una puntuacion de: ${this.puntuacion}<br>
//         Pesa unos ${this.peso}<br>`;
//     }
// }

// const app1 = new Apps ("5000","10","5GB");
// const app2 = new Apps ("20000","10","5GB");
// const app3 = new Apps ("50","10","5GB");
// const app4 = new Apps ("200","10","5GB");
// const app5 = new Apps ("3000","10","5GB");
// const app6 = new Apps ("10000","10","5GB");
// const app7 = new Apps ("1000","10","5GB");

// document.writeln(app1.mostrarInfo() + "<br>");
// document.writeln(app2.mostrarInfo() + "<br>");
// document.writeln(app3.mostrarInfo() + "<br>");
// document.writeln(app4.mostrarInfo() + "<br>");
// document.writeln(app5.mostrarInfo() + "<br>");
// document.writeln(app6.mostrarInfo() + "<br>");
// document.writeln(app7.mostrarInfo() + "<br>");

// // app.instalar();
// // app.desintalar();
// // app.abrir();


//NUEVO EJERCICIO

//A) Cofla ya está terminando el primer semestre del primer ciclo, la tarea que le deb realizar es mucho mas avanzada
//de la que tenia antes, además de suma, resta, multiplicación y divisi+on, ahora también necesitará calcular potencias, raices cuadradas y cubicas

//-perfeccionar calculadora para poder implementar las nuevas funciones

// class calculadora {
//     constructor() {
//     }
//     suma() {
//         let numero1 = prompt("Primer numero");
//         let numero2 = prompt("Segundo numero");
//         let resultadoSuma = parseInt(numero1) + parseInt(numero2);
//         document.writeln("Tu resultado es " + resultadoSuma);
//     }

//     resta() {
//         let numero1 = prompt("Primer numero");
//         let numero2 = prompt("Segundo numero");
//         let resultadoResta = parseInt(numero1) - parseInt(numero2);
//         document.writeln("Tu resultado es " + resultadoResta);
//     }

//     multiplicacion() {
//         let numero1 = prompt("Primer numero");
//         let numero2 = prompt("Segundo numero");
//         let resultadoMulti = parseInt(numero1) * parseInt(numero2);
//         document.writeln("Tu resultado es " + resultadoMulti);
//     }

//     division() {
//         let numero1 = prompt("Primer numero");
//         let numero2 = prompt("Segundo numero");
//         let resultadoDivi = parseInt(numero1) / parseInt(numero2);
//         document.writeln("Tu resultado es " + resultadoDivi);
//     }
//     potencia() {
//         let numero1 = prompt("Numero a potenciar");
//         let numero2 = prompt("Potencia");
//         let resultadoPote = parseInt(numero1) ** parseInt(numero2);
//         document.writeln("Tu resultado es " + resultadoPote);
//     }
//     raizCuadrada() {
//         let numero1 = prompt("Raiz cuadrada de....");
//         let resultadorCua = Math.sqrt(numero1);
//         document.writeln("Tu resultado es " + resultadorCua);
//     }
//     raizCubica() {
//         let numero1 = prompt("Raiz cubica de....");
//         let resultadorCubic = Math.cbrt(numero1);
//         document.writeln("Tu resultado es " + resultadorCubic);
//     }
// }

// const cal = new calculadora();

// let operacion = prompt(`Que operación deseas usar?
//     1. suma
//     2. resta
//     3. multiplicacion
//     4. division
//     5. Potencia
//     6. Raiz Cuadrada
//     7. Raiz Cubica
//     `);

// if (operacion == 1) {
//     cal.suma();
// } else if (operacion == 2) {
//     cal.resta();
// } else if (operacion == 3) {
//     cal.multiplicacion();
// } else if (operacion == 4) {
//     cal.division();
// } else if (operacion == 5) {
//     cal.potencia();
// }else if (operacion == 6) {
//     cal.raizCuadrada();
// }else if (operacion == 7) {
//     cal.raizCubica();
// }else {
//     alert("debes escribir la opcion en numero");
// }

// B) La facultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor
// y todos loa alumnos que se anotaron en dichas clases, pero necesitamos ver esto mas ordenado

// Crear un funcion que al pasarle como parametro la materia nos devuelva: profesor asignado y el nombre de todos los alumnos
// Crear funcion que nos diga en cuantas clsas está cofla
// Nombrar las clases en las que está y los profesores de cada una

// const obtenerInformacion = (materia)=>{
//      materias = {
//         fisica : ["Profe dalto","yael", "luis", "cofla"],
//         programacion : ["Profe martin","yael", "juan", "luis"],
//         logica : ["Profe man","yael", "juan", "luis", "cofla"],
//         quimica : ["Profe sofia","yael", "juan", "luis", "cofla"]
//      };
//      if (materias[materia] != undefined) {
//         return [materias[materia],materia,materias];
//      } else {
//         return materias;
//      }
// }

// const mostrarInformacion = (materia)=>{
// let informacion = obtenerInformacion(materia);

//     if (informacion !== false) {
//         let profesor = informacion[0][0];
//         alumnos = informacion[0];
//         alumnos.shift();
//         document.writeln(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
//             Los alumnos presentes son <b style="color: blue;"> ${alumnos}</b><br><br> `);
//     }
// }

// const cantidadDeClases = (alumno) =>{
//     let informacion = obtenerInformacion();
//     let clasesPresentes = [];
//     let cantidadTotal = 0;
//     for (info in informacion){
//         if (informacion[info].includes(alumno)) {
//             cantidadTotal++;
//             clasesPresentes.push(" " + info );
//         }
//     }
//     return `<b style="color:blue;"> ${alumno}</b> está en <b>${cantidadTotal} clases</b><br>
//     Esta cursando las clases: <b>${clasesPresentes}</b> <br> <br>
//     `;
// }



// mostrarInformacion("fisica");
// mostrarInformacion("programacion");
// mostrarInformacion("logica");
// mostrarInformacion("quimica");

// document.writeln(cantidadDeClases("cofla"));

// C) Cofa ya vió las 12 materias y se decició en cual se va a inscribir así que en tres días lo har+a, el problema es que se ropió el sistema de inscripciones

// Crea una funcion para preguntarle a cofa en que materia se quiere inscribir
// Si ya hay 20 alumnos anotados en la materia negarle la inscripcion
// Si hay menos de 20 alumnos inscribir a cofla y añadirlo a la lista de alumnos

// const inscribir = () =>{
//     materias = {
//             fisica : ["dalto","yael", "luis", "raul"],
//             programacion : ["martin","yael", "juan", "luis"],
//             logica : ["man","yael", "juan", "luis", "raul"],
//             quimica : ["sofia","yael", "juan", "luis", "raul"]
//         };

//     let materiaSeleccionada = prompt("En que materia te quieres inscribir?");
//     if (materias[materiaSeleccionada] != undefined) {
//         let nAlumnos = materias[materiaSeleccionada].length;
//         if (nAlumnos >= 5){
//             document.writeln(`Ya no hay cupo para inscribirte en la materia de <b>${materiaSeleccionada} </b><br><br>
//                 ya se encuentran los siguientes estudiantes <b style="color:red"><br>${materias[materiaSeleccionada]}</b>`);

//         } else{
//             document.writeln("Te inscribiste a esta materia <br>");
//             let nuevoAlumno = materias[materiaSeleccionada].push("cofla");
//             document.writeln(`<br> Esta es la lista de alumnos <br><b style="color:green">${materias[materiaSeleccionada]}`);
//         }

//     } else {
//         alert("Esa materia no existe");
//     }
// }

// inscribir();


// NUEVO EJERCICIO

// A) Terminó el primer semestre y cofla no sabe si aprobará o no las materias, para lograrlo necesitará:
// Contar con al menos el 90% de asistencia.
// El promedio por materia debe ser de al menso 7 / 10.
// Debe tener al menos del 75% de los trabajos practicos entregados.

// -Solicitar los datos y decrle si aprueba o no.
// -Mostrar todo esto con colores representativos en colsola (Ej: no aprobar en rojo)
// -Todo esto estructurado como tabla

// let pregunta = prompt(`De tus 5 materias cual te gustaria saber si aprobaste
//     1.fisica
//     2.programacion
//     3.logica
//     4.quimica
//     5.bdd
//     `);

// const aprobo = (pregunta) => {

//     datosMaterias = {
//         fisica: [90, 8, 75, "Fisica"],
//         programacion: [100, 10, 100, "programacion"],
//         logica: [70, 5, 25, "logica"],
//         quimica: [50, 2, 20, "quimica"],
//         bdd: [85, 8, 75, "bdd"]
//     };

//     if (pregunta == 1) {

//         console.group("Calificación de Fisicia")
//         if (datosMaterias["fisica"][0] <= 89){
//             console.log(`%cTienes el ${datosMaterias["fisica"][0]}% de asistencia`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["fisica"][0]}% de asistencia`, "color:green");
//         }
//         if (datosMaterias["fisica"][1] >= 7) {
//             console.log(`%cTienes el ${datosMaterias["fisica"][1]} de promedio`, "color:green");
//         } else{
//             console.log(`%cTienes el ${datosMaterias["fisica"][1]} de promedio`, "color:red");
//         }
//         if (datosMaterias["fisica"][2] <= 74){
//             console.log(`%cTienes el ${datosMaterias["fisica"][2]}% de trabajos practicos entregados`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["fisica"][2]}% de trabajos practicos entregados`, "color:green");
//         }
//         if (datosMaterias["fisica"][0] >= 90 && datosMaterias["fisica"][1] >= 7 && datosMaterias["fisica"][2] >= 75) {
//             console.log(`%cEstas aprobado en Fisica`, "color:green;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid green;");

//         }else {
//             console.log(`%cEstas reprobado en Fisica`, "color:red;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid red;");
//         }

//     }
//     if (pregunta == 2) {

//         console.group("Calificación de programacion")
//         if (datosMaterias["programacion"][0] <= 89){
//             console.log(`%cTienes el ${datosMaterias["programacion"][0]}% de asistencia`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["programacion"][0]}% de asistencia`, "color:green");
//         }
//         if (datosMaterias["programacion"][1] >= 7) {
//             console.log(`%cTienes el ${datosMaterias["programacion"][1]} de promedio`, "color:green");
//         } else{
//             console.log(`%cTienes el ${datosMaterias["programacion"][1]} de promedio`, "color:red");
//         }
//         if (datosMaterias["programacion"][2] <= 74){
//             console.log(`%cTienes el ${datosMaterias["programacion"][2]}% de trabajos practicos entregados`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["programacion"][2]}% de trabajos practicos entregados`, "color:green");
//         }
//         if (datosMaterias["programacion"][0] >= 90 && datosMaterias["programacion"][1] >= 7 && datosMaterias["programacion"][2] >= 75) {
//             console.log(`%cEstas aprobado en programacion`, "color:green;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid green;");

//         }else {
//             console.log(`%cEstas reprobado en programacion`, "color:red;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid red;");
//         }

//     }
//     if (pregunta == 3) {

//         console.group("Calificación de logica")
//         if (datosMaterias["logica"][0] <= 89){
//             console.log(`%cTienes el ${datosMaterias["logica"][0]}% de asistencia`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["logica"][0]}% de asistencia`, "color:green");
//         }
//         if (datosMaterias["logica"][1] >= 7) {
//             console.log(`%cTienes el ${datosMaterias["logica"][1]} de promedio`, "color:green");
//         } else{
//             console.log(`%cTienes el ${datosMaterias["logica"][1]} de promedio`, "color:red");
//         }
//         if (datosMaterias["logica"][2] <= 74){
//             console.log(`%cTienes el ${datosMaterias["logica"][2]}% de trabajos practicos entregados`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["logica"][2]}% de trabajos practicos entregados`, "color:green");
//         }
//         if (datosMaterias["logica"][0] >= 90 && datosMaterias["logica"][1] >= 7 && datosMaterias["logica"][2] >= 75) {
//             console.log(`%cEstas aprobado en logica`, "color:green;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid green;");

//         }else {
//             console.log(`%cEstas reprobado en logica`, "color:red;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid red;");
//         }

//     }
//      if (pregunta == 4) {

//         console.group("Calificación de quimica")
//         if (datosMaterias["quimica"][0] <= 89){
//             console.log(`%cTienes el ${datosMaterias["quimica"][0]}% de asistencia`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["quimica"][0]}% de asistencia`, "color:green");
//         }
//         if (datosMaterias["quimica"][1] >= 7) {
//             console.log(`%cTienes el ${datosMaterias["quimica"][1]} de promedio`, "color:green");
//         } else{
//             console.log(`%cTienes el ${datosMaterias["quimica"][1]} de promedio`, "color:red");
//         }
//         if (datosMaterias["quimica"][2] <= 74){
//             console.log(`%cTienes el ${datosMaterias["quimica"][2]}% de trabajos practicos entregados`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["quimica"][2]}% de trabajos practicos entregados`, "color:green");
//         }
//         if (datosMaterias["quimica"][0] >= 90 && datosMaterias["quimica"][1] >= 7 && datosMaterias["quimica"][2] >= 75) {
//             console.log(`%cEstas aprobado en quimica`, "color:green;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid green;");

//         }else {
//             console.log(`%cEstas reprobado en quimica`, "color:red;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid red;");
//         }

//     }
//      if (pregunta == 5) {

//         console.group("Calificación de bdd")
//         if (datosMaterias["bdd"][0] <= 89){
//             console.log(`%cTienes el ${datosMaterias["bdd"][0]}% de asistencia`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["bdd"][0]}% de asistencia`, "color:green");
//         }
//         if (datosMaterias["bdd"][1] >= 7) {
//             console.log(`%cTienes el ${datosMaterias["bdd"][1]} de promedio`, "color:green");
//         } else{
//             console.log(`%cTienes el ${datosMaterias["bdd"][1]} de promedio`, "color:red");
//         }
//         if (datosMaterias["bdd"][2] <= 74){
//             console.log(`%cTienes el ${datosMaterias["bdd"][2]}% de trabajos practicos entregados`, "color:red");
//         }else{
//             console.log(`%cTienes el ${datosMaterias["bdd"][2]}% de trabajos practicos entregados`, "color:green");
//         }
//         if (datosMaterias["bdd"][0] >= 90 && datosMaterias["bdd"][1] >= 7 && datosMaterias["bdd"][2] >= 75) {
//             console.log(`%cEstas aprobado en bdd`, "color:green;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid green;");

//         }else {
//             console.log(`%cEstas reprobado en bdd`, "color:red;text-transform:uppercase; background: #ffff; padding:1em; border:2px solid red;");
//         }

//     }
// }
// if (pregunta == 1 || pregunta == 2 || pregunta == 3 || pregunta == 4 || pregunta == 5) {
//     aprobo(pregunta);
// } else {
//     console.log("%cEsa materia no la estas cursando", "color:red");
// }



// B) Cofla está sufriendo un poco... ya que, a pesar de que cree contar con el 90% de asitencias y tener un 
// promedio mayor a 7 /10, no cree entregar el 75% de trabajos practicos entregados ya que necesita dividir las tareas
//  que hará semanalmente, cofla debe, trabajar 8 horas por dia durante 2 semana entre las cuales tiene que: 24hrs estudiar
// , 24 horas hacer trabajos practivos, 56 horas de trabajar 8 horas de hacer las cosas de la casa

// - Organizar las actividades diariamente
// Utilizar la consola para organizar todo
// El tiempo por tarea no debe superar las 4 horas

// Trabajar 240 minutos
// Trabajos de la escuel 100 minutos
// Estudiar 100 min
// Trabajos del hogar 30 min
// Descanso 10 minutos

// let tp = "100 minutos hacer trabajos de la escuela";
// let estudio = "100 minutos de estudio";
// let trabajo = "240 minutos de trabajo";
// let homework = "30 minutos de cosas de la casa";
// let descanso = "10 minutos de descanso";


// console.log("TAREAS");

// for (let i = 0; i < 14; i++) {
    
//     if (i == 0) {
//         console.groupCollapsed("Semana 1");
//     }
//     console.groupCollapsed("Dia" + (i+1));
//     console.log(trabajo);
//     console.log(descanso);
//     console.log(estudio);
//     console.log(tp);
//     console.log(homework);
//     console.groupEnd();
//     if (i == 7) {
//         console.groupEnd();
//         console.groupCollapsed("Semana 2");
//     }
// }


// NUEVO EJERCICIO

// Indicarle las 20 llaves posibles con sus respectivas imagenes y cofla debe selecionar cual llave usar
// Una vez selecionada enviar los datos al servidor y que otro programador se encargue

// const contenedor = document.querySelector(".flex-container");

// function crearLlave(nombre, modelo, precio){
//     img = "<img class='llave-img' src='llave.png'>";
//     nombre = `<h2>${nombre}</h2>`;
//     modelo = `<h3>${modelo}</h3>`;
//     precio = `<p>Precio: <b>${precio}</b>`;
//     return [img,nombre,modelo,precio];
// }


// let documentFragment = document.createDocumentFragment(); 

// for (let i = 1; i <= 20; i++) {
//     let modeloRandom = Math.round(Math.random()*10000);
//     let precioRandom = Math.round(Math.random()*10+30);   
//     let llave = crearLlave(`Llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
//     let div = document.createElement("DIV");
//     div.addEventListener("click", () =>{
//         document.querySelector(".key-data").value = modeloRandom;
//     });
//     div.tabIndex = i;
//     div.classList.add(`item-${i}`, 'flex-item');
//     div.innerHTML = llave;
//     documentFragment.appendChild(div);
// }

// contenedor.appendChild(documentFragment);


// Ejercicio Cap 7

// let alto = window.screen.height;
// let ancho = window.screen.width;

// comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho}`);

// if (comprar) {
//     alert("Compra realizada exitosamente");
// } else {
//     alert("Compra cancelada");
// }

// let url = window.location.href;
// let dominio = window.location.hostname;
// let rutaPaginaActual = window.location.pathname;
// let protocolo = window.location.protocol;

// document.writeln(`Esta es tu url <b>${url}</b><br>
//                   Esta es tu dominio <b>${dominio}</b><br>
//                   Esta es tu pagina actual <b>${rutaPaginaActual}</b><br>
//                   Esta es el protocolo de esta pagina <b>${protocolo}</b><br>
//     `);

//Ejercicios CAPITULO 9

// const nombre = document.getElementById("nombre");
// const email = document.getElementById("correo");
// const materia = document.getElementById("materia");
// const btn = document.getElementById("btn-enviar");
// const resultado = document.querySelector(".resultado");


// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let error = validarCampos();
//     if (error[0]) {
//         resultado.innerHTML = error[1];
//         resultado.classList.add("red");
//         resultado.classList.remove("green");

//     } else {
//         resultado.innerHTML = "Solucitud enviada correctamente";
//         resultado.classList.add("green");
//         resultado.classList.remove("red");
//     }
// });


// const validarCampos = () =>{
//     let error = [];
//     if (nombre.value.length < 5 || nombre.value.length > 40) {
//         error[0] = true;
//         error[1] = "nombre invalido";
//         return error;
//     } else if (email.value.length < 5 ||
//                 email.value.length > 40 ||
//                 email.value.indexOf("@")  == -1 ||
//                 email.value.indexOf(".") == -1) {
//         error[0] = true;
//         error[1] = "Email invalido";
//         return error;
//     } else if (materia.value < 4 || materia.value > 40) {
//         error[0] = true;
//         error[1] = "Materia no existe";
//     }

//     error[0] = false;
//     return error;
// }





// const btn = document.querySelector(".btn-confirmar");
// const contenedor = document.querySelector(".container-grid");
// const newNombre = document.getElementById("nombres-new");
// const newCorreo = document.getElementById("correo-new");
// const newMateria = document.getElementById("materia-new");
// const newBtn = document.getElementById("envia-new");

// alumnos = [{
//     nombre: "Yael Ulrick",
//     email: "yael@gmail.com",
//     materia: "programacion"
// },
// {
//     nombre: "Luis Martinez",
//     email: "luis@gmail.com",
//     materia: "español"
// },
// {
//     nombre: "Enrique Paz",
//     email: "enri@gmail.com",
//     materia: "programacion"
// },
// {
//     nombre: "Oribe Mar",
//     email: "mar@gmail.com",
//     materia: "Química"
// }];

// // Función para generar y mostrar el código HTML de la lista de alumnos
// const actualizarContenedor = () => {
//     let htmlCode = "";
//     // Iteramos sobre el array 'alumnos' para construir la cuadrícula
//     for (const alumno of alumnos){ // Uso 'of' para iterar sobre valores, más moderno que 'in'
//         htmlCode += `
//             <div class="grid-item nombre">${alumno.nombre}</div>
//             <div class="grid-item email">${alumno.email}</div>
//             <div class="grid-item materia">${alumno.materia}</div>
//             <div class="grid-item semana">
//                 <select class="semana-elegida">
//                     <option value="Semana 1">Semana 1</option>
//                     <option value="Semana 2">Semana 2</option>
//                 </select>
//             </div>
//         `;
//     }
//     contenedor.innerHTML = htmlCode;
// }


// // 3. MANEJADOR DE EVENTO: Agregar nuevo alumno (newBtn)
// newBtn.addEventListener("click",(e)=>{
//     e.preventDefault(); // Evita el envío del formulario si está dentro de uno
    
//     // 1. Obtener los valores actuales de los inputs
//     const nuevoNombre = newNombre.value.trim();
//     const nuevoCorreo = newCorreo.value.trim();
//     const nuevaMateria = newMateria.value.trim();

//     // 2. Validación simple (Opcional, pero recomendado)
//     if (nuevoNombre === "" || nuevoCorreo === "" || nuevaMateria === "") {
//         alert("Por favor, completa todos los campos para añadir un nuevo alumno.");
//         return; // Detiene la ejecución si falta algún campo
//     }
    
//     // 3. Agregar el nuevo alumno al array 'alumnos'
//     alumnos.push({
//         nombre: nuevoNombre,
//         email: nuevoCorreo,
//         materia: nuevaMateria
//     });
    
//     // 4. Limpiar los inputs del formulario
//     newNombre.value = "";
//     newCorreo.value = "";
//     newMateria.value = "";

//     // 5. Actualizar la visualización en el contenedor
//     actualizarContenedor();
// });

// let htmlCode = "";
// for (alumno in alumnos){
//     let datos = alumnos[alumno];
//     let nombre = datos["nombre"];
//     let email = datos["email"];
//     let materia = datos["materia"];
//     htmlCode += `
//         <div class="grid-item nombre">${nombre}</div>
//         <div class="grid-item email">${email}</div>
//         <div class="grid-item materia">${materia}</div>
//         <div class="grid-item semana">
//             <select class="semana-elegida">
//                 <option value="Semana 1">Semana 1</option>
//                 <option value="Semana 2">Semana 2</option>
//             </select>
//         </div>
//     `;

// }

// contenedor.innerHTML = htmlCode;

// btn.addEventListener("click", ()=>{
//     let confirmar = confirm("Seguro de enviar?");
//     if (confirmar) {
//         document.body.removeChild(btn);
//         let elementos = document.querySelectorAll(".semana");
//         let semanasElegidas = document.querySelectorAll(".semana-elegida");
//         for(elemento in elementos){
//             semana = elementos[elemento];
//             semana.innerHTML = semanasElegidas[elemento].value;
//         }
//     }
// });

// // 5. Ejecutar al inicio para mostrar los alumnos iniciales
// actualizarContenedor();