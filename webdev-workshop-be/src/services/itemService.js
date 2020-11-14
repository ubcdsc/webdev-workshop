const firebase = require('./firebase');

const addItem = (id, productName, productPrice, image) => {
  const fb = new firebase();
  return fb.addItem(id, productName, productPrice, image);
}

const getItems = () => {
  const fb = new firebase();
  return fb.getItems();
}

const itemServices = {
  addItem,
  getItems
}

module.exports = itemServices;