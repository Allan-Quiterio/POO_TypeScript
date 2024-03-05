function publicEPrivate() {
  class Empresa {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
      this.nome = nome;
      this.cnpj = cnpj;
    }
    public addColaborador(colaborador: Colaborador): void {
      this.colaboradores.push(colaborador);
    }
    public getColaboradores() {
      for (const colaborador of this.colaboradores) {
        console.log(colaborador);
      }
    }
    public getNome(): string {
      return this.nome;
    }
  }

  //Para o atalho, é obrigatório adicionar o modificador, até o public
  class Colaborador {
    constructor(
      public readonly nome: string,
      public readonly sobrenome: string
    ) {}
  }

  const empresa1 = new Empresa("Allan_Enterprise", "12345-98");
  const colaborador1 = new Colaborador("Joaquim", "Phoenix");
  const colaborador2 = new Colaborador("Marcelo", "Rossi");

  empresa1.addColaborador(colaborador1);
  empresa1.addColaborador(colaborador2);

  empresa1.getColaboradores();

  console.log(empresa1.getNome());
  console.log(empresa1.nome);
}

publicEPrivate();
