const http = require('http')

const {respondToStaticRequest} = require('./http-utils')

const server = http.createServer()

// event
server.on('request', respondToStaticRequest)

// starten
server.listen(3000, () => {
    console.log('Server running on port: 3000.')
})
