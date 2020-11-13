const itemServices = require('../services/itemService');

const getItemController = async (req, res) => {
  const response = await itemServices.getItem();
  res.json(response);
};

module.exports = getItemController;