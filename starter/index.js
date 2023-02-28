const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the porpouse of your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please list any programs that you had to downoald to create the project",
    },
    {
        type: "checkbox",
        name: "license",
        message: "What type of license are you using?",
        choices: ["MIT","APACHE2.0","MPL2.0","BSD2","BSD3","N/A"]
    },
    {
        type: "input",
        name: "acknowldegments",
        message: "Please list any useful resources that you used for this project",
    },
    {
        type: "input",
        name: "contact",
        message: "Please provide your GitHub username",
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address",
    },
    {
        type: "input",
        name: "collaborators",
        message: "Please provide your GitHub username if you want to collaborate with this project",
    },


];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating professional README file...");
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    });

}

// function call to initialize program
init();
