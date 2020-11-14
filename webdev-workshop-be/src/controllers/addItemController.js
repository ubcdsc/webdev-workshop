const itemServices = require('../services/itemService');

const addItemController = async (req, res) => {
  const { id, productName, productPrice, image } = req.body;
  const response = await itemServices.addItem(id, productName, productPrice, image);
  res.json(response);
}

module.exports = addItemController;