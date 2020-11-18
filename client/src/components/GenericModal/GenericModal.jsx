import React from 'react';
import { Container, Row, Col, StarBar } from './style.js';
import { Stars } from '../ProductInfo/style.js';

const GenericModal = ({totalRatings, avgRating, stars, starPercent}) => {
  return (
    <Container width={375}>
      <Row className="header">
        <h2 className="avg-rating">{`${avgRating} out of 5`}</h2>
        <Stars starPercent={starPercent}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </Stars>
      </Row>
      <Row >
        <span>{`${totalRatings} guest ratings`}</span>
      </Row>

      <Col className="star-bars">
        {stars.map((star, i) => {
          const percent = Math.round((star / totalRatings) * 100);
          return (
            <StarBar width={375} percent={percent}>
              <span className="left">{`${5 - i} star${i !== 4 ? 's' : ''}`}</span>
              <div className="gray-bar">
                <div className="green-bar" percent={percent}></div>
              </div>
              <span className="right">{`${percent}%`}</span>
            </StarBar>
          );
        })}
      </Col>
      <a href="#" className="reviews-link">Show all reviews</a>

    </Container>
  )
};

export default GenericModal;