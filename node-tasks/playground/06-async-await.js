const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0)
                return reject('Numbers must be >= 0')
            resolve(a + b)
        }, 2000)
    })
}

const myFunc = async () => {
    const sum = await add(1, 2)
    const sum2 = await add(sum, 7)
    const sum3 = await add(sum2, 5)
    return sum3
}

myFunc().then(result => {
    console.log('Result:', result)
}).catch(error => {
    console.log('Error:', error)
})