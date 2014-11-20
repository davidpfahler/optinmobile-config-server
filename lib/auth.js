'use strict'

var basicAuth = require('basic-auth-connect')

var e = process.env

module.exports = basicAuth(e.ADMIN_USER, e.ADMIN_PASS)
