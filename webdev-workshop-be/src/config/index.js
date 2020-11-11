const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);
const axiosConfig = require('../config/axiosConfig');

axiosConfig();

config.env = env;
module.exports = Object.freeze(Object.assign({}, config));
