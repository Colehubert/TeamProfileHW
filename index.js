const inquirer = require(inquirer)
const team_members = ()
function intern(){inquirer.prompt({type:"input",name:"intern_name",message:"what is the interns name ?"},
{type:"input",name:"id",message:"What is the interns id?"},
{type:"input",name:"email",message:"what is the interns email?"},
{type:"input",name:"school",message:"what school does the intern go too ?"}).then((answers)=>{const intern = new intern(answers.internname,answers.id,answers.email,answers.school)},team_members.push(intern))}


function engineer(){inquirer.prompt({type:"input",name:"engineer_name",message:"what is the engineers name ?"},
{type:"input",name:"id",message:"What is the engineers id?"},
{type:"input",name:"email",message:"what is the engineers email?"},
{type:"input",name:"school",message:"what school does the engineer go too ?"}).then((answers)=>{const engineer = new engineer(answers.engineername,answers.id,answers.email,answers.school)},team_members.push(engineer))}



function manager(){inquirer.prompt({type:"input",name:"manager_name",message:"what is the managers name ?"},
{type:"input",name:"id",message:"What is the managers id?"},
{type:"input",name:"email",message:"what is the managers email?"},
{type:"input",name:"school",message:"what school does the managers go too ?"}).then((answers)=>{const manager = new manager(answers.managername,answers.id,answers.email,answers.school)},team_members.push(manager))}