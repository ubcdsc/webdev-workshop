import {getItem} from '../services/cartService';

const getItemController = async (req, res) => {
  res.json(getItem());
};

module.exports = getItemController;