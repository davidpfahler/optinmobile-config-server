'use strict'

var app = require('express')()
var lib = require('./lib')

lib.routes(app)

var port = process.env.PORT || 5000
app.listen(port, function() {
  console.log('Listening on', port)
})
