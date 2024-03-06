function composicao() {
  class Carro {
    private readonly motor = new Motor();

    ligar() {
      this.motor.ligar();
    }

    acelerar() {
      this.motor.acelerar();
    }

    parar() {
      this.motor.parar();
    }

    desligar() {
      this.motor.desligar();
    }
  }

  class Motor {
    ligar() {
      console.log("Ligando...");
    }

    acelerar() {
      console.log("Acelerando...");
    }

    parar() {
      console.log("Parando...");
    }

    desligar() {
      console.log("Desligando...");
    }
  }

  const carro = new Carro();
  carro.ligar();
  carro.acelerar();
  carro.parar();
  carro.desligar();
}

composicao();
