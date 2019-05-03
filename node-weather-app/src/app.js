const request = require('request')

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

// const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

// request( {url: geocodingUrl, json: true}, (error, response) => {
//     console.log('Location:', response.body.features[0].place_name)
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]

//     console.log(`Latitude: ${latitude} - Longitude: ${longitude}`)
// })