const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const writeFileAsync = util.promisify(fs.writeFile);
const render = require("./lib/htmlRenderer");

// An array containing completed Employees, in the form of objects.
const employees = [];

function promptUser(questionSet) {
  return inquirer.prompt(questionSet);
}

const initQuestions = [
  {
    type:"input",
    name:"engineerCount",
    message:"How many engineers will be in the team?"
  },
  {
    type:"input",
    name:"internCount",
    message:"How many interns will be in the team?"
  }
]

const managerQuestions = [
  {
    type:"input",
    name:"name",
    message:"What is the manager's name?"
  },
  {
    type:"input",
    name:"email",
    message:"What is the manager's email?"
  },
  {
    type:"input",
    name:"officeNumber",
    message:"What office number do they manage?"
  }
]

const internQuestions = [
  {
    type:"input",
    name:"name",
    message:"What is this intern's name?"
  },
  {
    type:"input",
    name:"email",
    message:"What is this intern's email?"
  },
  {
    type:"input",
    name:"school",
    message:"What school do they attend?"
  }
]

const engineerQuestions = [
  {
    type:"input",
    name:"name",
    message:"What is this engineer's name?"
  },
  {
    type:"input",
    name:"email",
    message:"What is this engineer's email?"
  },
  {
    type:"input",
    name:"github",
    message:"What is their Github URL?"
  }
]

async function init() {
  console.log("Team Templater 2020");
  console.log("Welcome, Admin. Please follow the below prompts.");
  console.log("All teams must have 1 manager, per head office rules.");
  let initInput = await promptUser(initQuestions);
  await employeeLoop("Manager",1);
  await employeeLoop("Engineer",initInput.engineerCount);
  await employeeLoop("Intern",initInput.internCount);
  render(employees);
}

async function employeeLoop(role,x) {
  let roleQuestions = [];
  switch (role) {
    case "Manager":
      roleQuestions = managerQuestions;
      break;
    case "Engineer":
      roleQuestions = engineerQuestions;
      break;
    case "Intern":
      roleQuestions = internQuestions;
      break;
    default:
      console.log("Error: Role not provided.");
      break;
  }
  for (var i = 1; i <= x; i++) {
    console.log("Employee: " + role + " " + i);
    let input = await promptUser(roleQuestions);
    switch (role) {
      case "Manager":
        employees.push(new Manager(input.name,employees.length+1,input.email,input.officeNumber));
        break;
      case "Engineer":
        employees.push(new Engineer(input.name,employees.length+1,input.email,input.github));
        break;
      case "Intern":
        employees.push(new Intern(input.name,employees.length+1, input.email,input.school));
        break;
      default:
        console.log("Error: Role not provided.");
    }
    console.log(input);
    console.log(employees);
  }
  
}

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```