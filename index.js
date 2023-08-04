// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is your title?',
        name: 'title'

    },
    {
        type: 'input',
        message: 'what is description?',
        name: 'description'

    },
    {
        type: 'input',
        message: 'whats is your table of contents?',
        name: 'table'

    },
    {
        type: 'input',
        message: 'what is the usage?',
        name: 'usage'

    },
    {
        type: 'input',
        message: 'what are the credits?',
        name: 'credits'

    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>{
        if (err) {
            console.error(err);
        }
        else {
            console.log("wrote the file successfully")
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
        .then((answers) => { writeToFile("README.md",generateMarkdown(answers));
        });
    }

// Function call to initialize app
init();
