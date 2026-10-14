// Exercício 1 - Hora de usar as setas
// Refatore a função imprimeProduto para utilizar arrow functions
// e templates strings.

let carrinho = [
  { nome: "abacaxi", preco: "2.00" },
  { nome: "detergente", preco: "2.50" },
  { nome: "bolacha", preco: "3.80" },
];

const imprimeProduto = (nome, preco) => {
  console.log(`Produto: ${nome} | Preço: ${preco}`);
};

carrinho.forEach((produto) => {
  imprimeProduto(produto.nome, produto.preco);
});

// Exercício 2 - Vou lavar sua boca com sabão!
// Utilize arrow functions para deixar o código menor.

let palavroes = [
  "Inconstitucionalíssimo",
  "Otorrinolaringologista",
  "Pneumoultramicroscopicossilicovulcanoconiose",
  "Oftalmotorrinolaringologista",
];

let tamanhos = palavroes.map((palavrao) => palavrao.length);

console.log(tamanhos);

// Exercício 3 - Não são só umas reticências?
// Qual é a diferença básica entre os operadores Rest e Spread?

// Resolução:
//
// REST (...): reúne vários elementos em uma única variável.

const somar = (...numeros) => {
  return numeros.reduce((total, numero) => total + numero, 0);
};

console.log(somar(10, 20, 30));

// SPREAD (...): expande os elementos de um array ou objeto
// em elementos individuais ou copia suas propriedades.

const numeros = [10, 20, 30];
console.log(...numeros);

// Exercício 4 - A união faz a força
// Utilize Spread no lugar de concat.

const equipeMarketing = ["Joana", "Marcela", "Bruna"];
const equipeComercial = ["Talita", "Luisa", "Vitória"];

const timeCompleto = [...equipeMarketing, ...equipeComercial];

realizaBrainstorm(timeCompleto);

// Exercício 5 - Pegando a propriedade na lata
// Utilize desestruturamento para obter as propriedades do usuário.

const { email, nome, idade } = usuario;

// Exercício 6 - Cara-Crachá
// Otimize o código utilizando desestruturamento.

const profissional = {
  titulo: "Engenheiro de Software",
  departamento: "Engenharia",
};

function isEngenheiro({ titulo, departamento }) {
  return titulo.includes("Engenheiro") && departamento === "Engenharia";
}

console.log(isEngenheiro(profissional));

profissional.titulo = "Marketing";

console.log(isEngenheiro(profissional));

// Exercício 7 - O meu videogame é muito melhor que o seu
// Crie a classe PlayStation com as propriedades de VideoGame
// e acrescente nEntradasUSB, voltagem e adicionais.

class VideoGame {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

class PlayStation extends VideoGame {
  constructor(marca, modelo, ano, nEntradasUSB, voltagem, adicionais) {
    super(marca, modelo, ano);

    this.nEntradasUSB = nEntradasUSB;
    this.voltagem = voltagem;
    this.adicionais = adicionais;
  }
}

const meuPlayStation = new PlayStation("Sony", "PlayStation 5", 2026, 3, 110, [
  "Controle sem fio",
  "Volante",
]);

console.log(meuPlayStation);

// Exercício 8 - Você cumpre as suas promessas?
// Implemente simulaPromise() utilizando Promise, resolve, reject,
// then e catch.

function simulaPromise(sucesso) {
  return new Promise((resolve, reject) => {
    if (sucesso) {
      resolve("ok");
    } else {
      reject("not ok");
    }
  })
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro));
}

simulaPromise(false);
simulaPromise(true);

// Exercício 9 - Você cumpre as suas promessas em tempo?
// Acrescente o parâmetro delay para simular o tempo de resposta.

function simulaPromise(sucesso, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sucesso) {
        resolve("ok");
      } else {
        reject("not ok");
      }
    }, delay);
  })
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro));
}

simulaPromise(true, 2000);
simulaPromise(false, 1000);

// Exercício 10 - Passando promessa de pai para filho
// Identifique o problema e corrija o código.

// Código original:
// promise
//     .then((data) => console.log(`resultado positivo: ${data}`))
//     .then((data) => console.log(`resultado positivo 2: ${data}`))
//     .catch((data) => console.log(`resultado negativo: ${data}`))

promise
  .then((data) => {
    console.log(`resultado positivo: ${data}`);
    return data;
  })
  .then((data) => {
    console.log(`resultado positivo 2: ${data}`);
    return data;
  })
  .catch((erro) => {
    console.log(`resultado negativo: ${erro}`);
  });
