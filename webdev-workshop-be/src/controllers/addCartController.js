const cartServices = require('../services/cartService');

const addCartController = async (req, res) => {
  const { id } = req.body;
  const response = await cartServices.addToCart(id);
  console.log(response);
  res.json(response);
};

module.exports = addCartController;