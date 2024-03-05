function staticMethod() {
  class Pessoa {
    // Criando propriedades estaticas
    static idadePadrao = 0;
    static cpfPadrao = "000.000.000-00";
    constructor(
      public nome: string,
      public sobrenome: string,
      public idade: number,
      public cpf: string
    ) {}

    // Utilizando propriedades estaticas através de funcoes internas
    metodoNormal() {
      console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
    static falaOi() {
      console.log("Hello");
    }

    // Criando uma funcao estatica que instancia uma nova classe
    static criaPessoa(nome: string, sobrenome: string) {
      return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
  }

  const pessoa = new Pessoa("Allan", "Quiterio", 20, "123.456.789-00");
  const pessoa2 = Pessoa.criaPessoa("Allan", "Quiterio");

  pessoa.cpf = "987.654.321-00";
  console.log(pessoa);
  // É dessa forma que o método estático é acessado, diretamente na classe e não pela instância
  Pessoa.falaOi();

  console.log(pessoa2);

  pessoa2.metodoNormal();
}

staticMethod();
