/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo ela:
 - 1 Preço do combustível;
 - 2 Gasto médio do carro por KM;
 - 3 Distância em KM da viagem;

 Imprima no console o valor que será gasto de combustível para realizar está viagem.
 */

const precoCombustivel = 5.49;
const kmPorLitro = 10;
const distanciaViagem = 270;

const litrosConsumidos = distanciaViagem / kmPorLitro;

const valorGasto = precoCombustivel * kmPorLitro;

console.log(valorGasto.toFixed(2));