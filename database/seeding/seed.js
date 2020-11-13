const mongoose = require('mongoose');
const axios = require('axios');
const {sampleProduct} = require('./dummy-data.js');
const config = require('../../config.js');
const { Product } = require('../index.js');

const seed = () => {
  const product = new Product(sampleProduct);
  let fakeProducts = [];


  // Product.insertMany()

  product.save((err, product) => {
    if (err) return console.log(err)
    else {
      console.log('sampleProduct saved successfully');
      mongoose.connection.close();
    }
  });
}

mongoose.connect(config.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

Product.deleteMany({})
  .then(() =>{
    console.log('Data Deleted');
    seed();
  });