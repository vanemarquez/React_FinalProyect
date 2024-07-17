import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './OrderPage.css';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  additionalDescription: string;
  quantity: number;
}

const OrderPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state as { product: Product };

  const addToCart = (product: Product) => {
    let cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    product.quantity = 1;
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const handleConfirmProduct = () => {
    addToCart(product);
    navigate('/shoppingcart');
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
              <Button variant="secondary" onClick={() => navigate(-1)} className="me-2">Regresar</Button>
              <Button variant="primary" className="button-primary" onClick={handleConfirmProduct}>Confirmar Producto</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
