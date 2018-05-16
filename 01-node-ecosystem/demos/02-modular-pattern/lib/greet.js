'use strict'

console.log(module)
console.log(module.exports)

// module.exports = () => console.log('hello world!')

module.exports = name => `hello ${name}, nice to meet you`
