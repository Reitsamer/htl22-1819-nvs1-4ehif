const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/'
                    + longitude
                    + ','
                    + latitude
                    + '?lang=de&units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to service.')
            return
        }

        if (body.error) {
            callback('Unable to find location.')
            return
        }

        callback(undefined, {
           summary: body.daily.data[0].summary,
           message: `It is currently ${body.currently.temperature}. There is a ${body.currently.precipProbability * 100}% chance for rain.`
        })
    })
}

module.exports = {
    forecast
}