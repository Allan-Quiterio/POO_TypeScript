function abstractClass() {
  // Classes abstratas servem como um contrato para sub-classes estenderem ela
  abstract class Personagem {
    protected abstract emoji: string;
    constructor(
      protected nome: string,
      protected ataque: number,
      protected vida: number
    ) {}

    atacar(personagem: Personagem) {
      this.bordao();
      personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number) {
      this.vida -= forcaAtaque;
      console.log(`${this.nome} agora tem ${this.vida} de vida`);
    }

    // Criando um método abstrato, métodos abstratos não tem corpo, seria um contrato dizendo que toda classe que estender Personagem, devem implementar esse método do jeito que elas quiserem, mas é obrigatório implementar.
    abstract bordao(): void;
  }

  class Guerreira extends Personagem {
    protected emoji = "\u{1F9DD}";
    bordao() {
      console.log(this.emoji, "GUERREIRAA AO ATAQUE");
    }
  }
  class Monstro extends Personagem {
    protected emoji = "\u{1F9DF}";
    bordao() {
      console.log(this.emoji, "MONSTROOO ATACAAAAA!!");
    }
  }

  const guerreira = new Guerreira("Guerreira", 25, 100);
  const monstro = new Monstro("Monstro", 20, 100);

  // Classes abstratas não podem ser instanciadas diretamente por elas através do new
  // const personagem = new Personagem("Personagem", 1000, 100); // erro

  guerreira.atacar(monstro);
  guerreira.atacar(monstro);
  guerreira.atacar(monstro);
  monstro.atacar(guerreira);
}

abstractClass();
