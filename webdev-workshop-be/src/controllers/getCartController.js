import {getCart} from '../services/cartService';

const getCartController = async (req, res) => {
  res.json(getCart());
};

module.exports = getCartController;