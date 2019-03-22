console.log('Starting app.js');

const notes = require('./notes');

var command = process.argv[2];

console.log('Command:', command);
console.log('Argv:', process.argv);

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

const title = 'Test';
const body = 'Bla bla bla';

if (command === 'add') {
  notes.addNote(title, body);
} else if (command === 'list') {
  notes.listNotes();
} else if (command === 'read') {
  notes.getNote(title);
} else if (command === 'remove') {
  notes.removeNote(title);
} else {
  console.error('Command not recognized.');
}
