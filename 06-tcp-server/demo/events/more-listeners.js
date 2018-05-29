'use strict';

let eventEmitter = require('./app.js');

eventEmitter.on('bark', () => console.log('yip yip') );
eventEmitter.on('purr', () => console.log('meow?') );
eventEmitter.on('pet', () => {
  console.log('thanks, I needed that!');
  eventEmitter.emit('rub the tummy');
});

