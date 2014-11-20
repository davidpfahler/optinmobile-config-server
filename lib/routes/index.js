'use strict'

module.exports = function(app) {
  [
    './root'
  ].forEach(function(route) {
    require(route)(app)
  })
}
