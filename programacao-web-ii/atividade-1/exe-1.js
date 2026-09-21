var numeros = [0, 1, 2, 3, 4, 5];

numeros.forEach(function (i) {
  if (i % 2 === 0) {
    console.log(i + " é par");
  } else {
    console.log(i + " é ímpar");
  }
});
