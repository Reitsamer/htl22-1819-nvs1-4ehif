const request = require('request')

const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

forecast.forecast(33.2, -112, (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data);
})

geocode.geocode('Vienna', (error, data) => {
    console.log('Error (GC):', error)
    console.log('Data: (GC)', data);
})
