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
var organization = (function () {
    function organization() {
        console.log("I am the org");
    }
    return organization;
}());
var department = (function (_super) {
    __extends(department, _super);
    function department() {
        var _this = _super.call(this) || this;
        console.log("I am department");
        return _this;
    }
    return department;
}(organization));
var employee = (function (_super) {
    __extends(employee, _super);
    function employee() {
        var _this = this;
        console.log("I am employee");
        _this = _super.call(this) || this;
        return _this;
    }
    return employee;
}(department));
var kiran = new employee();
