const http = require('http')

const create = () => {

    const server = http.createServer()

    server.on('request', (request, response) => {
        const url = request.url
        const method = request.method

        console.log(url)
        console.log(method)
    })

    const start = () => {
        server.listen(3000, () => {
            console.log('Server running on port: 3000.')
        })
    }

    const get = () => {

    }

    const post = () => {

    }

    return {
        start,
        get,
        post
    }
}

module.exports = create
