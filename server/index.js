const express = require ('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const { Product } = require('../database');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use('/api/:id', express.static(__dirname + '/../client/dist'));
app.use('/:id', express.static(__dirname + '/../client/dist'));



// get a product
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






app.patch('/api/products/:id', async (req, res) => {
  console.log(`${req.method} received at ${req.url}`);
  const photoUrl = req.body.photoUrl;
  const { id } = req.params;
  await Product.updateOne({ id }, { $push: { images: photoUrl } });
  try {
    res.status(204).send({success: true}); //should i send back the image?
  } catch (err) {
    res.status(500).send(err);
  }
});






// add image to a product
// req.body = {
//   "photoUrl" : "https://loremflickr.com/cache/resized/3786_9124318134_3c4ab8d6ef_n_320_240_nofilter.jpg"
// }

app.post('/api/products/:id', async (req, res) => {
  console.log(`${req.method} received at ${req.url}`);
  const photoUrl = req.body.photoUrl;
  const { id } = req.params;
  await Product.updateOne({ id }, { $push: { images: photoUrl } });
  try {
    res.status(201).send({success: true}); //should i send back the image?
  } catch (err) {
    res.status(500).send(err);
  }
});




// delete product listing
app.delete('/api/products/:id', async (req, res) => {
  console.log(`${req.method} received at ${req.url}`);
  const { id } = req.params;
  await Product.findOneAndDelete({ id });
  try {
    res.status(204).send({success: true});
  } catch (err) {
    res.status(500).send(err);
  }
});







app.listen(port, function() {
  console.log(`listening on port ${port}`);
});