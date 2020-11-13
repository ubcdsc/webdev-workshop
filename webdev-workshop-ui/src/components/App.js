import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './header/Header';
import Carousel from './carousel/Carousel';
import Navigation from './navigation/Navigation';
import Catalogue from './catalogue/Catalogue';
import Dashboard from './dashboard/Dashboard';
import AppContext from './context/AppContext';
import { getShoppingCart, getItems, hello } from './services/cartService'; 

const App = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const context = {
    items,
    setItems,
    cart,
    setCart
  };

  useEffect(() => {
    const loadCart = async () => {
      const loadedCart = await getShoppingCart();
      setCart(loadedCart);
    }
    const loadItems = async () => {
      const loadedItems = await getItems();
      console.log(loadedItems);
      setCart(loadedItems);
    }
    loadCart();
    loadItems();
  }, []);

  return (
    <AppContext.Provider value={context}>
      <Header />
      <Carousel />
      <Navigation />
      <Catalogue />
      <Dashboard />
    </AppContext.Provider>
  );
}

export default App;
