function gettersAndSetters() {
  class Pessoa {
    constructor(
      private nome: string,
      private sobrenome: string,
      private idade: number,
      private _cpf: string
    ) {}
    //Nesse caso, o get e o set comportam-se como atributos
    set cpf(cpf: string) {
      this._cpf = cpf;
    }
    get cpf() {
      return this._cpf.replaceAll(".", "").replace("-", "");
    }
  }

  const pessoa = new Pessoa("Allan", "Quiterio", 20, "123.456.789-00");

  console.log(pessoa.cpf);
  pessoa.cpf = "987.654.321-00";
  console.log("Novo valor: " + pessoa.cpf);
}

gettersAndSetters();
