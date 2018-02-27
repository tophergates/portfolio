// Global packages/modules
const assert = require('assert');
const request = require('supertest');

// Local modules
const app = require('../app');

describe('Express Application', () => {
  it('handles a GET request to /', done => {
    request(app)
      .get('/')
      .end((err, res) => {
        assert(res.ok && res.status === 200);
        done();
      });
  });

  it('handles a GET request to /api', done => {
    request(app)
      .get('/api')
      .end((err, res) => {
        assert(res.ok && res.body.message === 'Success');
        done();
      });
  });
});
