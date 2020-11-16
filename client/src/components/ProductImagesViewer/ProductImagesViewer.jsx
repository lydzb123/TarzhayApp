import React, { useState } from 'react';
import {
  Container,
  Thumbnails,
  Thumbnail,
  MainImageContainer,
  ZoomLens,
  MainImage,
  ZoomedImage
} from './style.js';

const ProductImagesViewer = ({productData}) => {
  const { images } = productData;
  const [mainImage, setMainImage] = useState(images[0]);


  const changeImage = (e) => {
    const newImage = e.target.src;
    setMainImage(newImage);
  }


  // TODO refactor to react
  // const zoomImage = (normalId, zoomedId) => {
  //   const normalImg = document.getElementById(normalId);
  //   const zoomedImg = document.getElementById(zoomedId);
  //   let lens = document.createElement('DIV');
  //   lens.setAttribute('class', 'zoomLens');
  //   normalImg.parentElement.insertBefore(lens, normalImg);

  //   const cx = zoomedImg.offsetWidth / lens.offsetWidth;
  //   const cy = zoomedImg.offsetHeight / lens.offsetHeight;

  //   zoomedImage.style.backgroundImage = `url('${normalImg.src}')`;
  //   zoomedImage.style.backgroundSize = `${normalImg.width * cx}px ${normalImg.height * cy}px`;

  //   lens.addEventListener("mousemove", moveLens);
  //   normalImg.addEventListener("mousemove", moveLens);

  //   const moveLens = (e) => {
  //     e.preventDefault();

  //     let { x, y } = getMousePosition(e);
  //     x = x - (lens.offsetWidth / 2);
  //     y = y - (lens.offsetHeight / 2);

  //     if (x > normalImg.width - lens.offsetWidth) {
  //       x = normalImg.width - lens.offsetWidth;
  //     }
  //     if (x < 0) {
  //       x = 0;
  //     }
  //     if (y > normalImg.height - lens.offsetHeight) {
  //       y = normalImg.height - lens.offsetHeight;
  //     }
  //     if (y < 0) {
  //       y = 0;
  //     }

  //     lens.style.left = x + "px";
  //     lens.style.top = y + "px";
  //     /* Display what the lens "sees": */
  //     result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  //   }

  //   const getMousePosition = (e) => {
  //     let x = 0;
  //     let y = 0;
  //     const area = normalImg.getBoundingClientRect();
  //     x = e.pageX - a.left;
  //     y = e.pageY - a.top;

  //     return { x ,y };
  //   }
  // }



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
        <Thumbnails className="productImagesViewer--thumbnails">
          {images && images.map(imageURL => {
            return (
              <Thumbnail
                key={imageURL} src={imageURL} className="productImagesViewer--thumbnail"
                onClick={changeImage}
              />
            );
          })}
        </Thumbnails>
        <MainImageContainer className="productImagesViewer--mainImage">
          <ZoomLens id="zoomLens" onMouseMove={moveLens} ></ZoomLens>
          {images &&
            <MainImage
              id="normalImg" src={mainImage}
              className="mainImage"
              onMouseMove={moveLens}
            />
          }
          {images && <ZoomedImage id="zoomedImg" imageUrl={mainImage} className="zoomImage" />}
        </MainImageContainer>
      </Container>
  );
}

export default ProductImagesViewer;