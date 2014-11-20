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
    db.save(config, handleDbRes.bind(null, res))
  })

  app.patch('/config/:id', function(req, res) {
    var id = req.params.id
    var method = req.body.merge ? 'merge' : 'save'
    var config = req.body.config
    if (!config) {
      console.log('no config provided')
      return res.send({
        error: 'no config provided'
      })
    }
    db[method](id, handleDbRes.bind(null, res))
  })

  app.get('/config/:id', function(req, res) {
    var id = req.params.id
    db.get(id, handleDbRes.bind(null, res))
  })
}

function handleDbRes(res, err, dbRes) {
  if (err) {
    console.log(err)
    return res.send(err)
  }
  console.log(dbRes)
  res.send(dbRes)
}
