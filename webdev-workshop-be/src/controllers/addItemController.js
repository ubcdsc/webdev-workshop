import addItem from '../services/itemService';

const addItem = async(req, res) => {
  const {id, productName, productPrice, image} = req.body();
  const response = await addItem(id, productName, productPrice, image);
  res.json(response);
}

module.exports = addItemController;