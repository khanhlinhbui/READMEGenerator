const inquirer = require('inquirer');
const question = [
    {   
        type: 'input',
        name: 'title',
        message: "what is the title of the README file?"
    }
]
inquirer 
    .prompt([
        {
            type: 'input',
            message: 'what is the title of the README?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the app for?',
            name: 'purpose'
        },
        {
            type: 'input',
            message: 'how to use this app?',
            name: 'instruction'

        },
        {
            type: 'input',
            message: 'how to install it?',
            name: 'installation'
        }
    ])
    .then((answer)=>{
        console.log(answer)
        console.log(answer.title)
        console.log(answer.purpose)
        console.log(answer.instruction)
        console.log(answer.installation)
    })
    .catch((error)=>{

    })