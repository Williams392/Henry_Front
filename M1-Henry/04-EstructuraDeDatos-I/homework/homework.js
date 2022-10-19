'use strict';

// EJERCICIO 1
function nFactorial(n) {}

// EJERCICIO 2
function nFibonacci(n) {}

nFibonacci(5); // que hay en la posicion 5 de la secuencia de fibonacci?


// EJERCICIO 3
function Queue() {
   this.Queue = [];
};

Queue.prototype.enqueue = function (element) {
   this.Queue.push(element);
};

Queue.prototype.dequeque = function () {
   return this.queque.length;
};

// creando mi propia -> Estructura de datos y clase
var laFilaDelBlanco = new Queues();

console.log(laFilaDelBlanco.size()); //0
laFilaDelBlanco.enqueue("Hola");
laFilaDelBlanco.enqueue(6);
laFilaDelBlanco.enqueue(false);
console.log(laFilaDelBlanco.size());
console.log(laFilaDelBlanco.dequeque());
console.log(laFilaDelBlanco());


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
