// Require Classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Require Inquirer node package
const inquirer = require("inquirer");

//Require FS and Path to create file
const path = require("path");
const fs = require("fs");

// Require the HTML Renderer JS File
const render = require("./lib/htmlRenderer")

// Empty employees array to new Employee objects to 
const employees = []

// EmployeeType function will determine which type of employee will be selected 
function employeeType() {
    inquirer.prompt([
        {
            type: "list",
            message: "What employee type will you be adding?",
            name: "newEmployee",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        }
    ])
        // Then > based on the response... 
        .then(response => {
            // A switch/case statement to determine which set of questions will be asked.
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
                case "Done": // Once the user is done adding employees, when selecting 'Done' in the above Inquirer prompt, will write the file of all employees entered.
                    fs.writeFileSync('./generateHTML/employees.html', render(employees))
            }
        })
}

// Call EmployeeType function
employeeType();

// The questions asked when Manager employeeType is selected
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
        // Then > Take the responses
        .then(response => {
            // Create a new Manager Object
            const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNum)
            // Push the new manager object to the employees array
            employees.push(manager);
            // Go back to Employee Type question
            employeeType();
        })
}

// Questions to ask the Engineer employee type
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
        // Then > take those responses
        .then(response => {
            //Create a new Engineer object
            const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub)
            // Push the new Engineer to the employees array
            employees.push(engineer);
            // Go back to Employee Type Question
            employeeType();
        })
}

// Questions to ask an Intern Employee type 
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
        //Then > take those responses
        .then(response => {
            // Create a new Intern object
            const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool)
            // Push the new Intern to the employees Object
            employees.push(intern);
            // Go back to the employee type question
            employeeType();
        })
}