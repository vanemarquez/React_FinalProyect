import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Table, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../components/shopping-cart/ShoppingCart.css';

interface CartItem {
  idPedido: number;
  fecha: Date;
  nuLinea: number;
  name: string;
  quantity: number;
  price: number;
  description: string;
  image: string;
  idProduct: number;
  id: number;
  idUsuario: number;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItemJSON = localStorage.getItem('cart');
    if (cartItemJSON) {
      const cartItemsFromStorage: CartItem[] = JSON.parse(cartItemJSON);
      setCartItems(cartItemsFromStorage);
    }
  }, []);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index] = { ...updatedCartItems[index], quantity: newQuantity };
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleCheckout = async () => {
    try {
      const lista: any[] = (await axios.get('http://localhost:3000/cart')).data;
      console.log('lista', lista);
      const usuario = localStorage.getItem("user");
      const usuaJSON = usuario ? JSON.parse(usuario) : null;

      let cartList: CartItem[] = [];
      let linea = 1;

      // Crear un conjunto para almacenar ids únicos
      const idSet = new Set();

      // Iterar sobre la lista y agregar cada id al conjunto
      lista.forEach(item => {
        idSet.add(item.id);
      });

      // Obtener la cantidad de ids únicos
      const uniqueCount = idSet.size + 1;

      cartItems.forEach((e) => {
        let item = { ...e }
        item.id = uniqueCount;
        item.nuLinea = linea++; //para explicar
        item.idProduct = e.id;
        item.idUsuario = usuaJSON.id;
        item.fecha = new Date();
        cartList.push(item);
      });

      console.log('cartList', cartList);
      // Realizar la solicitud POST al servidor JSON con los datos del carrito
      //await axios.post('http://localhost:3000/cart', cartList);
      await Promise.all(cartList.map(item => axios.post('http://localhost:3000/cart', item)));

      // Limpiar el carrito local
      localStorage.removeItem('cart');

      // Redirigir a la página de resumen del pedido
      navigate('/order-detail');
    } catch (error) {
      console.error('Error al procesar el pedido:', error);
    }
  };

  return (
    <Container>
      <Row className="title-container">
        <h2>Listado de Compras</h2>
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
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td><Image src={item.image} thumbnail width={100} /></td>
                <td>{item.name}</td>
                <td>
                  <Form.Control
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  />
                </td>
                <td>S/.{item.price.toFixed(2)}</td>
                <td>S/.{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button
                    variant="danger"
                    className="custom-remove-button"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Eliminar
                  </Button>

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col className="text-right">
        <Button variant="secondary" className="custom-back-button" onClick={() => navigate(-2)}>Regresar</Button>{' '}
<Button variant="primary" className="custom-confirm-button" onClick={handleCheckout}>Confirmar Pedido</Button>

        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
