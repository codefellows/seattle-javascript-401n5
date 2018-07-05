'use strict';

require('dotenv').config({path: `${__dirname}/../../../.env`});
const mongoose = require('mongoose');
const superagent = require('superagent');
const app = require('../../../src/app.js');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMTk0YWJjOTkzYWMxZjBjZTFhMjJiZSIsImlhdCI6MTUyODM4NDE4OX0.KePkJHLyHN6qo25l6XAeFID9DeAXJs-6w9QeNZLQWLo';

describe('/samples', () => {

  beforeAll( () => {
    mongoose.connect(process.env.MONGODB_URI);
    app.start(process.env.PORT);
  });
  afterAll( () => {
    app.stop();
    mongoose.connection.close();
  });

  it('POST /upload  200', () => {
    return superagent.post(`${process.env.API_URL}/upload`)
      .set('Authorization', `Bearer ${token}`)
      .field('title', 'my image')
      .attach('img', `${__dirname}/asset/mario-sell.gif`)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.url).toBeTruthy();
      });
  });
});
