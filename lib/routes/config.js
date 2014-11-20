'use strict'

var db = require('../').db

module.exports = function(app) {
  app.get('/config/:id', function(req, res) {
    var id = req.params.id
    db.get(id, function(err, dbRes) {
      if (err) {
        console.log(err)
        return res.send(err)
      }
      console.log(dbRes)
      res.send(dbRes)
    })
  })
}
