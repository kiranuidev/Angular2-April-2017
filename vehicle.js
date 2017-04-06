var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = (function () {
    function vehicle() {
    }
    return vehicle;
}());
var bike = (function (_super) {
    __extends(bike, _super);
    function bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bike;
}(vehicle));
var cruise = (function (_super) {
    __extends(cruise, _super);
    function cruise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cruise;
}(vehicle));
var fz = new bike();
fz.doors = 0;
fz.engine = "400cc";
fz.gears = 5;
fz.model = "Yamaha";
