const ENV = process.env.NODE_ENV;

let config;

switch (ENV) {
  case 'production':
    // eslint-disable-next-line global-require
    config = require('./prod.config');
    break;
  case 'testing':
    // eslint-disable-next-line global-require
    config = require('./test.config');
    break;
  default:
    // eslint-disable-next-line global-require
    config = require('./dev.config');
}

module.exports = config;
