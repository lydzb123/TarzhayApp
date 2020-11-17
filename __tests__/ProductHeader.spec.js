import React from 'react';
import { create } from 'react-test-renderer';
import ProductHeader from '../client/src/components/ProductHeader.jsx';

describe("ProductHeader component", () => {
  test("Matches the snapshot", () => {
    const productHeader = create(<ProductHeader />);
    expect(productHeader.toJSON()).toMatchSnapshot();
  })
})