import axios from 'axios';

export const getProductData = async () => {
  let productData;

  await axios.get(`/api/products/12`)
    .then(({data}) => {
      data.images.push('');
      productData = data;
    });

  return productData;
}