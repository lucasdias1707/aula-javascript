const notas = [];

notas.push(10);
notas.push(10);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);

// console.log(alunos.pop()); // .pop remove a última informação do array
// console.log(alunos.shift()); // .shift remove a primeira informação do array