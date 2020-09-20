const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7ddc39b93e817de50145cfabfa90d675&query='+latitude +','+longitude
    request({url: url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, 'It is currently '+body.current.temperature+' degress out. It feels like '+body.current.feelslike)
        }
    })
}

module.exports = forecast