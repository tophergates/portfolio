const Router = require('express').Router();

Router.get('/api', (req, res) => {
  res.json({
    message: 'Success',
  });
});

Router.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

module.exports = Router;
