"use strict";
function classes() {
    class Empresa {
        nome;
        colaboradores = [];
        cnpj;
        constructor(nome, cnpj) {
            this.nome = nome;
            this.cnpj = cnpj;
        }
        addColaborador(colaborador) {
            this.colaboradores.push(colaborador);
        }
        getColaboradores() {
            for (const colaborador of this.colaboradores) {
                console.log(colaborador);
            }
        }
    }
    class Colaborador {
        nome;
        sobrenome;
        constructor(nome, sobrenome) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }
    }
    const empresa1 = new Empresa("Allan_Enterprise", "12345-98");
    const colaborador1 = new Colaborador("Joaquim", "Phoenix");
    const colaborador2 = new Colaborador("Marcelo", "Rossi");
    const colaborador3 = new Colaborador("Gabriel", "Medina");
    console.log(empresa1.nome);
    empresa1.addColaborador(colaborador1);
    empresa1.addColaborador(colaborador2);
    empresa1.addColaborador(colaborador3);
    empresa1.addColaborador({
        nome: "José",
        sobrenome: "Alencar",
    });
    empresa1.getColaboradores();
}
classes();
