const itemServices = require('../services/itemService');

const addItemController = (req, res) => {
  const { id, productName, productPrice, image } = req.body();
  const response = itemServices.addItem(id, productName, productPrice, image);
  res.json(response);
}

module.exports = addItemController;