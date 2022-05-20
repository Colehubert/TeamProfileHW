const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(name,id, email,github){
       super(name,id,email)
       this.github = github;

    }
   
    github(){
        return this.github;
}
    getRole(){
    return 'engineer';
}
displayInfo(){
    return `<div>${this.name},${this.id}</div><h2>${this.email}</h2>
`
}
}

module.exports = Engineer;