import React from 'react';
import { Navbar, NavItem, GridImage, SortImage } from './StyledCatalogue';
import Grids from '../../images/grid.jpg';
import Sort from '../../images/sort.jpg';

const Navigation = () => {
  return (
    <Navbar>
      <NavItem>
        <GridImage src={Grids} alt="Grid layout" />
      </NavItem>
      <NavItem style={{ right: '0px' }}>
        <SortImage src={Sort} alt="Sort" />
      </NavItem>
    </Navbar>
  )
}

export default Navigation;