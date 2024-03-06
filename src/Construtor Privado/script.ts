// Singleton - GoF => Cria uma instancia de determinada classe, somente uma
function construtorPrivado() {
  class Database {
    private static database: Database;

    private constructor(
      private host: string,
      private user: string,
      private password: string
    ) {}

    connect() {
      console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }

    // Factory Method - GoF => Método dentro da classe que cria um novo objeto
    static getDatabase(host: string, user: string, password: string) {
      if (Database.database) return Database.database;
      return (Database.database = new Database(host, user, password));
    }
  }

  const db1 = Database.getDatabase("localhost", "root", "123456");
  db1.connect();

  const db2 = Database.getDatabase("localhost2", "root2", "12345678");
  db2.connect();

  console.log(db1 === db2);
}

construtorPrivado();
