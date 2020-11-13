const express = require ('express');
const bodyParser = require('body-parser');
const { Product } = require('../database');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const productData = await Product.find({ id });
  try {
    res.send(productData);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});