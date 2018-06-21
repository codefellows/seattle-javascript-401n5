const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

import Singer from '../../../src/models/singers.js';
import {server} from '../../../src/app.js';

const API_URL = '/api/v1/singers';

const mockRequest = require('supertest')(server);

describe('app module', () => {

  beforeAll((done) => {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect('mongodb://localhost/singers').then(() => {
        done();
      });
    });
  });

  afterEach((done) => {
    mockgoose.helper.reset().then(done);
  });


  it('should create singer', () => {

    return Singer
      .create({
        name: 'Otis Redding',
        rank: 1,
      })
      .then(singer => {
        expect(singer.name).toBe('Otis Redding');
        expect(singer.rank).toBe(1);
      });

  });

  it('should get zilch directly', () => {

    return Singer.find().then(singers => {
      expect(singers).toEqual([]);
    });
  });

  it('should get zilch via api', () => {

    return mockRequest
      .get(API_URL)
      .then(data => JSON.parse(data.text))
      .then(singers => {
        expect(singers).toEqual([]);
      });

  });

  it('should post new singer via API', () => {

    return mockRequest
      .post(API_URL)
      .send({
        name: 'Dusty Springfield',
        rank: 31,
      })
      .then(data => JSON.parse(data.text))
      .then(singer => {

        expect(singer.name).toBe('Dusty Springfield');
        
        return mockRequest
          .get(API_URL)
          .then(data => JSON.parse(data.text))
          .then(singers => {
            expect(singers.length).toBe(1);
            expect(singers[0].name).toBe('Dusty Springfield');
          });
      });
  });

  it('should get 404', () => {

    return mockRequest.get('/foo/bar').then(response => {
      let err = JSON.stringify(response.text);
      expect(err).toBeDefined();
    }).catch(err => {
      fail(err);
    });
  });
});
