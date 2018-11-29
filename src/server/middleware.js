const bodyParser = require('body-parser');
const cors = require('cors');
const { configCors } = require('./config');

const setGlobalMiddleware = (app) => {
  app.use(cors(configCors));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};

module.exports = setGlobalMiddleware;
