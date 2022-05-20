const inquirer = require('inquirer')
const team_members = []
const  generateFile  = require('./generateFile');
const fs = require('fs');
function intern() {
    //inquirer.prompt({ type: "input", name: "intern_name", message: "what is the interns name ?" },
    //  { type: "input", name: "id", message: "What is the interns id?" },
    //  { type: "input", name: "email", message: "what is the interns email?" },
    //  { type: "input", name: "school", message: "what school does the intern go too ?" }).then((answers) => { const intern = new intern(answers.internname, answers.id, answers.email, answers.school) }, team_members.push(intern))
    const questions = [{
        type: 'input',
        name: 'intern_name',
        message: 'what is the interns name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is the interns email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'what school does the intern go too ?',
    }

    ];
    inquirer.prompt(questions).then((answers)=> {
      // 
    //    team_members.push(intern)
       // console.log(team_members);
        const file =   generateFile(answers,'intern');
        fs.appendFile('TeamFileGenerator.html',file, (err)=>{
            if(err){
                console.log(err)
            }
            console.log("file generated");
        })
    });
    
} 


//intern();

function engineer() {
    inquirer.prompt([{ type: "input", name: "engineer_name", message: "what is the engineers name ?" },
        { type: "input", name: "id", message: "What is the engineers id?" },
        { type: "input", name: "email", message: "what is the engineers email?" },
        { type: "input", name: "github", message: "what is your Github" }]).then((answers) => {
            const file =   generateFile(answers,'engineer');
            fs.appendFile('TeamFileGenerator.html',file, (err)=>{
                if(err){
                    console.log(err)
                }
                console.log("file generated");
            })
        });  
}
//engineer();


function manager() {
    inquirer.prompt([{ type: "input", name: "manager_name", message: "what is the managers name ?" },
        { type: "input", name: "id", message: "What is the managers id?" },
        { type: "input", name: "email", message: "what is the managers email?" },
        { type: "input", name: "office_number", message: "what is your office number?" }]).then((answers) => {
            const file =   generateFile(answers,'manager');
            fs.appendFile('TeamFileGenerator.html',file, (err)=>{
                if(err){
                    console.log(err)
                }
                console.log("file generated");
            })
        });
}
//manager();

function init(){
    inquirer.prompt({
        type: 'input',
        name: 'employee_type',
        message: 'What type of employee would you like to add? (intern,manager,engineer)',
    }).then((answer)=> {
     const type = answer.employee_type
        if(type=='intern'){
            intern()
        } else if (type=='manager'){
            manager()
        }else if (type=='engineer'){
            engineer()
        }else {
            //exit()
        }

    })
}
init()
