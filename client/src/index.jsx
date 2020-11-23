import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { ProductOverviewContainer, Row, GlobalStyle } from "./styles/App.styles.js";
import ProductHeader from './components/ProductHeader/ProductHeader.jsx';
import ProductImagesViewer from './components/ProductImagesViewer/ProductImagesViewer.jsx';
import ProductInfo from './components/ProductInfo/ProductInfo.jsx';
import CarouselModal from './components/CarouselModal/CarouselModal.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import DeliveryCards from './components/DeliveryCards/DeliveryCards.jsx';
import axios from 'axios';

const App = () => {
  const [productData, setProductData] = useState();
  const [carousel, setCarousel] = useState(false);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    // const url = window.location.pathname.slice(0, -1);
    // const id = url.substring(url.lastIndexOf('/') + 1);

    axios.get(`/api/products${window.location.pathname}`)
      .then(({data}) => {
        // Pushes '' to render extra thumbnail for adding user photos
        data.images.push('');
        setProductData(data);
      });
  }

  const toggleCarousel = () => {
    setCarousel(!carousel);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar />
      {
        productData &&
          <ProductOverviewContainer>
            <ProductHeader productData={productData} />
            <Row>
              <ProductImagesViewer
                images={productData.images}
                toggleCarousel={toggleCarousel}
              />
              <ProductInfo productData={productData} />
              <DeliveryCards />
            </Row>
          </ProductOverviewContainer>
      }
      {
        (carousel && productData) &&
          <CarouselModal
            images={productData.images}
            toggleCarousel={toggleCarousel}
          />
      }
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('service1'));