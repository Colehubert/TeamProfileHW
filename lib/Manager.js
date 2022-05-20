//`officeNumber`


//`getRole()—overridden to return 'Manager'`

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager'
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    displayInfo(){
        return `<div>${this.name},${this.id}</div><h2>${this.email}</h2>
`
    }
}

module.exports = Manager;