const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0)
                return reject('Numbers must be >= 0')
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log('Result:', sum)
    return add(sum, 7)
}).then((sum) => {
    console.log('Result2:', sum)
    return add(sum, 5)
}).then(sum => {
    console.log('Result3', sum)
}).catch ((e) => {
    console.log('Error:', e)
})