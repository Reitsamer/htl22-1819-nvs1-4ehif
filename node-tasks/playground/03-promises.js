const doWork = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 4, 7])
        reject('Something went wrong')
    }, 2000)
})

doWork.then((result) => {
    console.log('Result:', result)
}).catch((error) => {
    console.log('Error:', error)
})