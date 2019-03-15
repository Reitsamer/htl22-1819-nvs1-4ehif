console.log('Starting app.js');

const notes = require('./notes');

var command = process.argv[2];

console.log('Command:', command);
console.log('Argv:', process.argv);

// add

// remove
// node app.js remove --title Einkaufen
// node app.js remove --title "Einkaufen"
// node app.js remove --title=Einkaufen
// node app.js remove --title="Einkaufen"

// list
// read

// { title: "Einkaufen", body: "Eier, Milch, Butter."}

console.log(notes);

const title = 'Test';
const body = 'Bla bla bla';

if (command === 'add') {
  notes.addNote(title, body);
} else if (command === 'list') {

} else if (command === 'read') {

} else if (command === 'remove') {

} else {
  console.error('Command not recognized.');
}
