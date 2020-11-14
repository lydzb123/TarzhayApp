import React from 'react';
import {ProductHeaderStyles} from '../styles/App.styles.js';

const ProductHeader = ({productData}) => {
  const { name, brand, breadcrumbs } = productData;
  return (
    <ProductHeaderStyles>
      <div className="productHeader">
        <div className="productHeader--breadcrumbs">
          {breadcrumbs && breadcrumbs.map(crumb => {
            return (
              //TODO add unique key
              <span key={crumb}>
                <a href="#" className="productHeader--crumb">{crumb}</a>
                <span>/</span>
              </span>
            )
          })}
        </div>
        <h1 className="productHeader--productName">{name}</h1>
        <a href="#" className="productHeader--brandLink">{`Shop all ${brand}`}</a>
      </div>
    </ProductHeaderStyles>

  )
}

export default ProductHeader;