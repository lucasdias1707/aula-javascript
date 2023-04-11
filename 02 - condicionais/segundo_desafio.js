/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const tipoCombustivel = 'etanol';
const precoEtanol = 5.29;
const precoGasolina = 5.49;
const kmPorLitro = 10;
const distanciaEmKm = 539;
const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}
