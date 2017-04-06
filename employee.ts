class organization{
    companyname:string
    constructor(){
        console.log("I am the org");
    }
}

class department extends organization{
    constructor(){
               super();
        console.log("I am department");
 
    }
    departmentName:string
}
class employee extends department{
    constructor(){
         super();
         console.log("I am employee");
    }
    firstName:string
    lastName:string
    getFullName():string{
        return this.firstName+this.lastName+"belongs to"+this.companyname;
    }
}
//declaring function outside the class.
//void is a keyword which indicate the function
//donot have a return type
function getDetails():void{

}
//in the below example function returns a string.
function getFullName():string{
    return "kiran paturi";
}
//in the below example function returns a boolean.
function iAgree():boolean{
    return false;
}

var kiran = new employee();
kiran.getFullName();