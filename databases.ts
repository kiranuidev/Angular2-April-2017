interface IDatabase {
    Create();
    Read();

}
class SqlDb implements IDatabase {
    Create() {

    }
    Read() {

    }
}

class OracleDB implements IDatabase {
    Create() {

    }
    Read() {

    }
}


class Database<T> implements IDatabase{
    createConnection(data: T): T {
        return data;
    }
    Create() {

    }
    Read() {

    }
}

var oracleInstance = new Database<IDatabase>();
var sqlInstance = new Database<IDatabase>();








