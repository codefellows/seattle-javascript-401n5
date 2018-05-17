'use strict';

class List {

  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length++] = item;
    return this.length;
  }

}

module.exports = List;











