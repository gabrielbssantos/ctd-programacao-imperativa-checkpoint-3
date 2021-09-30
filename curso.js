const aluno = require('./aluno');
const estudantes = require('./estudantes');

/* Passo 3

Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1). */

let curso = {
    nome: 'Programação Imperativa',
    notaAprovacao: 7.5,
    faltasMaximas: 3,
    listaEstudantes: estudantes.lista,

    /*  Passo 4

        Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */

    adicionarEstudante: function(novoEstudante) {
        this.listaEstudantes.push(novoEstudante);
    },

    /*  Passo 5

        Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */

    estaAprovado: function(estudante) {
        let criterioAprovacao1 = (estudante.calcularMedia() >= this.notaAprovacao && estudante.faltas < this.faltasMaximas);
        let criterioAprovacao2 = (estudante.calcularMedia() >= (this.notaAprovacao * 1.1) && estudante.faltas == this.faltasMaximas);

        if(criterioAprovacao1 || criterioAprovacao2) {
            return true;

        } else {
            return false;
        }
        
    },


    /*  Passo 6

        Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. */

    aprovacaoEstudantes: function() {
        let aprovados = [];
        
        this.listaEstudantes.forEach(estudante => {
            aprovados.push(this.estaAprovado(estudante));
        });

        return aprovados;
    }
}


// Testes

curso.adicionarEstudante(new aluno('José', 6, [4, 6, 8.4, 9, 0]));
console.log(curso.listaEstudantes);
console.log(curso.aprovacaoEstudantes());