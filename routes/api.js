// Global packages/modules
const Router = require('express').Router();

// Local modules
const APIController = require('../controllers/api');

// Routes
Router.get('/', APIController.IndexRoute);

module.exports = Router;
