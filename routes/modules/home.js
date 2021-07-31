const express = require('express')
const router = express.Router()
const ShortUrl = require('../../models/shortUrl')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
