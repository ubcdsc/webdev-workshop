import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import { StyledRow, StyledCol, ImageBox, ItemName, ItemPrice } from './StyledCatalogue';
import { addShoppingCart } from '../services/cartService';

const Collection = () => {
  const { items } = useContext(AppContext);
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
    // const response = addShoppingCart(item.name);
    // console.log(response);
  }

  const makeCols = rowOfItems => {
    return rowOfItems.map(item => {
      return (
        <StyledCol key={item.name}>
          <ImageBox src={item.imageURL} alt="" />
          <ItemName>{item.name}</ItemName>
          <ItemPrice onClick={handleClick(item)}>{item.price}</ItemPrice>
        </StyledCol>
      )
    })
  }

  return collectedItems.map(rowOfItems => {
    return (
      <StyledRow key={`row of ${rowOfItems[0]?.item}`}>
        {makeCols(rowOfItems)}
      </StyledRow>
    )
  })
}

export default Collection;