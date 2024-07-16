import React, { useEffect, useState } from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  const [userData, setUserData] = useState<{ username: string, email: string } | null>(null);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      setUserData(user);
    }
  }, []);

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
          <p>Nombre de usuario: {userData.username}</p>
        </div>
      ) : (
        <Link to="/auth"> <p>Iniciar sesión</p></Link>
      )}
      
     
      </div>
      <div className="header__cart">
        <a href="#">
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