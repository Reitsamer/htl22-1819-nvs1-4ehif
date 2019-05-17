const Pulser = require('./pulser')

const pulser = new Pulser()

pulser.on('pulse', (arg1, arg2, ...theArgs) => {
    console.log(`${new Date()}: pulse received : ${arg1}, ${arg2}`)
    console.log(theArgs)
})

pulser.start()