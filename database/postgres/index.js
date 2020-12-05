const fs = require('fs');
const faker = require('faker');
const { internet, random, commerce, date, company, image, lorem } = faker;



const generateProducts = (headers) => {

  const start = Date.now();
  console.log('starting timer...');
  console.log(start);

    var index = 0;
    for (let j = 0; j < 3; j++) {
      var productCatalog = [];

      if (j === 0) { productCatalog.push(headers.join(',')) };

        for (let i = 0; i < 3; i++) {
          var row = [];
          index++;
          row.push(index);
          row.push(faker.commerce.productName().replace(/,/g, ""));
          row.push(company.companyName().replace(/,/g, ""));
          row.push(`"{Target,${faker.commerce.product()}s,${faker.commerce.product()}s}"`);
          row.push(random.number({ min: 100.01, max: 1000, precision: 0.01}));
          row.push(random.number({ min: 1, max: 100, precision: 0.01}));
          row.push(`2021-${random.number({ min: 10, max: 12})}-${random.number({ min: 10, max: 28})}`);
          row.push(random.number({ min: 20, max: 2000}));
          row.push(random.number({ min: 20, max: 100}));
          row = row.join(',');
          productCatalog.push(row);
        };

     productCatalog = productCatalog.join("\n") + "\n";
     fs.writeFileSync( 'products.csv', productCatalog, { flag: 'a+' });
     console.log('entries: ', index, '| time: ', (Date.now() - start) /1000);
    };

};

generateProducts(["id", "name", "brand", "breadcrumbs", "price_reg", "price_discount", "sale_end", "total_reviews", "total_questions"]);



// var ratings = [
//   "one_star": ${random.number({ min: 1, max: 100})},
//   "two_star": ${random.number({ min: 1, max: 100})},
//   "three_star": ${random.number({ min: 1, max: 100})},
//   "four_star": ${random.number({ min: 1, max: 100})},
//   "five_star": ${random.number({ min: 1, max: 100})}
// ];

// var promos = `[{
//   "promo_id": ${random.number({ min: 1, max: 15})},
//   "main_text": "${lorem.sentence()}",
//   "sub_text": "${lorem.sentence()}",
//   "link_text": "Learn More"
// }]`;

// var photos = [
// `["https://placeimg.com/640/480/animals",
//   "https://placeimg.com/640/480/tech",
//   "https://placeimg.com/640/480/arch",
//   "https://placeimg.com/640/480/any",
//   "https://placeimg.com/640/480/people"
// ]`,
// `["https://placeimg.com/640/480/arch",
//  "https://placeimg.com/640/480/any",
//  "https://placeimg.com/640/480/tech"]`];


