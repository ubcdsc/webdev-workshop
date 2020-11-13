import React from 'react';
import { Row } from 'react-flexbox-grid';
import { StyledCol, StyledImage } from './StyledCarousel';
import Carousel1 from '../../images/carousel1.jpg';
import Carousel2 from '../../images/carousel2.jpg';
import Carousel3 from '../../images/carousel3.jpg';

const Carousel = () => {
  return (
    <Row>
      <StyledCol xs>
        <StyledImage src={Carousel1} alt="" />
      </StyledCol>
      <StyledCol xs>
        <StyledImage src={Carousel2} alt="" />
      </StyledCol>
      <StyledCol xs>
        <StyledImage src={Carousel3} alt="" />
      </StyledCol>
    </Row>
  );
}

export default Carousel;