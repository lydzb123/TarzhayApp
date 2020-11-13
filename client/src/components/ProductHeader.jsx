import React from 'react';

const ProductHeader = ({productData}) => {
  const { name, brand, breadcrumbs } = productData;
  return (
    <div className="productHeader">
      <div className="productHeader--breadcrumbs">
        {breadcrumbs && breadcrumbs.map(crumb => {
          return (
            <span key={crumb}>
              <a href="#">{crumb}</a>
              <span>/</span>
            </span>
          )
        })}
      </div>
      <div className="productHeader--productName">{name}</div>
      <a href="#" className="productHeader--brandLink">{`Shop all ${brand}`}</a>
    </div>
  )
}

export default ProductHeader;