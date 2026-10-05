/**
 * Análise e Desenvolvimento de Sistemas (UESB)
 * Disciplina: Programação Web II
 * Assunto: Exercícios_6_7_8
 */

// 1. Comprinhas online
function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes) {
  let valorTotal = 0;

  produtos.forEach(function (produto) {
    valorTotal += caixa[produto];
  });

  let frete = fretes[cidade] || fretes["Outros"];

  return valorTotal + frete;
}

const caixa = {
  Arroz: 7.1,
  Feijão: 2.3,
  Macarrão: 4.7,
  Refrigerante: 3.0,
};

const fretes = {
  "São Paulo": 10.1,
  "Rio de Janeiro": 12.3,
  Brasília: 14.7,
  Outros: 13.0,
};

console.log(calculaValorTotalDaCompra(["Arroz"], "São Paulo", caixa, fretes));

// 2. Retirando o excesso
function removeDuplicatas(numeros) {
  return [...new Set(numeros)];
}

console.log(removeDuplicatas([1, 1, 2, 2, 3, 3]));

// 3. Sei tudo sobre variáveis
// var arrayFuncoes = [];

// for (var i = 0; i < 10; i++) {
//   arrayFuncoes.push(function () {
//     console.log(i);
//   });
// }

// arrayFuncoes.forEach(function (funcao) {
//   funcao();
// });

// O console exibirá:

// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

// Isso acontece porque var possui escopo de função, e não escopo de bloco.
// As funções armazenadas no array não guardam uma cópia do valor de i; todas acessam a mesma variável.
// Quando o for termina, i já possui o valor 10

// Com ES6, podemos utilizar let:
const arrayFuncoes = [];

for (let i = 0; i < 10; i++) {
  arrayFuncoes.push(function () {
    console.log(i);
  });
}

arrayFuncoes.forEach(function (funcao) {
  funcao();
});

// 4. Não estou entendendo mais nada
const jogador = {};

jogador.nome = "Rodrigo";
jogador.idade = 33;

console.log(jogador.nome + "_" + jogador.idade);

// O código funciona porque const impede que a variável seja reatribuída, mas não torna o objeto imutável.
// A variável jogador continua apontando para o mesmo objeto:
// const jogador = {};
// Podemos alterar as propriedades desse objeto:
// jogador.nome = 'Rodrigo';
// jogador.idade = 33;
// O que não podemos fazer é atribuir outro objeto à variável:
// const jogador = {};
// jogador = {}; // ERRO
// Portanto, const impede a reatribuição da referência, mas não impede a alteração do conteúdo do objeto.
// A saída será:
// Rodrigo_33

// 5. Tudo fora de escopo
var status = [
  { codigo: "OK", resposta: "Sucesso" },
  { codigo: "FAILED", resposta: "Erro" },
  { codigo: "PENDING", resposta: "Pendente" },
];

var mensagem = "";
var codigoAtual = "OK";

for (var i = 0; i < status.length; i++) {
  if (status[i].codigo === codigoAtual) {
    mensagem = status[i].resposta;
  }
}

console.log(mensagem);

// Uma refatoração adequada utilizando const e let seria:

// const status = [
//     { codigo: 'OK', resposta: 'Sucesso' },
//     { codigo: 'FAILED', resposta: 'Erro' },
//     { codigo: 'PENDING', resposta: 'Pendente' }
// ];

// let mensagem = '';
// const codigoAtual = 'OK';

// for (let i = 0; i < status.length; i++) {
//     if (status[i].codigo === codigoAtual) {
//         mensagem = status[i].resposta;
//     }
// }

// console.log(mensagem);

// A lógica continua exatamente a mesma. A diferença é que usamos const quando o valor da variável não será reatribuído (status e codigoAtual) e let quando o valor pode mudar (mensagem e i).
