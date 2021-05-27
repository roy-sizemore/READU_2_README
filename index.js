// Required packages and file. If you have the package.json file included with this app run 'npm install' or run 'npm init' and 'npm install fs inquirer'
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions that will be used in inquirer function
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
        choices: [
            'Apache 2.0',
            'GNU GPL 3.0',
            'MIT',
            'BSD 2-Clause Simplified',
            'BSD 3-Clause New/Revised',
            'Boost 1.0',
            'CC0 1.0',
            'Eclipse 2.0',
            'GNU Affero 3.0',
            'GNU GPL 2.0',
            'Mozilla 2.0',
            'Unlicense',
            'N/A (Not Recommended)'
        ]
    }
];

// Function to write README.md file. Requires fs
const writeToFile = (fileName, data) => {
    return fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err)
        };
    });
};

// Function to run inquirer prompt. Requires inquirer and ./utils/generateMarkdown.js
const init = () => inquirer.prompt(questions).then(answers => writeToFile('README.md', generateMarkdown(answers)));

// Runs app
init();
