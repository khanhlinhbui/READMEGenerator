const inquirer = require('inquirer');
inquirer 
    .prompt([
        "what is the title of the README",
        "What is the app for",
        "how to use this app",
        "how to install it"

    ])
    .then((answer)=>{
        console.log(answer)
    })
    .catch((error)=>{

    })
console.log("hihi")
