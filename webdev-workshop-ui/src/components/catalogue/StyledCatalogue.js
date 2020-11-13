import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

// Navigation
export const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  position: sticky;
  box-shadow: 1px 1px #e7e7e7, -1px -1px #e7e7e7;
`;

export const NavItem = styled.div`
  width: 10%;
  height: 100%;
  position: absolute;
  box-shadow: 1px 1px #e7e7e7, -1px -1px #e7e7e7;
  margin: auto;
  vertical-align: center;

`;

export const GridImage = styled.img`
  width: auto;
  height: 27px;
  display: block;
  margin: auto;
  vertical-align: middle;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const SortImage = styled.img`
  width: auto;
  height: 20px;
  display: block;
  margin: auto;
  margin-top: 18.5px;
  margin-bottom: 18.5px;
`;

// Collection

export const StyledRow = styled(Row)`
  margin: 15px 30px 15px 30px;
`;

export const StyledCol = styled(Col)`
  position: relative;
  float: center;
  text-align: center;
  margin: auto;
  margin-top: 30px;
`;

export const ImageBox = styled.img`
  width: 325px;
  height: 480px;
  display: block;
  margin: auto;
`;

export const ItemName = styled.h4`
  font-family: sans-serif;
  font-size: 14px;
  color: #5c5c5c;
  font-weight: normal;
  text-align: center;
  margin-top: 20px;
`;

export const ItemPrice = styled.button`
  font-family: sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
  color: #939393;
  font-weight: normal;
  text-align: center;
  border: none;
  outline: none;
  background: none;
  transition: 0.3s ease all;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;