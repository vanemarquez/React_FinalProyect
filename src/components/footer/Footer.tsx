// Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>INFORMACIÓN</h5>
            <ul className="list-unstyled">
              <li><a href="#">Locales y Reservas</a></li>
              <li><a href="#">Zonas de reparto</a></li>
              <li><a href="#">Promociones</a></li>
              <li><a href="#">Legales Promocionales</a></li>
              <li><a href="#">Políticas de datos personales</a></li>
              <li><a href="#">Término y condiciones de Promociones</a></li>
              <li><a href="#">Derechos ARCO</a></li>
              <li><a href="#">Mapa del sitio</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Popeyes</h5>
            <ul className="list-unstyled">
              <li><a href="#">ATENCIÓN AL CLIENTE</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>MI CUENTA</h5>
            <ul className="list-unstyled">
              <li><a href="#">Mis Órdenes</a></li>
              <li><a href="#">Mis Direcciones</a></li>
              <li><a href="#">Mi Información</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>FORMAS DE PAGO</h5>
            <ul className="list-unstyled">
              <li><a href="#">Visa</a></li>
              <li><a href="#">Mastercard</a></li>
              <li><a href="#">American Express</a></li>
              <li><a href="#">Libro de reclamaciones</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>COMPROBANTES</h5>
            <p>Texto sobre comprobantes aquí...</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>SÍGUENOS A TRAVÉS DE</h5>
            {/* Colocar íconos o enlaces de redes sociales aquí */}
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <span>&copy; {new Date().getFullYear()} Popeyes - Todos los derechos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
ñ