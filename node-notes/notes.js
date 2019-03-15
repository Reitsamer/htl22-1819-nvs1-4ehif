// console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('addNote:', title, body);
}

var listNotes = function() {
  console.log('list');
}

module.exports = {
  addNote,   // addNote: addNote
  listNotes       // listNotes: listNotes
};
