const axios = require('axios');
const https = require('https');

const instance = axios.create({
  timeout: 1000 * 60 * 5,
  maxContentLength: Number.maxContentLength,
  proxy: false,

  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
    simple: false,
    resolveWithFullResponse: true,
  }),
});

module.exports = instance;