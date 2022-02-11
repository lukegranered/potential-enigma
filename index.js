// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// Questions to ask:
//  - What is your name?
//  - What is the name of your project?
//  - What is your GitHub username?
//  - What is your email?
//  - Choose a license from the following options.
//  - Provide a short description explaining why you built this project and the problem it solves.
//  - What are the steps required to install your project?
//  - Provide instructions and examples for use.
//  - Did anyone collaborate on this project?
//  - Would you like to include any test instructions in this README?

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license.',
            choices: ''
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license!');
                    return false;
                }
            }
        },
        {
            type:''
            name:''
            message:''
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type:''
            name:''
            message:''
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type:''
            name:''
            message:''
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type:''
            name:''
            message:''
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type:''
            name:''
            message:''
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type:''
            name:''
            message:''
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type:''
            name:''
            message:''
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
