'use strict'

function isStaging(input) {
  return (input || '').toLowerCase() === 'staging'
}

module.exports = function(req, res, next) {
  if (isStaging(req.headers.Environment) || isStaging(req.query.environment)) {
    req.environment = 'staging'
  } else {
    req.environment = 'production'
  }
  req[req.environment] = true
  next()
}
