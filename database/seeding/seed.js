const mongoose = require('mongoose');
const faker = require('faker');
const axios = require('axios');
// const {sampleProduct} = require('./dummy-data.js');
const config = require('../../config.js');
const { Product, User } = require('../index.js');

const { internet, random, commerce, date, company, image, lorem } = faker;

const generateFakeUsers = (quantity) => {
  let counter = 0;
  let fakeUsers = [];

  const generateFakeUser = () => {
    let fakeUser = {
      id: counter,
      username: internet.userName(),
      email: internet.email(),
      saved_products: [
        0, random.number({ min: 1, max: 100}), random.number({ min: 1, max: 100})
      ].sort()
    }
    const allUnique = fakeUsers.every(pushedUser =>
      fakeUser.email !== pushedUser.email &&
      fakeUser.username !== pushedUser.username
    );
    if (allUnique) {
      fakeUsers.push(fakeUser);
      counter++;
    } else {
      console.log('duplicate found!');
      generateFakeUser();
    }

  }

  while (counter < quantity) {
    generateFakeUser();
  }

  return fakeUsers;
}

const generateFakeProducts = (quantity) => {
  let counter = 0;
  let fakeProducts = [];

  const generateFakeProduct = () => {
    let promo_data = {
      id: random.number({ min: 1, max: 10}),
      icon_img: image.imageUrl(),
      main_text: lorem.sentence(),
      sub_text: lorem.sentence(),
      link_text: 'Learn More'
    };

    let ratings_data = {
      five_star: random.number({ min: 1, max: 100}),
      four_star: random.number({ min: 1, max: 100}),
      three_star: random.number({ min: 1, max: 100}),
      two_star: random.number({ min: 1, max: 100}),
      one_star: random.number({ min: 1, max: 100}),
    }

    let fakeProduct = {
      id: counter,
      name: commerce.productName(),
      brand: company.companyName(),
      breadcrumbs: ['Target', `${commerce.product()}s`, `${commerce.product()}s`],
      images: [],
      price_reg: random.number({ min: 1, max: 100, precision: 0.01}),
      price_discount: random.number({ min: 100.01, max: 1000, precision: 0.01}),
      sale_end: date.future(),
      total_reviews: random.number({ min: 1, max: 200}),
      total_questions: random.number({ min: 1, max: 10}),
      ratings_data,
      promo_data
    }

    // insert a random number of image urls
    for (let i = 0; i < random.number({min: 1, max: 10}); i++) {
      fakeProduct.images.push(image.image());
    }

    fakeProducts.push(fakeProduct);
    counter++;

    // const allUnique = fakeUsers.every(pushedUser =>
    //   fakeProduct.email !== pushedUser.email &&
    //   fakeProduct.username !== pushedUser.username
    // );

    // if (allUnique) {
    //   fakeProducts.push(fakeProduct);
    //   counter++;
    // } else {
    //   console.log('duplicate found!');
    //   generateFakeProduct();
    // }
  }

  while (counter < quantity) {
    generateFakeProduct();
  }

  return fakeProducts;
}

const seedProducts = () => {
  let fakeProducts = generateFakeProducts(100);


  Product.insertMany(fakeProducts, (err, products) => {
    if (err) return console.log(err)
    else {
      console.log('Fake products saved successfully');
    }
  });
}

const seedUsers = () => {
  let fakeUsers = generateFakeUsers(100);

  User.insertMany(fakeUsers, (err, products) => {
    if (err) return console.log(err)
    else {
      console.log('Fake users saved successfully');
      mongoose.connection.close();
    }
  });

  // product.save((err, product) => {
  //   if (err) return console.log(err)
  //   else {
  //     console.log('sampleProduct saved successfully');
  //     mongoose.connection.close();
  //   }
  // });
}

mongoose.connect(config.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

Product.deleteMany({})
  .then(() =>{
    console.log('Product data deleted');
    seedProducts();
    User.deleteMany({})
      .then(() =>{
        console.log('User data deleted');
        seedUsers();
      });
  });
