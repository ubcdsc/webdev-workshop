import React, { useContext } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Box, Title, Subtitle, StyledInput, Text, StyledButton, StyledRow } from './StyledDashboard';
import AppContext from '../context/AppContext';

const Dashboard = () => {
  const { cart } = useContext(AppContext);
  const cartItems = () => {
    cart?.map(item => {
      return (
        <Row>
          <Text>{item.name}, {item.quantity}</Text>          
        </Row>
      )
    })
  }
  return (
    <Grid>
      <Box>
        <StyledRow>
          <Title>Dashboard</Title>
        </StyledRow>
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
            <Row>
              <StyledInput type="file" />
            </Row>
            <Row>
              <StyledButton type="submit" />
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