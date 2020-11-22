import 'jsdom-global/register';
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import RatingsModal from '../client/src/components/RatingsModal/RatingsModal.jsx';
import { Container, Row, Col, StarBar } from '../client/src/components/RatingsModal/style.js';
import { Stars } from '../client/src/components/ProductInfo/style.js';

describe('RatingsModal', () => {

  it('should render the star-bars correctly with a given percent', () => {
    const percent = 50;
    const component = render(<StarBar width={375} percent={percent} />);

    expect(component).toMatchSnapshot();
  });

  it('should render the Stars component correctly given a starPercent ', () => {
    const starPercent = 25;
    const component = render(<Stars starPercent={starPercent} />);

    expect(component).toMatchSnapshot();
  });

});