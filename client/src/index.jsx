import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { ProductOverviewContainer, Row, GlobalStyle } from "./styles/App.styles.js";
import ProductHeader from './components/ProductHeader/ProductHeader.jsx';
import ProductImagesViewer from './components/ProductImagesViewer/ProductImagesViewer.jsx';
import ProductInfo from './components/ProductInfo/ProductInfo.jsx';
import CarouselModal from './components/CarouselModal/CarouselModal.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import DeliveryCards from './components/DeliveryCards/DeliveryCards.jsx';


const axios = require('axios');

const App = () => {
  const [productData, setProductData] = useState();
  const [carousel, setCarousel] = useState(false);

  useEffect(() => {
    // document.addEventListener('click', (e) => {
    //   console.log(e.target)
    // })
    getProductData();
  }, []);

  const getProductData = () => {
    axios.get(`/api/products${window.location.pathname}`)
      .then(({data}) => {
        console.log(data);
        data.images.push('');
        setProductData(data);
        console.log(data);
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

ReactDOM.render(<App />, document.getElementById('app'));