var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CabSchema = new Schema({
    id: Number,
    latitude: Number,
    longitude: Number
})

module.exports = mongoose.model('Cab', CabSchema)
