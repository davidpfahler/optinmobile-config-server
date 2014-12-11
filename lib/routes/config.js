'use strict'

var lib = require('../')
var auth = lib.auth
var dbs = lib.db

var env = lib.middlewares.environment

function db(req) {
  return dbs[req.environment]
}

module.exports = function(app) {

  app.post('/config', auth, env, function(req, res) {
    var config = req.body.config
    if (!config) {
      console.log('no config provided')
      return res.send({
        error: 'no config provided'
      })
    }

    var args = [config, handleDbRes.bind(null, res)]
    if (config.id) args.unshift(config.id)
    db(req).save.apply(db(req), args)
  })

  app.patch('/config/:id', auth, env, function(req, res) {
    var id = req.params.id
    var method = req.body.merge ? 'merge' : 'save'
    var config = req.body.config
    if (!config) {
      console.log('no config provided')
      return res.send({
        error: 'no config provided'
      })
    }
    db(req)[method](id, handleDbRes.bind(null, res))
  })

  app.get('/config/:id', env, function(req, res) {
    var id = req.params.id
    db(req).get(id, handleDbRes.bind(null, res))
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
