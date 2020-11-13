import firebase from './firebase';

const addToCart = (id, quantity) => {
  const fb = new firebase();
  fb.addToCart(id, quantity);
}

export default addToCart;