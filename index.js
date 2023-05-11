// import required packages to run this application
const inquirer = require('inquirer')
const fs = require('fs')

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
        name: 'textColor',
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
        name: 'shapeColor',
        message: 'Please select a background color for your logo. (Color Keyword or Hexcode)'
    },
]

// Write to the .svg file
const writeToFile = (fileName, logoContent) => {
    fs.writeFile('./examples/' + fileName, logoContent, (err) => {
        err ? console.error(err) : console.log(`Successfully created SVG file`)
    })
}

// Function to intitalize 
const init = () => {
    inquirer
    .prompt(questions)
    .then((data) => {
        const fileName = `${data.shape}.svg`
        const logoContent = shapes(data)
        writeToFile(fileName, logoContent)
    })
}

init()
        