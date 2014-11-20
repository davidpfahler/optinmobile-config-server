'use strict'

module.exports = function(app) {
  [
    './config',
    './root'
  ].forEach(function(route) {
    require(route)(app)
  })
}
