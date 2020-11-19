import React, {useState, useEffect, useRef} from 'react';
import RatingsModal from '../RatingsModal/RatingsModal.jsx';
import {
  ProductInfoContainer,
  Container,
  Button,
  Price,
  SaleText,
  Savings,
  Ratings,
  Stars,
  Select,
  SelectLabel
} from './style.js';

const ProductInfo = ({ productData }) => {
  const [showRatingsModal, setShowRatingsModal] = useState(false);

  const ref = useRef(null);


  const { price_reg, price_discount, sale_end, ratings_data, total_questions } = productData;
  const { five_star, four_star, three_star, two_star, one_star} = ratings_data;

  // Math for discounts
  const discountAmt = (price_reg - price_discount).toFixed(2);
  const discountPercent = Math.round(discountAmt / price_reg * 100);

  //Math for star ratings
  const stars = [five_star, four_star, three_star, two_star, one_star];
  const totalRatings = five_star + four_star + three_star + two_star + one_star;
  const avgRating = ((five_star * 5 + four_star * 4 + three_star * 3 + two_star * 2 + one_star) / totalRatings).toFixed(1);
  const starPercent = avgRating / 5 * 100;

  let date = new Date(sale_end);
  date = date.toLocaleString("en-US", {
    // timeStyle: "short",
    dateStyle: "short"
  });


  return (
    <ProductInfoContainer>
      <Container>
        <SaleText>
          <Price
            sale={sale_end}>{price_discount ? `$${price_discount.toFixed(2)}` : `$${price_reg.toFixed(2)}`}
          </Price>
          <span className="sale">Sale</span>
          <span className="date">{` ends ${date}`}</span>
        </SaleText>
      </Container>
      <Savings>
        {`reg $${price_reg.toFixed(2)} Save $${discountAmt} ${discountPercent}% off`}
      </Savings>
      <Ratings>
        <button className="ratings-button"
          onClick={() => {
            setShowRatingsModal(true);
          }}>
          <Stars starPercent={starPercent}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </Stars>

          <span className="total-ratings">{totalRatings}</span>
          <span className="sm-font">﹀</span>
          {showRatingsModal &&
            <RatingsModal totalRatings={totalRatings}
              avgRating={avgRating} stars={stars}
              starPercent={starPercent}
              setShowRatingsModal={setShowRatingsModal}/>}
        </button>

        <a href="#" className="questions-link">{`${total_questions} Questions`}</a>

      </Ratings>

      <Select name="quantity-select">
        <SelectLabel>Quantity</SelectLabel>
        <select className="quantity-select">
          <option>1</option>
          <option>2</option>
        </select>
      </Select>

    </ProductInfoContainer>
  );
};

export default ProductInfo;