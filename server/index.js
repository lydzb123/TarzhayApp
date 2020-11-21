const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Product } = require('../database');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/:id', express.static(__dirname + '/../client/dist'));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
})

app.get('/api/:id', (req, res) => {
  console.log('GET received' + req.params.id);
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
})

app.get('/api/products/:id', async (req, res) => {
  console.log(`${req.method} received at ${req.url}`);
  const { id } = req.params;
  const productData = await Product.findOne({ id });
  try {
    res.send(productData);
  } catch (err) {
    res.status(500).send(err);
  }
});

// app.get('/products/:id', async (req, res) => {
//   console.log(`${req.method} received at ${req.url}`);
//   const { id } = req.params;
//   const productData = await Product.findOne({ id });
//   try {
//     res.send(productData);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});