"use strict";
function interfaceClasses() {
    class Pessoa {
        nome;
        sobrenome;
        constructor(nome, sobrenome) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }
        nomeCompleto() {
            return this.nome + " " + this.sobrenome;
        }
    }
    const pessoa = new Pessoa("Allan", "Quiterio");
    console.log(pessoa.nomeCompleto());
    const pessoaObj = {
        nome: "Allan2",
        sobrenome: "Quiterio2",
        nomeCompleto() {
            return this.nome + " " + this.sobrenome;
        },
    };
    console.log(pessoaObj.nomeCompleto());
}
interfaceClasses();
