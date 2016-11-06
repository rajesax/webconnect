var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)

app.get('/cabs', function(req, res) {

  res.json({cabs: "This is your platform to find a cab!"})
})

app.listen(3000)
console.log('Server Started!')