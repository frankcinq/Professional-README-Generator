// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // this brings in a node package in your node modules folder
const fs = require("fs"); // this is already packaged with node.js and just needs to be imported
const generateMarkdown = require("./utils/generateMarkdown"); // thjis was exported from a file in your directory, make sure name and path are correct

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your projects title?",
  },
  {
    type: "checkbox",
    message: "What languages do you know?",
    name: "stack",
    choices: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    type: "list",
    message: "What is your preferred method of communication?",
    name: "contact",
    choices: ["email", "phone", "telekinesis"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      if (err) console.log(err);
    });
}

// Function call to initialize app
init();

//  good luck
