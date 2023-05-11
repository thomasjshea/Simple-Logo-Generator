# Simple SVG logo Generator

![License Badge](https://img.shields.io/bower/l/CSS?style=for-the-badge)

## Description

As a web developer, I want to be able to include my logo on my projects, so that users can relate the project to my design. This simple SVG logo generator will allow any developer to create a simple logo to add to their projects without having to hire a graphic designer. 

## Installation

To install this application, you will need to navigate to my Github repository at [https://github.com/thomasjshea/Simple-Logo-Generator](https://github.com/thomasjshea/Simple-Logo-Generator) and clone the repository to your machine. You will need to navigate to the repo using your command line, and once there run the command npm i to install the dependencies required to run the application. 

## Usage

After cloning the repository, navigating to the repository using the command line and installing the dependencies, the application is very simple to use. 

The application runs in the command line, the user will not have to navigate anywhere. 

- The user will enter the command "node index.js" to start the application
- Inquirer will prompt the user with four questions to generate the logo
- If the user answers all prompts, the logo will be successfully generated. 
- If the user fails to answer all prompts, or if the user selects a color that does not exist or uses more than three characters for their name, an error message will generate
- I have included tests in this repo. To run the tests, just enter the command "npm run test" into the command line"

## Credits

This application uses the following packages and technologies:
- Inquirer
- Jest

## License

This application uses the MIT license