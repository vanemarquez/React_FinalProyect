import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const OrderDetail: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Ajusta el tipo de acuerdo a tu estructura de datos
  const navigate = useNavigate();

  useEffect(() => {

    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cart'); // Reemplaza con la URL correcta
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

    // Función para formatear la fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    //const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <Container>
      <Row className="title-container">
        <h2>Resumen del Pedido</h2>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th># Pedido</th>
              <th>Fecha</th>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{formatDate(item.fecha)}</td>
                <td><Image src={item.image} thumbnail width={100} /></td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>S/.{item.price.toFixed(2)}</td>
                <td>S/.{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
        <Col className="text-right">
        <Button variant="secondary" className="custom-back-button" onClick={() => navigate(-1)}>Regresar</Button>

        </Col>
    </Container>
  );
};

export default OrderDetail;
