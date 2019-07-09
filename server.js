const express = require('express')
const movies = require('./routes/api/movies')
const bodyParser = require('body-parser')

const app = express()

//Initializing middlewarea 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Initzialing route for /api/v1/movies
app.use('/api/v1/movies', movies)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on Port  ${PORT}`))

module.exports = db