'use strict';

// Pull in the app, which has the global event object
let eventEmitter = require('./app.js');

// When any module fires any event that I care about, these functions will run.
eventEmitter.on('bark', () => console.log('Woof!') );
eventEmitter.on('rub the tummy', () => console.log('yeah .... thats the stuff...') );
eventEmitter.on('purr', () => {
  console.log('pgpgpgpgpggpgp');
  eventEmitter.emit('pet');
});

