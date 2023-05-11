// import required packages to run this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateLogo = require('./lib/generateLogo')

// import helper functions
const shapes = require('./lib/shapes.js')

// Create a question array for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message:'Please input text for your logo. (Maximum 3 characters)',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please select a color for your logo text. (Color Keyword or Hexcode)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape from the list below,',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        name: 'background',
        message: 'Please select a background color for your logo. (Color Keyword or Hexcode)'
    },
]

// Write to the .svg file
function writeToFile(data) {
    let fileName = './examples/logo.svg';
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    })
}

// Function to intitalize 
const init = () => {
    inquirer
    .prompt(questions)
    .then((answers) => writeToFile(generateLogo(answers)))
    .catch((err) => console.log(err))
}

init()
        