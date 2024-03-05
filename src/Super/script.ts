function superClasse() {
  // Classe pai - Super classe
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

  // Classes filhas - Sub classe
  class Aluno extends Pessoa {
    constructor(
      //Nesse caso, não utilizamos o modificador, pois estamos apenas repassando os atributos que tem na superclasse e não criando novos
      nome: string,
      sobrenome: string,
      idade: number,
      cpf: string,
      private sala: string // Porém esse sala sim é novo, por isso tem o public
    ) {
      // Fazendo a chamada da super classe repassando os valores que a super espera.
      super(nome, sobrenome, idade, cpf);
    }
    getSala() {
      return this.sala;
    }
    getNomeCompleto() {
      console.log("Fazendo algo antes");
      const result = super.getNomeCompleto();
      return result + " RETORNO ALTERADO";
    }
  }
  class Cliente extends Pessoa {
    getNomeCompleto() {
      return `CLIENTE: ${this.nome} ${this.sobrenome}`;
    }
  }

  const cliente = new Cliente("Allan", "Quiterio", 20, "000.000.000-00");

  //Agora o aluno requer mais um argumento, no caso o sala
  const aluno = new Aluno("Allan", "Quiterio", 20, "000.000.000-00", "7ºI");

  console.log(aluno);
}

superClasse();
