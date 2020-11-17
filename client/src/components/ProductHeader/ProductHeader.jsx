import React from 'react';
import { Breadcrumbs, ProductName } from './style.js'


const ProductHeader = ({productData}) => {
  const { name, brand, breadcrumbs } = productData;
  return (
      <div className="productHeader">
        <Breadcrumbs>
          {breadcrumbs && breadcrumbs.map(crumb => {
            return (
              //TODO add unique key
              <span key={crumb}>
                <a href="#" className="productHeader--crumb">{crumb}</a>
                <span>/</span>
              </span>
            )
          })}
        </Breadcrumbs>
        <ProductName>{name}</ProductName>
        <a href="#" className="productHeader--brandLink">{`Shop all ${brand}`}</a>
      </div>

  )
}

export default ProductHeader;