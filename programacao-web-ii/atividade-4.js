// ==========================================
// Atividade 4 - Programação Web II
// Manipulação da Árvore DOM
// ==========================================

// Exercício 1: Alterando o Conteúdo de um Elemento
// Selecione o elemento com o ID "titulo-boas-vindas" e altere seu conteúdo textual.

document.getElementById("titulo-boas-vindas").textContent =
  "Bem-vindo ao Curso de Desenvolvimento de Sistemas!";

// Exercício 2: Criando e Adicionando Elementos Dinamicamente
// Crie a função adicionarItem(texto), que adiciona
// um novo item ao final da lista "lista-tarefas".

function adicionarItem(texto) {
  const lista = document.getElementById("lista-tarefas");
  const novoItem = document.createElement("li");

  novoItem.textContent = texto;
  lista.appendChild(novoItem);
}

// Exemplo de utilização:
adicionarItem("Praticar manipulação do DOM");

// Exercício 3: Alternando e Alterando Estilos CSS com classList
// Remova a classe "oculto" e adicione a classe "destaque"
// ao elemento com o ID "painel".

const painel = document.getElementById("painel");

painel.classList.remove("oculto");
painel.classList.add("destaque");

// Exercício 4: Remoção de Elementos da Árvore
// Crie a função removerPrimeiraNotificacao() para remover
// somente a primeira notificação da lista "notificacoes".

function removerPrimeiraNotificacao() {
  const lista = document.getElementById("notificacoes");
  const primeiraNotificacao = lista.firstElementChild;

  if (primeiraNotificacao) {
    primeiraNotificacao.remove();
  }
}

// Exercício 5: Manipulação com Eventos de Clique
// Ao clicar no botão "btn-exibir", capture o nome digitado
// em "campo-nome" e exiba uma mensagem no parágrafo "resposta".

const botao = document.getElementById("btn-exibir");

botao.addEventListener("click", () => {
  const campoNome = document.getElementById("campo-nome");
  const resposta = document.getElementById("resposta");
  const nome = campoNome.value.trim();

  if (nome !== "") {
    resposta.textContent = `Olá, ${nome}! Seja bem-vindo(a)!`;
  } else {
    resposta.textContent = "Por favor, digite seu nome.";
  }
});
