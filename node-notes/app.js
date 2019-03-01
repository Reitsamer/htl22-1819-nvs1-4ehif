console.log('Starting app.js');

const notes = require('./notes');

console.log(notes);

var alter = notes.age + 2;

console.log(alter);

var result = notes.add(5,7);
console.log('Result:', result);
