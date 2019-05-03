const request = require('request')

const forecast = (callback) => {
    const url = 'https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/37.8267,-122.4233?lang=de&units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log('Unable to connect to service.')
            return
        }

        if (response.body.error) {
            console.log('Unable to find location.')
            return
        }

        console.log(response.body.daily.data[0].summary)
        // const data = JSON.parse(response.body)
        console.log(`It is currently ${response.body.currently.temperature}. There is a ${response.body.currently.precipProbability}% chance for rain.`);
    })
}