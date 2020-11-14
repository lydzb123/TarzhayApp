import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./styles/App.styles.js";
import ProductHeader from './components/ProductHeader.jsx';
import ProductImagesViewer from './components/ProductImagesViewer.jsx';
import ProductInfo from './components/ProductInfo.jsx';


const axios = require('axios');

const App = () => {
  const [productData, setProductData] = useState();
  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    axios.get(`/api/products${window.location.pathname}`)
      .then(response => {
        console.log(response.data);
        setProductData(response.data);
      });
  }

  return (
    <div>
      <GlobalStyle />
      {
        productData &&
          <>
            <ProductHeader productData={productData} />
            <ProductImagesViewer productData={productData} />
            <ProductInfo productData={productData} />
          </>
      }
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));