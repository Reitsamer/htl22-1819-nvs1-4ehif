const { Note, LoveNote } = require('./classes')

const note = new LoveNote('The Rain in Spain', 'Falls mainly on the plain', 'Kevin')

note.body = 'bla blub'
console.log(note.title)
console.log(note.body)

console.log(note instanceof Note)