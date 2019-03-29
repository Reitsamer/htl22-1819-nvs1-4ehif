const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesAsString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesAsString);
  } catch {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();

  // TODO: add my new note to array
  var newNote = {
    title: title,
    body: body
  };

  var duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length > 0)
    return false;

  notes.push(newNote);

  saveNotes(notes);
  return true;
}

var getAllNotes = () => {
  return fetchNotes();
}

var getNote = (title) => {
  var allNotes = fetchNotes();

  var foundNote = allNotes.filter(note => note.title === title);
  return foundNote[0];
}

var removeNote = (title) => {
  var allNotes = fetchNotes();

  var notesToKeep = allNotes.filter(note => note.title !== title);

  saveNotes(notesToKeep);

  return allNotes.length != notesToKeep.length;
}

var logNote = (note) => {
    console.log(`Title: ${note.title} -- Body: ${note.body}`);
}

module.exports = {
  addNote,   // addNote: addNote
  getAllNotes,       // listNotes: listNotes
  getNote,
  removeNote,
  logNote
};
