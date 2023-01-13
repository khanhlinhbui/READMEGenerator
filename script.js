const inquirer = require('inquirer');
const question = [
    {   
        type: "input",
        name: "title",
        message: "what is the title of the README file?"
    }
]
inquirer 
    .prompt([
        "what is the title of the README",
        "What is the app for",
        "how to use this app",
        "how to install it",

    ])
    .then((answer)=>{
        console.log(answer)
    })
    .catch((error)=>{

    })
console.log("hihi")
console.log(question)
