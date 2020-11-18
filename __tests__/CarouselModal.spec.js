import React from 'react';
import { create } from 'react-test-renderer';
import CarouselModal from '../client/src/components/CarouselModal/CarouselModal.jsx';
import fakeData from '../database/fakeData.js';

// const getProductData = () => {
//   axios.get(`/api/products${window.location.pathname}`)
//     .then(({data}) => {
//       console.log(data);
//       setProductData(data);
//     });
// }

// const toggleCarousel = () => {
//   setCarousel(!carousel);
// }

// Snapshot test
describe("CarouselModal component", () => {
  test("it displays the next image", () => {
    const component = create(<CarouselModal
      images={fakeData.images}
    />);
    expect(component.toJSON()).toMatchSnapshot();
  })
});

// Snapshot test
// describe("CarouselModal component", () => {
//   test("it displays the next image", () => {
//     const component = create(<CarouselModal
//       images={fakeData.images}
//       toggleCarousel={toggleCarousel}
//     />);
//     const instance = carouselModal.root;
//     const carouselModal = instance.findByType("img");

//     expect(component.toJSON()).toMatchSnapshot();
//   })
// });