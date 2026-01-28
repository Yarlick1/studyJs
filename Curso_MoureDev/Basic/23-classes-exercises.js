// /*
// Clase 39 - Ejercicios: Clases
// Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
// */

// // 1. Crea una clase que reciba dos propiedades
// class Coche {
//     constructor(modelo = "Genérico", anio = 2024, precio = 0){
//         this.modelo = modelo
//         this.anio = anio
//         this.precio = precio
//     }
//     // 2. Añade un método a la clase que utilice las propiedades
//     venta(){
//         console.log(`Esta en venta en: $${this.precio} MX`)
//     }
//     // 4. Añade un método estático a la primera clase
//     static kilometraje(a){
//         console.log(`El Kilometraje de este coche es de ${a}`)
//     }
// }
// // let newCoche = new Coche("Honda",2016,80000)

// // 3. Muestra los valores de las propiedades e invoca a la función
// // console.log(newCoche.modelo)
// // console.log(newCoche.anio)
// // console.log(newCoche.precio)
// // newCoche.venta()

// // 5. Haz uso del método estático
// // Coche.kilometraje(0)

// // 6. Crea una clase que haga uso de herencia
// // 10. Sobrescribe un método de una clase que utilice herencia 
// class March extends Coche {
//     constructor(modelo, anio, precio, color){
//         super(modelo, anio, precio); // Enviamos los datos al padre
//         this.color = color; // Propiedad nueva de esta subclase
//     }
//     // SOBRESCRITURA (Ejercicio 10)
//     venta() {
//         console.log(`¡Oferta especial! Este March ${this.color} cuesta solo $${this.precio}`);
//     }
// }
// let march = new March("March lite",2015,150000,"Rojo")
// // march.venta()

// // 7. Crea una clase que haga uso de getters y setters
// // 8. Modifica la clase con getters y setters para que use propiedades privadas
// class PersonGetSet {
//     #dinero
//     constructor(nombre, edad, sexo, dinero){
//         this.nombre = nombre
//         this.edad = edad
//         this.sexo = sexo
//         this.#dinero = dinero
//     }
//     get consultaDinero(){
//         return this.#dinero
//     }
//     set depositoDinero(ingreso){
//         if (ingreso > 0) {
//             this.#dinero += ingreso
//         } else{
//             console.log("Monto no valido")
//         }
//     }
// }
// let persona1 = new PersonGetSet("Yael", 24, "H", 2000)

// // 9. Utiliza los get y set y muestra sus valores
// // console.log(persona1.consultaDinero)
// persona1.depositoDinero = 100
// console.log(persona1.consultaDinero)

// class Moto extends Coche{
//     constructor(modelo, anio, precio, color){
//         super(modelo, anio, precio); // Enviamos los datos al padre
//         this.color = color
//     }
//     venta(){
//         console.log(`¡Esta moto está en oferta! cuesta solo $${this.precio}`);
//     }
// }

// let moto = new Moto("Italika", 2020, 15000, "Verde")
// moto.venta()


// // 1. El Sistema Bancario (Getters, Setters y Validación)
// class CuentaBancaria {
//     #saldo
//     constructor(saldo=0){
//         this.#saldo= saldo
//     }
//     get verSaldo(){
//         return `Tu saldo actual es de $${this.#saldo}`
//     }
//     set ingresaDinero(monto){
//         if (monto > 0) {
//             this.#saldo += monto
//         } else {
//             console.error("Monto no valido")
//         }
//     }
//     retirar(cantidad){
//         if (cantidad > this.#saldo) {
//             console.log("Fondos insuficientes")
//         }else{
//             this.#saldo -= cantidad
//         }
//     }
// }
// let query = new CuentaBancaria(2000)
// // console.log(query.verSaldo)
// // query.ingresaDinero = 100
// // console.log(query.verSaldo)
// // query.retirar(3000)
// // console.log(query.verSaldo)

// // 2. El Zoológico (Herencia y super)
// class Animal {
//     constructor(nombre, edad){
//         this.nombre = nombre 
//         this.edad = edad
//     }
//     hacerSonido(){
//         console.log("El animal hace un sonido")

//     }
// }
// class Perro extends Animal{
//     constructor(nombre, edad, raza){
//         super(nombre,edad)
//         this.raza = raza
//     }
//     hacerSonido(){
//         console.log(`¡Guau! Mi raza es ${this.raza}`)
//     }
// }
// class Gato extends Animal{
//     constructor(nombre, edad, color){
//         super(nombre,edad)
//         this.color = color
//     }
//     hacerSonido(){
//         console.log("¡Miau!")
//     }
// }
// // let miAnimal = new Animal("Lia",5)
// // miAnimal.hacerSonido()
// // let miPerro = new Perro("Lia",5,"Mestiza")  
// // miPerro.hacerSonido()
// // let miGato = new Gato("Lia",5, "rojo")
// // miGato.hacerSonido()

// // 3. La Tienda de Electrónica (Métodos Estáticos y Lógica)
// class Producto {
//     constructor(nombre, precio){
//         this.nombre = nombre
//         this.precio = precio
//     }
//     static compararPrecio(prod1, prod2){
//         if (prod1.precio > prod2.precio) {
//             return `El producto ${prod1.nombre} es más caro que ${prod2.nombre}`
//         } else{
//             return `El producto ${prod2.nombre} es más caro que ${prod1.nombre}`
//         }
//     }
// }
// let laptop = new Producto("Laptop", 1500)
// let celular = new Producto("Celular", 800)
// console.log(Producto.compararPrecio(laptop,celular))

// EJERCICIO FINAL
// Sistema de Estudiantes
// class Usuario {
//     constructor({nombre, email, rol="Estudiante"}){
//         this.nombre = nombre
//         this.email = email
//         this.rol = rol
//     }
//     presentarse(){
//         return `${this.nombre} - ${this.rol} - Email:${this.email}`
//     }

// }
// class Estudiante extends Usuario{
//     constructor({ notas = [], ...datosRestantes}){
//         super(datosRestantes)
//         this.notas = notas
//     }

//     get promedio(){
//         let suma = 0
//         this.notas.forEach(numeros => {
//             suma += numeros    
//         });
//         let resultado = suma / this.notas.length
//         return resultado
//     }
//      presentarse(){
//         // Usamos super.presentarse() para no repetir código del padre
//         return `${super.presentarse()} - Promedio: ${this.promedio}`;
//     }

// }
// const datosAlumno = {
//     nombre: "Yael",
//     email: "yael@dev.com",
//     notas: [10, 9, 8],
//     ciudad: "Toluca", // Dato extra
//     intereses: ["JS", "React"] // Dato extra
// };
// let prueba = new Estudiante(datosAlumno)
// console.log(prueba.presentarse())

//Practica para recordar
// class Videojuego{
//     constructor({titulo, precio, consola="PC"}){
//         this.titulo = titulo
//         this.precio = precio
//         this.consola = consola
//     }
//     aplicarDescuento(porcentaje){
//         let descuento = this.precio * porcentaje / 100
//         let resultado = this.precio - descuento
//         return resultado
//     }
// }

// class JuegoDigital extends Videojuego{
//     constructor({codigoDescarga, ...elementosAnteriores}){
//         super(elementosAnteriores)
//         this.codigoDescarga = codigoDescarga
        
//     }
//     aplicarDescuento(porcentaje){
//         return `${super.aplicarDescuento(porcentaje)}. Descuento digital aplicado al código: ${this.codigoDescarga}`
//     }
// }
// const miJuego = new JuegoDigital({
//     titulo: "Elden Ring",
//     precio: 60,
//     codigoDescarga: "ELDEN-777-X", // <--- De aquí sale
//     consola: "PS5"
// });

// // console.log(miJuego.aplicarDescuento(10));

// //Seugndo ejercicio de practica 
// class PerfilPublico {
//     constructor({username, biografia, seguidores=0}){
//         this.username = username
//         this.biografia = biografia
//         this.seguidores = seguidores
//     }
//     mostrarInfo(){
//         console.log(`Nombre del usuario: ${this.username}, biografia: ${this.biografia}`)
//     }
// }
// class PerfilPrivado extends PerfilPublico{
//     #email
//     #password
//     constructor({email, password, ...datosPublicos}){
//         super(datosPublicos)
//         this.#email = email
//         this.#password = password
//     }
//     get verDatosSecretos(){
//         super.mostrarInfo()
//         console.log(`su correo es ${this.#email}`)
//     }

// }
// let prueba = new PerfilPrivado({
//     username: "Yarlick",
//     biografia: "Soy programador",
//     seguidores: 500,
//     email: "yael@gmail.com",
//     password: 123
// })

// prueba.verDatosSecretos