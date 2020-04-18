const request = require('request')

const geocode = (data, callback) => {
    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(data) + '.json?access_token=pk.eyJ1Ijoic2hhcm1hdmFpYmhhdjAxMDMiLCJhIjoiY2s5MTE5am8yMDAzYzNtcWVoeGVrMjgzZiJ9.oxBEGXeB0X-Z3B6TzZDotQ';

    request({ url: geoCodeUrl, json: true }, (error, response) => {
        if(error)
            callback('',error)
        else if(response.body.features.length === 0)
            callback('',error)
        else{
            callback(response.body.features[1].center)
        }
    })

}

module.exports = geocode