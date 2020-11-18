import React, { useState } from 'react';
import {
  Container,
  Thumbnails,
  Thumbnail,
  DarkWrapper,
  MainImageContainer,
  ZoomLens,
  MainImage,
  ZoomedImage
} from './style.js';

const ProductImagesViewer = ({images, toggleCarousel}) => {
  const [imageIndex, setImageIndex] = useState(0);

  // Target only displays the first 5 images
  const thumbnailImages = images.slice(0, 5);
  console.log(thumbnailImages);

  const changeImageIndex = (i) => {
    setImageIndex(i);
  }

  const moveLens = (e) => {
    e.preventDefault();
    let lens = document.getElementById('zoomLens');
    const normalImg = document.getElementById('normalImg');
    const zoomedImg = document.getElementById('zoomedImg');

    const cx = zoomedImg.offsetWidth / lens.offsetWidth;
    const cy = zoomedImg.offsetHeight / lens.offsetHeight;

    // zoomedImage.style.backgroundImage = `url('${normalImg.src}')`;
    zoomedImg.style.backgroundSize = `${normalImg.width * cx}px ${normalImg.height * cy}px`;

    const getMousePosition = (e) => {
      let x = 0;
      let y = 0;
      const { pageX, pageY } = e;
      const { left, top } = normalImg.getBoundingClientRect();
      x = pageX - left;
      y = pageY - top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x, y };
    }
    let { x, y } = getMousePosition(e);

    x = x - (lens.offsetWidth / 2);
    y = y - (lens.offsetHeight / 2);

    if (x > normalImg.width - lens.offsetWidth) {
      x = normalImg.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > normalImg.height - lens.offsetHeight) {
      y = normalImg.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }

    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    zoomedImg.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }

  return (
      <Container className="productImagesViewer">
        {images &&
          <>
            <Thumbnails className="productImagesViewer--thumbnails">
              {thumbnailImages.map((imageURL, i) => {
                return (
                  <Thumbnail
                    key={imageURL} imageURL={imageURL} className="productImagesViewer--thumbnail"
                    onClick={() => {
                      changeImageIndex(i)
                    }}
                  >
                    { i === 4 && <div className="shadowOverlay" onClick={toggleCarousel}>{`+${images.length - i} more`}</div> }
                  </Thumbnail>
                );
              })}
            </Thumbnails>
            <MainImageContainer className="productImagesViewer--mainImage">
              <ZoomLens id="zoomLens" onMouseMove={moveLens} ></ZoomLens>
                <MainImage
                  id="normalImg" src={images[imageIndex]}
                  className="mainImage"
                  onMouseMove={moveLens}
                />
              <ZoomedImage id="zoomedImg" imageUrl={images[imageIndex]} className="zoomImage" />
            </MainImageContainer>
          </>
        }

      </Container>
  );
}

export default ProductImagesViewer;