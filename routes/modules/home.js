const express = require('express')
const router = express.Router()
const ShortUrl = require('../../models/shortUrl')
const getShortUrl = require('../../tools/getShortUrl')

router.get('/', (req, res) => {
  ShortUrl.find()
    .lean()
    .then((shorturls) => res.render('index', { shorturls }))
    .catch((error) => console.log(error))
})

router.post('/shorturls', (req, res) => {
  const fullUrl = req.body.fullUrl
  const shortUrl = getShortUrl()
  console.log(fullUrl, shortUrl)
  return ShortUrl.create({ full: fullUrl, short: shortUrl })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

module.exports = router
