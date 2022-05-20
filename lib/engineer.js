const Employee = require("./Employee")
class engineer extends Employee {
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

}

module.exports = engineer;