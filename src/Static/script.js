"use strict";
function staticMethod() {
    class Pessoa {
        nome;
        sobrenome;
        idade;
        cpf;
        static idadePadrao = 0;
        static cpfPadrao = "000.000.000-00";
        constructor(nome, sobrenome, idade, cpf) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.idade = idade;
            this.cpf = cpf;
        }
        metodoNormal() {
            console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
        }
        static falaOi() {
            console.log("Hello");
        }
        static criaPessoa(nome, sobrenome) {
            return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
        }
    }
    const pessoa = new Pessoa("Allan", "Quiterio", 20, "123.456.789-00");
    const pessoa2 = Pessoa.criaPessoa("Allan", "Quiterio");
    pessoa.cpf = "987.654.321-00";
    console.log(pessoa);
    Pessoa.falaOi();
    console.log(pessoa2);
    pessoa2.metodoNormal();
}
staticMethod();
