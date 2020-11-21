import React from 'react';
import { create } from 'react-test-renderer';
import ProductHeader from '../client/src/components/ProductHeader/ProductHeader.jsx';
import fakeData from '../database/fakeData.js';

// Snapshot test
describe("ProductHeader component", () => {
  test("Matches the snapshot", () => {
    const productHeader = create(<ProductHeader productData={fakeData} />);
    expect(productHeader.toJSON()).toMatchSnapshot();
  })
});

