// Global packages/modules
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
// const mongoose = require('mongoose');
const logger = require('morgan');

// Local modules
const { ENV } = require('./config');
const router = require('./routes');

// Create the express application
const app = express();

/**
 * PRE-ROUTE MIDDLEWARE
 */

// Express security related HTTP headers
// https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet());

// Enable Cross Origin Resource Sharing (CORS)
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Access, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');

    return res.status(200).end();
  }

  return next();
});

// Parse incoming request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (ENV === 'development' || ENV === 'testing') {
  app.use(logger('dev'));
}

/**
 * APPLICATION ROUTES
 */

app.use(router);

/**
 * POST-ROUTE MIDDLEWARE
 */

// TODO: Implement post-route error handling
app.use((req, res, next) => next());

module.exports = app;
