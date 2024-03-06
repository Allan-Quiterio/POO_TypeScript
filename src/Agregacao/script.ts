function agregacao() {
  // O nível de dependência de Produto para CarrinhoCompras é bem grande, garantindo uma Agregação de classes
  class CarrinhoCompras {
    private readonly produtos: Produto[] = [];

    inserirProduto(...produtos: Produto[]) {
      for (const produto of produtos) {
        this.produtos.push(produto);
      }
    }
    quantidadeProdutos() {
      console.log(this.produtos.length);
    }

    valorTotal() {
      const total = this.produtos.reduce((soma, prod) => {
        return soma + prod.preco;
      }, 0);
      console.log(total);
    }
  }

  class Produto {
    constructor(public nome: string, public preco: number) {}
  }

  const produto1 = new Produto("tv", 2999.9);
  const produto2 = new Produto("dvd", 499.9);
  const produto3 = new Produto("som", 999.9);
  const carrinho = new CarrinhoCompras();

  carrinho.inserirProduto(produto1, produto2, produto3);

  console.log(carrinho);
  carrinho.quantidadeProdutos();
  carrinho.valorTotal();
}

agregacao();
