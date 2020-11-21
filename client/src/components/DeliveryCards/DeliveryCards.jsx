import React from 'react';
import {Container, DeliveryCard, Row, Col, Button} from './style.js';

const DeliveryCards = () => {
  const tempData = [
    {
      title: 'Pick up today',
      at: true,
      local_area: 'Irvine University Town Center',
      button_text: 'Pick it up',
      time_text: 'Ready within 4 hours',
      main_text: 'for pickup inside the store.',
      sub_text: 'Aisle A4'
    },
    {
      title: 'Same Day Delivery',
      at: false,
      local_area: '92660',
      button_text: 'Deliver it',
      time_text: 'Get it as soon as 5pm today',
      main_text: 'with Shipt.',
      sub_text: 'Free with membership or $9.99/order'
    },
    {
      title: 'Pick up today',
      at: false,
      local_area: '92660',
      button_text: 'Ship it',
      time_text: 'Get it by Wed, Nov 25',
      main_text: 'with free standard shipping',
      sub_text: ''
    }
  ]

  return (
    <Container>
      {tempData.map(card => {
        const { title, at, local_area, button_text, time_text, main_text, sub_text} = card;
        return (
          <DeliveryCard>
            <Row className="top-half">
              <Col className="left">
                <Row className="title">
                  <div className="option green">{title}</div>
                  <div className="at-to">{at ? 'at' : 'to'}</div>
                  <a href="#" className="local-area">{local_area}</a>
                </Row>
                <a href="#" className="edit-location">Edit location</a>
              </Col>
              <Button>{button_text}</Button>
            </Row>
            <Col className="bottom-half">
              <div className="main-text">
                <span className="timing-text green">{time_text}</span>
                <span>{' ' + main_text}</span>
              </div>
              {sub_text && <div className="sub-text">{sub_text}</div>}
            </Col>
          </DeliveryCard>
        );
      })}
    </Container>
  );
}

export default DeliveryCards;