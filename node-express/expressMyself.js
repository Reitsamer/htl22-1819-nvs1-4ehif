const http = require('http')

const { sendError } = require('./http-utils')

const create = () => {

    var handlers = {}

    const server = http.createServer()

    server.on('request', (request, response) => {
        const url = request.url
        const method = request.method

        console.log(url)
        console.log(method)

        const handlersForURL = handlers[url]
        if (handlersForURL === undefined)
        {
            sendError(response, 404)
            return
        }

        const handlersForMethod = handlersForURL[method]
        if (handlersForMethod === undefined)
        {
            return sendError(response, 403)
        }

        const eventHandler = handlersForMethod[0]
        eventHandler(request, response)
    })

    const start = () => {
        server.listen(3000, () => {
            console.log('Server running on port: 3000.')
        })
    }

    const get = (url, eventHandler) => {
        register(url, 'GET', eventHandler)
    }

    const post = (url, eventHandler) => {
        register(url, 'POST', eventHandler)
    }

    const register = (url, method, eventHandler) => {
        if (handlers[url] === undefined) {
            handlers[url] = {}
        }

        if (handlers[url][method] === undefined)
        {
            handlers[url][method] = []
        }

        handlers[url][method].push(eventHandler)
    }

    return {
        start,
        get,
        post
    }
}

module.exports = create
