/* 
 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
    sua média e a sua classificação conforme a tabela abaixo.

  Média = (nota 1 + nota 2 + nota 3) / 3;

  Classificação:
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, passou de semestre;
*/

const primeiraNota = 3;
const segundaNota = 10;
const terceiraNota = 8;
const media = (primeiraNota + segundaNota + terceiraNota) / 3;
console.log(media.toFixed(1));

// Tipo 1 de resolver
if (media < 5) {
  console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
  console.log('Recuperação');
} else {
  console.log('Aprovado');
}

/* Tipo 2 de resolver
if (media < 5) {
  console.log('Reprovado');
} else if (media > 7) {
  console.log('Aprovado');
} else {
  console.log('Recuperação');
} */