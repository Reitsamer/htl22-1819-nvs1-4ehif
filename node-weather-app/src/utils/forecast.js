const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/'
                    + latitude
                    + ','
                    + longitude
                    + '?lang=de&units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to service.')
            return
        }

        if (response.body.error) {
            callback('Unable to find location.')
            return
        }

        callback(undefined, {
           summary: response.body.daily.data[0].summary,
           message: `It is currently ${response.body.currently.temperature}. There is a ${response.body.currently.precipProbability}% chance for rain.`
        })
    })
}

module.exports = {
    forecast
}