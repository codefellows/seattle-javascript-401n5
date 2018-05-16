'use strict'

let one = require('./lib/one')
// let two = require('./lib/two')

function foo(name) {
  one.name = 'Boogs'
  let two = require('./lib/one')
  console.log(two.name)
}

foo()