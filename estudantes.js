/* Passo 1.2

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */

const aluno = require('./aluno');

let lista = [
    new aluno('Pedro', 2, [7.6, 6, 8.3, 9, 7.9]),
    new aluno('Maria', 5, [7.1, 9, 8.9, 5, 6]),
    new aluno('Afonso', 1, [9.6, 6.5, 9.3, 9, 8]),
    new aluno('Carlos', 0, [8.4, 5.5, 8.7, 10, 6.9]),
    new aluno('Antônia', 3, [7, 4, 8.8, 7.3, 9.9])
];

console.log(lista);

module.exports = {lista};