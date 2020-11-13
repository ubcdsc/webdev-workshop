import {addToCart} from '../services/cartService';

const addCartController = async (req, res) => {
  const { id, quantity } = req.body();
  const response = await addToCart(req.body, quantity);
  res.json(response);
};

module.exports = addCartController;