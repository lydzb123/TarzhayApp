import React, {useState} from 'react';
import { Container, Thumbnails, Thumbnail, MainImage } from './style.js';

const CarouselModal = ({ images, toggleCarousel }) => {
  // const [mainImage, setMainImage] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(0)

  // const changeImage = (e) => {
  //   const newImage = e.target.src;
  //   setMainImage(newImage);
  // }

  const changeImageIndex = (i) => {
    setImageIndex(i);
  }

  const nextImageIndex = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  }

  const prevImageIndex = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  }

  return (
    <Container>
      <div className="topRow">
        <span className="fa-stack fa-2x" onClick={prevImageIndex}>
          <i className="far fa-circle fa-stack-2x"></i>
          <i className="fas fa-chevron-left fa-stack-1x"></i>
        </span>
        <MainImage src={images[imageIndex]} />
        <span className="fa-stack fa-2x" onClick={nextImageIndex}>
          <i className="far fa-circle fa-stack-2x"></i>
          <i className="fas fa-chevron-right fa-stack-1x"></i>
        </span>
      </div>
      <Thumbnails>
        {images.map((image, i) => {
          return (
            <Thumbnail src={image}
              onClick={() => {
                changeImageIndex(i);
              }}
            />
          );
        })}
      </Thumbnails>
      <i className="fas fa-times-circle fa-4x" onClick={toggleCarousel}></i>

    </Container>
  );
};

export default CarouselModal;