const inquirer = require('inquirer');

const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt');

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);


const getfileOrigin = (answers) => {
    let arr_answers = [];
    arr_answers.push(answers);
    let file_path = arr_answers[0].file;
    let file = file_path.split("\\").pop();
    return file;
}


inquirer.prompt([{
    type: 'file-tree-selection',
    name: 'file',        
    },{
      type: 'rawlist',  
      name: 'imagen',
      message: '¿A que formato desea convertir',
      choices: ['png', 'jpg', 'bmp', 'gif']
    }]).then(answers => {        
          
            const Jimp = require("jimp")
            Jimp.read(getfileOrigin(answers)).then(image => {
            image.write('nueva.'+answers.imagen);      
            console.log("Completado con exito");
            });         
          
    });

    
