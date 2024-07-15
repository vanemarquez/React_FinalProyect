import React from 'react';


interface FooterProps {
  parametro1: string;
}

const Footer: React.FC<FooterProps> = ({ parametro1 }) => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          © {new Date().getFullYear()} {parametro1}. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
