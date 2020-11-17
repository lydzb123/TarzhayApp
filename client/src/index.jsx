import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { ProductOverviewContainer, Container, GlobalStyle } from "./styles/App.styles.js";
import ProductHeader from './components/ProductHeader/ProductHeader.jsx';
import ProductImagesViewer from './components/ProductImagesViewer/ProductImagesViewer.jsx';
import ProductInfo from './components/ProductInfo/ProductInfo.jsx';
import CarouselModal from './components/CarouselModal/CarouselModal.jsx';


const axios = require('axios');

const App = () => {
  const [productData, setProductData] = useState();
  const [carousel, setCarousel] = useState(true);

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
        setProductData(data);
      });
  }

  const toggleCarousel = () => {
    setCarousel(!carousel);
  }

  return (
    <>
      <GlobalStyle />
      {
        productData &&
          <ProductOverviewContainer>
            <ProductHeader productData={productData} />
            <Container>
              <ProductImagesViewer
                images={productData.images}
                toggleCarousel={toggleCarousel}
              />
              <ProductInfo productData={productData} />
            </Container>
            {
              carousel &&
                <CarouselModal
                  images={productData.images}
                  toggleCarousel={toggleCarousel}
                />
            }
          </ProductOverviewContainer>

      }

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));