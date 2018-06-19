// 'use strict';

// import Note from '../src/models/notes.js';
// import People from '../src/models/people.js';
// export default (module, dir) => {
//   if ( typeof dir !== "string" ) { return {}; }
//   return {
//     'notes': {default: Note},
//     'people': {default: People},
//   };
// };

// NOTE: just passing on to real deal for now, but can uncomment above / comment out below for mocking fun

import requireDirectory from 'require-directory';

export default requireDirectory;

