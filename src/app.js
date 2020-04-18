const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

//weatherfiles
const geocode = require('../src/utils/geocode')
const weather = require('../src/utils/weather')

//paths
const publicPath = path.join(__dirname,'../public');
const view_path = path.join(__dirname,'../templates');
const partial_path = path.join(__dirname,'../templates/partials')

//setting up hbs & express
app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views',view_path)
hbs.registerPartials(partial_path)

//setting up routes
app.get('/',(req, res) => {
    res.render('home');
})
app.get('/about',(req, res) => {
    res.render('about')
})
app.get('/help',(req, res) => {
    res.render('help')
})
app.get('/weather',(req, res) => {
    if(!req.query.address){
        res.send("Error Occured!")
    }
    else{
        geocode(req.query.address,(data,error) => {
            if(error){
                console.log(e);
            }
            else{
            const cxy = data[1] + ',' + data[0];
            weather(cxy,(resp) => {
                res.send({
                    address: resp.body
                })
            })}
        })
}
})

app.listen(3000)