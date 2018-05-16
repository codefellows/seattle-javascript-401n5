'use strict'

let greet = require('./lib/greet')
let name = process.argv[2]

console.log(greet(name))
