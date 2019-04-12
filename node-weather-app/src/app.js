const request = require('request')

const url = 'https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/37.8267,-122.4233?lang=de&units=si'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body)

    console.log(response.body.daily.data[0].summary)
    // const data = JSON.parse(response.body)
    console.log(`It is currently ${response.body.currently.temperature}. There is a ${response.body.currently.precipProbability}% chance for rain.`);

    // 1. Print: It is currently 51.53 degrees. There is a 0% chance for rain.
    // 2. Test
})