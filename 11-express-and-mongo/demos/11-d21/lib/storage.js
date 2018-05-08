'use strict'

const Promise = require('bluebird')
const Note = require('../model/note')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})

const basePath = `${__dirname}/../data`

const storage = module.exports = {}
storage.create = (schema, item) => {
  return new Note(item.title, item.content)
  .then(note => {
    let json = JSON.stringify(note)
    return fs.writeFileProm(`${basePath}/${schema}/${note._id}.json`, json)
    .then(() => json)
  })
  .then(json => json)
}

storage.fetchAll = (schema) => fs.readdirProm(`${basePath}/${schema}`)
storage.fetchOne = (schema, itemId) => fs.readFileProm(`${basePath}/${schema}/${itemId}.json`)
storage.destroy = (schema, itemId) => fs.unlinkProm(`${basePath}/${schema}/${itemId}.json`)
storage.update = function(schema, itemId, item) {
  return fs.readFileProm(`${basePath}/${schema}/${itemId}.json`)
  .then(buffer => buffer.toString())
  .then(data => {
    return {
      _id: itemId,
      title: item.title || data.title,
      content: item.content || data.content,
    }
  })
  .then(updated => JSON.stringify(updated))
  .then(json => fs.writeFileProm(`${basePath}/${schema}/${itemId}.json`), json)
}

