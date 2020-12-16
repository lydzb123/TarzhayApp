// load the agent
const newrelic = require('newrelic')

// module loaded before newrelic
const express = require('express')

// instrument express _after_ the agent has been loaded
newrelic.instrumentLoadedModule(
'express', // the module's name, as a string
express // the module instance
);


const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
// const { Product } = require('../database');
const cors = require("cors");
const pool = require('../database/db.js');


let port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


app.use(compression());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); //lets us use req.body
app.use(express.static(__dirname + '/../client/dist'));

app.use('/api/:id', express.static(__dirname + '/../client/dist'));
app.use('/:id', express.static(__dirname + '/../client/dist'));

// app.use('/:id', express.static(__dirname + '/../client/dist'));
// app.get('/:id', (req, res) => { res.sendFile(path.join(__dirname + '/../client/dist/index.html')); })




app.get("/api/products/:id", async (req, res) =>  {
    const {id} = req.params;


    const query = {
      name: 'fetch-product-data',
      text: `SELECT p.name, p.brand, p.breadcrumbs, p.price_reg, p.price_discount, p.sale_end, p.total_reviews, p.total_questions,
      pr.main_text, pr.sub_text, pr.link_text,
      r.five_star_count, four_star_count, three_star_count, two_star_count, one_star_count,
      i.photo_urls
      FROM products p
      INNER JOIN promos pr ON p.promo_id = pr.id
      INNER JOIN images i ON p.id = i.product_id
      INNER JOIN ratings r ON p.id = r.product_id
      WHERE p.id = $1`,
      values: [id]
    };

    const productData = await pool
      .query(query)
      .then(productData => res.send(productData.rows[0]))
      .catch(err => {console.log('----------------', err);
	   res.status(500).send(err.stack)})

  });




// add image to a product
// {
//   "photoUrl": "https://sdcproducts.s3-us-west-1.amazonaws.com/product_1%2C011.jpg"
// }

app.post('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const photoUrl = req.body.photoUrl;
    await pool.query(`
      UPDATE images SET photo_urls = array_append(photo_urls, '${photoUrl}')
      WHERE product_id = ${id}`);
    res.send('success');
} catch (err) {
  console.log(err);
}
});



