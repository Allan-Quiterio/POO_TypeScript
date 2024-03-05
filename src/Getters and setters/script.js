"use strict";
function gettersAndSetters() {
    class Pessoa {
        nome;
        sobrenome;
        idade;
        _cpf;
        constructor(nome, sobrenome, idade, _cpf) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.idade = idade;
            this._cpf = _cpf;
        }
        set cpf(cpf) {
            this._cpf = cpf;
        }
        get cpf() {
            return this._cpf.replaceAll(".", "").replace("-", "");
        }
    }
    const pessoa = new Pessoa("Allan", "Quiterio", 20, "123.456.789-00");
    console.log(pessoa.cpf);
    pessoa.cpf = "987.654.321-00";
    console.log("Novo valor: " + pessoa.cpf);
}
gettersAndSetters();
