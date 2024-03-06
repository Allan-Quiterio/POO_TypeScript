"use strict";
function abstractClass() {
    class Personagem {
        nome;
        ataque;
        vida;
        constructor(nome, ataque, vida) {
            this.nome = nome;
            this.ataque = ataque;
            this.vida = vida;
        }
        atacar(personagem) {
            this.bordao();
            personagem.perderVida(this.ataque);
        }
        perderVida(forcaAtaque) {
            this.vida -= forcaAtaque;
            console.log(`${this.nome} agora tem ${this.vida} de vida`);
        }
    }
    class Guerreira extends Personagem {
        emoji = "\u{1F9DD}";
        bordao() {
            console.log(this.emoji, "GUERREIRAA AO ATAQUE");
        }
    }
    class Monstro extends Personagem {
        emoji = "\u{1F9DF}";
        bordao() {
            console.log(this.emoji, "MONSTROOO ATACAAAAA!!");
        }
    }
    const guerreira = new Guerreira("Guerreira", 25, 100);
    const monstro = new Monstro("Monstro", 20, 100);
    guerreira.atacar(monstro);
    guerreira.atacar(monstro);
    guerreira.atacar(monstro);
    monstro.atacar(guerreira);
}
abstractClass();
