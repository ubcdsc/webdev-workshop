const firebase = require('./firebase');

const addItem = (id, productName, productPrice, image) => {
  const fb = new firebase();
  fb.addProduct(id, productName, productPrice, image);
}

const getItem = (id) => {
  const fb = new firebase();
  return fb.getItems(id);
}

const itemServices = {
  addItem,
  getItem
}

module.exports = itemServices;