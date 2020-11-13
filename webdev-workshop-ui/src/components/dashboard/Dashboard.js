import React, { useContext } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Box, Title, Subtitle, StyledInput, Text, ItemImage } from './StyledDashboard';
import AppContext from '../context/AppContext';

const Dashboard = () => {
  const { cart } = useContext(AppContext);
  const cartItems = () => {
    return cart.map(item => {
      return (
        <Row>
          <ItemImage src={item.imageURL} alt="" />
          <Text>Item: {item.name}<br />Quantity: {item.quantity}</Text>
        </Row>
      )
    })
  }
  return (
    <Grid>
      <Box>
        <Row>
          <Title>Dashboard</Title>
        </Row>
        <Row>
          <Col>
            <Row>
              <Subtitle>Add Item</Subtitle>
            </Row>
            <Row>
              <StyledInput placeholder="id" />
            </Row>
            <Row>
              <StyledInput placeholder="name" />
            </Row>
            <Row>
              <StyledInput placeholder="price" />
            </Row>
          </Col>
          <Col>
            <Row>
              <Subtitle>Cart</Subtitle>
            </Row>
            {cart[0] ? cartItems(): null}
          </Col>
        </Row>
      </Box>
    </Grid>
  )
}

export default Dashboard;