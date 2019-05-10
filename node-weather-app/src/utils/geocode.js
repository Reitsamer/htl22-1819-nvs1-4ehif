const request = require('request')

const geocode = (location, callback) => {
    const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
                + encodeURIComponent(location)
                + '.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

    request({ url: geocodingUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to service.')
            return
        }

        if (response.body.features.length === 0) {
            callback('Unable to find location.')
            return
        }

        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]

        callback(undefined, {
            latitude,
            longitude
        })
    })
}

module.exports = { geocode }