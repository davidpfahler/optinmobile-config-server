'use strict'

var app = require('express')()
var cors = require('cors')
var lib = require('./lib')

app.use(cors())
lib.routes(app)

var port = process.env.PORT || 5000
app.listen(port, function() {
  console.log('Listening on', port)
})
