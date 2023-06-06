// Definición de la función Nodo
function Nodo(valor) {
  this.valor = valor;
  this.izquierda = null;
  this.derecha = null;
}

// Método para insertar un nuevo nodo en el árbol.
 
Nodo.prototype.insertar = function (valor) {
  if (valor < this.valor) {
    if (this.izquierda === null) { 
      this.izquierda = new Nodo(valor);
    } else {
      this.izquierda.insertar(valor);
    } 
  } else {
    if (this.derecha === null) {
      this.derecha = new Nodo(valor);
    } else {
      this.derecha.insertar(valor);
    }
  } 
};





// Creación de un árbol binario de ejemplo
const arbol = new Nodo(8);

arbol.insertar(3);
arbol.insertar(10); 
arbol.insertar(1); 
arbol.insertar(6); 
arbol.insertar(14);
arbol.insertar(7); 
arbol.insertar(13);




console.log(arbol);
