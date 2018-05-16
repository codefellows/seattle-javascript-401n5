'use strict'

const assert = require('assert')
const greet = require('../lib/greet')

// describe('module', function() {
//   describe('method()', function() {
//     it('should do the test', function() {
//       // assert some things
//     })
//   })
// })

describe('greet module', function() {
  describe('greet()', function() {
    // using the basic assert library built into NodeJS
    test('should accept a name and greet the user', function() {
      let name = 'Scott'
      assert.equal(greet(name), 'Hello, Scott', 'Failed')
    })
  })
})
