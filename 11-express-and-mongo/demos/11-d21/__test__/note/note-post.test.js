'use strict'

const server = require('../../lib/server')
require('jest')

describe('POST /api/v1/note', function() {
  beforeAll(() => server.start(process.env.PORT))
  afterAll(() => server.stop())

  describe('Valid requests', function() {
    beforeAll(() => {
      this.mockNote = {
        title: 'this is a title',
        content: 'this is content'
      }
      return superagent.post(':4000/api/v1/note')
      .send(mockNote)
      .then(res => this.res = res)
    })


    it('should return a status 201 CREATED', () => {
      expect(this.res.status).toBe(201)
    })
    it('should return a body of data', () => {
      expect(this.res.body.title).toEqual('this is a title')
      expect(this.res.body.content).toEqual('this is content')
    })
    it('should have an ID property on the response body', () => {
      expect(this.res.body).toHaveProperty('_id')
    })
    it('should match a UUID for the _id property', () => {
      expect(this.res.body._id).toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
    })
  })

  describe('Invalid requests', function() {

  })
})