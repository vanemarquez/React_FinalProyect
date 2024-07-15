import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ProductList.css'; // Asegúrate de importar tu archivo CSS
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  additionalDescription: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <Container>
      <Row className="title-container">
        <h2>PROMOCIONES ONLINE</h2>
      </Row>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <div className="product-image-container">
                <Card.Img variant="top" src={product.image} className="product-image" />
              </div>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text>
                  <small>{product.additionalDescription}</small>
                </Card.Text>
                <Card.Text>
                  <strong>S/.{product.price}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
