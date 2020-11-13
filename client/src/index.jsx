import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
// import { GlobalStyle } from "./styles/App.styles.js";
import ProductHeader from './components/ProductHeader.jsx';
import ProductImagesViewer from './components/ProductImagesViewer.jsx';


const axios = require('axios');

const App = () => {
  const [productData, setProductData] = useState();
  //asdkjfhaslkdf
  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    //TODO
    // change url to be dynamic
    axios.get('/api/products/0')
      .then(response => {
        setProductData(response.data[0]);
      });
  }

  return (
    <div>
      {/* <GlobalStyle /> */}
      <ProductHeader productData={productData} />
      <ProductImagesViewer productData={productData} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));