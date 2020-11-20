import React, {useState} from 'react';
import { Container, Thumbnails, Thumbnail, MainImage, PhotoUpload } from './style.js';

const CarouselModal = ({ images, toggleCarousel }) => {
  // const [mainImage, setMainImage] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(0)



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
        <MainImage image={images[imageIndex]}>
          {images[imageIndex] === '' &&
            <PhotoUpload>
              <h1 className="photo-upload--text">Already have this product?</h1>
              <h1 className="photo-upload--text">Snap a pic for all to see!</h1>
              <button className="photo-upload--button">
                <svg className="camera-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" focusable="false"><defs><path d="M16 2.25L17.027 5H23v16H1V5h5.973L8 2.25h8zm-1.042 1.499H9.041L8.014 6.5H2.5v13h19v-13h-5.514l-1.028-2.751zM12 7.25a5.21 5.21 0 015.25 5.25A5.21 5.21 0 0112 17.75a5.21 5.21 0 01-5.25-5.25A5.21 5.21 0 0112 7.25zm0 1.5a3.71 3.71 0 00-3.75 3.75A3.71 3.71 0 0012 16.25a3.71 3.71 0 003.75-3.75A3.71 3.71 0 0012 8.75zM19 8c.56 0 1 .44 1 1s-.44 1-1 1-1-.44-1-1 .44-1 1-1z" id="nds-Icon711a"></path></defs><use href="#nds-Icon711a"></use></svg>
                <span>Upload photo</span>
              </button>
            </PhotoUpload>}
        </MainImage>
        <span className="fa-stack fa-2x" onClick={nextImageIndex}>
          <i className="far fa-circle fa-stack-2x"></i>
          <i className="fas fa-chevron-right fa-stack-1x"></i>
        </span>
      </div>
      <Thumbnails>
        {images.map((image, i) => {
          return (
            <Thumbnail image={image}
              selected={image === images[imageIndex]}
              onClick={() => {
                changeImageIndex(i);
              }}
            >
              {i === images.length - 1 && <div className="share-pic-text">Share your pic</div>}
            </Thumbnail>
          );
        })}
      </Thumbnails>
      <i className="fas fa-times-circle fa-4x" onClick={toggleCarousel}></i>

    </Container>
  );
};

export default CarouselModal;