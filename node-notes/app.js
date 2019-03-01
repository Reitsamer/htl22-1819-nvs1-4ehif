console.log('Starting app.js');

const notes = require('./notes');

var command = process.argv[2];

console.log('Command:', command);
console.log('Argv:', process.argv);

// add

// remove
// node app.js remove --title Mein Hund
// node app.js remove --title "Hund"
// node app.js remove --title=Hund
// node app.js remove --title="Hund"

// list
// read

// { title: "Mein Hund", body: "Geh mit dem Hund spazieren."}
