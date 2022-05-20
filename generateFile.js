const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
function generateFile(answers,type){
    if(type=='intern'){
        const intern = new Intern(answers.intern_name, answers.id, answers.email, answers.school) 
        return intern.displayInfo()
    }else if(type=='manager'){
        const manager = new Manager(answers.manager_name, answers.id, answers.email, answers.office_number) 
        return manager.displayInfo()
    }else if (type=='engineer'){
        const engineer = new Engineer(answers.engineer_name, answers.id, answers.email, answers.github) 
        return engineer.displayInfo()
    }
}
module.exports = generateFile;