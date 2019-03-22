console.log('Starting app.js');

const yargs = require('yargs');

const notes = require('./notes');

var command = process.argv[2];
var argv = yargs.argv;

console.log('Command:', command);
console.log('Argv:', process.argv);
console.log('------');
console.log(yargs.argv);

// add --title="Sport machen" --body="Fahre ins Gym."

// remove
// node app.js remove --title Einkaufen
// node app.js remove --title "Einkaufen"
// node app.js remove --title=Einkaufen
// node app.js remove --title="Einkaufen"

// list
// read --title="Sport machen"

// { title: "Einkaufen", body: "Eier, Milch, Butter."}

console.log(notes);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.listNotes();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.error('Command not recognized.');
}
