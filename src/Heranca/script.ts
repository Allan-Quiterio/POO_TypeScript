function heranca() {
  class Pessoa {
    constructor(
      public nome: string,
      public sobrenome: string,
      private idade: number,
      protected cpf: string
    ) {}
    getIdade() {
      return this.idade;
    }
    getCpf() {
      return this.cpf;
    }
    getNomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  }

  class Aluno extends Pessoa {
    //Sobrescrevendo métodos da classe pai
    getNomeCompleto() {
      return `ALUNO: ${this.nome} ${this.sobrenome}`;
    }
  }
  class Cliente extends Pessoa {
    //Sobrescrevendo métodos da classe pai
    getNomeCompleto() {
      return `CLIENTE: ${this.nome} ${this.sobrenome}`;
    }
  }

  const pessoa = new Pessoa("Allan", "Quiterio", 20, "000.000.000-00");
  const aluno = new Aluno("Allan", "Quiterio", 20, "000.000.000-00");
  const cliente = new Cliente("Allan", "Quiterio", 20, "000.000.000-00");

  console.log(pessoa.getNomeCompleto());
  console.log(aluno.getNomeCompleto());
  console.log(cliente.getNomeCompleto());
}

heranca();
