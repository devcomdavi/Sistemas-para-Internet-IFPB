class Exams {   
    constructor(resposta, peso) {
        this.resposta = resposta;
        this.peso = peso;
        this.exame = [];
    }

    add(gabarito_aluno) {
        this.exame.push(gabarito_aluno);
    }
}
