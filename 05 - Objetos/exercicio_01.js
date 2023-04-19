/*
    01 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodade.
    Crie um método que dado a quantia de quilómetros e o preço do combutível nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
    }
}

const palio = new Carros('Fiat', 'Preto', 1/12);
const fox = new Carros('Volkswagen', 'Branco', 1/10);

console.log(palio.calcularGastoDePercurso(70, 5.49));
console.log(fox.calcularGastoDePercurso(70, 5.49));
