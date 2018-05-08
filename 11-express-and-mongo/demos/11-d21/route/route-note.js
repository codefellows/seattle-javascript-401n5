'use strict'

const storage = require('../lib/storage')
const bodyParser = require('body-parser').json()
const errorHandler = require('../lib/error-handler')

module.exports = function(router) {
  router.post('/note', bodyParser, (req, res) => {
    storage.create('Note', req.body)
    .then(note => res.status(201).send(note))
    .catch(err => errorHandler(err, res))
  })

  router.get('/note', (req, res) => {
    storage.fetchAll('Note')
    .then(paths => paths.split('.')[0])
    .then(ids => res.status(200).json(ids))
    .catch(err => errorHandler(err, res))
  })

  router.get('/note/:_id', (req, res) => {
    storage.fetchOne('Note', req.params._id)
    .then(buffer => buffer.toString())
    .then(note => res.status(200).json(note))
    .catch(err => errorHandler(err, res))
  })

  router.put('/note/:_id', bodyParser, (req, res) => {
    storage.update('Note', req.params._id, req.body)
    .then(() => res.sendStatus(204))
    .catch(err => errorHandler(err, res))
  })

  router.delete('/note/:_id', (req, res) => {
    storage.destroy('Note', req.params._id)
    .then(() => res.sendStatus(204))
    .catch(err => errorHandler(err, res))
  })
}