class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const lucas = new Pessoa('Lucas', 22);
const teste = new Pessoa('Teste', 25);
console.log(lucas)
console.log(teste)

/* Essa é uma forma de utilizar a classe para informar dados ou pegar os mesmo.
const lucas = new Pessoa();
lucas.nome = 'Lucas Dias';
lucas.idade = 22;

const teste = new Pessoa();
teste.nome = 'teste';
teste.idade = 25;
*/
// Acessa um method onde ele pode executar uma função. No caso do exemplo abaixo, ele pega o nome que é definido e informa um texto no console.log
/*
lucas.descrever();
teste.descrever();*/