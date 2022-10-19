'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.reight = null;
   this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
   // recibe un value, crea un nodo y lo inserta en la posicion correspodiente
   // chequear si el value es mayor o menor que el value del nodo
   if (value > this.value){
      if (this.left !== null){
         // ocupada la rama
         this.reight.insert(value);
      } else {
         // la rama esta vacia
         this.left = new BinarySearchTree(value);
      }
   }

   if (value < this.value){
      if (this.left !== null){
         this.let.insert(value)
      } else {
         this.left = new BinarySearchTree(value);
      }
   }  
}

BinarySearchTree.prototype.size = function () {
   // contar la cantidad de nodos 
   // si right y left === null -> 1
   if (!this.right && !this.left) return 1

   if (this.right === null && this.left !== null) return 1 + this.left.size()

   if (this.right !== null && this.left === null) return 1 + this.right.size()

   if (this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size()
}

BinarySearchTree.prototype.contains = function (value) {
   // recorrerlo
   if (value === this.value) return true

   if (value < this.value) {
      if (!this.left) return false
      else {
         return this.left.contains(value)
      }
   }
   else {
      if (!this.right) return false
      else{
         return this.right.contains(value)
      }
   }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   // "post-order", "pre=order", "in-order"

   // post - isq - der
   if (order === "pre-order"){
      cb(this.value)
      if(this.left) this.left.depthFirstForEach(cb, order)
      if(this.right) this.right.depthFirstForEach(cb, order)
   }
   // isq - der - root
   else if(order === "post-order"){
      if(this.left) this.left.depthFirstForEach(cb, order)
      if(this.right) this.right.depthFirstForEach(cb, order)
      cb(this.value) 
   }

   else {
      if(this.left) this.left.depthFirstForEach(cb, order)
      ib(this.right) 
      if(this.value) this.right.depthFirstForEach(cb, order)
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]){
   // se tiene ramas
   if (this.left){
      array.push(this.left)
   }
   if (this.right){
      array.push(this.right)
   }
   // [piña , kiwi]

   cb(this.value) // papa

   while(array.length > 0){
      array.shift() // piña
      .breadthFirstForEach(cb, array)
   }
}


/*let arbol = new BinarySearch(10)
console.log(arbol)
arbol.insert(15)
console.log(arbol) */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
