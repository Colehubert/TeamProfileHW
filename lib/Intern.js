const Employee = require("./Employee")
class Intern extends Employee {
    constructor(name,id, email,school){
       super(name,id,email)
       this.school = school;
    
    }
   
    school(){
        return this.school;
}
    getRole(){
    return 'intern';
}
displayInfo(){
    return `<div>${this.name},${this.id}</div><h2>${this.email}</h2>
`
}

}

module.exports = Intern;