import React, { useEffect, useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [userData, setUserData] = useState<{ username: string, email: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => { //función de react para el evento onload.
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      setUserData(user);
    }
  }, []);

  const onClickPedido = () => { //evento
    navigate(`/shoppingcart`);
  };

  const onLogout = () => { //evento
    localStorage.removeItem('user');
    setUserData(null);
    navigate('/auth');
  };

  const iniciarSesion = () => { //evento
    localStorage.removeItem('user');
    setUserData(null);
    navigate('/auth');
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="../../../public/images/logo_popeyes.png"
          alt="Logo de Popeyes"
        />
      </div>
      <div className="header__contact">
        <img
          src="../../../public/images/ingresar_direccion.png"
          alt="Ícono de teléfono"
          className="header__phone-icon"
        />
      </div>
      <div>
        {userData ? (
          <div>
            <p>Usuario: {userData.username}</p>
            {/* <button className="header__button" onClick={onLogout}>Cerrar sesión</button> */}
          </div>
        ) : (
          <a href="#" onClick={iniciarSesion}>
          <img
            src="../../../public/images/iniciar_sesion.png"
            alt="Cerrar Sesión"
          />
        </a>

        )}


      </div>

      <div className="header__cart">
        {userData ? (
          <a href="#" onClick={onLogout}>
            <img
              src="../../../public/images/cerrar_sesion.png"
              alt="Cerrar Sesión"
            />
          </a>
        ) : null}
        <a href="#" onClick={onClickPedido}>
          <img
            src="../../../public/images/carrito.png"
            alt="Ícono de carrito de compras"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;