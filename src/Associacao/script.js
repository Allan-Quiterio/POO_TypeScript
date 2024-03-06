"use strict";
function associacao() {
    class Ferramenta {
        _nome;
        constructor(_nome) {
            this._nome = _nome;
        }
        get nome() {
            return this._nome;
        }
    }
    class Caneta extends Ferramenta {
        escrever() {
            console.log("Estou escrevendo com a ", this.nome);
        }
    }
    class MaquinaEscrever extends Ferramenta {
        escrever() {
            console.log("Estou digitando com a ", this.nome);
        }
    }
    class Escritor {
        _nome;
        _ferramenta = null;
        constructor(_nome) {
            this._nome = _nome;
        }
        get nome() {
            return this._nome;
        }
        set ferramenta(ferramenta) {
            this._ferramenta = ferramenta;
        }
        get ferramenta() {
            return this._ferramenta;
        }
        escrever() {
            if (this.ferramenta === null) {
                console.log("Não é possível escrever sem ferramenta");
                return;
            }
            this.ferramenta.escrever();
        }
    }
    const escritor = new Escritor("Allan");
    const caneta = new Caneta("Bic");
    const maquinaEscrever = new MaquinaEscrever("Teclado");
    console.log(escritor.nome);
    console.log(caneta.nome);
    console.log(maquinaEscrever.nome);
    escritor.escrever();
    escritor.ferramenta = caneta;
    escritor.ferramenta = maquinaEscrever;
    escritor.escrever();
}
associacao();
