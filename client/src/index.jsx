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
    const { href } = window.location;
    const id = href.substring(href.lastIndexOf('/') + 1);

    var url = window.location.pathname.replace(/\//g, '') || 1;
    axios.get(`/api/products/${url}`)
      .then(({data}) => {
        // Pushes '' to render extra thumbnail for adding user photos
        data.photo_urls.push('');
        setProductData(data);
      })
      .catch(err => {
        console.log(err);
      })
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
                images={productData.photo_urls}
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
            images={productData.photo_urls}
            toggleCarousel={toggleCarousel}
          />
      }
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('service1'));
