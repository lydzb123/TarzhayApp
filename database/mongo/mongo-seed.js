const fs = require('fs');
const faker = require('faker');
const { internet, random, commerce, date, company, image, lorem } = faker;


const start = Date.now();
console.log('starting timer...');
console.log(start);




fs.writeFileSync( './products.json', '[');
var index = 0;


const seedData = () => {

  for (let j = 0; j < 50; j++) {
  var productCatalog = "";

    for (let i = 0; i < 200000; i++) {
      var ratings = `[{
        "one_star": ${random.number({ min: 1, max: 100})},
        "two_star": ${random.number({ min: 1, max: 100})},
        "three_star": ${random.number({ min: 1, max: 100})},
        "four_star": ${random.number({ min: 1, max: 100})},
        "five_star": ${random.number({ min: 1, max: 100})}
      }]`

      var promos = `[{
        "promo_id": ${random.number({ min: 1, max: 15})},
        "main_text": "${lorem.sentence()}",
        "sub_text": "${lorem.sentence()}",
        "link_text": "Learn More"
      }]`;


      var randomCount = random.number({ min: 3, max: 8});
      var photos = [];

      for (let i = 0; i <randomCount; ++i) {
        var imgIndex = random.number({ min: 1, max: 519});
        var imgUrl = `https://sdcproducts.s3-us-west-1.amazonaws.com/product_${imgIndex}.jpg`;
        photos.push(imgUrl);
      }
      var photos = JSON.stringify(photos);


      var product = `{
        "id": ${index},
        "name": "${faker.commerce.productName()}",
        "brand": "${company.companyName()}",
        "breadcrumbs": ["Target", "${faker.commerce.product()}s", "${faker.commerce.product()}s"],
        "images": ${photos},
        "price_reg": ${random.number({ min: 100.01, max: 1000, precision: 0.01})},
        "price_discount": ${random.number({ min: 1, max: 100, precision: 0.01})},
        "sale_end": "${date.future()}",
        "total_reviews": ${random.number({ min: 1, max: 200})},
        "total_questions": ${random.number({ min: 1, max: 10})},
        "ratings_data": ${ratings},
        "promo_data": ${promos}
      }`
      index++;
      productCatalog += product + ', ';
    }

    if( j === 49 ) {
      productCatalog = productCatalog.slice(0, productCatalog.length-2);
      productCatalog +=  ']';
    }

   fs.writeFileSync( 'products.json', productCatalog, { flag: 'a+' });
   console.log('entries: ', index, '| time: ', (Date.now() - start) /1000);
  }
}


seedData();

