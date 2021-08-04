const express = require('express')
const shortUrl = require('../../models/shortUrl')
const router = express.Router()
const ShortUrl = require('../../models/shortUrl')
const getShortUrl = require('../../tools/getShortUrl')
const PORT = process.env.PORT || 3000
const rootUrl = process.env.ROOT_URL || `http://localhost:${PORT}/`

router.get('/', (req, res) => {
  ShortUrl.find()
    .lean()
    .then((shorturls) => res.render('index', { shorturls }))
    .catch((error) => console.log(error))
})

router.post('/shorturls', (req, res) => {
  const fullUrl = req.body.fullUrl
  const protocol = req.protocol
  const host = req.headers.host
  ShortUrl.find()
    .lean()
    .then((urls) => {
      const fullUrlTest = urls.find((eachUrl) => eachUrl.full === fullUrl)
      if (fullUrlTest) {
        return res.redirect('/')
      }

      let randomUrl = getShortUrl()
      let shortUrl = `${rootUrl}${randomUrl}`

      const shortUrlTest = urls.find((eachUrl) => eachUrl.short === shortUrl)

      while (shortUrlTest) {
        randomUrl = getShortUrl()
      }
      return ShortUrl.create({ full: fullUrl, short: shortUrl }).then(() =>
        res.redirect('/')
      )
    })
    .catch((error) => console.log(error))
})

router.get('/:shortUrl', (req, res) => {
  const shorturl = `${rootUrl}${req.params.shortUrl}`
  ShortUrl.find({ short: shorturl })
    .lean()
    .then((result) => res.redirect(result[0].full))
    .catch((error) => console.log(error))
})

router.delete('/shorturls/:id', (req, res) => {
  const id = req.params.id
  return ShortUrl.findById(id)
    .then((url) => url.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})
module.exports = router
