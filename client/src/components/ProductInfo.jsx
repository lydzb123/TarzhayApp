import React from 'react';
import styled from 'styled-components';

const ProductInfoUnstyled = ({ className, productData }) => {
  const { price_reg, price_discount, sale_end, total_ratings, total_questions } = productData;
  const discountAmt = (price_reg - price_discount).toFixed(2);;
  const discountPercent = Math.round(discountAmt / price_reg * 100);

  console.log(discountAmt, discountPercent);
  return (
    <div className={`productInfo ${className}`}>
      <div className="productInfo--price">
        <span>{price_discount ? price_discount : price_reg}</span>
        <span className="test">Sale ends</span>
        <span>{sale_end}</span>
      </div>
      <div className="productInfo--savings">
        {`reg ${price_reg} Save $${discountAmt} ${discountPercent}% off`}
      </div>
      <div className="productInfo--savings">
        <div className="stars">
          {/* <img /> */}
          <div className="yellowBar"></div>
          <div className="productInfo--ratings"></div>
          <a className="productInfo--questions">4 Questions</a>
        </div>
      </div>
    </div>
  )
};

const ProductInfo = styled(ProductInfoUnstyled)`
  color: blue;
  span {
    color: red;
  }
`;

export default ProductInfo;