function interfaceClasses() {
  interface TipoNome {
    nome: string;
  }

  interface TipoSobrenome {
    sobrenome: string;
  }

  interface TipoNomeCompleto {
    nomeCompleto(): string;
  }

  // Isso seria a mesma coisa
  type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
  interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

  class Pessoa implements TipoPessoa2 {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto() {
      return this.nome + " " + this.sobrenome;
    }
  }

  const pessoa = new Pessoa("Allan", "Quiterio");
  console.log(pessoa.nomeCompleto());

  // Implementando uma interface em um objeto
  const pessoaObj: TipoPessoa2 = {
    nome: "Allan2",
    sobrenome: "Quiterio2",
    nomeCompleto() {
      return this.nome + " " + this.sobrenome;
    },
  };

  console.log(pessoaObj.nomeCompleto());
}

interfaceClasses();
