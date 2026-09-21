/**
 * Análise e Desenvolvimento de Sistemas (UESB)
 * Disciplina: Programação Web II
 * Assunto: Iteradores, Iteráveis e Métodos Auxiliares de Array (forEach, map, filter, reduce)
 */

// 1. Método forEach
var numeros = [0, 1, 2, 3, 4, 5];
numeros.forEach(function (i) {
  if (i % 2 === 0) {
    console.log(i + " é par");
  } else {
    console.log(i + " é ímpar");
  }
});

// 2. Método map (Dobrar valores)
function dobrar(numeros) {
  return numeros.map((numero) => numero * 2);
}

console.log(dobrar([1, 2, 3]));

// 3. Método filter (Alunos aprovados)
var alunos = [
  { nome: "Diogo", media: 5.5 },
  { nome: "Julia", media: 9.5 },
  { nome: "Roberto", media: 1.5 },
  { nome: "Tiago", media: 6.0 },
];

function aprovados(listaAlunos, mediaMinima) {
  return listaAlunos.filter((aluno) => aluno.media >= mediaMinima);
}

console.log(aprovados(alunos, 6.5));

// 5. Método reduce (Calcula distância das ruas)
var ruas = [
  { nome: "Rua 1", tamanho: 2500 },
  { nome: "Rua 2", tamanho: 3400 },
  { nome: "Rua 3", tamanho: 1400 },
];

function calculaDistancia(listaRuas) {
  return listaRuas.reduce(function (acumulador, rua) {
    return acumulador + rua.tamanho;
  }, 0);
}

console.log(calculaDistancia(ruas));

// 6. Iteradores e Iteráveis (isListaVazia)
function isListaVazia(lista) {
  var iterador = lista[Symbol.iterator]();
  return iterador.next().done;
}

console.log(isListaVazia([]));
console.log(isListaVazia([1, 2, 3]));
