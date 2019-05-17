class Note {
    constructor(title, body) {
        this._title = title
        this._body = body
    }

    get title() { return this._title }

    get body() { return this._body }
    set body(newBody) { return this._body = newBody }
}

class LoveNote extends Note {
    constructor(title, body, valentine) {
        super(title, body)
        this._valentine = valentine
    }

    get valentine() { return this._valentine }
}

module.exports = { Note, LoveNote }
