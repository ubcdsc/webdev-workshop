const itemServices = require('../services/itemService');

const addItemController = async (req, res) => {
  const { id, name, price, fileInput } = req.body;
  const response = await itemServices.addItem(id, name, price, fileInput);
  res.json(response);
}

module.exports = addItemController;