const yargs = require('yargs');

const notes = require('./notes');

var command = process.argv[2];
var argv = yargs.argv;

// add --title="Sport machen" --body="Fahre ins Gym."

// remove
// node app.js remove --title Einkaufen
// node app.js remove --title "Einkaufen"
// node app.js remove --title=Einkaufen
// node app.js remove --title="Einkaufen"

// list
// read --title="Sport machen"

// { title: "Einkaufen", body: "Eier, Milch, Butter."}

if (command === 'add') {
  if (notes.addNote(argv.title, argv.body)) {
    console.log('Added note successfully.');
  } else {
    console.log('Note already existed.');
  }
} else if (command === 'list') {

  var allNotes = notes.getAllNotes();
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {

  var foundNote = notes.getNote(argv.title);
  if (foundNote) {
    notes.logNote(foundNote);
  } else {
    console.log('Note not found.');
  }

} else if (command === 'remove') {
  if (notes.removeNote(argv.title)) {
    console.log('Note removed.');
  } else {
    console.log('Note not found.');
  }
} else {
  console.error('Command not recognized.');
}
