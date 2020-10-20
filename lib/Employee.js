const Employee = require('../lib/Employee');

// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

    get Name() {
    return this.name; 
    }

    get Id() { 
    return this.id 
    }

    get Email() { 
    return this.email 
    }

    get Role() { 
    return "Employee" 
    }
}

module.exports = Employee;