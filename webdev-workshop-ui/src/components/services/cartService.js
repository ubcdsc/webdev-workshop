import axios from 'axios';

export const getShoppingCart = async request => {
  const response = await axios.post('http://localhost:3003/get', request);
  return response.data;
};

export const addShoppingCart = async request => {
  const response = await axios.patch('http://localhost:3003/add', request);
  return response.data;
}