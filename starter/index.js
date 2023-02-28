const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the usage of your project?",
    },
    {
        type: "input",
        name: "Installation",
        message: "Please list any programs that you had to downoald to create the project",
    },
    {
        type: "checkbox",
        name: "License",
        message: "What type of license are you using?",
        choices: ["MIT","APACHE2.0","MPL2.0","BSD2","BSD3","N/A"]
    },
    {
        type: "input",
        name: "Acknowldegments",
        message: "Please list any useful resources that you used for this project",
    },
    {
        type: "input",
        name: "Contact",
        message: "Please provide your contact information and a link to your GitHub repository",
    },
    {
        type: "input",
        name: "Collaborators",
        message: "Please provide details on how to collaborate with this project",
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
        writeToFile("./")
    })

}

// function call to initialize program
init();
