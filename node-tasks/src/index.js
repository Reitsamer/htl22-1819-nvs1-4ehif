const express = require('express')
const app = express()
const port = 3000

var router = express.Router()

app.use(express.json())

router.route('/v1')
    .get((req, res) => {
        res.send('Hello World!')
    })
    .post((req, res) => {
        // const name = req.body.name;
        console.log(req.body)

        res.status(201).send({
            name: 'Thomas',
            age: 21
        })
    })
    .patch((req, res) => {
        res.status(403).send('Something went wrong')
    })
    .delete((req, res) => {
        res.status(418).send('Teapot')
    })

app.listen(port, () => console.log(`Task app listening on port ${port}!`))