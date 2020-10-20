// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee')

class Manager extends Employee{
    constructor(name, id, email, offNum){
        super(name, id, email);
        this.offNum = offNum;
    }

    get OfficeNumber (){
        return this.school;
    }

    get Role(){
        return "Manager"
    }
}