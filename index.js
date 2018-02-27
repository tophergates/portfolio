// Global packages/modules
const http = require('http');

// Local modules
const app = require('./app');
const { PORT = 3000, HOST = 'localhost' } = require('./config');

// Start the server
http.createServer(app).listen(PORT, HOST, () => {
  console.log(`Server listening: http://${HOST}:${PORT}/`);
});
