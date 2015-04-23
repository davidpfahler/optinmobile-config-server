'use strict'

var cradle = require('cradle')

var e = process.env

var connection = new(cradle.Connection)(e.COUCH_URL, {
  cache: true,
  raw: false,
  forceSave: true,
  secure: true,
  auth: {
    username: e.COUCH_USER,
    password: e.COUCH_PASS
  }
})

module.exports = {
  production: connection.database('optinmobile-config'),
  staging: connection.database('optinmobile-config-staging')
}
