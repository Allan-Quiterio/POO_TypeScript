"use strict";
function superClasse() {
    class Pessoa {
        nome;
        sobrenome;
        idade;
        cpf;
        constructor(nome, sobrenome, idade, cpf) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.idade = idade;
            this.cpf = cpf;
        }
        getIdade() {
            return this.idade;
        }
        getCpf() {
            return this.cpf;
        }
        getNomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
    class Aluno extends Pessoa {
        sala;
        constructor(nome, sobrenome, idade, cpf, sala) {
            super(nome, sobrenome, idade, cpf);
            this.sala = sala;
        }
        getSala() {
            return this.sala;
        }
        getNomeCompleto() {
            console.log("Fazendo algo antes");
            const result = super.getNomeCompleto();
            return result + " RETORNO ALTERADO";
        }
    }
    class Cliente extends Pessoa {
        getNomeCompleto() {
            return `CLIENTE: ${this.nome} ${this.sobrenome}`;
        }
    }
    const cliente = new Cliente("Allan", "Quiterio", 20, "000.000.000-00");
    const aluno = new Aluno("Allan", "Quiterio", 20, "000.000.000-00", "7ºI");
    console.log(aluno);
}
superClasse();
