'use strict';

// Confirm which endian you are
const os = require('os');
console.log(os.endianness());

let stringifyBuffer = buffer => {
  let str = '';
  for(let char of buffer) {
    str += String.fromCharCode(char);
  }
  return str;
};

let buffer = Buffer.from('John is an amazing dude');
// let buffer = new Buffer('John is an amazing dude');
console.log(buffer);
console.log(buffer.toString());
console.log( stringifyBuffer(buffer) );

buffer[0] = 0x41;
console.log(buffer.toString());

buffer[0] = 74;
console.log(buffer.toString());
console.log(buffer.length);

console.log(buffer.readInt16LE(0));
console.log(buffer.readInt32LE(0));
