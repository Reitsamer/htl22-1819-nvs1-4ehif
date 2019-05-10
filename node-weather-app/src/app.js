const request = require('request')

const { forecast } = require('./utils/forecast')
const { geocode } = require('./utils/geocode')

const location = process.argv[2]

geocode(location, (error, { latitude, longitude, place_name }) => {
    if (error) {
        console.log(error);
        return;
    }

    forecast(latitude, longitude, (error, { summary, message }) => {
        if (error) {
            console.log(error)
            return;
        }

        console.log(place_name)
        console.log(summary)
        console.log(message)
    })
})



