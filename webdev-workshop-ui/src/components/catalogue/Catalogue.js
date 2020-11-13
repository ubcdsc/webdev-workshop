import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import { StyledRow, StyledCol, ImageBox, ItemName, ItemPrice } from './StyledCatalogue';
import { addShoppingCart } from '../services/cartService';

const Collection = () => {
  const { items, setCart } = useContext(AppContext);
  const [collectedItems, setCollectedItems] = useState([]);

  useEffect(() => {
    const collection = [];
    let subcollection = [];
    items.forEach((item, idx) => {
      subcollection.push(item);
      if (idx / 3 === 1) {
        collection.push(subcollection);
        subcollection = [];
      }
    });
    collection.push(subcollection);
    setCollectedItems(collection);
  }, [items]);

  const handleClick = item => {
    let id = null;
    items.forEach((cartItem, idx) => {
      if (cartItem.name === item.name) id = idx + 1;
    })
    const addItemToCart = async () => {
      const updatedCart = await addShoppingCart({ id });
      setCart(updatedCart);
    }
    addItemToCart();
  }

  const makeCols = rowOfItems => {
    return rowOfItems.map(item => {
      return (
        <StyledCol key={`col of ${item?.name}`}>
          <ImageBox src={item.imageURL} alt="" />
          <ItemName>{item.name}</ItemName>
          <ItemPrice onClick={() => handleClick(item)}>{item.price}</ItemPrice>
        </StyledCol>
      )
    })
  }

  return collectedItems.map(rowOfItems => {
    return (
      <StyledRow key={`row of ${rowOfItems[0]?.name}`}>
        {makeCols(rowOfItems)}
      </StyledRow>
    )
  })
}

export default Collection;