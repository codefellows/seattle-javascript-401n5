'use strict'

const mod = module.exports = {}
mod.name = 'scott'
mod.speak = (name) => {
  if(name)  console.log(`My name is ${name} `)
  else console.log(`Hey there, my name is ${this.name}`)
}