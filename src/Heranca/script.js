"use strict";
function heranca() {
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
        getNomeCompleto() {
            return `ALUNO: ${this.nome} ${this.sobrenome}`;
        }
    }
    class Cliente extends Pessoa {
        getNomeCompleto() {
            return `CLIENTE: ${this.nome} ${this.sobrenome}`;
        }
    }
    const pessoa = new Pessoa("Allan", "Quiterio", 20, "000.000.000-00");
    const aluno = new Aluno("Allan", "Quiterio", 20, "000.000.000-00");
    const cliente = new Cliente("Allan", "Quiterio", 20, "000.000.000-00");
    console.log(pessoa.getNomeCompleto());
    console.log(aluno.getNomeCompleto());
    console.log(cliente.getNomeCompleto());
}
heranca();
