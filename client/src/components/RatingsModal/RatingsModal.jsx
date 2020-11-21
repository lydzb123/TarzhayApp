import React, {useState, useEffect, useRef} from 'react';
import { Container, Row, Col, StarBar } from './style.js';
import { Stars } from '../ProductInfo/style.js';

const RatingsModal = ({totalRatings, avgRating, stars, starPercent, setShowRatingsModal}) => {
  const ref = useRef(null);
  const handleOutsideClick = (e) => {
    const {className} = e.target

    if (ref.current && !ref.current.contains(e.target) &&
      !className.includes('ratings') &&
      !className.includes('star') &&
      !className.includes('chevron')
    ) {
      setShowRatingsModal(false);
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  return (
    <Container width={375} ref={ref}>
      <Row className="header">
        <h2 className="avg-rating">{`${avgRating} out of 5`}</h2>
        <Stars starPercent={starPercent}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </Stars>
        <div className="pointer"></div>
      </Row>
      <Row>
        <span>{`${totalRatings} guest ratings`}</span>
      </Row>

      <Col className="star-bars">
        {stars.map((star, i) => {
          const percent = Math.round((star / totalRatings) * 100);
          return (
            <StarBar width={375} percent={percent}>
              <span href="#" className="left">{`${5 - i} star${i !== 4 ? 's' : ''}`}</span>
              <span href="#" className="gray-bar">
                <div className="green-bar" percent={percent}></div>
              </span>
              <span href="#" className="right">{`${percent}%`}</span>
            </StarBar>
          );
        })}
      </Col>
      <a href="#" className="reviews-link">Show all reviews</a>

    </Container>
  )
};

export default RatingsModal;