import React, {useState} from 'react';
import ProductImagesViewerStyles from '../styles/ProductImagesViewer.styles.js';

const ProductImagesViewer = ({productData}) => {
  const { images } = productData;
  const [mainImage, setMainImage] = useState(images[0]);


  const changeImage = (e) => {
    const newImage = e.target.src;
    setMainImage(newImage);
  }

  return (
    <ProductImagesViewerStyles>
      <div className="productImagesViewer">
        <div className="productImagesViewer--thumbnails">
          {images && images.map(imageURL => {
            return (
              <img
                key={imageURL} src={imageURL} className="productImagesViewer--thumbnail"
                onClick={changeImage}
              />
            );
          })}
        </div>
        <div className="productImagesViewer--mainImage">
          {images && <img src={mainImage} className="mainImage" />}
        </div>
      </div>
    </ProductImagesViewerStyles>

  );
}

export default ProductImagesViewer;