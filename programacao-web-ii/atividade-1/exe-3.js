var alunos = [
  { nome: "Diogo", media: 8.5 },
  { nome: "Julia", media: 6.4 },
  { nome: "Roberto", media: 1.5 },
  { nome: "Tiago", media: 7.0 },
];

function aprovados(listaAlunos, mediaMinima) {
  return listaAlunos.filter((aluno) => aluno.media >= mediaMinima);
}

console.log(aprovados(alunos, 6.5));
