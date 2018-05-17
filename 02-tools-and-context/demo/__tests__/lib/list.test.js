'use strict';

let List = require('../../lib/list.js');

describe('List Module', () => {

  it('push() returns the updated length of the list', () => {

    let myList = new List();
    myList.push('FOO');

    expect(myList.length).toBe(1);
      
  });

  it('push() adds an element to the list', () => {

  });

});
