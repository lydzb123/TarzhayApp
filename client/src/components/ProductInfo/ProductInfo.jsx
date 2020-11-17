import React from 'react';
import { ProductInfoContainer, Container, Link, Price, SaleText, Savings, Ratings, Stars } from './style.js';

const ProductInfo = ({ productData }) => {
  const { price_reg, price_discount, sale_end, ratings_data, total_questions } = productData;
  const { five_star, four_star, three_star, two_star, one_star} = ratings_data;
  const discountAmt = (price_reg - price_discount).toFixed(2);
  const discountPercent = Math.round(discountAmt / price_reg * 100);
  const totalRatings = five_star + four_star + three_star + two_star + one_star;
  const avgRating = ((five_star * 5 + four_star * 4 + three_star * 3 + two_star * 2 + one_star) / totalRatings).toFixed(1);
  const starPercent = avgRating / 5 * 100;

  let date = new Date(sale_end);
  date = date.toLocaleString("en-US", {
    timeStyle: "short",
    dateStyle: "short"
  });

  console.log(starPercent, discountAmt, discountPercent);
  return (
    <ProductInfoContainer>
      <Container>
        <Price sale={sale_end}>${price_discount ? price_discount : price_reg}</Price>
        <SaleText>
          {`Sale ends ${date}`}
        </SaleText>
      </Container>
      <Savings>
        {`reg ${price_reg} Save $${discountAmt} ${discountPercent}% off`}
      </Savings>
      <Ratings>

        <Stars starPercent={starPercent}>
          ⭐⭐⭐⭐⭐
        </Stars>

        <Link href="#">{totalRatings}</Link>
        <span>﹀|</span>
        <Link href="#">4 Questions</Link>
      </Ratings>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
    </ProductInfoContainer>
  );
};

export default ProductInfo;