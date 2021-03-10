const inquirer = require('inquirer')
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt')

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)

inquirer
  .prompt([
    {
      type: 'file-tree-scelection',
      name: 'file'
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers))
  });