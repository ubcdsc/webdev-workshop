const cartServices = require('../services/cartService');

const getCartController = async (req, res) => {
  const response = await cartServices.getCart()
  res.json(response);
};

module.exports = getCartController;