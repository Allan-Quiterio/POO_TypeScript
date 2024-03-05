function protectedModificador() {
  class Empresa {
    public readonly nome: string;
    protected readonly colaboradores: Colaborador[] = []; //protected disponibiliza essa informação apenas para as subclasses, além da própria classe.
    private readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
      this.nome = nome;
      this.cnpj = cnpj;
    }
    public addColaborador(colaborador: Colaborador): void {
      this.colaboradores.push(colaborador);
    }
    public getColaboradores() {
      const colaboradores: Colaborador[] = [];
      for (const colaborador of this.colaboradores) {
        colaboradores.push(colaborador);
      }
      console.log(colaboradores);
    }
    public getNome(): string {
      return this.nome;
    }
  }

  class Allan_Enterprise extends Empresa {
    constructor() {
      super("Allan_Enterprise", "12345-98");
    }
    popColaborador(): Colaborador | null {
      const colaborador = this.colaboradores.pop();
      return colaborador ? colaborador : null;
    }
  }

  class Colaborador {
    constructor(
      public readonly nome: string,
      public readonly sobrenome: string
    ) {}
  }

  const empresa1 = new Allan_Enterprise();
  const colaborador1 = new Colaborador("Joaquim", "Phoenix");
  const colaborador2 = new Colaborador("Marcelo", "Rossi");
  empresa1.addColaborador(colaborador1);
  empresa1.addColaborador(colaborador2);

  empresa1.getColaboradores();
  empresa1.popColaborador();
  empresa1.getColaboradores();
}

protectedModificador();
