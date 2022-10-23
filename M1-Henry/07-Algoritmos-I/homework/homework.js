'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++){
      if (array[j] > array[j + 1]) swap(array, j, j + 1);
    }
  }

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // [1, 5, 4, 2, 8]
  //     i
  //                j

  // min = 3

  function swap(array, idx1, idx2){
  // [1, 5, 4, 2, 8]
  //   idx1 = 0
  //   idx2 = 2

    var aux = array[idx1];      // 1
    array[idx1] = array[idx2];
    array[idx2] = aux;
  }
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    var min = i;

    for (let j = i + 1; j < array.length; j++){
      if (array[j] < array[min]) min = j;
    }

    if (min !== i) swap(array, i, min);
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
