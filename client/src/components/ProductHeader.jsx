import React from 'react';

const ProductHeader = ({productData}) => {
  console.log(productData);
  const { name, brand } = productData;
  return (
    <div className="productHeader">
      <div className="productHeader--breadcrumbs">
        <a href="#">Target</a>
        <span>/</span>
        <a href="#">Toys</a>
        <span>/</span>
        <a href="#">Games</a>
        <span>/</span>
        <a href="#">Adult Games</a>
      </div>
      <div className="productHeader--productName">{name}</div>
      <a href="#" className="productHeader--brandLink">{`Shop all ${brand}`}</a>
    </div>
  )
}

export default ProductHeader;