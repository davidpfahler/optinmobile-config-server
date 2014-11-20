'use strict'

var lib = require('../')
var auth = lib.auth
var db = lib.db

module.exports = function(app) {

  app.post('/config', auth, function(req, res) {
    var config = req.body.config
    if (!config) {
      console.log('no config provided')
      return res.send({
        error: 'no config provided'
      })
    }
    db.save(config, function(err, dbRes) {
      if (err) {
        console.log(err)
        return res.send(err)
      }

      console.log(dbRes)
      res.send(dbRes)
    })
  })


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
