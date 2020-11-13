import firebase from './firebase'

export const addItem = (id, productName, productPrice, image) => {
    const fb = new firebase();
    fb.addProduct(id, productName, productPrice, image);
}

export const getItem = (id) => {
    const fb = new firebase();
    return fb.getItem(id);
}