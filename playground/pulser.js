const EventEmitter = require('events');

class Pulser extends EventEmitter {
    start() {
        setInterval(() => {
            this.emit('pulse', 'Hallo', 'Test', 'das', 'ist', 'ein', 'Programm')
        }, 1000)
    }
}

module.exports = Pulser