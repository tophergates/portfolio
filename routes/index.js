// Global packages/modules
const Router = require('express').Router();

// Local modules
const apiRouter = require('./api');

/**
 * API Routes
 */

Router.use('/api', apiRouter);

/**
 * Universal Route
 */

// Render index.html
Router.get('*', (req, res) => {
  res.sendFile('index.html');
});

module.exports = Router;
