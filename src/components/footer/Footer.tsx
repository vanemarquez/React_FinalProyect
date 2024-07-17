import React from 'react';
import './Footer.css';
import socialIcon from '../../../public/images/social-icon.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>INFORMACIÓN</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-links">Locales y Reservas</a></li>
              <li><a href="#" className="footer-links">Zonas de reparto</a></li>
              <li><a href="#" className="footer-links">Promociones</a></li>
              <li><a href="#" className="footer-links">Legales Promocionales</a></li>
              <li><a href="#" className="footer-links">Políticas de datos personales</a></li>
              <li><a href="#" className="footer-links">Término y condiciones de Promociones</a></li>
              <li><a href="#" className="footer-links">Derechos ARCO</a></li>
              <li><a href="#" className="footer-links">Mapa del sitio</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>ATENCIÓN AL CLIENTE</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-links">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>MI CUENTA</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-links">Mis Órdenes</a></li>
              <li><a href="#" className="footer-links">Mis Direcciones</a></li>
              <li><a href="#" className="footer-links">Mi Información</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>FORMAS DE PAGO</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-links">Visa</a></li>
              <li><a href="#" className="footer-links">Mastercard</a></li>
              <li><a href="#" className="footer-links">American Express</a></li>
              <li><a href="#" className="footer-links">Libro de reclamaciones</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>SÍGUENOS A TRAVÉS DE</h5>
            <a href="#"><img src={socialIcon} alt="Redes Sociales" className="social-icon" /></a>
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
