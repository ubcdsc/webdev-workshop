const firebase = require('./firebase');

const addToCart = (id, quantity) => {
  const fb = new firebase();
  fb.addToCart(id, quantity);
}

const getCart = () => {
  const fb = new firebase();
  return fb.getCart();
}

const cartServices = {
  addToCart,
  getCart,
};

module.exports = cartServices;