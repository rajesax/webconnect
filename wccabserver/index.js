var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Router
var router = express.Router()
router.use(function (req, res, next) {
    // do logging
    console.log('Router is working...')
    next()
})

router.get('/', function (req, res) {

    res.json({ message: "This is your platform to find a cab!" })
})


var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/wccdb')

var Cab = require('./app/models/cab')

//Route for Cabs
router.route('/cabs').post(function (req, res) {
    /*var cab = new Cab()
    cab.id = req.body.id
    cab.latitude = req.body.latitude
    cab.longitude = req.body.longitude

    cab.save(function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Cab added!' })
    })*/
    var query = { 'id': req.body.id };
    var cab = new Cab()
    cab.id = req.body.id
    cab.latitude = req.body.latitude
    cab.longitude = req.body.longitude
    var upsertData = cab.toObject()
    delete upsertData._id
    Cab.findOneAndUpdate(query, upsertData, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err })
        return res.send("succesfully saved")
    })
})
    .get(function (req, res) {
        Cab.find(function (err, cabs) {
            if (err)
                res.send(err)

            res.json(cabs)
        })
    })
    .delete(function (req, res) {
        Cab.findByIdAndRemove(req.query._id, function (err, cab) {
            var response = {
                message: "cab successfully deleted",
                id: cab._id
            }
            res.send(response)
        })

    })

app.use('/api', router)

//start server
app.listen(3001)
console.log('Server Started!')