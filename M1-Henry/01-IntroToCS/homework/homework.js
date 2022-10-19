'use strict';

function BinarioADecimal(num) {

   // Opcion_1.1
   let digits = num.split("").reverse();

   return digits.map((digit, index) => digits * 2 ** index).reduce((total, currentValue) => total + currentValue)

   ////////////////////////////////////////////////////////////////////////////////////
   // opcion_1.2

   // con el if (Eliminamos el error si no es un dato de texto -> string)
   if (num.constructor != String) {
      return null;  // o retornar un -> null;
     }
     num = num.replace(/[^01]/gi, " "); // replace ->Reemplaza parte de una cadena de texto;
  
     //  un parseInt -> devuelve un entero de la base especificada;
     return Number.parseInt(num, 2);  // parseInt en el objeto num;
  }
  return decimal;                          // -> Opcion_1.1
  //console.log(BinarioADecimal('1100'));  // -> Opcion_1.2

   ////////////////////////////////////////////////////////////////////////////////////

function DecimalABinario(num) {
   // Tener una bariable para almacenar el numero Binario;
   // en loop:
      // dividir el numero por 2;
      // concatenar el resto de la division al principio de la variable x;
      // actualizar el valor del numero, asignando el valor del cociente de la division;
      // Repetir el proceso;
   // Retornar la variable x;

   ////////////////////////////////////////////////////////////////////////////////////

   //Opcion_1.1
   let = binary = "";

   while(num > 0){
      // dividir el numero por 2;
      binaryL = (num % 2).toString() + binary;
      // "Hola" -> "1Hola"
      // Actualizar el numero, asignandole el valor del cociente de la división;
      numero = Match.floor(num/2); // Para sacar los decimales(Match.floor);
   }

   ////////////////////////////////////////////////////////////////////////////////////

   // Opcion_1.2
   let dec = [];
   // La sentencia while es para repetir hasta que se cumpla la condición determinada;
   while (num / 2 >= 1) {             //(Math.floor)
     let temp = Math.floor(num / 2);  //para redondendear hacia abajo y sin decimales;
     if (num % 2 === 0) {
         dec.unshift('0'); // (unschift) para devolver la nueva longitud del array;
     } else {
         dec.unshift('1');
     }
     if (temp === 1) dec.unshift('1');
     num = temp;
   }
   return dec.join('');

   ////////////////////////////////////////////////////////////////////////////////////

   // Opcion_1.3
   // return num.toString(2)
 }
 // return binaryL;  //  -> Opcion_1.1
 // console.log(DecimalABinario(8)); // Opcion_1.2

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
