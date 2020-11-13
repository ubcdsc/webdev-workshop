const server = require('./server');
const logger = require('./helpers/logger.js');
const config = require('./config');

server.listen(config.port, () => {
  logger.info(`Started on port ${server.address().port}`);
});

// Workaround for nodemon not killing all child processes
process.on('SIGINT', () => {
  logger.info('Server shutting down');
  process.exit();
});