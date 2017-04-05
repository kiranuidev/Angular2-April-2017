var departments;
(function (departments) {
    departments[departments["HR"] = 0] = "HR";
    departments[departments["Sales"] = 1] = "Sales";
    departments[departments["Marketing"] = 2] = "Marketing";
    departments[departments["IT"] = 3] = "IT";
    departments[departments["Finance"] = 4] = "Finance";
})(departments || (departments = {}));
var designation;
(function (designation) {
    designation[designation["Manager"] = 0] = "Manager";
    designation[designation["TeamLead"] = 1] = "TeamLead";
    designation[designation["AssociateMember"] = 2] = "AssociateMember";
    designation[designation["SeniorAssociate"] = 3] = "SeniorAssociate";
})(designation || (designation = {}));
var Address = (function () {
    function Address(countryname) {
        //class memeber
        this.country = countryname;
    }
    return Address;
}());
var Employee = (function () {
    function Employee() {
        console.log("I am executing........");
    }
    return Employee;
}());
var emp = new Employee();
emp.firstName = "John";
emp.lastName = "Smith";
emp.dateOfBirth = new Date(1985, 10, 12);
emp.address = new Address("India");
emp.address.City = "Hyderabad";
emp.address.State = "Telangana";
emp.address.pincode = 12345;
emp.address.PoBox = "18-393";
emp.department = departments.Finance;
console.log(emp);
