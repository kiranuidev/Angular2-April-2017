interface IDatabase {
    create():void;
    read():string;
    update();
    delete();
}
interface ISqlDatabase{
    sqlDataReader();
    
}
interface IConnection{
    connectionString();
    connectionOpen();
    connectionClose();
}
class Database implements IDatabase,IConnection{
  create() { }
    read():string {
        return "abcd";
     }
    update() { }
    delete() { }
    connectionString(){}
    connectionOpen(){}
    connectionClose(){}


}
class DatabaseSql extends Database implements ISqlDatabase  {
  sqlDataReader(){

  }
}

class DatabaseOracle {
    create() { }
    read() { }
    update() { }
    delete() { }
}