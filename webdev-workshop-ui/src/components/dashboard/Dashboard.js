import React, { useContext, useState, useRef } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Box, Title, Subtitle, StyledInput, Text, ItemImage, StyledRow, StyledButton } from './StyledDashboard';
import AppContext from '../context/AppContext';

const Dashboard = () => {
  const { cart } = useContext(AppContext);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState('');
  const fileRef = useRef();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const fileUploaded = event.target;
    console.log(fileUploaded);
    const file = fileUploaded.files;
    console.log(file);
  }

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
        <StyledRow>
          <Title>Dashboard</Title>
        </StyledRow>
          <Row>
          <form onSubmit={handleSubmit}>
            <Col>
              <Row>
                <Subtitle>Add Item</Subtitle>
              </Row>
              <Row>
                <StyledInput placeholder="id" value={id} onChange={(e) => setId(e.target.value)}/>
              </Row>
              <Row>
                <StyledInput placeholder="name" value={name}  onChange={(e) => setName(e.target.value)}/>
              </Row>
              <Row>
                <StyledInput placeholder="price" value={price}  onChange={(e) => setPrice(e.target.value)}/>
              </Row>
              <Row>
                <StyledInput type="file" ref={fileRef}  onChange={(e) => setFile()}/>
              </Row>
              <Row>
                <StyledButton type="submit" />
              </Row>
            </Col>
            </form>
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