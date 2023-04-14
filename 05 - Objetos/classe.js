class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const lucas = new Pessoa();
lucas.nome = 'Lucas Dias';
lucas.idade = 22;

const teste = new Pessoa();
teste.nome = 'teste';
teste.idade = 25;

// console.log(lucas)
// console.log(teste)
lucas.descrever();
teste.descrever();