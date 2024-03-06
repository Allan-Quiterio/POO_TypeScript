"use strict";
function construtorPrivado() {
    class Database {
        host;
        user;
        password;
        static database;
        constructor(host, user, password) {
            this.host = host;
            this.user = user;
            this.password = password;
        }
        connect() {
            console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
        }
        static getDatabase(host, user, password) {
            if (Database.database)
                return Database.database;
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
