// Descrição:
// - Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
// inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

function sumInteger(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

function calculateSum() {
  const inputNumber = document.getElementById("numeroInput").value;
  const result = sumInteger(Number(inputNumber));

  alert(
    `O somatório dos números divisíveis por 3 ou 5 menores que ${inputNumber} é: ${result}`
  );
}
