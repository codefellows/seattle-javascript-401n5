const {
  server
} = require('../../../src/app.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api', () => {

  it('should create a note and return it with status 200', () => {

    const rawNote = {
      title: 'milk',
      content: 'chocolate'
    };

    return mockRequest
      .post('/api/v1/notes')
      .send(rawNote)
      .then(results => {

        expect(results.status).toBe(200);
        expect(results.body.title).toBe(rawNote.title);
        expect(results.body.content).toBe(rawNote.content);
        expect(results.body.id).toBeDefined();
        expect(results.body.createdOn).toBeDefined();

      }).catch(fail);
  });

  it('should get 200 GET notes with good id', () => {

    // first create a note
    return mockRequest
      .post('/api/v1/notes')
      .send({
        title: 'walk the dog'
      }).then(results => {

        let id = results.body.id;

        return mockRequest
          .get('/api/v1/notes/' + id)
          .then(results => {
            expect(results.status).toBe(200);
          }).catch(fail);

      }).catch(fail);
  });

  it('should get 400 with missing id', () => {
    return mockRequest.get('/api/v1/notes/').then(results => {
      expect(results.status).toBe(400);
    }).catch(fail);
  });

  it('should get 404 with id not found', () => {
    return mockRequest.get('/api/v1/notes/bad').then(results => {
      expect(results.status).toBe(404);
    }).catch(fail);
  });

  it('should get 404 with bad path', () => {
    return mockRequest.get('/api/v1/bad').then(results => {
      expect(results.status).toBe(404);
    }).catch(fail);
  });
});