function classes() {
  class Empresa {
    readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
      this.nome = nome;
      this.cnpj = cnpj;
    }
    addColaborador(colaborador: Colaborador): void {
      this.colaboradores.push(colaborador);
    }
    getColaboradores() {
      for (const colaborador of this.colaboradores) {
        console.log(colaborador);
      }
    }
  }

  //Forma mais curta de declarar e iniciar um construtor de uma classe
  //Uma classe pode servir como um tipo de dados também
  class Colaborador {
    constructor(
      public readonly nome: string,
      public readonly sobrenome: string
    ) {}
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
