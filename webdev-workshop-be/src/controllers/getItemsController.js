const itemServices = require('../services/itemService');

const getItemsController = async (req, res) => {
  const response = await itemServices.getItems();
  res.json(response);
};

module.exports = getItemsController;