/* Passo 1.1

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */

class Aluno {
    constructor(nome, faltas, notas) {
        this.nome = String(nome);
        this.faltas = Number(faltas);
        this.notas = notas;
    }
    
    /* Passo 2
    
    Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */

    calcularMedia() {
        let totalNotas = this.notas.reduce((a,b) => a + b);
        let media = totalNotas / this.notas.length;

        
        return media;
    }

    computaFalta() {
        this.faltas++
    }
};

module.exports = Aluno;