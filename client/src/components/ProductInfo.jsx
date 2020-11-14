import React from 'react';

const ProductInfo = ({ productData }) => {
  const { price_reg, price_discount, sale_end, total_ratings, total_questions } = productData;
  const discountAmt = price_reg - price_discount;
  const discountPercent = Math.round(discountAmt / price_reg * 100);

  console.log(discountAmt, discountPercent);
  return (
    <div className="productInfo">
      <div className="productInfo--price">
        <span>{price_discount ? price_discount : price_reg}</span>
        <span>Sale ends</span>
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

export default ProductInfo;