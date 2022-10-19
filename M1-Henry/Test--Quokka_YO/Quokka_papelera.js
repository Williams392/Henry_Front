// Quokka_test.js

// ( 02--Javascript | ) 

// Es mala practiva usar ( var -> en JS)

var persona = {
    nombre:"williams",
    apellido: "valle",
}
                            // ( this. -> reutilizar en el objeto Global)

var logNombre = function() {        
    console.log(this.nombre, this.apellido)
}

var logNombrePersona = logNombre.bind(persona);

logNombrePersona();

////////////////////////////////////////////////////////////////////////

let carros = {
    Marca: "Toyota",
    Modelo: "Yaris",
}

let logMarca = function() {
    console.log(this.Marca,"modelo", this.Modelo);
}

// .bind ->  es llamada para asignar a su operador this el valor entregado
let logCarroMarca = logMarca.bind(carros);

logCarroMarca();

////////////////////////////////////////////////////////////////////////

let miperro = {
    Nombre_perro : "Mass",
    edad_perro: "2 años",
}

let getPerro = function() {
    console.log(this.Nombre_perro, this.edad_perro);
}

let getPerroF = getPerro.bind(miperro);

getPerroF();

////////////////////////////////////////////////////////////////////////

// ( 03-- JavaScript || )

/* Closures:
Closure / cláusula / función de cierre
Es una función que utiliza valores de variables declaradas fuera de
su contexto { } o ser pasadas por otra función, pasando de función padre 
a función hija… function padre () { function hija () {}} .            */

var nombre = "lea";

// ej_01:
function saludar (){
    console.log("hola" + nombre)
    // Usa el valor de la variable ‘nombre’ que fue declarada fuera de la función
} 	

// ej_02:
function saludar (saludo){
    return function (nombre){
        console.log(saludo + '' + nombre)
    }
}
// Usa el valor de ‘saludo’ que es tomado como parámetro en la función padre

// ej_03:
var a = 1;
function funcionPadre() {
    var b = 2;
    return function funcionPadre(){
        var c = 3;
        return a + b + c;       // Usa valores definidas fuera del scoop
    }
}
console.log(funcionPadre());    // f funcionHija
console.log(funcionPadre()());  // doble paréntesis para invocar la funcion hija

/////////////////////////////////////////////////////////////////

/*  Con los closures podemos hacer funciones autoejecutables
    (function (arg1,arg2){ … } ) (arg1,arg2);                 */

// eje_1.1
(function saludar(nommbre){
    console.log('hola' + nombre);
}) ('lea')

// eje_2.2
var contador = (function() {
    let cont = 0;
    function incrementar(){
        return cont++;
    }
    function disminuir() {
        return cont--;
    }
    function valor() {
        return cont;
    }
    return {
        incrementar,
        disminuir,
        valor,
    }
}) ();
console.log(contador.incrementar());
console.log(contador.valor());

/////////////////////////////////////////////////////////////////

/*  Bind Call Apply:
Bind / Unir : Devuelve una función vinculando objetos o argumentos a funciones. 
var funcionNueva = fn.bind ( objetoConThis , parametrosExtras);              */

// ej:
var user = {                            // objeto1
    nombre: 'lea'
}
var use2 = {                            // objeto2
    nombre: 'Pepe'
}
function saludar(){                     // función que usa la propiedad this
    console.log('Hola' + this.nombre);
}
saludar();                              // Hola undefined
var funcionSaludo = saludar.bind(user)  // Vincula user con la función saludar
funcionSaludo();                        // Llama a la nueva función // Hola Lea
var funcionSaludo = saludar.bind(user2)
funcionSaludo();                        // Hola Pepe

// ej2:

function suma(a, b){
    return a + b;
}
var sumaEntre = suma.bind(this, 10);
// usa this como parámetro a definir y 10 como argumento por defecto.
console.log(sumaEntre(5));         // 10 + 5 // el 1er arg es 10 por defecto

/*          fn.call(this, arg1, arg2, arg3...)
            fn.apply(this, [arg1, arg2, arg3...])           */

/////////////////////////////////////////////////////////////////