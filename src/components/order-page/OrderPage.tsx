import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './OrderPage.css'; 

const OrderPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state as { product: { id: number, name: string, price: number, description: string, image: string, additionalDescription: string } };

  const handleConfirmProduct = () => {
    axios.post('http://localhost:3000/cart', product)
      .then(response => {
        console.log('Producto añadido al carrito:', response.data);
        navigate('/shoppingcart');
      })
      .catch(error => {
        console.error('Hubo un error al añadir el producto al carrito:', error);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text><small>{product.additionalDescription}</small></Card.Text>
              <Card.Text><strong>S/.{product.price}</strong></Card.Text>
              <Button variant="primary" onClick={handleConfirmProduct}>Confirmar Producto</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
