function isListaVazia(lista) {
  var iterador = lista[Symbol.iterator]();
  return iterador.next().done;
}

console.log(isListaVazia([]));
console.log(isListaVazia([1, 2, 3]));
