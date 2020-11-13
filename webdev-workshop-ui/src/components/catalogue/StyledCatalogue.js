import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

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