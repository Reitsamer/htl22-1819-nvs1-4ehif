const fs = require('fs');
const os = require('os');

//console.log();

const user = os.userInfo();

console.log(user.username);

//Console.WriteLine($"Hallo {user}");

// template string
fs.appendFileSync('greetings.txt', `Hello, ${user.username}!`);
