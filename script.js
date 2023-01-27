const inquirer = require('inquirer');
const fs = require('fs');
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
        },
        {
            type: 'input',
            message: 'what did you learn',
            name: 'knowledge'
        }
    ])
    .then((answer)=>{
        const template = `# ${answer.title}
        * [Installation][#Installation]
        # Installation
        ${answer.installation}
        ## purpose
        ${answer.purpose} 
        `
        newFile(answer.title,template)
    })
    .catch((error)=>{ 
        console.log(error)
    })
    function newFile(title,template){ // 
        fs.writeFile(`./${title.toLowerCase().split(' ').join('')}.md`,template,(err)=>{
            if(err){
                console.log(err)
            }
            console.log('Your README file has been created')
        })
    }
