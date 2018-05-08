'use strict'

const uuid = require('uuid/v4')

module.exports = function(title, content) {
  return new Promise((resolve, reject) => {
    if(!title || !content) return reject(new Error('Validation Error. Cannot create record without Title and Content.'))
    this._id = uuid()
    this.title = title
    this.content = content
    return resolve(this)
  })
}