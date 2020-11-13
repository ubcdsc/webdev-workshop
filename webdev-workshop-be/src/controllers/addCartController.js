import addToCart from '../services/cartService';

const addCartController = async (req, res) => {
  const { id, quantity } = req.body;
  addToCart(req.body, quantity);
};

module.exports = addCartController;