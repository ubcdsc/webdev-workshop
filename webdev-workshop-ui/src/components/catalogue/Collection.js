import React from 'react';
import { StyledRow, StyledCol, ImageBox, ItemName, ItemPrice } from './StyledCatalogue';
import ItemImage1 from '../../images/1.jpg';
import ItemImage2 from '../../images/2.jpg';
import ItemImage3 from '../../images/3.jpg';
import ItemImage4 from '../../images/4.jpg';

const Collection = () => {

  const Items = () => {
    return (
      <>
        <StyledCol>
          <ImageBox src={ItemImage1} alt="" />
          <ItemName>David Dobrik: Rainbow Hoodie</ItemName>
          <ItemPrice><a>$67</a></ItemPrice>
        </StyledCol>
        <StyledCol>
          <ImageBox src={ItemImage2} alt="" />
          <ItemName>David Dobrik: Rainbow Crewneck</ItemName>
          <ItemPrice>$60</ItemPrice>
        </StyledCol>
        <StyledCol>
          <ImageBox src={ItemImage3} alt="" />
          <ItemName>David Dobrik: Rainbow Sweatpants</ItemName>
          <ItemPrice>$54</ItemPrice>
        </StyledCol>
        <StyledCol>
          <ImageBox src={ItemImage4} alt="" />
          <ItemName>David Dobrik: Rainbow Shirt</ItemName>
          <ItemPrice>$34</ItemPrice>
        </StyledCol>
      </>
    )
  }

  return (
    <StyledRow>
      <Items />
      <Items />
    </StyledRow>
  )
}

export default Collection;