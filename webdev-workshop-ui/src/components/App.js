import React from 'react';
import './style.css';
import Header from './header/Header';
import Carousel from './carousel/Carousel';
import Catalogue from './catalogue/Catalogue';

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Catalogue />
    </>
  );
}

export default App;
