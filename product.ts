class Book{
    author:string
}
class vehicle{
    vehicleType:string
}

class product<T>{
    getProducts():Array<T>{
        return new Array<T>();
    }
}

var myBooks = new product<Book>();
var vehicles = new product<vehicle>();

myBooks.getProducts();
vehicles.getProducts();




