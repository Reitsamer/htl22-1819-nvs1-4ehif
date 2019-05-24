const http = require('http')
const fs = require('fs')

const contentTypes = {
    'html': 'text/html',
    'js': 'text/javascript',
    'css': 'text/css',
    'ico': 'image/x-icon',
    'jpg': 'image/x-icon'
}

const respondToStaticRequest = (request, response) => {
    var filename = getFilename(request)
    var fileExtension = getExtension(filename)

    var contentType = contentTypes[fileExtension]
    if (contentType === undefined)
    {
        sendError(response, 400)
        return
    }

    if (!fs.existsSync(filename)) {
        sendError(response, 404)
        return
    }

    sendFile(response, contentType, filename)
}

const getFilename = (request) => {
    var filename = request.url
    if (filename === '/')
        filename = '/index.html'

    return 'public_html' + filename
}

const getExtension = (filename) => {
    var parts = filename.split('.')
    return parts[parts.length-1]
}

const sendFile = (res, contentType, filename) => {
    var fileContent = fs.readFileSync(filename)
 
    res.statusCode = 200
    res.contentType = contentType
    res.write(fileContent)
    res.end()
}

const sendError = (res, errorCode) => {
    res.statusCode = errorCode
    res.setHeader('Content-Type', 'text/plain')
    res.write('Error: ' + errorCode)
    res.end()
}

module.exports = {
    respondToStaticRequest
}