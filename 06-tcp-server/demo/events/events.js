'use strict';

// Pull in the app, which has the global event object
let eventEmitter = require('./app.js');

module.exports = exports = {};

// Using that global event object, fire off some events.
exports.fire = () => {
  eventEmitter.emit('bark');
  eventEmitter.emit('purr');
};

