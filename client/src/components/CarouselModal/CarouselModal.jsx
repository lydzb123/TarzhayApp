import React from 'react';
import { Container, Thumbnails } from './style.js';

const CarouselModal = ({ images }) => {
  return (
    <Container>
      <div className="topRow">
        <span className="fa-stack fa-2x">
          <i className="far fa-circle fa-stack-2x"></i>
          <i className="fas fa-chevron-left fa-stack-1x"></i>
        </span>

        <span className="fa-stack fa-2x">
          <i className="far fa-circle fa-stack-2x"></i>
          <i className="fas fa-chevron-right fa-stack-1x"></i>
        </span>

      </div>
      <div className="botRow">
        {/* {images.map(image => {

        })} */}
      </div>
      <i className="fas fa-times-circle fa-4x"></i>

    </Container>
  );
};

export default CarouselModal;