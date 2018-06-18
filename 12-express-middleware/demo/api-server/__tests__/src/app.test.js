import superAgent from 'superagent';
const app = require('../../src/app');
const apiUrl = 'http://localhost:3001/api/v1/notes';

beforeEach(() => {
  app.start(3001);
});

afterEach(() => {
  app.stop();
});

describe('api module', () => {

  it('should get zero notes', () => {

    // note that returning promise makes this test async, could also use 'done' argument
    return superAgent
      .get(apiUrl)
      .then(results => {
        
        const notes = JSON.parse(results.text);

        expect(notes).toEqual({});
        
      });

  });

  it('should create a note', (done) => {

    const newNote = {title:'milk', content: 'chocolate'};

    superAgent.post(apiUrl).send(newNote).then(results => {

      const note = JSON.parse(results.text);

      expect(note.title).toBe('milk');

      done(); // using done argument vs. returning promise but both work
    });

  });

  it('should get all notes', () => {

    const newNote = {title:'milk', content: 'chocolate'};

    return superAgent.post(apiUrl).send(newNote).then(results => {

      return superAgent.get(apiUrl).then(results => {
        
        const notes = JSON.parse(results.text);

        expect(Object.keys(notes).length).toBe(2);
      });
    });

  });

  it('should get single note', () => {

    const newNote = {title:'milk', content: 'chocolate'};

    return superAgent.post(apiUrl).send(newNote).then(results => {

      const postedNote = JSON.parse(results.text);

      return superAgent.get(apiUrl + '/' + postedNote.id).then(results => {
        
        const retrievedNote = JSON.parse(results.text);

        expect(retrievedNote.content).toBe('chocolate');
      });
    });

  });

});