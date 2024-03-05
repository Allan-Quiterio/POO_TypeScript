"use strict";
function protectedModificador() {
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
            const colaboradores = [];
            for (const colaborador of this.colaboradores) {
                colaboradores.push(colaborador);
            }
            console.log(colaboradores);
        }
        getNome() {
            return this.nome;
        }
    }
    class Allan_Enterprise extends Empresa {
        constructor() {
            super("Allan_Enterprise", "12345-98");
        }
        popColaborador() {
            const colaborador = this.colaboradores.pop();
            return colaborador ? colaborador : null;
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
    const empresa1 = new Allan_Enterprise();
    const colaborador1 = new Colaborador("Joaquim", "Phoenix");
    const colaborador2 = new Colaborador("Marcelo", "Rossi");
    empresa1.addColaborador(colaborador1);
    empresa1.addColaborador(colaborador2);
    empresa1.getColaboradores();
    empresa1.popColaborador();
    empresa1.getColaboradores();
}
protectedModificador();
