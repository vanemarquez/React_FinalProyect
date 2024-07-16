import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Table, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './ShoppingCart.css'; // Importa el archivo CSS aquí

interface Cart {
  idProduct: number;
  idUsuario: string;
  idOrder: number; // ID Pedido
  idLinea: number; // ID Línea
  name: string;
  price: number;
  description: string;
  image: string;
  additionalDescription: string;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const navigate = useNavigate(); // Define useNavigate

  useEffect(() => {
    axios.get('http://localhost:3000/cart')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los productos del carrito:', error);
      });
  }, []);

  const handleQuantityChange = (idProduct: number, newQuantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item =>
        item.idProduct === idProduct ? { ...item, quantity: newQuantity } : item
      )
    );
    axios.patch(`http://localhost:3000/cart/${idProduct}`, { quantity: newQuantity })
      .catch(error => {
        console.error('Hubo un error al actualizar la cantidad:', error);
      });
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getIgv = (subtotal: number) => {
    return (subtotal * 0.18).toFixed(2);
  };

  const getTotal = (subtotal: number, igv: number) => {
    return (subtotal + igv).toFixed(2);
  };

  const handleRemoveItem = (idProduct: number) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.idProduct !== idProduct)
    );
    axios.delete(`http://localhost:3000/cart/${idProduct}`)
      .catch(error => {
        console.error('Hubo un error al eliminar el producto:', error);
      });
  };

  const subtotal = parseFloat(getSubtotal());
  const igv = parseFloat(getIgv(subtotal));
  const total = parseFloat(getTotal(subtotal, igv));

  return (
    <Container>
      <Row className="title-container">
        <h2>Carrito de Compras</h2>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
              <th>ID Pedido</th>
              <th>ID Línea</th>
              <th>ID Usuario</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={`${item.idOrder}-${item.idLinea}`}>
                <td><Image src={item.image} thumbnail width={100} /></td>
                <td>{item.name}</td>
                <td>
                  <Form.Control 
                    type="number" 
                    value={item.quantity} 
                    min="1"
                    onChange={(e) => handleQuantityChange(item.idProduct, parseInt(e.target.value))}
                  />
                </td>
                <td>S/.{item.price.toFixed(2)}</td>
                <td>S/.{(item.price * item.quantity).toFixed(2)}</td>
                
                {/* <td>{item.idOrder}</td> */} {/* Mostrar ID Pedido */}
                {/*<td>{item.idLinea}</td> */}{/* Mostrar ID Línea */}
                {/*<td>{item.idUsuario}</td> */}{/* Mostrar ID Usuario */}
                <td>
                  <Button 
                    variant="danger" 
                    onClick={() => handleRemoveItem(item.idProduct)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row className="subtotal-container justify-content-end">
        <Col xs="auto">
          <h4>Subtotal: S/.{subtotal.toFixed(2)}</h4>
        </Col>
      </Row>
      <Row className="igv-container justify-content-end">
        <Col xs="auto">
          <h4>IGV (18%): S/.{igv.toFixed(2)}</h4>
        </Col>
      </Row>
      <Row className="total-container justify-content-end">
        <Col xs="auto">
          <h4>Total: S/.{total.toFixed(2)}</h4>
        </Col>
      </Row>
      <Row>
        <Button variant="secondary" onClick={() => navigate(-1)}>Regresar</Button>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
