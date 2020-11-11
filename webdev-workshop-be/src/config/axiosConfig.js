const axios = require('axios');
const https = require('https');

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
  simple: false,
  resolveWithFullResponse: true
});

function axiosConfig() {
  axios.defaults = {
    timeout: 90000,
    headers: {},
    maxContentLength: Number.maxContentLength,
    proxy: false,
    httpsAgent
  };
}

module.exports = axiosConfig;