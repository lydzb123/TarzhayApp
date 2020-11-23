import 'jsdom-global/register';
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import ProductInfo from '../client/src/components/ProductInfo/ProductInfo.jsx';
// import { Container, Row, Col, StarBar } from '../client/src/components/ProductInfo/style.js';
// import { Stars } from '../client/src/components/ProductInfo/style.js';
import {getProductData} from './testHelpers.js';


describe('ProductInfo', () => {

  it('should render the star-bars correctly with a given percent', () => {
    const productData = getProductData();
    const component = render(<ProductInfo productData={productData} />);

    expect(component).toMatchSnapshot();
  });

});