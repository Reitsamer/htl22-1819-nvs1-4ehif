// const http = require('http')

// const {respondToStaticRequest} = require('./http-utils')

// const server = http.createServer()

// // event
// server.on('request', respondToStaticRequest)

// // starten
// server.listen(3000, () => {
//     console.log('Server running on port: 3000.')
// })


const express = require('./expressMyself')

const app = express()

// localhost:3000/HelloWorld
app.get('/HelloWorld', (req, res) => {
    sendMessage(res, 'Hello World!')
})

app.post('/HelloWorld', (req, res) => {

})

// localhost:3000/HelloYou
app.get('/HelloYou', (req, res) => {
    sendMessage(res, 'Hello You!')
})

// localhost:3000/ServerTime
app.get('/ServerTime', (req, res) => {
    sendMessage(res, 'Server time is: ' + Date())
})

const sendMessage = (res, message) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write(message)
    res.end()
}

app.start()