'use strict'

// Application Dependencies
const express = require('express')
const errorHandler = require('./error-handler')

// Application Setup
const app = express()
const router = express.Router()
app.use('/api/v1', router)

// Routes
require('../route/route-note')(router)
app.all('/*', (req, res) => {
  let err = new Error(`Path error. ${req.path} does not exist.`)
  errorHandler(err, res)
})

// Server Controls
const server = module.exports = {}
server.isOn = false
server.start = (port, callback) => {
  if(server.isOn) return callback(new Error('Server error. The server could not start. Server already running.'))
  server.isOn = true
  return app.listen(port, callback)
}

server.stop = (callback) => {
  if(!server.isOn) return callback(new Error('Server error. The server could not stop. No server running.'))
  server.isOn = false
  return app.close(callback)
}