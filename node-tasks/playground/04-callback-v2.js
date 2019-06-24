const add = (a, b, callback) => {
    setTimeout(() => {
        callback(undefined, a+b)
    }, 2000)
}

add(1, 2, (error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log('Result:', result)
    add(result, 7, (error, result2) => {
        if (error) {
            return console.log(error)
        }

        console.log('Result2:', result2)
        add(result2, 5, (error, result3) => {
            if (error) {
                return console.log(error)
            }

            console.log('Result3:', result3)
        })
    })
})