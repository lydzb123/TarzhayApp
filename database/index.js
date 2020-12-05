const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})
  .then(() => console.log('---MongoDB Connection Successful'))
  .catch(err => console.log(err));


const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true
  },
  name: String,
  brand: String,
  breadcrumbs: [String],
  images: [String],
  price_reg: Number,
  price_discount: Number,
  sale_end: Date,
  total_reviews: Number,
  total_questions: Number,
  ratings_data: [{
    one_star: Number,
    two_star: Number,
    three_star: Number,
    four_star: Number,
    five_star: Number
  }],
  promo_data: [{
    promo_id: Number,
    main_text: String,
    sub_text: String,
    link_text: String
  }]
});


console.log('schema created');
const Product = mongoose.model('product', productSchema);
module.exports = {Product};


