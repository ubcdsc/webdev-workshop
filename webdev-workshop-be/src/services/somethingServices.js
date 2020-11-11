const axios = require('../config/axiosInstance');
const config = require('../config');

const getSomething = async body => {
  const { baseUrl, endpoint } = config.getSomethingApi;
  const something = 'something';

  return axios
    .post(`${baseUrl}${endpoint}`, something);
    .then(response => parseResponse(response.data))
    .catch(error => {
      throw new Error(`Something service failed to retrieve data, HTTP Error : ${error}`);
    });
};

const somethingServices = {
  getSomething,
};

module.exports = somethingServices;