function associacao() {
  abstract class Ferramenta {
    constructor(private _nome: string) {}

    get nome() {
      return this._nome;
    }

    abstract escrever(): void;
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
    private _ferramenta: Ferramenta | null = null;
    constructor(private _nome: string) {}

    get nome() {
      return this._nome;
    }

    set ferramenta(ferramenta: Ferramenta) {
      this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null {
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

  //Até o momento todas essas classes funcionam independentemente entre si
  const escritor = new Escritor("Allan");
  const caneta = new Caneta("Bic");
  const maquinaEscrever = new MaquinaEscrever("Teclado");

  console.log(escritor.nome);
  console.log(caneta.nome);
  console.log(maquinaEscrever.nome);
  escritor.escrever();

  //Fazendo uma Associação
  escritor.ferramenta = caneta;
  escritor.ferramenta = maquinaEscrever;
  escritor.escrever();
}

associacao();
