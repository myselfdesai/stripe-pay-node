const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.engine('html', require('ejs').renderFile)

app.get('/', async function (
  req,
  res,
  next
) {
  res.send('Hello World! 1')
})

const port = 4242

app.listen(port, () => console.log(`Listening on port ${port}!`))