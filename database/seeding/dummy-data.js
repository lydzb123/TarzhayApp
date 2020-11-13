var sampleProduct = {
  id: 0,
  name: 'Settlers of Catan Board Game',
  brand: 'Catan Studio',
  images: [],
  bread_crumbs: [],
  reg_price: 49.49,
  discount_price: 44,
  sale_end_date: 'Thursday',
  reviews: {
    avg_rating: 4.5,
    total_ratings: 6
  },
  promotions: [],
  user_saved: false
};

sampleProduct.images = [
  'https://target.scene7.com/is/image/Target/GUEST_f7dfce8b-234e-4343-9f30-5d5c0da5230c?wid=1389&hei=1389&fmt=webp',
  'https://target.scene7.com/is/image/Target/GUEST_ef54301f-9840-4295-bc4d-384e61b9b211?wid=1389&hei=1389&fmt=webp',
  'https://target.scene7.com/is/image/Target/GUEST_44f711ee-f5f5-4fa6-849d-abe0cbd32463?wid=1389&hei=1389&fmt=webp',
  'https://target.scene7.com/is/image/Target/GUEST_a8929dc9-b0b7-4828-8092-5b6e10d73a53?wid=1389&hei=1389&fmt=webp'
]

module.exports.sampleProduct = sampleProduct;