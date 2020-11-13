const cartServices = require('../services/cartService');

const addCartController = async (req, res) => {
  const { id, quantity } = req.body();
  const response = await cartServices.addToCart(id, quantity);
  res.json(response);
};

module.exports = addCartController;