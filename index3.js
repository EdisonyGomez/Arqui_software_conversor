var inquirer = require('inquirer');
var guess = 8;

var questions = [{
  type:'rawlist',
  name:'number',
  message:'Think of a number between 1 and 10:',
  choices: ['PNG', 'JPG', 'BMP', 'GIF']
}]

inquirer.prompt(questions, function(answers){

 console.log("ww")
})
