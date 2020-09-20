const express = require('express')
const path = require('path')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public/'))

const app = express()

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(path.join(__dirname, '../public')))

app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Aman Kumar'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        name: 'Aman Kumar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: 'Aman Kumar',
        helpText: 'This is help text'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide address'
        })
    }
    res.send({
        address: req.query.address
    })
})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })

    }

    console.log(req.query)
    res.send({
        products:[]
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'Aman Kumar',
        errorMessage: 'Help Article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Aman Kumar',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})