const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./lib/htmlRenderer")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

function employeeType() {
    inquirer.prompt([
        {
            type: "list",
            message: "What employee type will you be adding?",
            name: "newEmployee",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        }
    ])
        .then(response => {
            switch (response.newEmployee) {
                case "Engineer":
                    engineerQuestions();
                    break;
                case "Manager": 
                    managerQuestions();
                    break;
                case "Intern": 
                    internQuestions();
                    break;
                case "Done": 
                    // console.log(render(employees));
                    fs.writeFileSync('employees.html', render(employees))
            }
        })
}

employeeType();


function managerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is your Employee ID?",
            name: "managerID",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "managerOfficeNum",
        }
    ])
        .then(response => {
            const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNum)
            // console.log(manager);
            employees.push(manager);
            employeeType();
        })
}

function engineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Name?",
            name: "engineerName",
        },
        {
            type: "input",
            message: "What is your Employee ID?",
            name: "engineerID",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "engineerEmail",
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "engineerGithub",
        }
    ])
        .then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub)
            // console.log(engineer);
            employees.push(engineer);
            employeeType();
        })
}

function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is your Employee ID?",
            name: "internID",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "internEmail",
        },
        {
            type: "input",
            message: "What school are you attending?",
            name: "internSchool",
        }
    ])
        .then(response => {
            const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool)
            // console.log(intern);
            employees.push(intern);
            employeeType();
        })

}

function outputFile() {


}


// After the user has "input" all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated div for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
