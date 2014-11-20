'use strict'

var app = require('express')()
var bodyParser = require('body-parser')
var cors = require('cors')
var lib = require('./lib')

app.use(cors())
app.use(bodyParser.json())
lib.routes(app)

var port = process.env.PORT || 5000
app.listen(port, function() {
  console.log('Listening on', port)
})
