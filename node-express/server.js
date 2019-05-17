const http = require('http')

const server = http.createServer()

// event
server.on('request', (request, response) => {
    console.log('Request received.')
    response.writeHead(200, { 
        'Content-Type': 'text/html'})
    response.end('<h1>Hello World.</h1>')
})

// starten
server.listen(3000, () => {
    console.log('Server running on port: 3000.')
})