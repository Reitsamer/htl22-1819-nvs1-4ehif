// CRUD create

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'task-manager-4ehif';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // db.collection('tasks').insertOne({
    //     description: 'Clean the house',
    //     completed: true
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Something went wrong:', error)
    //     }
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Take a break',
            completed: false
        },
        {
            description: "Clean the car",
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Something went wrong:', error)
        }
        console.log(result.ops)
    })

    client.close();
});