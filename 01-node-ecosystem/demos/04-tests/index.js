'use strict'

let greet = require('./greet')
let name = process.argv[2]

console.log(greet(name))
