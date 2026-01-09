//VIMOS LA DIFERENCIA ENTRE EL DOM Y EL WO

// const { createElement } = require("react");

//EN LA CONSOLA EJECUTAMOS

//document
//console.dir(document)

//window

const header = document.querySelector('h1');
header.textContent = "Conceptos del curso JS Daltos"

//VARIABLES: espacio que guardamos en la memoria para usarlo despues
//Tipos de datos: string(cadena de texto), number(numero), Boolean(0 o 1 traducido en true o false).
//Casos especiales de Datos (define cuando la variable tiene un error o no esta declaradoa): Undefined, Null, Nan
//Declaracion de variables: var(tiene alcance global), let(tiene alcance solo para el bloque donde se encuentra), const(es una constante, no pueden cambiar su valor, se usa cuando sabemos que siempre se usara eso)

//Para inicializarla tenemos que darle un valor:
//varible = 1;
//Para declarar una variable es de la siguiente manera:
//let variable;
//Se puede declarar e inicializar en una misma linea
//let variable = 1;

//variable = 5; 
//alert(variable);


//promts reciben datos del usuario desde una alerta para usarlos nosotros
//let nombre = prompt('Cual es tu nombre?');

//alert(nombre)

//Operadores 
//Aritmeticos: tomam valores numericos como sun operandos y retornan un valor numerico
//let numero = 5;
//let numero2 = 5;

//resultado = numero + numero2; //suma
//numero--; //decremento
//resultado = numero / numero2; //division
//resultado = numero**numero2; //elevacion
//numero2++; //elevacion
//resultado = numero&numero2; //resto

//document.write(numero2);


//Asignación: asigna un valor de la izquierda basado en el valor de la derecha
//let numero = 5;
//numero +=5; //suma
//numero -=5; //resta
//numero *=5; //multiplicacion
//numero /=5; //division
//numero %= 5; //resto
//numero **=5; //elevado al
//document.write(numero)


//CONCATENACIÓN

//saludo = "Hola Yael";
//nombre = "Yael";
//pregunta = " ¿Como esta?";
//numero1 = 5;
//numero2 = 8;
//frase = "" + numero1 + numero2; //Forzar el string
//frase = saludo.concat(numero2); //Si o si string
//frase =  `Bienvenido ${nombre} que haras?`//uso de llaves con backtikcs


//document.write(frase);

//Uso de comillas, backtics

//nombre = "Yael Ulrick ";

//frase = "mi nombre es 'Yael'";

//document.write(frase);


//OPERADORES INTERMEDIOS

//Operadores de comparación devulven false o true
//let numero = 13;
//let numero2 = 12;
//let texto = "12";

//resultado = numero == numero2; //iguales?
//resultado = numero != numero2; //son distintos?
//resultado = numero === numero2; //son identicos extrictamente?
//resultado = texto !== numero ; //son distintos extrictamente?
//resultado = numero >= numero2 ; //es mayor o igual que?
//resultado = numero <= numero2 ; //es menor o igual que?


//document.write(resultado);


//Operadores logicos nos devuelven true o false solo acepta valores booleanos

// let num1 = 12;
// let num2 = 24;
// let num3 = 25;
// let num4 = 92;
// let num5 = 91;
// let texto = "12";
// let valor = true;
// let valor2 = true;


// resultado = valor && valor2; //AND si las  condiciones se cumplen es true
// resultado = valor || valor2; //OR si cualquiera de la 2 es true, es true
// resultado = !valor2; //NOT logico, lo contrario en booleano
// resultado = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3); //podemos convinar operaciones logicas


// document.write(resultado);



//CAMEL CASE sensible a minusculas y mayusculas
// parseInt();
// document.getElementById();


//CONDICIONALES

// let nombre = "Yael";

// if (nombre == "Yael") {
//     document.write("Tu nombre es " + nombre);
// } else if (nombre == "Ulrick") {
//     document.write("Tu nombre es " + nombre);
// } else {
//     document.write("No te conozco");
// }


// ARRAYS objetos que guardar diferentes tipos de datos

// let frutas  = ["platano", "mango", "pera", "uva"];

// document.write(frutas);
// document.write(frutas[0]);//posicion

//ARRAYS ASOCIATIVOS trabaja con el intercambio de información

// let pc  = {
//     nombre: "YaelPC",
//     procesador: "Intel Core I7",
//     ram: "16FB",
//     espacio: "1TB"
// };

// document.writeln("El procesador que necesito es: " + pc["procesador"]);

// BLUCLES E ITERACION 

// sentencia while
// let num = 0;

// while (num++ < 10) {
//     document.writeln(num);
    
    
// } 

// sentencia do while primero  ejecuta y luego pregunta bucle

// let num = 0;

// do {
//     document.writeln(num);
//     num++

// } while (num < 10)

// sentencia break

// let num = 0;

// while (num < 1000){
//     num++;
//     document.writeln(num);
//     if (num == 10) {
//         break;
//     }
// }



// sentencia for bucle determinado finito
// sentencia continue
// declaramos e iniciamos
// condicion
// iteramos, aumento o decremento

// for ( let i = 0; i <= 20; i++){
//     // if (i == 10 ) {
//     //     break; // frena aqui si cumple la condicional
//     // }
//     if (i == 10 ) {
//         continue;//salta el dato que coloquemos en la condicion
//     }
//     document.writeln(i);
// }



// sentencia for in devulve la posicion de un array

// let nombres = ["yael", "ulrick", "garay", "colin"];

// for (numero in nombres){
//     // document.writeln(numero);
//     document.writeln(nombres[numero]); //Para mostrar el contenido en lugar de la posicion
// }

// document.writeln("<br>")


// // sentencia for of devuelve el los valores de los elementos en un arrays

// for (nombre of nombres){
//     document.writeln(nombre);
// }

// sentencia label

// array1 = ["yael", "Ulrick", "roberta"];
// array2 = ["garay", "colin", array1, "josefa"];

// forNombres: //label del for
// for (let array in array2){
//     if (array == 2){
//         for (array of array1){
//             document.writeln(array);
//         break forNombres;
//         }
//     } else {
//         document.writeln(array2[array])
//     }
// }



//FUNCIONES

// function saludo(){
//     respuesta = prompt("Como estas?");
//     if (respuesta == "bien") {
//         alert("me alegro");
//     } else{
//         alert("que mal");
//     }
// }

// saludo();

// function saludar(){

//     return //Finaliza la funcion y nos devuelve un dato y el resultado 
// }

// saludar();

//PARAMETROS declaramos en la funcion y definimos al ejecutar la funcion

// function suma(num1, num2){
//     let resultado = num1 + num2;
//     document.writeln("<br>");
//     return resultado;
// }
//  let mostrar = suma(10, 10);

// document.writeln(mostrar);

//FUNCIONES FLECHA

// const saludar = (nombre)=>{
//     let frase = `Hola ${nombre}, como te va?`;
//     document.writeln(frase);
// }

// saludar("Yael");


//METODO
//FORECH

// Programación Orientada a Objetos (POO)

// class animal { //clase
//     constructor(especie, edad, color){ //constructor con sus atributos
//         this.esp = especie;
//         this.age = edad;
//         this.col = color;
//         this.descripcion = `Soy un ${this.esp}, tengo ${this.age} de edad y soy de color ${this.col}`;
//     }
//     // Metodo
//     verInformacion() {
//         document.writeln(this.descripcion);
//     }
// }

// let perro = new animal("perro" , 5 , "hueso"); //Se crea un objeto
// let gato = new animal("gato" , 2 , "negro"); //Se crea un objeto
// let dinosauro = new animal("dinosaurio" , 10000005 , "verde"); //Se crea un objeto

// dinosauro.verInformacion(); //Ejecutar mediante un metodo


// CARACTERISTICAS DE LA POO

// Abstaccion
// Modularidad
// Encapsulamiento
// Polimorfismo

// class Animal { //clase
//     constructor(especie, edad, color){ //constructor con sus atributos
//         this.esp = especie;
//         this.age = edad;
//         this.col = color;
//         this.descripcion = `Soy un ${this.esp}, tengo ${this.age} de edad y soy de color ${this.col}`;
//     }
//     // Metodo
//     verInformacion() {
//         document.writeln(this.descripcion);
//     }
// }

// // Herencia
// class Perro extends Animal{
//     constructor(especie, edad, color, raza){
//         super(especie,edad, color);
//         this.raza = null;
//     }
//     // static ladrar(){ //estatico
//     //     alert("!waf!");
//     // }
//     set setRaza(newName){ //Setter
//         this.raza = newName;
//     }

//     get getRaza (){
//         return this.raza;
//     }

// }
 
// const perro = new Perro("perro" , 5 , "hueso"); //Se crea un objeto
// // Perro.ladrar(); para estatico
// perro.setRaza = "Yael";

// document.writeln(perro.setRaza);


//METODOS DE CADENAS

// let nombres = ["yael", "ulrick", "garay", "colin"];
// let cadena2 = "";

// resultado = cadena.concat(cadena2); // junta dos o mas cadena y retorna una nueva
// resultado = cadena.startsWith(cadena2); // Si una cadena empieza con los caracteres de otra cadena, devuelve true, sino devuelve false.
// resultado = cadena.endsWith(cadena2); // Si una cadena temrmina con los caracteres de otra cadena, devuelve true, sino devuelve false.
// resultado = cadena.includes(cadena2); // SI una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuleve false
// resultado = cadena.indexOf(cadena2); // lo mismo que includes pero nos regresa la posicion que se encuentra la primer letra 
// resultado = cadena.lastIndexOf(cadena2); // lo mismo que includes pero nos regresa la posicion que se encuentra la ultima considencia letra 
// resultado = cadena.padStart(6, "b"); // rellena la caden  
// resultado = cadena.padEnd(5, "A"); // lo rellena pero desde el final
// resultado = cadena.repeat(10); // repite el numero de veces que le coloquemos
// resultado = cadena.split(","); //Divide la cadena como le pidamos y lo podemos consultar como su fuera un arrya
// resultado = cadena.substring(0,5); // Nos devuleve lo que seleccionamos, nos crea un nuevo string
// resultado = cadena.toLowerCase(); // COnvierte una cadena en minisculas
// resultado = cadena.toUpperCase(); // COnvierte una cadena en mayusculas
// resultado = cadena.toString(); // Convierte a tipo string
// resultado = cadena.trim(); // elimina los espacios
// resultado = cadena.trimEnd(); // elimina los espacios del final
// resultado = cadena.trimStart(); // elimina los espacios del principio

//METODOS DE CADENAS PARA ARRAYS transforman

// resultado = nombres.pop(); // selecciona todos los elementos hasta mostratte el ultimo
// resultado = nombres.shift(); // selecciona todos los elementos hasta mostratte el del principio
// resultado = nombres.push("Juena"); //nos devuelve la cantidad de elementos que ahora tiene el array
// let resultado = nombres.reverse(); // invierte el orden de los elementos de un array
// let resultado = nombres.unshift(1,2); // agrega elementos al principio
// let resultado = nombres.sort(); // ordena los elementos de un arreglo localmente y devuelve un arreglo ordenado de manera alfabetica
// let resultado = nombres.splice(2,1,"agregue un nuevo elemento"); // cambia el contenido de un array eliminando elementos que seleccionemos y podemos agregar

//Metodos accesores
// let resultado = nombres.join(","); // crea un nuevo array, convirtiendo en cadena de texto y utilizar el separador que se desea
// let resultado = nombres.slice(0,-1); // devolver una parte del array que seleccioneos algo similar al substrig

// Metodos de repeticion de arrays
// let resultado = nombres.filter(letras => letras.length <= 4); //filter es un bucle que recibe una funcion, igual que forech pero mas completo porque nos permite meter condicionales

// Objeto Math - Basico
// let numero = Math.sqrt(25)//Mostrar la raiz cuadrada de un numero
// let numero = Math.cbrt(27)//Mostrar la raiz cubica de un numero
// let numero = Math.max(2,7,5,6,100)//Recibe muchos numeros pero muestra el mas grande
// let numero = Math.min(2,7,5,6,100)//Recibe muchos numeros pero muestra el mas pequeño
// let numero = Math.random()// Devulve un numero aleatorio entre 0 y 1
// let numero = Math.round(numero) //Redondea el numero mas alto
// let numero = Math.floor()// Redondea un numero para abajo
// let numero = Math.fround(9.799999999999)//Redondea decimales 
// let numero = Math.trunc(8.9) // elimina los decimales  

// Propiedades de math
// let numero = Math.PI // saca pi  
// let numero = Math.SQRT1_2 // RAIZ CUADRADA DE UN MEDIO  
// let numero = Math.SQRT2 // RAIZ CUADRADA DE DOS  
// let numero = Math.E // Constante de Euler, la base de los logaritmos naturales
// let numero = Math.LN2 // Logaritmo natural de 2
// let numero = Math.LN10 // Logaritmo natural de 10
// let numero = Math.LOG2E // Logaritmo de E con base 2
// let numero = Math.LOG10E // Logaritmo de E con base 10



// document.writeln(numero);


// LA CONSOLA
// -----------------funciones de registro
// console.assert(5 > 3); //Aparece un mensaje de error en la consolo si la afirmacion es falsa
// console.clear(); // limpia la consola
// console.error("Que haces");// Muestra un mensaje de error en la consola web
// console.info("Hola muy bien tu trabajao");// emite un mensaje informativo a la consola web
// console.log();// Muestra un mensaje en la consola web (o del interprete de JS)
// console.table(["Hola",5,"pepe"]);// Esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns y nos muestra una tabla en consola
// console.warn("Hola"); // imprime un mensaje para advertirte algo
// console.dir(["Hola",5,"pepe"]);//Despliega una lista interactiva de las propiedades del objeto JS especificado

// -----------------funciones de conteo
// console.count();// Registra el número de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta.
// console.countReset();// Resetea el contador console.count();

// -----------------funciones de agrupacion
// console.group();// crea un nuevo grupo en línea en el registro de la consola
// console.groupEnd();// Remueve un grupo en linea en el resgitro de la consola
// console.groupCollapsed(); // Crea un grupo en línea pero contraido, el usuario

// -----------------funciones de temporizador

// console.time();// inicia un temporizador
// console.timeEnd();// Registra el valor actual de un temporizador
// console.timeLog()// detiene un temporizador
// console.timeStamp();
// console.log("%cHola","color:green;");//Modificar estilos del texto

//EL DOM Document Object Model

// Nodo : Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body....
// *Document: el nodo document es el nodo raiz, a partir de cual derivan el resto de nodos.
// *Element: nodos definidos por etiquetas HTML
// *Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
// *Attribute: los atributos dee las etiquetas definen nodos, (en KS no los veremos como nodos, sino como información asociada al nodo de tipo element) 
// *Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.

// Document - Metodos de Selección de elementos
// -document.getElementById() - Selecciona un elemento por ID
// -document.getElementsByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
// -document.querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.
// -document.querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

// let parrafo = document.getElementById("parrafo"); //selecciona el elemento con id
// let parrafo = document.getElementsByTagName("p"); //Selecciona una lista de elementos que indicamos 
// let parrafo = document.querySelector("#titulo"); // devuelve el elemento con su selectos si es clase o id
// let parrafo = document.querySelectorAll("#titulo"); // devuelve la lista de elemento con su selectos si es clase o id


//Metodos para definir, obtener y eliminar atributos
// -setAttribute() - Modifica el valor de un atributo
// -getAttribute() - Obtiene el valor de un atributo
// -removeAttribute() - remueve el valor de un atributo

// const rangoEtario = document.querySelector(".rangoEtario"); //Seleccionamos el id o clase
// rangoEtario.setAttribute("type","color"); //Modifica el tipo de atributo al input
// document.writeln(rangoEtario.getAttribute("type")); //Solo selecciona el tipo
// rangoEtario.removeAttribute("type"); //Elimina el tipo de atributo al input

// Atributos Globales
// -class - lista de clases de elemento separadas por espacios
// titulo.setAttribute("contenteditable","true");// -contenteditable - indica si el elemento puede ser modificable por el usuario (bool)
// titulo.setAttribute("dir","rtl");// -dir - indica la direccionalidad del texto
// titulo.setAttribute("hidden","true");// -hidden - indica si el elemento aún no es, o ya no es, relevante
// -style - contiene declaraciones de estilo css para ser aplicadas al elemento
// titulo.setAttribute("tabindex","0");// -tabindex- indica si el elemento puede obtener un focus de input
// titulo.setAttribute("title","agrego un toltop");// -title - contiene un texto con información relacionada al emenento al que pertenece


// Atributos de inputs

// document.writeln(input.className);//Muestra el nombre de la clase del elemento
// document.writeln(input.value);// Nos dice lo que esta adentro del input, su valor
// input.type = "range";// Modifica el tipo del input
// input.accept = "image/png";// Le especifica que tipo de archivo debe seleccionar, en este caso solo en input de tipo file
// atributo form en los input submit en caso de que se encuentre afuera de un formula
// input.minLength = 5; // Minimo de caracteres que debe tener el input
// input.placeholder = "Hola"; // Modifica la propiedad placeholder del input
// input.required = "required"; //si es requerido o no en el inpot 
// texto.style.color = "red"; //Modifca algo del css del atributo 

// Clases, classList y metodos de classList

// texto.classList.add("grande") //añade una clase
// texto.classList.remove("grande") //remueve una clase
// texto.classList.item(1); // para acceder a las diferenctes clases que tiene un elemento
// texto.classList.contains("grande"); // para decirnos si existe o si tiene o no una clase que nosotros le indiquemos
// texto.classList.toggle("grande"); //Esto agrega la clase si no la tiene y si ya la tiene la elemina, se puede forzar para que no la elimine con true o false
// texto.classList.replace("grande","chico"); //remplaza una clase por otra


// Obtención y modificacion de elementos en HTML

// texto.textContent//Nos devulve lo que tienen adentro la etiquete solo texto
// texto.innerText;//Devulve el texto visible de un nodo elemento
// texto.innerHTML;// devuelve el contenido html de un elemento
// texto.outerHTML;// devulve el codigo html completo del elemento

//Creacion de elementos
// const contenedor = document.querySelector(".contenedor");

// const fragmento = document.createDocumentFragment();

// for ( i= 0; i<20; i++){
//     const item = document.createElement("LI"); // Crea elementos
//     item.innerHTML = "elemento li";
//     fragmento.appendChild(item); //Agrega el contenido
// }
// contenedor.appendChild(fragmento);


// Obtencion y modificaciones de Childs
// const contenedor = document.querySelector(".contenedor");
 
// const primerHijo = contenedor.firstChild; //Seleciconar el primer hijo
// const primerHijo = contenedor.lastChild; //Seleccionar el ultimo hijo
// const primerHijo = contenedor.firstElementChild; //Seleccionar el primer hijo html
// const primerHijo = contenedor.lastElementChild; //Seleccionar el ultimo hijo html
// const primerHijo = contenedor.childNodes; //Devuelve todos los nodos hijos contando los textos
// const primerHijo = contenedor.children;//Solo devuelve las etiquetas HTML hijas

// console.log(primerHijo);

//METODOS DE CHILDS
// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P");
// parrafo.innerHTML = "Parrafo";

// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// let h2_antiguo = document.querySelector(".h2");

// // contenedor.replaceChild(h2_nuevo,h2_antiguo); //replaceChild remplaza elementos

// // contenedor.removeChild(h2_antiguo); //remueve un elemento de un contenedor un hijo

// let respuesta = contenedor.hasChildNodes(); //NOS VERIFIVA SI TEIENE HIJOS EL ELEMENTO
// if (respuesta){
//     document.writeln("el elemento tiene hijos");
// } else {
//     document.writeln("el elemento NO tiene hijos");
// }

// PROPIEDADES DE LOS PADRES
// const contenedor = document.querySelector(".div");
// let h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.parentElement); //Nos dice quien es su elemento o nodo padre

//PROPIEDADES HERMANOS
// console.log(h2_antiguo.nextSibling); //Muestra el elemento hermano
// console.log(h2_antiguo.previousSibling); //Muestra el elemento hermano
// console.log(h2_antiguo.nextElementSibling); //Muestra el elemento hermano
// console.log(h2_antiguo.previousElementSibling); //Muestra el elemento hermano

// console.log(contenedor.closest(".div")); //elemento mas cercano


// JavaScript Mid Level

// Objeto Windows
// window.open(); //Abre una nueva ventana
// window.close(); //Cierra una ventana
// window.closed();//Nos dice si se cerro la ventana con un valor booleano
// window.stop(); //detiene la carga del sitio web
// window.alert(); // alerta
// window.print(); // nos permite imprimir la pantalla
// window.prompt("dato") //pide un dato y devuelve un string
// window.confirm("Estas seguro?"); // pregunta que nos devuelve true o false dependiendo a lo que seleccione el usuairo

// alugnas propiedades y metodos
// const screen = window.screen;
// document.writeln(screen);//screen nos arroja los datos de la pantalla, su resolución

// const screenLeft = window.screenLeft;
// const screenTop = window.screenTop;

// document.writeln(`Cuantos px hay entre el borde de mi pantalla izquierdo al borde izquierdo de mi navegador: <b>${screenLeft}</b>
//                 <br> Cuantos px hay entre el borde top de mi pantalla al borde top de mi navegador: ${screenTop}`);


// const scrollY = window.scrollY;
// const scrollX = window.scrollX;
// console.log(scrollY + "  " + screenX); // nos devulve el valor numerico de cuanto se desplazo en horizontal y en vertical en px

// Location
// window.location.href // devuelve el href ( URL ) de la página actual
// window.location.hostname // devuelve el nombre de dominio del servidor web
// window.location.pathname // devuelve la ruta y el nombre del archivo de la página actual
// window.location.protocol // devulve el protocolo web utilizado (http: o https :)
// window.location.assign // carga un nuevo documento

// Capitulo 8

// Google devolepers Tools


// RECOMENDACIONES PARA PC para Programar
// pantalla 22pulgadas 1920x1080, min 16pulgadas
// Procesadores ideales: Ryzen 7 o 9 o intel 7 o 9, I5+ o Raysen 5+
// RAM: 16RAM o 32RAM

//Capitulo 9 Eventos (Cambios que ocurre en la pagina):


// USO DE addEventListener
// btn.addEventListener("click", ()=>{
//     alert("Hola pedro")
// });

// btn.addEventListener("click", saludar);

// USO DE removeEventListener
// function saludar() {
//     alert("Hola pedro");
//     btn.removeEventListener("click", saludar);
// }

// USO DE Evento con tarjet
// const btn = document.querySelector(".boton");
// btn.addEventListener("click", (e)=>{
//     console.log(e);
// });

// USO DE Flujo de evento - ORDEN QUE SE EJECUTAN LOS EVENTOS

// const btn = document.querySelector(".boton");
// const contenedor = document.querySelector(".contenedor");

// btn.addEventListener("click",(e)=>{
//     alert("Di click en el boton");
//     e.stopPropagation(); //Para la propagación no ejecuta mas lo demas elementos solo el boton o el elemento de evento
// }, true);//Para cambiar el orden se usa true en el evento que queramos que se ejecute primero


// contenedor.addEventListener("click",(e)=>{
//     alert("Di click en el contenedor");
// }); 

//EVENTOS DEL MOUSE

// const btn = document.querySelector(".boton");
// const contenedor = document.querySelector(".contenedor");

// btn.addEventListener("dblclick",(e)=>{ //Doble click
//     alert("Diste doble click");
// }); 

// contenedor.addEventListener("mouseover",(e)=>{ //Cuando el puntero se mueve sobre un elemento
//     alert("usaste mouseover");
// }); 

// contenedor.addEventListener("mouseout",()=>{ //Cuando el puntero se mueve fuera de un elemento
//     alert("usaste mouseout");
// }); 

// contenedor.addEventListener("mouseleave", (e)=>{
//     alert("usaste mouseleave"); //igual que mouseout
// });

// contenedor.addEventListener("mousedown", (e)=>{
//     alert("usaste mousedown"); //similar al click pero si soltamos el click fuera del elemento no se ejecuta
// });


// contenedor.addEventListener("mouseup", (e)=>{
//     alert("usaste mouseup"); //Si soltamos el click dentro funciona
// });

//EVENTO DE TECLADOS

// const btn = document.querySelector(".boton");
// const contenedor = document.querySelector(".contenedor");
// const input = document.querySelector(".input-prueba");

// input.addEventListener("keydown", (e) =>{
//     console.log("Una tecla fue precionada");
// });

// input.addEventListener("keypress", (e) =>{
//     console.log("Una usuario presiono una tecla");
// });

// input.addEventListener("keyup", (e) =>{
//     console.log("Una tecla fue soltada");
// });

//EVENTOS DE LA INTERFAZ 

// const img = document.querySelector(".prueba");
// const input = document.querySelector(".input-prueba");

// img.addEventListener("error", ()=>{
//     console.log("Sucedio un error"); // Es cuando sucede un error en multimedia
// });

// addEventListener("load", ()=>{ //Realiza el evento cuando termina de cargar el sitio
//     console.log("Ha cargado el sitio");
// })

// addEventListener("beforeunload",()=>{ // antes de que abandones el sitio
//     console.log("Te estas por ir al del sitio");
// })

// addEventListener("unload",()=>{ // cuando abandones el sitio
//     console.log("Te fuidte");
// })

// addEventListener("resize",()=>{ // Te avisa cuando cambias la resolución
//     console.log("Se esta actualizando la resolución");
// });

// addEventListener("scroll",()=>{ // Te avisa cuando esta scrolleando
//     console.log("Se ha scrolleado");
// });


// input.addEventListener("select", () =>{
//     console.log("Seleccionaste el texto dentro del input");
// });//ocurro despues de que el usuario selecciona algún texto de input o de textarea

//TEMPORIZADORES

// const temporizador = setTimeout(() => { //DECIRLE A UNA FUNCION en cuanto tiempo lo quiere ejecutar 
//     document.writeln("Hola");
// }, 2000);

// clearTimeout(temporizador); //Elimina la funcion de tiempo

// const intervalo = setInterval(()=>{ //ejecuta una funcion cada N segundos
//     document.writeln("Hola");
// }, 2000)


// setTimeout(()=>{ //asi detenemos un intervalo cada 2 segundos con set
//     clearInterval(intervalo); //Para el funcionamiento de setInterval
// }, 5000);

// CAPITULO 10

// CONTROL DE FLUJO y MANEJO DE ERRORES
// let expresion = "Sandia";

// switch (expresion) {
//     case "Manzana":
//         console.log("Esta es la manzana");
//         break;
//     case "Pera":
//         console.log("Esta no es la manzana");
//     default:
//         console.log("Esta fruta no la tengo en mi inventario");
//         break;
// }

// Sentencias de manejador de excepciones USAR TRY CATCH solo cuando sea muy necesario, cuando hay una probaboliidad chica de que suceda un error usarlo

// try {
//     // throw "Throw lanza un error";
//     throw {
//         error: "NombreDelError",
//         info: "Información del error"
//     }
    
    
// } catch (error) {
//     // console.log("Ha ocurrido un error") //Catch incodicional
//     if (error) {
//         // console.log("Estas en un catch condicional"); //Este es un catch condicional
//         console.log(error); 
//     }
//     console.log(error.error);
// } finally{
//     console.log("FINALLY Se muestra aun que no suceda algun error");
// }

// Capitulo 11 Cosas obsoletas

// Capitulo 12 Call back, promesas, 

// let nombre = "Yarel";

// const promesa = new Promise((resolve,reject) =>{
//     if(nombre !== "Yael") reject("Lo siento, el nombre no es Yael")
//     else resolve(nombre)
// })

// promesa.then((resultado)=>{
//     console.log(resultado);
// }).catch((e)=>{
//     console.log(e);
// });

// FUNCIONES ASINCRONAS trabajan en tiempo real
 
// const objeto = {
//     pripiedad1 : "Valor1",
//     pripiedad2 : "Valor2",
//     pripiedad3 : "Valor3"
// }


// const mostrarResultado = async ()=>{
//     resultado = await obtenerInformacion();
//     console.log(resultado);
// }

// mostrarResultado();

// const obtenerInformacion = (text) =>{
//     return new Promise((resolve,reyect)=>{
//         setTimeout(()=> {
//             resolve(text)
//         }, Math.random()*200);
//     });
// }

// const mostrarData = async ()=>{
//     data1 = obtenerInformacion("1: luis");
//     data2 = obtenerInformacion("2: raul");
//     data3 = obtenerInformacion("3: carlos");
//     console.log(data1);
//     console.log(data2);
//     console.log(data3);
// }
// mostrarData();

