import firebase from './firebase';

export const addToCart = (id, quantity) => {
  const fb = new firebase();
  fb.addToCart(id, quantity);
}

export const getCart = () => {
  const fb = new firebase();
  return fb.getCart();
}
