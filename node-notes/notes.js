const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];

  try {
    var notesAsString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesAsString);
  } catch {

  }

  // TODO: add my new note to array
  var newNote = {
    title: title,
    body: body
  };

  notes.push(newNote);

  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var listNotes = () => {
  console.log('list');
}

var getNote = (title) => {

}

var removeNote = (title) => {

}

module.exports = {
  addNote,   // addNote: addNote
  listNotes,       // listNotes: listNotes
  getNote,
  removeNote
};
