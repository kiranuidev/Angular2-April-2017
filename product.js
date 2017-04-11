var Book = (function () {
    function Book() {
    }
    return Book;
}());
var vehicle = (function () {
    function vehicle() {
    }
    return vehicle;
}());
var product = (function () {
    function product() {
    }
    product.prototype.getProducts = function () {
        return new Array();
    };
    return product;
}());
var myBooks = new product();
var vehicles = new product();
myBooks.getProducts();
vehicles.getProducts();
