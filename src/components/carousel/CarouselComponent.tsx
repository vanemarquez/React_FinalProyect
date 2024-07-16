import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css'; 

const CarouselComponent: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="../../public/images/carrusel_popeye1.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="../../public/images/carrusel_popeye2.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="../../public/images/carrusel_popeye3.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
