const request = require('request')

const forecast = require('./utils/forecast')

forecast.forecast(33.2, -112, (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data);
})

// TODO: call forecast here

const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

request( {url: geocodingUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to service.')
        return
    }

    if (response.body.features.length === 0) {
        console.log('Unable to find location.')
        return
    }
    
    console.log('Location:', response.body.features[0].place_name)
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]

    console.log(`Latitude: ${latitude} - Longitude: ${longitude}`)
})