'use strict';

import Singer from '../src/models/singers.js';

export default (dir) => {

  const fakeMongo = {
    find: () => Promise.resolve([]),
    findOne: () => Promise.resolve({}),
    save: data => Promise.resolve(data),
    findOneAndDelete: () => Promise.resolve({}),
  };

  if ( typeof dir !== 'string' ) { return {}; }
  return {
    'foo': {default: fakeMongo},
    'bar': {default: fakeMongo},
    'baz': {default: fakeMongo},
    'singers' : {default: Singer},
  };
};

