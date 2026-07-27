class Pergunta {
    constructor(titulo, respostas, correta) {
        this.titulo = titulo;
        this.respostas = {
            a: respostas[0],
            b: respostas[1],
            c: respostas[2],
            d: respostas[3]
        };
        this.correta = correta; // Deve ser uma das letras A, B, C ou D;
    }

    responder(resposta) {
        return resposta === this.correta ? "correto" : "errado";
    }
}

const pergunta = new Pergunta("teste", ["1", "2", "3", "4"], "a");