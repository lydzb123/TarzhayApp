const fs = require('fs');
const faker = require('faker');
const { internet, random, commerce, date, company, image, lorem } = faker;



const generateProducts = (headers) => {
  const start = Date.now();
  console.log('Generating Products...');

    var index = 0;
    for (let j = 0; j < 5; j++) {
      var productCatalog = [];

      if (j === 0) { productCatalog.push(headers.join(',')) };

      for (let i = 0; i < 20; i++) {
        var row = [];
        index++;
        row.push(index);
        row.push(faker.commerce.productName().replace(/,/g, "").substring(0,30));
        row.push(company.companyName().replace(/,/g, "").substring(0,30));
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



const generateImages = (headers) => {

  const start = Date.now();
  console.log('Generating Images...');


var photos = [
    "https://placeimg.com/640/480/animals",
    "https://placeimg.com/640/480/tech",
    "https://placeimg.com/640/480/arch",
    "https://placeimg.com/640/480/any",
    "https://placeimg.com/640/480/people"
  ];

    var index = 0;
    for (let j = 0; j < 5; j++) {
      var images = [];

      if (j === 0) { images.push(headers.join(',')) };

      for (let i = 0; i < 20; i++) {
        var row = [];
        index++;
        row.push(index);
        row.push(random.number({ min: 1, max: index}));
        row.push(photos[random.number({ min: 0, max: photos.length-1})]);
        row = row.join(',');
        images.push(row);
      };

      images = images.join("\n") + "\n";
      fs.writeFileSync( 'images.csv', images, { flag: 'a+' });
      console.log('entries: ', index, '| time: ', (Date.now() - start) /1000);
    };

};


const generatePromos = (headers) => {
//TOEDIT: instead of generating many promorecords, products should have a promoforeignkey

  const start = Date.now();
  console.log('Generating Promos...');

  const link_text = [
    "Learn More",
    "Read More",
    "View More",
    "Sign Up Today"
  ];

  var index = 0;

  for (let j = 0; j < 5; j++) {
    var promos = [];

    if (j === 0) { promos.push(headers.join(',')) };

    for (let i = 0; i < 20; i++) {
      var row = [];
      index++;
      row.push(index);
      row.push(random.number({ min: 1, max: 25}));
      row.push(lorem.sentence());
      row.push(lorem.sentence());
      row.push(link_text[random.number({ min: 0, max: link_text.length-1})]);
      row = row.join(',');
      promos.push(row);
    };

    promos = promos.join("\n") + "\n";
    fs.writeFileSync( 'promos.csv', promos, { flag: 'a+' });
    console.log('entries: ', index, '| time: ', (Date.now() - start) /1000);
  };

};


const generateRatings = (headers) => {

  const start = Date.now();
  console.log('Generating Ratings...');


  var index = 0;

  for (let j = 0; j < 5; j++) {
    var ratings = [];

    if (j === 0) { ratings.push(headers.join(',')) };

    for (let i = 0; i < 20; i++) {
      var row = [];
      index++;
      row.push(index);
      row.push(index);
      row.push(random.number({ min: 20, max: 3000}));
      row.push(random.number({ min: 20, max: 3000}));
      row.push(random.number({ min: 20, max: 3000}));
      row.push(random.number({ min: 20, max: 3000}));
      row.push(random.number({ min: 20, max: 3000}));
      row = row.join(',');
      ratings.push(row);
    };

    ratings = ratings.join("\n") + "\n";
    fs.writeFileSync( 'ratings.csv', ratings, { flag: 'a+' });
    console.log('entries: ', index, '| time: ', (Date.now() - start) /1000);
  };

};






generateProducts(["id", "name", "brand", "breadcrumbs", "price_reg", "price_discount", "sale_end", "total_reviews", "total_questions"]);

generateImages(["id", "product_id", "photo_url"]);

generatePromos(["id", "product_id", "main_text", "sub_text", "link_text"]);

generateRatings(["id", "product_id", "five_star_count", "four_star_count", "three_star_count", "two_star_count", "one_star_count"]);


