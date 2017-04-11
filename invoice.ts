
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

var myNumber = new GenericNumber<number>();
var result =myNumber.add(1,2);
myNumber.zeroValue=1;

var myString = new GenericNumber<string>();
myString.add("Kiran","paturi");
myString.zeroValue="ABCD";






