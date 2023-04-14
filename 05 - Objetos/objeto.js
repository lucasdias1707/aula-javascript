// para declarar objeto deve abrir e fechar chaves {} e para declarar o valor é com aspas simples e separar por , Então fica da forma abaixo
const pessoa = {
    nome: 'Lucas Dias',
    idade: 22,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const atributo = 'idade';

console.log(pessoa[atributo]);

// pessoa.nome = 'Teste';
// pessoa.idade = 25;
// pessoa.descrever();

/* Pode ser passado um atributo
console.log(pessoa[atributo]);
não preciso utilizar o pessoa.nome, posso utilizar o pessoa['nome'] ou pessoa[atributo] atributo sendo uma variável, pode chamar o metodo dentro do meu objeto
Desta forma deixando mais dinâmico.
*/

/* Altera a função do metodo descrever e continua tendo acesso ao objeto
pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`)
}
*/

/* Adiciona mais dados no objeto
pessoa.altura = 1.72; 
*/

/* Tira um dado do objeto (Ex: Se chamar somente pessoa, irá constar nome e altura)
delete pessoa.idade
*/

/* formas de utilizar o objeto
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa); Mostra o nome de cada metodo e os dados, caso tenha uma função dentro, traz o nome da função
*/

/* Chama o metodo descrever que dentro é uma função
pessoa.descrever();
*/