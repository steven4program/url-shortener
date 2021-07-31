const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is url-shortener')
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
