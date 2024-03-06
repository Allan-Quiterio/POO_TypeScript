"use strict";
function typeAlias() {
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
}
typeAlias();
