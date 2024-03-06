//Diferenças de Interface para Type
interface Pessoa {
  nome: string;
}

// Declaration Merge - Nesse caso ele está juntando as propriedades já que tem o mesmo nome da interface de cima
interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: "Allan",
  sobrenome: "Quiterio",
  enderecos: ["Rua Esperança"],
  idade: 20,
};

// Como o readonly está configurado no tipo da propriedade ele não deixa adicionar
// pessoa.enderecos.push("Rua Nova") //erro

// Também não vai funcionar, pois é readonly
// pessoa.idade = 10; //erro

console.log(pessoa);
