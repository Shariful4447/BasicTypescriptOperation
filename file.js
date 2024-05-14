const fs = require('fs');
// reading file contents
const readText = fs.readFileSync('./text/read.text', 'utf-8');

// writing a  text
const writtenText = fs.writeFileSync('./text/write.text', readText + 'this my text');

console.log(writtenText);
