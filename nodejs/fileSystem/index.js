const fs = require('fs');

let textIn = fs.readFileSync('./input.txt', 'utf-8');

console.log(textIn);

let content = `Data read from input.txt: ${textIn}. \nDate created ${new Date()}`

fs.writeFileSync('./output.txt', content);