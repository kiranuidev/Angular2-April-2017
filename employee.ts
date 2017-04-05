enum departments{
    HR,
    Sales,
    Marketing,
    IT,
    Finance
}
enum designation{
    Manager,
    TeamLead,
    AssociateMember,
    SeniorAssociate
}
class Address{
    constructor(countryname:string,
    city:string,
    pin:number){
        //class memeber
        this.country=countryname;
    }
    City:string
    State:string
    pincode:number
    country:string
    PoBox:string
}
class Employee{
    
    firstName:string
    lastName:string
    dateOfBirth:Date
    address:Address
    role:designation
    department:departments
    constructor(){
        console.log("I am executing........");
    }
}
var emp = new Employee();
emp.firstName="John";
emp.lastName="Smith";
emp.dateOfBirth= new Date(1985,10,12);

emp.address = new Address("Hyderabad","India",12345);
emp.address.City="Hyderabad";
emp.address.State="Telangana";
emp.address.pincode=12345;
emp.address.PoBox="18-393";
emp.department=departments.Finance;
console.log(emp);







