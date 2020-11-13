import axios from 'axios';

export const getShoppingCart = async request => {
  const response = await axios.get('http://localhost:3003/cart/get', request);
  return response.data;
};

export const addShoppingCart = async request => {
  const response = await axios.patch('http://localhost:3003/cart/add', request);
  return response.data;
}