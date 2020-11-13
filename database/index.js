const config = require('../config.js');
const mongoose = require('mongoose');
const sampleProduct = require('./seeding/dummy-data.js');

const db = mongoose.connect(config.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  images: [String],
  reg_price: Number,
  discount_price: Number,
});

const Product = mongoose.model('product', productSchema);

module.exports = {
  Product
};