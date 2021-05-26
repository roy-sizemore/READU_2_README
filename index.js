// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'Please enter your GitHub username',
    'Please enter your preferred contact email',
    'What would you like to call your project?',
    'Please enter a description of your project',
    'Please enter the installation instructions for your project',
    'Please enter the usage information for your project',
    'Please enter the contribution guidelines for your project',
    'Please enter the testing instructions for you project?',
    'Which license are you using for this project?'
    ];

inquirer
    .prompt([
        {
            name: 'username',
            message: questions[0],
            type: 'input'
        },
        {
            name: 'email',
            message: questions[1],
            type: 'input'
        },
        {
            name: 'title',
            message: questions[2],
            type: 'input'
        },
        {
            name: 'description',
            message: questions[3],
            type: 'input'
        },
        {
            name: 'installation',
            message: questions[4],
            type: 'input'
        },
        {
            name: 'usage',
            message: questions[5],
            type: 'input'
        },
        {
            name: 'contributing',
            message: questions[6],
            type: 'input'
        },
        {
            name: 'tests',
            message: questions[7],
            type: 'input'
        },
        {
            name: 'license',
            message: questions[8],
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
                "I'm not using a license for this project"
            ]
    }
]).then(answers => {
        console.log(answers);

    })

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeToFile(fileName, (answers) => {
        return;
    });
};

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
