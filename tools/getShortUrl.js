function getShortUrl() {
  const ShortUrl = require('../models/shortUrl')
  const numbers = '1234567890'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()

  let collection = []
  collection = collection.concat(
    numbers.split(''),
    lowerCaseLetters.split(''),
    upperCaseLetters.split('')
  )

  let randomUrl = ''

  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    randomUrl += collection[randomIndex]
  }

  return randomUrl
}

module.exports = getShortUrl
