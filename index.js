// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'username',
        message: 'Please enter your GitHub username',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Please enter your preferred contact email',
        type: 'input'
    },
    {
        name: 'title',
        message: 'What would you like to call your project?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Please enter a description of your project',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Please enter the installation instructions for your project',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Please enter the usage information for your project',
        type: 'input'
    },
    {
        name: 'contributing',
        message: 'Please enter the contribution guidelines for your project',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'Please enter the testing instructions for you project?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Which license are you using for this project?',
        type: 'list',
        choices: ['MIT',
            'Apache 2.0',
            'GNU 3.0',
            'BSD 2-Clause Simplified',
            'BSD 3-Clause New/Revised',
            'Boost 1.0',
            'Creative Commons Zero Universal 1.0',
            'Eclipse Public 2.0',
            'GNU Affero 3.0',
            'GNU General Public 2.0',
            'GNU Lesser General Public 2.1',
            'Mozilla Public 2.0',
            'Unlicense',
            "N/A"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err)
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => writeToFile('README.md', generateMarkdown(answers)));
}

// Function call to initialize app
init();
