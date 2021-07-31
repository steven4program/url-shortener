const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortUrlsSchema = new Schema({
  full: {
    type: String,
    require: true
  },
  short: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlsSchema)
