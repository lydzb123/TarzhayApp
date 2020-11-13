const config = require('../config.js');
const mongoose = require('mongoose');
const sampleProduct = require('./seeding/dummy-data.js');

const db = mongoose.connect(config.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

const ratingsSchema = new mongoose.Schema({
  five_star: Number,
  four_star: Number,
  three_star: Number,
  two_star: Number,
  one_star: Number,
});

const promoSchema = new mongoose.Schema({
  id: Number,
  icon_img: String,
  main_text: String,
  sub_text: String,
  link_text: String
});

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  breadcrumbs: [String],
  images: [String],
  reg_price: Number,
  discount_price: Number,
  sale_end: Date,
  total_reviews: Number,
  total_questions: Number,
  ratings_data: ratingsSchema,
  promo_data: promoSchema
});

const userSchema = new mongoose.Schema({
  id: Number,
  username: String,
  email: String,
  saved_products: [Number]
});

const User = mongoose.model('user', userSchema);

const Product = mongoose.model('product', productSchema);

module.exports = {
  Product,
  User
};