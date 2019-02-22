const fs = require('fs');
const os = require('os');

//console.log();

const user = os.userInfo();

//Console.WriteLine($"Hallo {user}");


console.log(user.username);

// template string
fs.appendFileSync('greetings.txt', `Hello, ${user.username}!`);
