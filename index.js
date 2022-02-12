// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
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

const promptUser = readmeData => {
    readmeData = [];
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
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
            message: 'Please enter a link to your launched application',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter a link to your launched application!');
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
                    console.log('Please enter your projects GitHub repository!');
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
            choices: ['Apache', 'GPL', 'MIT', 'BSD', 'None', 'Other'],
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
            type: 'input',
            name: 'about',
            message: 'Provide a short description explaining why you built this project and the problem it solves.',
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('Please a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation info!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for use!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'collab',
            message: 'Please enter any a list of any collaborators on this project. If there were no collaborators type NONE.',
            validate: collabInput => {
                if (collabInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter any test instructions you would like to include. If none, type NONE.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
    .then(readmeData => {
        console.log(readmeData);
        return readmeData;
    })
}

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README created!',
            });
        });
    });
}

// Function call to initialize app
promptUser()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(pageMarkdown => {
        return writeToFile(pageMarkdown);
    })
