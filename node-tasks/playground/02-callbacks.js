const doWork = (callback) => {
    setTimeout(() => {
        // callback(undefined, [1, 4, 7])
        callback('Something went wrong')
    }, 2000)
}

doWork((error, result) => {
    if (error) {
        return console.log('Error:', error)
    }

    console.log('Result:', result)
})