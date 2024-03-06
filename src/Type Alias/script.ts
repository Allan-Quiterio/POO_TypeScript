function typeAlias() {
  // Nesse caso o tipo, ele faz uma função parecida com a da classe abstrata, ele também promove um contrato, onde as propriedades e métodos precisam ser implementadas
  type TipoNome = {
    nome: string;
  };

  type TipoSobrenome = {
    sobrenome: string;
  };

  type TipoNomeCompleto = {
    nomeCompleto(): string;
  };

  // É utilizado o implements para referenciar o type que vai servir parecido com uma classe abstrata
  // Pode utilizar mais de uma implementação
  class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto() {
      return this.nome + " " + this.sobrenome;
    }
  }

  const pessoa = new Pessoa("Allan", "Quiterio");
  console.log(pessoa.nomeCompleto());
}

typeAlias();
