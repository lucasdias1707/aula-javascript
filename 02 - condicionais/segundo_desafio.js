/* Faça um programa para calcumar o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoCombustivel = 5.49;
const precoEtanol = 5.29;
const tipoCombustivel = etanol;
const kmPorLitro = 10;
const distanciaEmKm = 539;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));