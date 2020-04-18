const request = require('request')

const weatherReport = (coords, callback) => {
    const stackUrl = 'http://api.weatherstack.com/current?access_key=d89c8416a1777407d4de90e1172d5424&query=' + coords
    
    request({ url: stackUrl, json: true }, (error, response) => {
            if (error) 
                console.log(error);
            else{
                callback(response,error)
            }
    });
}

module.exports = weatherReport
